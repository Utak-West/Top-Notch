# Elementor Pro, Nexter Pro, and PosyMyths Integration Guide

This guide provides specific instructions for migrating the Top Notch Renovations static site to WordPress using Elementor Pro, Nexter Pro theme, and PosyMyths products including Amelia booking. The design has been updated to align with the Wilmer theme inspiration ([wilmer.qodeinteractive.com](https://wilmer.qodeinteractive.com/)) while maintaining our specific styling requirements.

## Table of Contents
1. [Setup and Installation](#setup-and-installation)
2. [Global Styling Setup](#global-styling-setup)
3. [Header and Logo Implementation](#header-and-logo-implementation)
4. [Portfolio Implementation](#portfolio-implementation)
5. [Service Cards Styling](#service-cards-styling)
6. [Process Icons Implementation](#process-icons-implementation)
7. [Amelia Booking Integration](#amelia-booking-integration)
8. [Custom CSS Integration](#custom-css-integration)
9. [Performance Optimization](#performance-optimization)
10. [Testing Checklist](#testing-checklist)

## Setup and Installation

1. **Install and Configure Required Products**:
   - Install and activate Nexter Pro theme
   - Install and activate Elementor Pro
   - Install and activate PosyMyths products including Amelia booking
   - Install child theme from `/wordpress_theme/topnotchnewjersey-child/`

2. **Initialize Theme Settings**:
   - Import Nexter Pro demo that most closely resembles our design
   - Set up child theme as active theme
   - Configure Elementor global settings

## Global Styling Setup

1. **Global Colors Setup**:
   - Navigate to Elementor → Settings → Style
   - Add the following global colors:
     - Primary Color: `#2D3B71` (Dark Blue)
     - Secondary Color: `#F47B20` (Orange)
     - Text Color: `#111111`
     - Light Background: `#f8f8f8`
     - Dark Background: `#2D3B71`

2. **Typography Setup**:
   - Set Headings: `'Raleway', sans-serif`
   - Set Body Text: `'Open Sans', sans-serif`
   - Configure typography sizes:
     - H1: 48px, 700 weight
     - H2: 36px, 600 weight
     - H3: 24px, 600 weight
     - H4: 18px, 600 weight
     - Body: 15px, 400 weight

3. **Container Width Settings**:
   - Default: 1320px
   - Tablet: 1024px
   - Mobile: 767px

## Header and Logo Implementation

1. **Logo Implementation**:
   - Use Nexter Pro Theme Builder to create custom header
   - Logo dimensions: exactly 40px height, auto width
   - Add the following custom CSS to header section:

   ```css
   .logo-container {
     display: flex !important;
     align-items: center !important;
     height: 100%;
   }
   
   .site-logo img {
     height: 40px !important;
     width: auto !important;
     vertical-align: middle !important;
   }
   
   /* Logo fallback styling */
   .site-logo img[src=""], 
   .site-logo img:not([src]) {
     display: none !important;
   }
   
   .site-logo:has(img[src=""]) .logo-text,
   .site-logo:has(img:not([src])) .logo-text {
     margin-left: 0 !important;
   }
   ```


2. **Header Navigation**:
   - Create main menu in WordPress Admin → Appearance → Menus
   - Style menu items with primary color: `#2D3B71`
   - Add hover effect with secondary color: `#F47B20`
   - Adjust padding and spacing to match static site

## Portfolio Implementation

1. **Custom Portfolio Setup**:
   - Create Custom Post Type for portfolio items (use Elementor Custom Post Type feature or CPT UI plugin)
   - Set up portfolio categories as taxonomies

2. **Portfolio Grid Implementation**:
   - Create a template for portfolio archive page
   - Instead of using Elementor's default portfolio widget (which uses grid), create a custom portfolio layout:

   ```html
   <div class="portfolio-items">
     [LOOP START]
     <div class="portfolio-item">
       <!-- Portfolio item content -->
     </div>
     [LOOP END]
   </div>
   ```


3. **Portfolio Item Styling**:
   - Add the following class overrides in Theme Options or Elementor's custom CSS:

   ```css
   .portfolio-items {
     display: flex !important;
     flex-wrap: wrap !important;
     gap: 30px !important;
     justify-content: center !important;
   }
   
   .portfolio-item {
     flex: 0 0 calc(33.33% - 20px) !important;
     max-width: 350px !important;
     margin: 0 !important;
   }
   
   @media (max-width: 992px) {
     .portfolio-item {
       flex: 0 0 calc(50% - 15px) !important;
     }
   }
   
   @media (max-width: 576px) {
     .portfolio-item {
       flex: 0 0 100% !important;
     }
   }
   ```


## Service Cards Styling

1. **Service Card Implementation**:
   - Create a reusable template for service cards
   - Set consistent card dimensions with full height layout
   - Use Elementor's Column Gap feature to control spacing

2. **Service Card Custom CSS**:

   ```css
   .service-card {
     margin-bottom: 30px !important;
     height: calc(100% - 30px) !important;
   }
   
   .service-grid {
     display: flex !important;
     flex-wrap: wrap !important; 
     margin: 0 -15px !important;
   }
   
   .service-grid-item {
     padding: 15px !important;
   }
   ```


## Process Icons Implementation

1. **Process Step Creation**:
   - Use Icon Box widget for process steps
   - Configure icon settings:
     - Choose icon from Font Awesome (e.g., `fas fa-clipboard-check`)
     - Set icon size: 30px
     - Set icon color: `#F47B20`
     - Enable icon background: yes
     - Background color: `rgba(244, 123, 32, 0.1)`
     - Background shape: circle
     - Background size: 80px

2. **Icon Alignment CSS**:

   ```css
   .icon-circle {
     display: flex !important;
     align-items: center !important;
     justify-content: center !important;
     width: 80px;
     height: 80px;
     border-radius: 50%;
     margin: 0 auto 20px;
   }
   
   .icon-circle i {
     display: flex !important;
     align-items: center !important;
     justify-content: center !important;
     height: 100%;
     width: 100%;
     font-size: 30px;
   }
   
   .process-step .icon-circle {
     background-color: rgba(244, 123, 32, 0.1);
     color: #F47B20;
   }
   ```


## Amelia Booking Integration


1. **Setup and Configuration**:
   - Install and activate Amelia Booking plugin
   - Configure services, categories, and business hours
   - Set up payment gateways

2. **Styling Booking Forms**:
   - Create a custom CSS file or add to theme CSS:

   ```css
   /* Amelia booking forms styling */
   .am-service-details {
     background-color: #fff !important;
     border-radius: 8px !important;
     box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
   }
   
   .el-button--primary {
     background-color: #F47B20 !important;
     border-color: #F47B20 !important;
   }
   
   .el-button--primary:hover {
     background-color: #e06a19 !important;
     border-color: #e06a19 !important;
   }
   
   .am-service-title h2 {
     color: #2D3B71 !important;
   }
   ```


3. **Booking Page Template**:
   - Create a dedicated page template for booking
   - Add necessary shortcodes for Amelia booking form
   - Configure page layout and styling

## Custom CSS Integration

1. **Elementor Pro Custom CSS**:
   - Navigate to Elementor → Custom CSS
   - Add the CSS from `/static_site/css/improvements.css`

2. **Child Theme CSS**:
   - Add additional styles to the child theme's style.css file
   - Implement fixes for icon alignment, logo styling, and text color on dark backgrounds

3. **Element-Specific CSS**:
   - Add custom CSS to individual Elementor sections as needed
   - Focus on maintaining accessibility with proper text contrast

## Performance Optimization

1. **Image Optimization**:
   - Enable WordPress image optimizations
   - Configure WEBP conversion if supported
   - Set up lazy loading for images

2. **Caching Setup**:
   - Install and configure a caching plugin
   - Set up browser caching
   - Enable GZIP compression

3. **Script Optimization**:
   - Minimize render-blocking resources
   - Load scripts in footer where appropriate
   - Defer non-critical JavaScript

## Testing Checklist

1. **Visual Consistency Testing**:
   
- [ ] Verify icon alignment in circular backgrounds
   
- [ ] Check logo dimensions and alignment in header/footer
   
- [ ] Confirm portfolio displays with flex layout, not grid
   
- [ ] Validate text color on dark backgrounds is white
   
- [ ] Test fallback styling for missing images

2. **Responsive Testing**:
   
- [ ] Desktop (1920px, 1440px, 1366px)
   
- [ ] Tablet (1024px, 768px)
   
- [ ] Mobile (414px, 375px)

3. **Plugin Compatibility Testing**:
   
- [ ] Elementor Pro
   
- [ ] Nexter Pro theme
   
- [ ] Amelia booking
   
- [ ] Other PosyMyths products

4. **Performance Validation**:
   
- [ ] Google PageSpeed Insights
   
- [ ] GTmetrix performance testing
   
- [ ] WordPress health check

---

## Additional Resources

For more information on specific implementation details, refer to:

- [Elementor Pro Documentation](https://elementor.com/help/pro/)

- [Nexter Pro Theme Documentation](https://codex-themes.com/thegem/documentation/)

- [Amelia Booking Documentation](https://wpamelia.com/documentation/)
