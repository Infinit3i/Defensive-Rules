#!/bin/bash
# build_es_package.sh - Splunk ES Package Builder
# Converts Sigma rules and packages for Splunk Enterprise Security

set -euo pipefail

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
BUILD_DIR="$PROJECT_DIR/build"
TEMPLATES_DIR="$PROJECT_DIR/templates/splunk-es-app"
SIGMA_DIR="$PROJECT_DIR/Sigma"
YARA_DIR="$PROJECT_DIR/Yara"
APP_NAME="defensive-rules-es"
VERSION="1.0.0"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_dependencies() {
    log_info "Checking dependencies..."

    # Check Python and pysigma
    if ! command -v python3 &> /dev/null; then
        log_error "Python3 not found"
        exit 1
    fi

    if ! python3 -c "import sigma.rule" &> /dev/null; then
        log_error "pysigma not installed. Run: pip install pysigma pysigma-backend-splunk"
        exit 1
    fi

    # Check required directories
    if [ ! -d "$SIGMA_DIR" ]; then
        log_error "Sigma directory not found: $SIGMA_DIR"
        exit 1
    fi

    if [ ! -d "$TEMPLATES_DIR" ]; then
        log_error "Templates directory not found: $TEMPLATES_DIR"
        exit 1
    fi

    log_success "All dependencies satisfied"
}

