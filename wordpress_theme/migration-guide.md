# Top Notch Renovations: Static to WordPress Migration Guide

## Overview

This document provides a comprehensive guide for migrating the Top Notch Renovations static HTML website to a WordPress-based content management system. The migration involves moving all content (text, images, and structure) from the static site to a custom WordPress theme with specialized post types for Services, Projects, and Testimonials.

## Pre-Migration Checklist

Before beginning the migration process, ensure that the following prerequisites are in place:

1. **WordPress Installation**
   - A working WordPress installation (version 5.8 or higher recommended)
   - PHP 7.4 or higher
   - MySQL 5.7 or higher
   - The Top Notch WordPress theme installed and activated

2. **Domain and Hosting Setup**
   - Decide whether to use the same domain/hosting or new hosting
   - If using new hosting, ensure DNS is configured properly
   - Verify that the server meets WordPress requirements

3. **Backup Strategy**
   - Create a complete backup of the static site
   - Set up a backup solution for the WordPress site

4. **Required Access**
   - FTP/SFTP access to both static and WordPress sites
   - WordPress admin credentials
   - Database access credentials

5. **Required Tools**
   - Access to the migration scripts included in this package
   - An image editing tool (if image optimization is needed)
   - A code editor for any manual adjustments

## Step-by-Step Migration Process

### 1. Content Inventory & Planning

Before running any migration scripts, take an inventory of the existing content:

- List all static pages and their URLs
- Identify which pages will become standard WordPress pages
- Identify content to be migrated to custom post types (Services, Projects, Testimonials)
- Document any special widgets, forms, or interactive elements
- Note any third-party integrations that need to be preserved

### 2. Setting Up WordPress

Ensure your WordPress installation is properly configured:

1. Install and activate the Top Notch WordPress theme
2. Install necessary plugins:
   - Advanced Custom Fields (if needed for additional metadata)
   - Yoast SEO (for SEO settings migration)
   - Redirection (for managing redirects from old URLs)
3. Configure permalink settings to match your desired URL structure
4. Set up the main menu structure similar to the static site

### 3. Running the Export Script

The `export-content.php` script will extract content from the static HTML files and prepare it for WordPress import:

1. Place the static site files in a location accessible to the script
2. Navigate to the `migration-tools` directory
3. Run the export script:
   ```
   php export-content.php --source=/path/to/static/site --output=/path/to/output/directory
   ```
4. The script will generate JSON files organized by content type:
   - `pages.json` - Regular pages content
   - `services.json` - Service items content
   - `projects.json` - Project/portfolio items
   - `testimonials.json` - Testimonial content

### 4. Running the Import Script

The `import-to-wordpress.php` script will import the exported content into WordPress:

1. Ensure WordPress is properly set up
2. Place the JSON export files in a location accessible to the script
3. Run the import script:
   ```
   php import-to-wordpress.php --source=/path/to/json/files --media=/path/to/static/images
   ```
4. Monitor the script output for any errors or warnings

### 5. Media File Migration

The import script handles media file migration with these steps:

1. Images from the static site are copied to the WordPress media library
2. Image references in the content are updated to point to the new WordPress media URLs
3. Feature images for posts and pages are assigned automatically where possible

If you need to manually migrate additional media:

1. Use the WordPress Media Library uploader for bulk uploads
2. Update content references as needed using the WordPress editor

### 6. Post-Migration Verification

After running the migration scripts, verify that all content has been successfully migrated:

1. **Content Check**
   - Verify all pages exist and contain the correct content
   - Ensure all services, projects, and testimonials are present
   - Check that images and other media display correctly

2. **Functionality Check**
   - Test navigation menus
   - Verify contact forms and other interactive elements
   - Test responsive layout on various devices

3. **SEO Verification**
   - Check that page titles and meta descriptions were migrated
   - Verify that URLs are working as expected
   - Test that internal links function correctly

4. **Performance Testing**
   - Run speed tests to ensure the WordPress site performs well
   - Check for any console errors or warnings

### 7. URL Redirection Setup

Set up redirects from old static URLs to new WordPress URLs if the URL structure has changed:

1. Create a mapping of old URLs to new URLs
2. Configure redirects using the Redirection plugin or via `.htaccess`
3. Test all redirects to ensure they work properly

## Content Type-Specific Migration Notes

### Regular Pages Migration

Regular pages (Home, About, Contact, etc.) are migrated to standard WordPress pages:

- The page hierarchy is preserved
- Page templates are assigned based on page content and purpose
- Custom page templates can be applied for specialized layouts

### Services Migration

Services are migrated to the custom 'services' post type:

- Each service becomes a separate post in the Services custom post type
- Service details, icons, and features are preserved
- Service categories can be assigned during import
- Featured images are extracted from the static site

### Projects/Portfolio Migration

Projects are migrated to the custom 'projects' post type:

- Each project in the portfolio becomes a separate post
- Project details, images, and descriptions are preserved
- Project categories can be assigned during import
- Before/after images are handled as galleries

### Testimonials Migration

Testimonials are migrated to the custom 'testimonials' post type:

- Each testimonial becomes a separate post
- Client names, titles, and testimonial text are preserved
- Client photos are imported to the media library and assigned as featured images

### Menu and Widget Setup

Menus and widgets require some manual configuration:

- The main navigation menu is created with the same structure as the static site
- Footer menus are set up to match the original site
- Widgets are configured in the appropriate widget areas
- Social media links are added to the relevant widget areas

## Troubleshooting Common Issues

### Content Import Issues

- **Missing content**: Check if the static HTML source has special formatting that the export script didn't recognize
- **Formatting issues**: Some HTML may need manual adjustment in the WordPress editor
- **Character encoding problems**: Ensure proper character encoding in both export and import

### Media Import Issues

- **Missing images**: Verify file paths in the static site and ensure images are accessible to the import script
- **Broken image links**: Update image references manually in WordPress if needed
- **Image quality issues**: Check image optimization settings

### SEO and Permalink Issues

- **404 errors**: Ensure redirects are properly configured
- **Duplicate content**: Check for duplicate posts or pages after import
- **Missing meta data**: Verify SEO plugin configuration and metadata import

## Post-Migration Tasks

After completing the migration, consider these additional tasks:

1. **Performance Optimization**
   - Configure caching
   - Optimize images further if needed
   - Minify CSS and JavaScript files

2. **SEO Enhancement**
   - Set up XML sitemaps
   - Verify Google Search Console integration
   - Monitor for 404 errors

3. **Security Setup**
   - Configure security plugins
   - Set up automated backups
   - Implement strong password policies

4. **Training and Documentation**
   - Provide training for content editors
   - Document any custom functionality
   - Create content update guidelines

## Conclusion

Following this migration guide should result in a successful transition from the static HTML site to a WordPress-based content management system. The WordPress site will maintain the look and feel of the original site while providing improved content management capabilities through the WordPress admin interface.

If you encounter issues during migration that aren't covered in this guide, contact the theme developer for assistance.