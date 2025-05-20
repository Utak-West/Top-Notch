#!/bin/bash

# Top Notch Home Improvement - WordPress Deployment Script
# This script automates the deployment of the WordPress site with Elementor templates

# Exit on error
set -e

# Configuration
SITE_URL=${1:-"https://topnotchrenovations.com"}
THEME_DIR="wordpress_theme/topnotchnewjersey-child"
TEMPLATES_DIR="$THEME_DIR/templates"
BACKUP_DIR="deployment/backups/$(date +%Y-%m-%d_%H-%M-%S)"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo -e "${YELLOW}Starting deployment process for Top Notch Home Improvement website...${NC}"
echo -e "${YELLOW}Target URL: ${SITE_URL}${NC}"

# Step 1: Backup current theme files
echo -e "${YELLOW}Step 1: Backing up current theme files...${NC}"
if [ -d "$THEME_DIR" ]; then
  cp -r "$THEME_DIR" "$BACKUP_DIR/"
  echo -e "${GREEN}Backup created at $BACKUP_DIR/${NC}"
else
  echo -e "${RED}Theme directory not found. Skipping backup.${NC}"
  exit 1
fi

# Step 2: Prepare Elementor templates for deployment
echo -e "${YELLOW}Step 2: Preparing Elementor templates for deployment...${NC}"

# Replace placeholder URLs in template files
for file in "$TEMPLATES_DIR"/*.json; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    # Create a temporary file
    temp_file=$(mktemp)
    # Replace {{site_url}} placeholder with actual site URL
    sed "s|{{site_url}}|$SITE_URL|g" "$file" > "$temp_file"
    # Move the temporary file back to the original
    mv "$temp_file" "$file"
  fi
done

echo -e "${GREEN}Templates prepared for deployment.${NC}"

# Step 3: Create deployment package
echo -e "${YELLOW}Step 3: Creating deployment package...${NC}"
DEPLOY_PACKAGE="deployment/packages/topnotch-deployment-$(date +%Y%m%d%H%M%S).zip"
mkdir -p deployment/packages

# Create the deployment package
zip -r "$DEPLOY_PACKAGE" "$THEME_DIR" \
  deployment/config/wp-config-sample.php \
  deployment/config/htaccess-sample

echo -e "${GREEN}Deployment package created at $DEPLOY_PACKAGE${NC}"

# Step 4: Deployment instructions
echo -e "${YELLOW}Step 4: Deployment instructions${NC}"
echo -e "${GREEN}Deployment package is ready. Follow these steps to deploy:${NC}"
echo ""
echo "1. Upload and extract $DEPLOY_PACKAGE to your WordPress installation"
echo "2. Activate the 'topnotchnewjersey-child' theme in WordPress admin"
echo "3. Install and activate required plugins:"
echo "   - Elementor"
echo "   - Elementor Pro"
echo "   - WP Rocket"
echo "   - Amelia Booking"
echo "4. Import Elementor templates from the WordPress admin:"
echo "   - Go to Templates > Saved Templates"
echo "   - Click 'Import Templates'"
echo "   - Select all JSON files from the templates directory"
echo "5. Configure wp-config.php using the sample provided"
echo "6. Configure .htaccess using the sample provided"
echo ""
echo -e "${YELLOW}For multi-platform deployment:${NC}"
echo "- Vercel: Use the vercel.json file in the root directory"
echo "- Windsurf: Use the updated windsurf_deployment.yaml configuration"
echo "- Netlify: Use the updated netlify.toml configuration"
echo ""
echo -e "${GREEN}Deployment preparation completed successfully!${NC}"
