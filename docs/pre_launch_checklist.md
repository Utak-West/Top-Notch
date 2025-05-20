# Website Pre-Launch Checklist - Top Notch Renovations & Home Services

This checklist outlines crucial steps to perform before launching the live website, ensuring a smooth transition and optimal performance from day one. This aligns with Phase 8 of the project plan.

## I. Final Content & Design Checks

*   [ ] **Final Content Proofread:** All text (pages, posts, CTAs, forms, emails) proofread for spelling, grammar, and accuracy one last time.
*   [ ] **Placeholder Removal:** Confirm ALL placeholder content (text, images, links) has been replaced with final versions.
*   [ ] **Image Optimization & Alt Text:** All images are optimized for web, correctly sized, and have appropriate alt text.
*   [ ] **Brand Consistency:** Logo, colors, fonts, and overall design are consistent across all pages and devices.
*   [ ] **Favicon:** Favicon is created and correctly implemented.
*   [ ] **Copyright Year:** Footer copyright year is current.
*   [ ] **Contact Information:** All instances of phone numbers, email addresses, and physical addresses are correct and consistent.

## II. Technical & SEO Readiness

*   [ ] **Full Website Backup:** Perform a complete backup of website files and the database.
*   [ ] **SSL Certificate:** Ensure SSL certificate is active, correctly configured, and the site loads via HTTPS by default.
*   [ ] **Permalinks:** Confirm permalink structure is set to "Post name" (or desired structure) and all links are working.
*   [ ] **WordPress & Plugin Updates:** Ensure WordPress core, all active themes, and all plugins are updated to their latest stable versions (unless a specific reason not to).
*   [ ] **Remove Unused Plugins/Themes:** Deactivate and delete any unused plugins or themes to reduce security risks and clutter.
*   [ ] **Admin User Security:**
    *   [ ] Default 'admin' username is not used.
    *   [ ] Strong passwords are set for all admin accounts.
*   [ ] **Debug Mode Off:** Ensure `WP_DEBUG` is set to `false` in `wp-config.php` on the live server.
*   [ ] **Caching Plugin:** Caching plugin is configured and active for optimal performance. Clear cache after final changes.
*   [ ] **Security Plugin:** Security plugin is configured with recommended settings.
*   [ ] **SEO Plugin Finalization:**
    *   [ ] Meta titles and descriptions are finalized for all key pages.
    *   [ ] XML sitemap is generated and its URL is known (e.g., `/sitemap_index.xml`).
    *   [ ] `robots.txt` is configured correctly (not blocking important resources, allowing sitemap).
    *   [ ] Schema markup is validated.
*   [ ] **Analytics Tracking:**
    *   [ ] Google Analytics (or other analytics) tracking code is correctly implemented on all pages.
    *   [ ] Confirm real-time data is being received in Analytics.
    *   [ ] Exclude admin/internal IP addresses from tracking if necessary.
*   [ ] **Google Search Console:**
    *   [ ] Website is verified in Google Search Console.
    *   [ ] XML sitemap will be submitted immediately post-launch.

## III. Form & Integration Functionality

*   [ ] **All Forms Tested:** Final test of all forms (contact, quote, booking) for submission and data/notification delivery.
*   [ ] **CRM/Webhook Integration:** Confirm data is flowing correctly to the CRM or lead management system from all forms and bookings.
*   [ ] **Amelia Booking:** Final test of the booking process, email notifications (admin and user), and backend booking management.
*   [ ] **Email Deliverability:** Ensure WordPress can send emails reliably (e.g., from forms, booking plugin, WP notifications). Consider an SMTP plugin if issues.

## IV. Pre-Go-Live Staging/Development Environment (If Applicable)

*   [ ] **All changes deployed to staging:** Ensure the staging environment perfectly mirrors what will go live.
*   [ ] **Client Sign-off:** Obtain final approval from the client on the staging site.

## V. Go-Live Specifics (To be done during launch window)

*   [ ] **Maintenance Mode (Optional):** Enable a maintenance page briefly during the final deployment if significant changes are involved.
*   [ ] **Domain & DNS:** DNS records are ready to be pointed to the new live server (if migrating). Note TTL values.
*   [ ] **Database Migration (If Applicable):** Plan for migrating the database from dev/staging to live.
*   [ ] **File Migration (If Applicable):** Plan for migrating files.
*   [ ] **Search & Replace for URLs (If Applicable):** If migrating domains/URLs, plan for a thorough search & replace in the database.

## VI. Post-Launch Immediate Checks (First 1-2 Hours After Go-Live)

*   [ ] **Site Accessibility:** Browse key pages on different devices/browsers.
*   [ ] **Forms Live Test:** Submit a test entry on each live form.
*   [ ] **Booking Live Test:** Perform a test booking on the live site.
*   [ ] **Analytics Real-Time:** Check if live traffic is being recorded.
*   [ ] **Google Search Console:** Submit XML sitemap. Use "URL Inspection" tool for homepage and key pages.
*   [ ] **No Critical Errors:** Check server error logs and browser console for any immediate issues.

This checklist aims to cover most critical pre-launch items. Specific project needs might require additional checks.