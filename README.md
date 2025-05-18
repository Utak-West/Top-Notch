# Top Notch Renovations & Home Services - Static Website

This repository contains the static website for Top Notch Renovations & Home Services, a home renovation and electrical services company based in Linden, NJ. The website has been cleaned up and consolidated for better performance and maintainability.

## Project Structure

```bash
/Top-Notch/
├── static_site/              # Static website files
│   ├── css/
│   │   ├── consolidated.css  # Main consolidated stylesheet
│   │   ├── wilmer-consolidated.css # Base theme styles
│   │   └── normalize.css     # CSS normalization
│   ├── js/
│   │   └── consolidated.js   # Main consolidated JavaScript file
│   ├── images/               # Website images
│   ├── index.html            # Main homepage
│   ├── services.html
│   ├── about.html
│   ├── portfolio.html
│   ├── process.html
│   └── contact.html
├── docs/                     # Planning, strategy, and handover documentation
│   ├── client_documentation.md
│   ├── lead_capture_design.md
│   ├── lead_management_workflow.md
│   ├── performance_optimization_plan.md
│   ├── seo_strategy.md
│   ├── testing_strategy.md
│   └── traffic_analytics_plan.md
├── .gitignore                # Files and directories to ignore by Git
└── README.md                 # This file
```

## Recent Changes

The codebase has been cleaned up and consolidated:

1. **CSS Consolidation**:
   - Combined multiple CSS files (fixes.css, testimonials.css, portfolio.css, hero.css) into a single consolidated.css file
   - Removed inline styles and moved them to the consolidated stylesheet
   - Maintained the Wilmer theme styling

2. **JavaScript Consolidation**:
   - Combined main.js and scroll-fix.js into a single consolidated.js file
   - Organized code with clear section comments
   - Improved performance by removing duplicate functionality

3. **HTML Cleanup**:
   - Updated HTML to reference consolidated CSS and JS files
   - Removed inline styles
   - Improved accessibility with proper ARIA attributes
   - Fixed duplicate sections and elements

## Wilmer Theme

The website follows the Wilmer theme visual style:
- White backgrounds for main content areas
- Orange accents (#F47B20) for buttons, highlights, and call-to-action elements
- Dark blue (#2D3B71) for headers, navigation, and primary text
- Clean, modern aesthetic with appropriate spacing between sections
- Consistent typography using Raleway (for headings) and Open Sans (for body text)

## Development

To work on this project:

1. Clone the repository
2. Open the static_site directory in your preferred code editor
3. Make changes to the consolidated files rather than creating new ones
4. Test changes in a browser before committing

## License

All rights reserved - Top Notch Renovations & Home Services - 2025
