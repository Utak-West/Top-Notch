# Website Testing Strategy for Top Notch Renovations & Home Services

**Goal:** To ensure the Top Notch Renovations & Home Services website is high-quality, functional, performant, secure, and meets all requirements before and after deployment. This strategy covers testing for both the initial static build phase and the final WordPress implementation on GoDaddy.

**Reference:** This strategy is based on the `website_testing_guide.md` provided.

## 1. Testing Phases

*   **Phase 1: Static Build Testing:** Focus on the HTML, CSS, and basic JS functionality within the sandbox environment.
*   **Phase 2: Pre-Deployment Testing (WordPress Staging):** Comprehensive testing once the static files are integrated into the WordPress/Elementor environment on a staging server (ideally on GoDaddy or a similar environment).
*   **Phase 3: Post-Launch Testing:** Final checks and monitoring after deployment to the live GoDaddy server.

## 2. Testing Scope

Based on the `website_testing_guide.md`, testing will cover:

*   **Functional Testing:** Navigation, forms (placeholders initially, full forms later), buttons, links, content display.
*   **Cross-Browser Compatibility:** Chrome, Firefox, Safari, Edge (latest versions).
*   **Device/Responsive Testing:** Various screen sizes (Desktop, Laptop, Tablet Portrait/Landscape, Mobile Large/Small).
*   **Performance Testing:** Load speed, Core Web Vitals (using simulated tools initially, real-world tools later).
*   **SEO Implementation Testing:** Titles, metas, headings, alt text, schema (manual checks initially, validation tools later).
*   **Accessibility Testing:** Basic checks (keyboard navigation, contrast, alt text).
*   **Usability Testing:** General ease of use, clarity of information, logical flow.
*   **(WordPress Specific - Phase 2/3):** Admin functions, Elementor editing, plugin compatibility, theme settings, security basics.

## 3. Testing Approach & Tools

*   **Manual Testing:** For usability, visual checks, content accuracy, and exploratory testing.
*   **Browser Developer Tools:** For inspecting elements, checking console errors, simulating devices, and network analysis.
*   **Online Tools:**
    *   **Performance:** Google PageSpeed Insights, GTmetrix, WebPageTest.
    *   **Responsiveness:** BrowserStack (if available), Chrome DevTools device mode, online responsive checkers.
    *   **SEO:** Schema Markup Validator, XML Sitemap validators, broken link checkers.
    *   **Accessibility:** WAVE, axe DevTools browser extension.
*   **Checklists:** Utilize checklists derived from `website_testing_guide.md` for systematic coverage.

## 4. Phase 1: Static Build Testing Plan

*   **Environment:** Sandbox local preview (if possible via a simple HTTP server) or direct file opening.
*   **Focus:** HTML structure, CSS rendering, basic responsiveness, link integrity (internal links within the static build).
*   **Key Checks:**
    *   Verify all HTML pages render correctly without errors.
    *   Check CSS styling matches design intent across different sections.
    *   Test basic responsive layout adjustments using browser DevTools.
    *   Ensure all internal navigation links (`index.html`, `services.html`, etc.) work.
    *   Verify placeholder content is present as expected.
    *   Check image paths are correct (even if images are placeholders).
    *   Review code for basic semantic correctness (headings, alt text placeholders).
    *   Basic keyboard navigation checks.

## 5. Phase 2: Pre-Deployment Testing Plan (WordPress Staging)

*   **Environment:** WordPress staging site on GoDaddy (or similar).
*   **Focus:** Full functionality, integration, performance, cross-browser/device compatibility, SEO implementation.
*   **Key Checks (Incorporating `website_testing_guide.md`):**
    *   **Functional:** All navigation, TypeForm integration/submission, Amelia booking integration/submission, all CTAs, internal/external links, content display (real images/text), portfolio filtering.
    *   **Cross-Browser:** Test on Chrome, Firefox, Safari, Edge.
    *   **Device/Responsive:** Test on Desktop, Laptop, Tablet (P/L), Mobile (L/S).
    *   **Performance:** Run PageSpeed Insights, GTmetrix. Check image optimization, caching, minification implementation.
    *   **WordPress Specific:** Admin login, Elementor editing, plugin settings (Amelia, TypeForm embed, SEO plugin, Caching plugin, Image Optimization plugin).
    *   **SEO:** Verify titles, metas, headings, alt text, schema implementation, XML sitemap, robots.txt.
    *   **Accessibility:** Use WAVE/axe, test keyboard navigation, check contrasts.
    *   **Security:** Check HTTPS, form security (basic spam protection if applicable).
    *   **User Acceptance Testing (UAT):** Provide client access to staging for review based on a defined checklist.

## 6. Phase 3: Post-Launch Testing Plan

*   **Environment:** Live website on GoDaddy.
*   **Focus:** Confirming successful deployment, critical functionality, and tracking setup.
*   **Key Checks:**
    *   Verify domain, SSL certificate.
    *   Perform live contact form (TypeForm) submission test.
    *   Perform live consultation booking (Amelia) test.
    *   Check Google Analytics tracking (Realtime, DebugView).
    *   Verify Google Search Console connection and basic indexing.
    *   Monitor for 404 errors.
    *   Perform a final performance check.

## 7. Defect Management

*   **Tracking:** Use a simple system (e.g., spreadsheet, dedicated bug tracker if preferred) to log defects.
*   **Information:** For each defect, record: Description, Steps to Reproduce, Expected Result, Actual Result, Severity (Critical, High, Medium, Low), Browser/Device, Screenshot (if applicable).
*   **Resolution:** Prioritize critical/high severity bugs. Assign for fixing.
*   **Retesting:** Retest fixes thoroughly before closing the defect.

## 8. Documentation & Reporting

*   Maintain test checklists for each phase.
*   Log all defects found and their resolution status.
*   Prepare a summary report after each major testing phase (especially Phase 2) highlighting key findings, outstanding issues, and overall readiness.

