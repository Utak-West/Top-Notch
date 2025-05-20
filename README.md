# Top Notch Renovations & Home Services

This repository contains all the necessary files for the Top Notch Renovations & Home Services website, including static website assets, WordPress theme files, deployment scripts, and comprehensive documentation.

## Project Structure

```
/
├── static_site/              # Static website files
│   ├── css/                  # Consolidated CSS files
│   ├── js/                   # Consolidated JavaScript files
│   ├── images/               # Website images
│   └── *.html                # HTML pages
├── wordpress_theme/          # WordPress theme files
│   ├── topnotchnewjersey-child/  # Child theme for Nexter Pro
│   │   ├── css/              # Theme CSS files
│   │   ├── js/               # Theme JavaScript files
│   │   ├── templates/        # Elementor templates
│   │   ├── inc/              # Theme includes and guides
│   │   ├── functions.php     # Theme functions
│   │   └── style.css         # Main theme stylesheet
│   ├── css-documentation/    # CSS implementation documentation
│   ├── deployment-guide.md   # WordPress deployment guide
│   ├── migration-guide.md    # Static to WordPress migration guide
│   └── wordpress_implementation_steps.md  # Implementation steps
├── deployment/               # Deployment resources
│   ├── scripts/              # Deployment and maintenance scripts
│   ├── config/               # Configuration templates
│   │   ├── wp-config-sample.php  # WordPress config template
│   │   └── htaccess-sample   # .htaccess template
│   └── templates/            # SeedProd and other templates
├── docs/                     # Documentation
│   ├── client_documentation.md
│   ├── lead_capture_design.md
│   ├── lead_management_workflow.md
│   ├── performance_optimization_plan.md
│   ├── pre_launch_checklist.md
│   ├── sales_funnel_webhook_flow.md
│   ├── seo_keyword_application_summary.md
│   ├── seo_strategy.md
│   ├── testing_checklist.md
│   ├── testing_strategy.md
│   └── traffic_analytics_plan.md
├── content/                  # Content drafts
│   └── pages/                # Page content in markdown format
│       ├── home.md
│       ├── services.md
│       ├── about.md
│       ├── portfolio.md
│       ├── process.md
│       └── contact.md
├── .gitignore                # Git ignore file
└── README.md                 # This file
```

## Overview

This repository has been consolidated to provide a clear structure for all project assets:

1. **Static Website (`/static_site/`)**: 
   - Contains the static HTML, CSS, and JavaScript files
   - Includes consolidated stylesheets and scripts for better performance
   - Follows the Wilmer theme visual style with orange accents and dark blue headers

2. **WordPress Theme (`/wordpress_theme/`)**: 
   - Contains the child theme for Nexter Pro
   - Includes templates for Elementor
   - Provides comprehensive documentation for WordPress implementation

3. **Deployment Resources (`/deployment/`)**: 
   - Contains scripts for deploying to staging and production environments
   - Includes configuration templates for WordPress
   - Provides maintenance scripts for backups and updates

4. **Documentation (`/docs/`)**: 
   - Comprehensive guides for client handover
   - SEO and marketing strategy documents
   - Testing and performance optimization plans
   - Pre-launch checklists and workflow documentation

5. **Content (`/content/`)**: 
   - Markdown files with content drafts for all website pages
   - Organized by page for easy reference

## Development

To work on this project:

1. Clone the repository
2. For static site development:
   - Navigate to the `static_site` directory
   - Make changes to the consolidated files
   - Test in a browser before committing
3. For WordPress development:
   - Use the files in `wordpress_theme` directory
   - Follow the implementation steps in the documentation

## Deployment

For deploying the WordPress site:

1. Follow the instructions in `wordpress_theme/deployment-guide.md`
2. Use the configuration templates in `deployment/config/`
3. Execute the deployment scripts in `deployment/scripts/`

## License

All rights reserved - Top Notch Renovations & Home Services - 2025
