# Elementor Pro & Nexter Pro Template Guide

This guide provides specific instructions for implementing the Top Notch Renovations website using Nexter Pro templates and Elementor Pro, focusing on template selection, customization, and integration with premium plugins.

## Recommended Nexter Pro Templates

After reviewing the Nexter Pro template library, the following templates are most suitable for our renovation/construction business:

1. **Nexter Construction** - Full construction company template with service showcases and project galleries
2. **Nexter Renovation** - Home renovation focused template with before/after portfolio features
3. **Nexter Interior** - Interior design template that can be adapted for renovation services

## Template Customization Workflow

### Step 1: Template Import and Setup

1. **Access Template Library**:
   - Go to WordPress Admin → Nexter → Template Library
   - Filter by "Construction" or "Renovation" category
   - Preview templates to find the closest match to our requirements

2. **Import Selected Template**:
   - Click "Import Template" on your chosen template
   - Select import options (pages, widgets, images, etc.)
   - Choose whether to override existing content

3. **Clean Demo Content**:
   - Remove any placeholder text and images
   - Update company information, contact details, and service offerings
   - Maintain page structure and layouts while replacing content

### Step 2: Theme Style Configuration

1. **Accessing Theme Settings**:
   - Go to WordPress Admin → Nexter → Theme Options
   - Navigate to "Colors" section

2. **Color Palette Setup**:
   - Primary Color: `#2D3B71` (Dark Blue)
   - Secondary Color: `#F47B20` (Orange)
   - Accent Color: Set to matching neutral tone
   - Background Light: `#f8f8f8`
   - Background Dark: `#2D3B71`

3. **Typography Configuration**:
   - Navigate to "Typography" in Theme Options
   - Set Headings: Raleway (400, 500, 600, 700)
   - Set Body: Open Sans (400, 500, 600)
   - Configure base font sizes and line heights

4. **Layout Settings**:
   - Set content width to 1320px
   - Configure padding and margin presets
   - Set responsive breakpoints

### Step 3: Elementor Pro Customization

1. **Global Styles Setup**:
   - Go to Elementor → Settings → Style
   - Configure the same color palette and typography settings
   - This ensures consistency between theme-rendered and Elementor-rendered content

2. **Theme Builder Access**:
   - Go to Templates → Theme Builder
   - Create custom templates for:
     - Header (with proper logo sizing)
     - Footer
     - Single portfolio item
     - Archive pages
     - 404 page

3. **Template Conditions**:
   - For each template, set display conditions
   - Header and footer should display on all pages
   - Portfolio templates should display only on portfolio post types

## Specific Element Implementation

### Header Implementation

1. **Creating the Header**:
   - Go to Templates → Theme Builder → Add New → Header
   - Start with a blank template or a Nexter header template

2. **Logo Configuration**:
   - Add Site Logo element
   - Set exact height to 40px
   - Enable custom CSS to ensure proper alignment:
   ```css
   .site-logo img {
     height: 40px !important;
     width: auto !important;
     vertical-align: middle !important;
   }
   ```

3. **Navigation Menu**:
   - Add Nav Menu element
   - Select main menu
   - Style menu items with:
     - Normal State: Dark Blue (#2D3B71)
     - Hover State: Orange (#F47B20)
     - Active State: Orange (#F47B20)

4. **Header Call to Action**:
   - Add Button element
   - Set button text to "Free Consultation" or similar
   - Style with Orange (#F47B20) background
   - Add hover animation

### Portfolio Implementation

1. **Portfolio Post Type Setup**:
   - Use Nexter's built-in Portfolio post type or
   - Create custom post type with Elementor Custom Post Type feature

2. **Creating Portfolio Archive Template**:
   - Go to Templates → Theme Builder → Add New → Archive
   - Set condition to display on Portfolio archive

3. **Implementing Flex Layout**:
   - Use Posts or Portfolio widget
   - Switch from Grid layout to custom layout
   - Use custom CSS for flex layout:
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
   ```

4. **Portfolio Item Template**:
   - Create custom single template for portfolio items
   - Include project details, gallery, testimonial
   - Add before/after image slider

### Service Cards Implementation

1. **Service Section Creation**:
   - Use either Inner Section element or Section with columns
   - Set equal height columns option

2. **Individual Service Cards**:
   - Use Icon Box widget for each service
   - Configure icon, title, and description
   - Enable box shadow and hover effects

3. **Service Card Styling**:
   - Add custom CSS class "service-card" to each card
   - Style with:
   ```css
   .service-card {
     background-color: #fff;
     border-radius: 0;
     box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
     transition: all 0.4s ease;
     position: relative;
     z-index: 1;
     overflow: hidden;
     padding: 30px;
   }
   
   .service-card:hover {
     transform: translateY(-10px);
     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
   }
   ```

## Premium Plugin Integration

### Amelia Booking Integration

1. **Installation and Setup**:
   - Install and activate Amelia Booking plugin
   - Configure services, service providers, and locations
   - Set up working hours and booking rules

2. **Booking Page Creation**:
   - Create dedicated booking page
   - Add Amelia shortcode: `[ameliabooking]`
   - Configure page layout with Elementor

3. **Styling Integration**:
   - Add custom CSS to match Amelia elements to site design:
   ```css
   /* Amelia booking forms styling */
   .am-service-details {
     background-color: #fff !important;
     border-radius: 0 !important;
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
   ```

### Other Premium Plugin Integration

1. **WP Rocket**:
   - Configure caching settings
   - Enable file optimization
   - Configure lazy loading
   - Preload key pages

2. **Yoast SEO**:
   - Configure Yoast for each page
   - Set up XML sitemap
   - Configure social sharing metadata

3. **Smush Pro**:
   - Bulk optimize all images
   - Configure WebP conversion
   - Enable lazy loading

## Mobile Responsiveness

1. **Elementor Responsive Mode**:
   - Review each page in Elementor's responsive preview modes
   - Make device-specific adjustments as needed

2. **Responsive Breakpoint Settings**:
   - Desktop: 1025px and above
   - Tablet: 768px to 1024px
   - Mobile: 767px and below

3. **Key Mobile Adjustments**:
   - Reduce heading sizes on mobile
   - Adjust column widths for small screens
   - Configure hamburger menu for mobile navigation

## Performance Optimization

1. **Image Optimization**:
   - Resize images to appropriate dimensions before upload
   - Use WebP format where supported
   - Implement lazy loading

2. **Elementor Performance Settings**:
   - Go to Elementor → Settings → Advanced
   - Enable "Improved Asset Loading"
   - Use "Load CSS files asynchronously"

3. **WP Rocket Configuration**:
   - Enable GZIP compression
   - Browser caching
   - Database optimization

## Common Issues and Solutions

1. **Logo Alignment Issues**:
   - Use Flexbox for logo container
   - Set specific height and auto width
   - Ensure vertical alignment is centered

2. **Portfolio Grid vs. Flex Layout**:
   - Override Elementor's default grid with custom CSS
   - Use custom templates instead of widgets when needed
   - Ensure responsive settings are properly configured

3. **Icon Centering in Circular Backgrounds**:
   - Use flexbox for icon containers
   - Set equal width/height on container
   - Center align both horizontally and vertically

4. **Text Color on Dark Backgrounds**:
   - Set global color settings for dark sections
   - Use CSS to ensure white text on dark backgrounds
   - Verify contrast ratios meet accessibility standards
