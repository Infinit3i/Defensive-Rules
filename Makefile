# Makefile for Defensive Rules Splunk ES Package

.PHONY: help clean convert package validate test install deps

# Variables
APP_NAME = defensive-rules-es
VERSION = 1.0.0
BUILD_DIR = build
SIGMA_DIR = Sigma
YARA_DIR = Yara

# Default target
help:
	@echo "Defensive Rules - Multi-SIEM Package Builder"
	@echo ""
	@echo "Available targets:"
	@echo "  package     - Build complete Splunk ES package (default)"
	@echo "  convert     - Convert Sigma rules to Splunk only"
	@echo "  sentinel    - Convert Sigma rules to Microsoft Sentinel"
	@echo "  all-platforms - Convert to both Splunk and Sentinel"
	@echo "  validate    - Validate package structure and syntax"
	@echo "  clean       - Remove build artifacts"
	@echo "  test        - Test conversion with sample rules"
	@echo "  deps        - Install Python dependencies"
	@echo "  install     - Install package to local Splunk (requires SPLUNK_HOME)"
	@echo ""
	@echo "Examples:"
	@echo "  make package VERSION=1.1.0"
	@echo "  make convert"
	@echo "  make sentinel"
	@echo "  make all-platforms"
	@echo "  make install SPLUNK_HOME=/opt/splunk"

# Install Python dependencies
deps:
	@echo "Installing Python dependencies..."
	pip install pysigma pysigma-backend-splunk yamllint

# Convert Sigma rules to Splunk only
convert:
	@echo "Converting Sigma rules to Splunk..."
	mkdir -p $(BUILD_DIR)/queries
	python3 scripts/sigma_to_splunk.py \
		--input-dir $(SIGMA_DIR) \
		--output-dir $(BUILD_DIR)/queries \
		--preserve-structure

# Convert Sigma rules to Microsoft Sentinel
sentinel:
	@echo "Converting Sigma rules to Microsoft Sentinel..."
	mkdir -p $(BUILD_DIR)/sentinel
	python3 scripts/sigma_to_sentinel.py \
		--input-dir $(SIGMA_DIR) \
		--output-dir $(BUILD_DIR)/sentinel \
		--preserve-structure

# Convert to all platforms
all-platforms: convert sentinel
	@echo "Converted Sigma rules to all platforms"
	@echo "Splunk: $(BUILD_DIR)/queries/"
	@echo "Sentinel: $(BUILD_DIR)/sentinel/"

# Build complete package
package:
	@echo "Building Splunk ES package..."
	./scripts/build_es_package.sh --version $(VERSION) --name $(APP_NAME)

# Validate package without rebuilding
validate:
	@echo "Validating existing package..."
	./scripts/build_es_package.sh --skip-validation

# Clean build artifacts
clean:
	@echo "Cleaning build directory..."
	rm -rf $(BUILD_DIR)

# Test with subset of rules
test:
	@echo "Testing conversion with sample rules..."
	mkdir -p $(BUILD_DIR)/test
	find $(SIGMA_DIR) -name "*.yml" | head -5 | while read rule; do \
		cp "$$rule" $(BUILD_DIR)/test/; \
	done
	python3 scripts/sigma_to_splunk.py \
		--input-dir $(BUILD_DIR)/test \
		--output-dir $(BUILD_DIR)/test-output
	@echo "Test conversion completed. Check $(BUILD_DIR)/test-output/"

# Install to local Splunk (requires SPLUNK_HOME environment variable)
install: package
ifndef SPLUNK_HOME
	$(error SPLUNK_HOME is not set. Please set it to your Splunk installation directory)
endif
	@echo "Installing package to Splunk..."
	$(SPLUNK_HOME)/bin/splunk install app $(BUILD_DIR)/$(APP_NAME).tar.gz -auth admin:changeme
	@echo "Package installed. Restart Splunk to activate."
	@echo "Run: $(SPLUNK_HOME)/bin/splunk restart"

# Quick validation of Sigma rules
validate-sigma:
	@echo "Validating Sigma rule syntax..."
	find $(SIGMA_DIR) -name "*.yml" -o -name "*.yaml" | while read file; do \
		echo "Checking $$file..."; \
		python3 -c "import yaml; yaml.safe_load(open('$$file'))" || echo "ERROR in $$file"; \
	done
	@echo "Sigma validation completed."

# Count rules and coverage
stats:
	@echo "=== Repository Statistics ==="
	@echo "Sigma Rules: $$(find $(SIGMA_DIR) -name '*.yml' -o -name '*.yaml' | wc -l)"
	@echo "YARA Rules: $$(find $(YARA_DIR) -name '*.yar' -o -name '*.yara' | wc -l)"
	@echo "Tactics: $$(ls $(SIGMA_DIR) | wc -l)"
	@echo ""
	@echo "=== MITRE Technique Coverage ==="
	@grep -r "attack\.t[0-9]" $(SIGMA_DIR) | grep -o "attack\.t[0-9][0-9][0-9][0-9]*\.*[0-9]*" | sort -u | wc -l | xargs echo "Unique techniques:"

# Development workflow
dev: clean convert
	@echo "Development build completed"