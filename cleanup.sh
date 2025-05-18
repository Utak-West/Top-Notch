#!/bin/bash

# Cleanup script for Top Notch website
# This script removes unnecessary files after consolidation

echo "Starting cleanup process..."

# Remove unnecessary CSS files
echo "Removing unnecessary CSS files..."
rm -f static_site/css/client-fixes.css
rm -f static_site/css/combined.min.css
rm -f static_site/css/consolidated-wilmer-theme.css
rm -f static_site/css/enhancements.css
rm -f static_site/css/fixes.css
rm -f static_site/css/footer.css
rm -f static_site/css/hero.css
rm -f static_site/css/portfolio.css
rm -f static_site/css/scrolling-fix.css
rm -f static_site/css/style-fixes.css
rm -f static_site/css/style.css
rm -f static_site/css/testimonials.css
rm -f static_site/css/theme.css
rm -f static_site/css/wilmer-theme.css

# Remove unnecessary JS files
echo "Removing unnecessary JS files..."
rm -f static_site/js/main.js
rm -f static_site/js/script.js
rm -f static_site/js/scroll-fix.js
rm -f static_site/js/wilmer-theme.js

echo "Cleanup complete!"
