#!/bin/bash
# test-conversion.sh - Test the Sigma to Splunk conversion pipeline

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}=== Testing Sigma to Splunk Conversion Pipeline ===${NC}"

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    echo "Activating virtual environment..."
    source venv/bin/activate
fi

# Create test directory with sample rules
echo "Creating test environment..."
rm -rf build/test
mkdir -p build/test/sample-rules

# Copy a few sample Sigma rules for testing
echo "Copying sample Sigma rules..."
find Sigma -name "*.yml" | head -5 | while read rule; do
    cp "$rule" build/test/sample-rules/
    echo "  - $(basename "$rule")"
done

# Test the converter
echo -e "\n${BLUE}Testing Sigma converter...${NC}"
python3 scripts/sigma_to_splunk.py \
    --input-dir build/test/sample-rules \
    --output-dir build/test/output

# Check outputs
echo -e "\n${BLUE}Checking conversion outputs...${NC}"

if [ -f "build/test/output/savedsearches.conf" ]; then
    echo -e "${GREEN}✓${NC} savedsearches.conf generated"
    echo "  Lines: $(wc -l < build/test/output/savedsearches.conf)"
else
    echo -e "${RED}✗${NC} savedsearches.conf NOT generated"
    exit 1
fi

if [ -f "build/test/output/conversion-report.json" ]; then
    echo -e "${GREEN}✓${NC} conversion-report.json generated"
    echo "  Success count: $(jq '.success | length' build/test/output/conversion-report.json)"
    echo "  Failure count: $(jq '.failures | length' build/test/output/conversion-report.json)"
else
    echo -e "${RED}✗${NC} conversion-report.json NOT generated"
fi

if [ -f "build/test/output/mitre-coverage.json" ]; then
    echo -e "${GREEN}✓${NC} mitre-coverage.json generated"
    echo "  Techniques covered: $(jq 'keys | length' build/test/output/mitre-coverage.json)"
else
    echo -e "${RED}✗${NC} mitre-coverage.json NOT generated"
fi

# Show sample output
echo -e "\n${BLUE}Sample savedsearches.conf content:${NC}"
head -20 build/test/output/savedsearches.conf

echo -e "\n${GREEN}✓ Conversion test completed successfully!${NC}"
echo "Full test outputs available in: build/test/output/"