#!/bin/bash
# deploy_soar_playbooks.sh - Deploy SOAR playbooks and configuration

set -euo pipefail

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
TEMPLATES_DIR="$PROJECT_DIR/templates/soar-playbooks"
CONFIG_DIR="$PROJECT_DIR/templates/soar-config"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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

print_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -p, --platform PLATFORM    SOAR platform (sentinel, phantom, xsoar, shuffle)"
    echo "  -c, --config FILE          Configuration file path"
    echo "  -r, --resource-group RG    Azure resource group (for Sentinel)"
    echo "  -s, --subscription SUB     Azure subscription ID (for Sentinel)"
    echo "  -d, --deploy              Deploy playbooks (default: dry-run)"
    echo "  -h, --help                Show this help"
    echo ""
    echo "Examples:"
    echo "  $0 -p sentinel -r rg-sentinel -s sub-123 -d"
    echo "  $0 -p phantom -c phantom_config.json"
}

check_dependencies() {
    log_info "Checking dependencies..."

    # Check Azure CLI for Sentinel deployments
    if [[ "$PLATFORM" == "sentinel" ]]; then
        if ! command -v az &> /dev/null; then
            log_error "Azure CLI not found. Install with: curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash"
            exit 1
        fi

        if ! az account show &> /dev/null; then
            log_error "Not logged in to Azure. Run: az login"
            exit 1
        fi
    fi

    # Check Python for API-based deployments
    if ! command -v python3 &> /dev/null; then
        log_error "Python3 not found"
        exit 1
    fi

    log_success "All dependencies satisfied"
}

deploy_sentinel_playbooks() {
    log_info "Deploying Sentinel Logic Apps playbooks..."

    local rg="$1"
    local subscription="$2"

    # Set subscription
    az account set --subscription "$subscription"

    # Deploy incident response playbook
    local playbook_name="defensive-rules-incident-response"
    log_info "Deploying playbook: $playbook_name"

    az deployment group create \
        --resource-group "$rg" \
        --template-file "$TEMPLATES_DIR/incident-response-template.json" \
        --parameters \
            logicAppName="$playbook_name" \
            location="$(az group show --name "$rg" --query location -o tsv)" \
        --name "deploy-$playbook_name-$(date +%Y%m%d%H%M%S)"

    # Get webhook URL
    local webhook_url=$(az logic workflow trigger list-callback-url \
        --resource-group "$rg" \
        --name "$playbook_name" \
        --trigger-name "manual" \
        --query value -o tsv)

    log_success "Playbook deployed successfully"
    log_info "Webhook URL: $webhook_url"

    # Update configuration
    update_config_webhook "$webhook_url"
}

deploy_phantom_playbooks() {
    log_info "Deploying Phantom playbooks..."
    log_warning "Phantom deployment requires manual playbook import"
    log_info "Import files from: $TEMPLATES_DIR"
}

deploy_xsoar_playbooks() {
    log_info "Deploying XSOAR playbooks..."
    log_warning "XSOAR deployment requires manual playbook import"
    log_info "Import files from: $TEMPLATES_DIR"
}

update_config_webhook() {
    local webhook_url="$1"

    if [[ -f "soar_config.json" ]]; then
        log_info "Updating webhook URL in config..."
        # Use jq to update webhook URL
        if command -v jq &> /dev/null; then
            jq --arg url "$webhook_url" '.platforms.sentinel.webhook_url = $url' soar_config.json > soar_config.json.tmp
            mv soar_config.json.tmp soar_config.json
            log_success "Configuration updated"
        else
            log_warning "jq not found, manual config update required"
            log_info "Add webhook URL to soar_config.json: $webhook_url"
        fi
    fi
}

validate_config() {
    local config_file="$1"

    if [[ ! -f "$config_file" ]]; then
        log_error "Configuration file not found: $config_file"
        return 1
    fi

    log_info "Validating configuration..."

    # Basic JSON validation
    if command -v jq &> /dev/null; then
        if ! jq empty "$config_file" 2>/dev/null; then
            log_error "Invalid JSON in configuration file"
            return 1
        fi
        log_success "Configuration file is valid JSON"
    else
        log_warning "jq not found, skipping JSON validation"
    fi

    return 0
}

setup_config() {
    log_info "Setting up SOAR configuration..."

    if [[ ! -f "soar_config.json" ]]; then
        log_info "Creating configuration from template..."
        cp "$CONFIG_DIR/soar_config_template.json" "soar_config.json"
        log_warning "Please edit soar_config.json with your platform credentials"
    else
        log_info "Configuration file already exists: soar_config.json"
    fi
}

test_integration() {
    log_info "Testing SOAR integration..."

    # Test with sample alert
    python3 -c "
import sys
sys.path.insert(0, '$SCRIPT_DIR')
from soar_integration import SOARManager, Alert
from datetime import datetime
import json

# Create test alert
test_alert = Alert(
    id='test-001',
    title='SOAR Integration Test',
    severity='low',
    description='Test alert for SOAR integration validation',
    source_system='Test',
    timestamp=datetime.now(),
    entities=[{'type': 'host', 'value': 'test-host'}],
    mitre_techniques=['T1059.001'],
    raw_data={'test': True}
)

# Test integration
manager = SOARManager()
if manager.connectors:
    print('SOAR connectors configured:', list(manager.connectors.keys()))
else:
    print('No SOAR connectors configured')
    print('Please update soar_config.json with platform credentials')
"
}

# Main execution
main() {
    local platform=""
    local config_file="soar_config.json"
    local resource_group=""
    local subscription=""
    local deploy_mode=false

    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -p|--platform)
                platform="$2"
                shift 2
                ;;
            -c|--config)
                config_file="$2"
                shift 2
                ;;
            -r|--resource-group)
                resource_group="$2"
                shift 2
                ;;
            -s|--subscription)
                subscription="$2"
                shift 2
                ;;
            -d|--deploy)
                deploy_mode=true
                shift
                ;;
            -h|--help)
                print_usage
                exit 0
                ;;
            *)
                log_error "Unknown option: $1"
                print_usage
                exit 1
                ;;
        esac
    done

    echo -e "${BLUE}=== SOAR Playbook Deployment ===${NC}"
    echo "Platform: ${platform:-all}"
    echo "Deploy Mode: $deploy_mode"
    echo ""

    check_dependencies
    setup_config

    if [[ -n "$config_file" ]]; then
        validate_config "$config_file"
    fi

    if [[ "$deploy_mode" == true ]]; then
        case "$platform" in
            sentinel)
                if [[ -z "$resource_group" || -z "$subscription" ]]; then
                    log_error "Resource group and subscription required for Sentinel deployment"
                    exit 1
                fi
                deploy_sentinel_playbooks "$resource_group" "$subscription"
                ;;
            phantom)
                deploy_phantom_playbooks
                ;;
            xsoar)
                deploy_xsoar_playbooks
                ;;
            *)
                log_error "Unsupported platform: $platform"
                log_info "Supported platforms: sentinel, phantom, xsoar"
                exit 1
                ;;
        esac
    else
        log_info "Dry run mode - no deployments performed"
        log_info "Use -d flag to deploy playbooks"
    fi

    test_integration

    echo ""
    log_success "SOAR deployment completed"
    echo "Next steps:"
    echo "1. Update soar_config.json with your platform credentials"
    echo "2. Test integration with: python3 scripts/soar_integration.py"
    echo "3. Configure webhook endpoints in your SIEM"
}

# Script entry point
main "$@"