create_build_environment() {
    log_info "Creating build environment..."

    # Clean and create build directory
    rm -rf "$BUILD_DIR"
    mkdir -p "$BUILD_DIR"

    # Create app directory structure
    APP_DIR="$BUILD_DIR/$APP_NAME"
    mkdir -p "$APP_DIR"

    # Copy template structure
    cp -r "$TEMPLATES_DIR"/* "$APP_DIR/"

    log_success "Build environment created"
}

convert_sigma_rules() {
    log_info "Converting Sigma rules to Splunk format..."

    QUERIES_DIR="$BUILD_DIR/queries"
    mkdir -p "$QUERIES_DIR"

    # Run Sigma converter
    cd "$PROJECT_DIR"
    python3 scripts/sigma_to_splunk.py \
        --input-dir "$SIGMA_DIR" \
        --output-dir "$QUERIES_DIR" \
        --preserve-structure

    # Copy generated savedsearches.conf to app
    if [ -f "$QUERIES_DIR/savedsearches.conf" ]; then
        cp "$QUERIES_DIR/savedsearches.conf" "$BUILD_DIR/$APP_NAME/default/"
        log_success "Sigma rules converted and copied"
    else
        log_error "Sigma conversion failed - no savedsearches.conf generated"
        exit 1
    fi

    # Copy conversion reports
    if [ -f "$QUERIES_DIR/conversion-report.json" ]; then
        cp "$QUERIES_DIR/conversion-report.json" "$BUILD_DIR/"
    fi

    if [ -f "$QUERIES_DIR/mitre-coverage.json" ]; then
        cp "$QUERIES_DIR/mitre-coverage.json" "$BUILD_DIR/"
    fi
}

process_yara_rules() {
    log_info "Processing YARA rules..."

    if [ -d "$YARA_DIR" ] && [ "$(ls -A $YARA_DIR 2>/dev/null)" ]; then
        # Create YARA lookup CSV
        YARA_CSV="$BUILD_DIR/$APP_NAME/lookups/yara_rules.csv"
        echo "filename,rule_name,description,author,date" > "$YARA_CSV"

        # Process each YARA file
        find "$YARA_DIR" -name "*.yar" -o -name "*.yara" | while read yara_file; do
            [ -f "$yara_file" ] || continue

            filename=$(basename "$yara_file")

            # Extract rule metadata (basic parsing)
            rule_name=$(grep -m1 "^rule " "$yara_file" | cut -d' ' -f2 | tr -d '{' || echo "Unknown")
            description=$(grep -m1 "description = " "$yara_file" | cut -d'"' -f2 || echo "No description")
            author=$(grep -m1 "author = " "$yara_file" | cut -d'"' -f2 || echo "Unknown")
            date=$(grep -m1 "date = " "$yara_file" | cut -d'"' -f2 || echo "Unknown")

            echo "$filename,$rule_name,$description,$author,$date" >> "$YARA_CSV"
        done

        # Copy YARA files to lookups
        cp "$YARA_DIR"/*.yar "$BUILD_DIR/$APP_NAME/lookups/" 2>/dev/null || true
        cp "$YARA_DIR"/*.yara "$BUILD_DIR/$APP_NAME/lookups/" 2>/dev/null || true

        log_success "YARA rules processed"
    else
        log_warning "No YARA rules found in $YARA_DIR"
    fi
}

update_app_metadata() {
    log_info "Updating app metadata..."

    APP_CONF="$BUILD_DIR/$APP_NAME/default/app.conf"
    TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    BUILD_NUMBER=$(date +"%Y%m%d%H%M")

    # Update version and build info
    sed -i "s/version = 1.0.0/version = $VERSION/" "$APP_CONF"
    sed -i "s/build = 1/build = $BUILD_NUMBER/" "$APP_CONF"

    # Add generation timestamp to README
    README="$BUILD_DIR/$APP_NAME/appserver/static/README.html"
    sed -i "s/Generated automatically/Generated on $TIMESTAMP/" "$README"

    log_success "App metadata updated"
}

validate_package() {
    log_info "Validating package structure..."

    APP_DIR="$BUILD_DIR/$APP_NAME"

    # Check required files exist
    required_files=(
        "default/app.conf"
        "default/savedsearches.conf"
        "metadata/default.meta"
    )

    for file in "${required_files[@]}"; do
        if [ ! -f "$APP_DIR/$file" ]; then
            log_error "Missing required file: $file"
            exit 1
        fi
    done

    # Validate conf file syntax (basic check)
    if grep -q "^\[.*\]" "$APP_DIR/default/savedsearches.conf"; then
        log_success "savedsearches.conf format appears valid"
    else
        log_warning "savedsearches.conf may have format issues"
    fi

    log_success "Package structure validated"
}

create_deployment_package() {
    log_info "Creating deployment package..."

    cd "$BUILD_DIR"

    # Create tarball
    PACKAGE_FILE="$APP_NAME.tar.gz"
    tar -czf "$PACKAGE_FILE" "$APP_NAME"

    # Generate deployment info
    cat > "deployment-info.txt" << EOF
Deployment Package: $PACKAGE_FILE
Generated: $(date -u +"%Y-%m-%d %H:%M:%S UTC")
Version: $VERSION
Build: $(date +"%Y%m%d%H%M")

Installation:
1. Upload $PACKAGE_FILE to Splunk server
2. Run: \$SPLUNK_HOME/bin/splunk install app $PACKAGE_FILE
3. Restart Splunk: \$SPLUNK_HOME/bin/splunk restart
4. Configure index mappings in macros.conf
5. Enable desired detection rules

Package Contents:
- $(wc -l < "$APP_NAME/default/savedsearches.conf") lines in savedsearches.conf
- YARA rules in lookups/
- MITRE ATT&CK mapping files
- ES correlation rules

Notes:
- Review and customize macros.conf before production use
- Adjust search schedules based on environment capacity
- Monitor for false positives and tune as needed
EOF

    # Show package info
    PACKAGE_SIZE=$(du -h "$PACKAGE_FILE" | cut -f1)
    log_success "Package created: $PACKAGE_FILE ($PACKAGE_SIZE)"

    echo -e "\n${GREEN}=== DEPLOYMENT PACKAGE READY ===${NC}"
    echo "📦 Package: $BUILD_DIR/$PACKAGE_FILE"
    echo "📄 Info: $BUILD_DIR/deployment-info.txt"
    echo "📊 Reports: $BUILD_DIR/conversion-report.json"
    echo "🎯 Coverage: $BUILD_DIR/mitre-coverage.json"
}

print_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -h, --help          Show this help message"
    echo "  -v, --version VER   Set package version (default: $VERSION)"
    echo "  -n, --name NAME     Set app name (default: $APP_NAME)"
    echo "  --skip-validation   Skip package validation steps"
    echo "  --clean-only        Clean build directory and exit"
    echo ""
    echo "Example:"
    echo "  $0 --version 1.1.0"
}

# Main execution
main() {
    local skip_validation=false
    local clean_only=false

    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -h|--help)
                print_usage
                exit 0
                ;;
            -v|--version)
                VERSION="$2"
                shift 2
                ;;
            -n|--name)
                APP_NAME="$2"
                shift 2
                ;;
            --skip-validation)
                skip_validation=true
                shift
                ;;
            --clean-only)
                clean_only=true
                shift
                ;;
            *)
                log_error "Unknown option: $1"
                print_usage
                exit 1
                ;;
        esac
    done

    echo -e "${BLUE}=== Splunk ES Package Builder ===${NC}"
    echo "App: $APP_NAME"
    echo "Version: $VERSION"
    echo ""

    if [ "$clean_only" = true ]; then
        log_info "Cleaning build directory..."
        rm -rf "$BUILD_DIR"
        log_success "Build directory cleaned"
        exit 0
    fi

    # Execute build pipeline
    check_dependencies
    create_build_environment
    convert_sigma_rules
    process_yara_rules
    update_app_metadata

    if [ "$skip_validation" = false ]; then
        validate_package
    fi

    create_deployment_package

    echo -e "\n${GREEN}✅ Build completed successfully!${NC}"
    echo "Ready for deployment to Splunk Enterprise Security"
}

# Script entry point
main "$@"