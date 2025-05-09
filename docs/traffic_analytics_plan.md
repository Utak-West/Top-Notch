# Traffic Analytics Implementation Plan

**Goal:** Implement comprehensive website traffic analytics using Google Analytics 4 (GA4) to track user behavior, measure marketing effectiveness, and monitor key conversions for Top Notch Renovations & Home Services.

**Platform:** Google Analytics 4 (GA4), implemented via Google Tag Manager (GTM) for flexibility and easier management, especially during the transition to WordPress.

## Implementation Steps:

1.  **Setup Google Analytics 4 (GA4):**
    *   Create a new Google Account or use an existing one dedicated to the business.
    *   Set up a new GA4 Property for the Top Notch Renovations website.
    *   Configure the Data Stream for the website, obtaining the Measurement ID (e.g., `G-XXXXXXXXXX`).
    *   Adjust data retention settings as needed (default is 2 months, consider extending to 14 months).
    *   Enable Google Signals for enhanced demographic and cross-device data (ensure privacy policy reflects this).

2.  **Setup Google Tag Manager (GTM):**
    *   Create a new GTM Account and Container for the website.
    *   Obtain the GTM container snippet (head and body tags).

3.  **Implement GTM Snippet:**
    *   Add the GTM container snippet to **all** HTML pages of the static site (`<head>` and `<body>` sections).
    *   *Note:* When migrating to WordPress, this snippet will be added via a plugin (like GTM4WP or Insert Headers and Footers) or directly into the theme files.

4.  **Configure GTM Tags & Triggers:**

    *   **GA4 Configuration Tag:**
        *   Tag Type: Google Analytics: GA4 Configuration
        *   Measurement ID: Enter the GA4 Measurement ID obtained in Step 1.
        *   Trigger: All Pages (Page View)

    *   **Outbound Link Click Tracking:**
        *   Tag Type: Google Analytics: GA4 Event
        *   Configuration Tag: Select the GA4 Config tag.
        *   Event Name: `click` (GA4 automatically tracks outbound clicks if enhanced measurement is on, but custom setup allows more control if needed).
        *   Trigger Type: Click - Just Links
        *   Trigger Configuration: Wait for Tags, Check Validation, Fire on `Click URL` does not contain `[yourwebsite.com]`.

    *   **Phone Number Click Tracking:**
        *   Tag Type: Google Analytics: GA4 Event
        *   Configuration Tag: Select the GA4 Config tag.
        *   Event Name: `click_phone`
        *   Trigger Type: Click - Just Links
        *   Trigger Configuration: Fire on `Click URL` starts with `tel:`.

    *   **Email Click Tracking:**
        *   Tag Type: Google Analytics: GA4 Event
        *   Configuration Tag: Select the GA4 Config tag.
        *   Event Name: `click_email`
        *   Trigger Type: Click - Just Links
        *   Trigger Configuration: Fire on `Click URL` starts with `mailto:`.

    *   **TypeForm Submission Tracking (Requires GTM Integration with TypeForm or Thank You Page):**
        *   **Method 1 (GTM Integration - Preferred):** Configure TypeForm to push a dataLayer event to GTM upon successful submission. Create a Custom Event trigger in GTM listening for this event and fire a GA4 event tag (e.g., `generate_lead`, `contact_form_submit`).
        *   **Method 2 (Thank You Page):** If TypeForm redirects to a dedicated Thank You page after submission, create a GA4 event tag triggered by a Page View trigger specific to that Thank You page URL.

    *   **Amelia Booking Completion Tracking (Requires Thank You Page or Event):**
        *   **Method 1 (Thank You Page - Common):** Configure Amelia to redirect to a dedicated Thank You page after successful booking. Create a GA4 event tag (e.g., `schedule_consultation`, `booking_complete`) triggered by a Page View trigger specific to that Thank You page URL.
        *   **Method 2 (Amelia Event):** Check if Amelia offers options to push a dataLayer event upon successful booking. If so, use a Custom Event trigger in GTM similar to the TypeForm method.

    *   **Scroll Depth Tracking:**
        *   Use GTM's built-in Scroll Depth trigger to fire a GA4 event (e.g., `scroll_depth`) at desired percentages (e.g., 25%, 50%, 75%, 90%).

5.  **Configure Conversions in GA4:**
    *   Navigate to Admin > Conversions in the GA4 interface.
    *   Mark the key events created in GTM as conversions:
        *   `generate_lead` / `contact_form_submit` (from TypeForm)
        *   `schedule_consultation` / `booking_complete` (from Amelia)
        *   (Optional) `click_phone`
        *   (Optional) `click_email`

6.  **Link Google Search Console:**
    *   Set up Google Search Console for the website.
    *   Link the Search Console property to the GA4 property to import search query data into GA4.

7.  **Testing & Validation:**
    *   Use GTM's Preview mode to test all tags and triggers thoroughly before publishing the container.
    *   Use GA4's DebugView to verify events are being received correctly.
    *   Check Realtime reports in GA4.

8.  **Privacy Policy Update:**
    *   Ensure the website's Privacy Policy accurately reflects the use of Google Analytics, Google Tag Manager, cookies, and data collection practices, including Google Signals if enabled. Provide information on user opt-out options.

## Reporting & Analysis:

*   Regularly monitor GA4 reports focusing on:
    *   **Acquisition:** Where is traffic coming from (Organic Search, Direct, Referral, Social)?
    *   **Engagement:** Which pages are most popular? How long do users stay? What is the bounce rate?
    *   **Conversions:** How many leads and bookings are generated? What are the conversion rates by traffic source or landing page?
    *   **User Demographics:** Understand the audience profile.
*   Use insights to optimize website content, user experience, and marketing efforts.

