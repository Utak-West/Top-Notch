# Website Testing Checklist - Top Notch Renovations & Home Services

This checklist outlines key areas for testing during Phase 7, ensuring the website is functional, user-friendly, and performs well before launch.

## I. Cross-Browser & Device Testing

**Target Browsers:**
*   [ ] Google Chrome (Latest Version)
*   [ ] Mozilla Firefox (Latest Version)
*   [ ] Safari (Latest Version - macOS & iOS)
*   [ ] Microsoft Edge (Latest Version)
*   [ ] Chrome on Android (Latest Version)

**Target Devices:**
*   [ ] Desktop (Large, Medium, Small resolutions)
*   [ ] Laptop (Typical resolutions)
*   [ ] Tablet - Portrait (e.g., iPad)
*   [ ] Tablet - Landscape (e.g., iPad)
*   [ ] Mobile - Portrait (e.g., iPhone, Android Phone)
*   [ ] Mobile - Landscape (e.g., iPhone, Android Phone)

**For each browser/device combination, check:**
*   [ ] Layout and Responsiveness: All elements display correctly, no overlaps, no horizontal scrolling where not intended.
*   [ ] Navigation: Menus (desktop & mobile/hamburger) work as expected.
*   [ ] Images: Display correctly, not distorted or pixelated.
*   [ ] Forms: Input fields and buttons are accessible and usable.
*   [ ] Readability: Font sizes and line spacing are appropriate.

## II. Functional Testing

**A. Navigation & Links:**
*   [ ] All main navigation links work and go to the correct pages.
*   [ ] All footer navigation links work.
*   [ ] All internal links within content (e.g., "Learn More", CTAs) work.
*   [ ] Logo link returns to Homepage.
*   [ ] Breadcrumbs (if implemented) are accurate.
*   [ ] Test for any broken links (404 errors).

**B. Forms:**
    *   **Contact Form(s) / Quote Request Form(s):**
        *   [ ] Submit with all valid data - check successful submission message.
        *   [ ] Verify email notification is received by the admin/designated email.
        *   [ ] Verify data is captured correctly in the backend (WP admin or CRM if integrated).
        *   [ ] Test required field validation (submit empty, submit with partial data).
        *   [ ] Test email format validation.
        *   [ ] Test phone number format validation (if applicable).
    *   **Amelia Booking Form(s):**
        *   [ ] Select a service and complete the booking process as a user.
        *   [ ] Verify booking confirmation is shown to the user.
        *   [ ] Verify booking confirmation email is received by the user.
        *   [ ] Verify booking notification email is received by the admin.
        *   [ ] Verify booking appears correctly in the Amelia Booking admin panel.
        *   [ ] Test date/time slot availability logic.
        *   [ ] Test payment integration if configured (beyond initial scope but for future).

**C. Portfolio:**
*   [ ] Portfolio archive page loads correctly with project listings.
*   [ ] Filtering (if implemented) works correctly.
*   [ ] Clicking a project navigates to the correct single project page.
*   [ ] Single project page displays all content sections correctly (overview, gallery, details, testimonial).
*   [ ] Image galleries/sliders work as expected.

**D. Testimonials:**
*   [ ] Testimonials page (if dedicated) displays testimonials correctly.
*   [ ] Testimonial display on other pages (e.g., homepage snippets) works.

**E. Search Functionality (if implemented):**
*   [ ] Test search with relevant keywords.
*   [ ] Test search with irrelevant keywords (check "no results" message).
*   [ ] Search results are accurate and link to correct pages.

## III. Performance Review

*   [ ] **Page Load Speed:** Test key pages (Homepage, Service Pages, Portfolio) using tools like Google PageSpeed Insights, GTmetrix, WebPageTest.
    *   Target LCP, FID, CLS scores.
*   [ ] **Image Optimization:** Verify images are compressed and served in appropriate formats (e.g., WebP if configured).
*   [ ] **Caching:** Confirm caching plugin is working (check response headers, test logged-in vs. logged-out user).
*   [ ] **Minification:** Check if CSS/JS files are minified (if configured).
*   [ ] **Server Response Time:** Monitor initial server response time.

## IV. Content Review

*   [ ] **Proofreading:** Check all website copy for spelling errors, grammatical mistakes, and typos.
*   [ ] **Accuracy:** Verify all information (phone numbers, addresses, service details, pricing if listed) is correct.
*   [ ] **Formatting:** Ensure consistent formatting (headings, paragraphs, lists, bold/italics).
*   [ ] **Tone & Voice:** Confirm content aligns with brand messaging.
*   [ ] **Placeholder Content:** Ensure no placeholder text (e.g., "Lorem Ipsum", "[Placeholder]") remains on the live site.

## V. SEO Checks (Post-Implementation)

*   [ ] **Meta Titles & Descriptions:** Verify they are present and optimized on key pages (use browser dev tools or SEO plugin output).
*   [ ] **Heading Structure:** Check H1-H6 hierarchy on key pages.
*   [ ] **Image Alt Text:** Ensure important images have descriptive alt text.
*   [ ] **Robots.txt:** Ensure it's not blocking important content from search engines.
*   [ ] **XML Sitemap:** Verify it's generated and accessible (e.g., `/sitemap_index.xml`).
*   [ ] **Schema Markup:** Use Google's Rich Results Test or Schema Markup Validator to check implemented schema.
*   [ ] **Mobile Friendliness:** Double-check with Google's Mobile-Friendly Test.

## VI. User Acceptance Testing (UAT)

*   [ ] **Overall User Experience:** Is the site easy to navigate and understand?
*   [ ] **Task Completion:** Can users easily complete key tasks (e.g., find service information, request a quote, book a consultation)?
*   [ ] **Clarity of Information:** Is the information presented clearly and logically?
*   [ ] **Trust & Credibility:** Does the site look professional and trustworthy?
*   [ ] Gather feedback from the client/stakeholders on overall satisfaction.

This checklist should be revisited and expanded as specific features are implemented.