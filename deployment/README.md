# Top Notch Home Improvement - Deployment Guide

This guide provides instructions for deploying the Top Notch Home Improvement website across multiple platforms (Vercel, Windsurf, and Netlify).

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Deployment Preparation](#deployment-preparation)
3. [Vercel Deployment](#vercel-deployment)
4. [Windsurf Deployment](#windsurf-deployment)
5. [Netlify Deployment](#netlify-deployment)
6. [Post-Deployment Tasks](#post-deployment-tasks)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

- Access to Vercel, Windsurf, and Netlify accounts
- Git installed on your local machine
- Node.js (v14+) installed
- WordPress admin credentials
- Elementor Pro license

## Deployment Preparation

1. **Run the deployment preparation script**:

   ```bash
   chmod +x deployment/scripts/deploy-wordpress.sh
   ./deployment/scripts/deploy-wordpress.sh https://your-site-url.com
   ```

   This script will:
   - Back up your current theme files
   - Prepare Elementor templates for deployment
   - Create a deployment package

2. **Verify the deployment package**:

   Check that the deployment package has been created in `deployment/packages/`.

## Vercel Deployment

1. **Connect your GitHub repository to Vercel**:

   - Log in to Vercel
   - Click "Import Project"
   - Select "Import Git Repository"
   - Enter your repository URL
   - Click "Continue"

2. **Configure the project**:

   - Set the Framework Preset to "Other"
   - Set the Build Command to `echo 'No build command needed for static site'`
   - Set the Output Directory to `static_site`
   - Click "Deploy"

3. **Set environment variables**:

   - Go to Project Settings > Environment Variables
   - Add `WORDPRESS_API_URL` with the value of your WordPress API URL

## Windsurf Deployment

1. **Connect your GitHub repository to Windsurf**:

   - Log in to Windsurf
   - Click "Add New Site"
   - Select "Import from Git"
   - Choose your repository
   - Click "Import Site"

2. **Configure the project**:

   - Set the Framework to "WordPress"
   - Set the Build Command to `echo 'No build command needed for WordPress site'`
   - Set the Publish Directory to `static_site`
   - Click "Deploy Site"

3. **Configure WordPress settings**:

   - Go to Site Settings > Build & Deploy > Environment Variables
   - Add WordPress-specific environment variables as needed

## Netlify Deployment

1. **Connect your GitHub repository to Netlify**:

   - Log in to Netlify
   - Click "New site from Git"
   - Select GitHub as your Git provider
   - Choose your repository
   - Click "Deploy site"

2. **Configure the project**:

   - Set the Build Command to `echo 'No build command needed for static site'`
   - Set the Publish Directory to `static_site`
   - Click "Deploy site"

3. **Configure headers and redirects**:

   - Netlify will automatically use the `netlify.toml` file in your repository

## Post-Deployment Tasks

After deploying to all platforms, complete these tasks:

1. **Import Elementor templates**:

   - Log in to WordPress admin
   - Go to Templates > Saved Templates
   - Click "Import Templates"
   - Select all JSON files from the `wordpress_theme/topnotchnewjersey-child/templates` directory

2. **Configure WordPress settings**:

   - Update permalinks (Settings > Permalinks)
   - Configure Elementor settings (Elementor > Settings)
   - Set up WP Rocket caching (WP Rocket > Settings)

3. **Test the website**:

   - Check all pages on desktop, tablet, and mobile
   - Test all forms and contact features
   - Verify that all links work correctly
   - Test loading speed using tools like Google PageSpeed Insights

4. **Set up SSL**:

   - Ensure SSL is enabled on all platforms
   - Test HTTPS functionality

## Troubleshooting

### Common Issues

1. **Missing styles or scripts**:

   - Check that all Elementor templates were imported correctly
   - Verify that the child theme is activated
   - Clear cache in WP Rocket

2. **Deployment failures**:

   - Check deployment logs for specific errors
   - Verify that all configuration files are correctly formatted
   - Ensure all required environment variables are set

3. **WordPress API connection issues**:

   - Verify the WordPress API URL is correct
   - Check that the WordPress REST API is enabled
   - Ensure CORS is properly configured

### Platform-Specific Issues

#### Vercel

- If you encounter 404 errors, check the `vercel.json` configuration
- For API connection issues, verify environment variables

#### Windsurf

- For WordPress plugin issues, check the `windsurf_deployment.yaml` configuration
- If the site loads without styles, verify the theme activation

#### Netlify

- For redirect issues, check the `netlify.toml` configuration
- If forms don't work, verify Netlify Forms setup

## Support

For additional support, contact:

- Email: support@topnotchrenovations.com
- Phone: (908) 555-1234
