# Sales Funnel & Webhook Integration Flow

This document outlines the conceptual data flow for lead capture from the website to a CRM/Lead Management system, as discussed in Phase 5 of the project plan.

## Diagram

```mermaid
graph TD
    A[Client Fills Form on Website] --> B{Form Submission Data};
    B --> C[WordPress Form Plugin (e.g., Elementor Forms/WPForms)];
    C -- Webhook via Plugin/Zapier/Middleware --> D[External CRM / Lead Management System];
    D --> E[Lead Created/Updated in System];
    E --> F[Sales Funnel Stage Updated];
    F --> G[Automated Email/Notification to Sales Team];
    F --> H[Task Created for Follow-up];

    I[Client Books Consultation via Amelia] --> J{Booking Data};
    J --> K[Amelia Booking Plugin];
    K -- Webhook via Plugin/Zapier/Middleware --> D;
```

## Explanation of Flow:

1.  **Lead Capture (Website Forms):**
    *   A potential client fills out a contact form, quote request form, or another lead capture form on the WordPress website.
    *   The data is processed by the chosen WordPress form plugin (e.g., Elementor Forms, WPForms).
    *   A webhook (configured directly in the form plugin, via a dedicated WordPress webhook plugin, or through a middleware service like Zapier/Pabbly Connect) sends the form data to the designated CRM or lead management tool.

2.  **Lead Capture (Amelia Booking):**
    *   A client books a consultation using the Amelia Booking plugin.
    *   Amelia Booking processes the booking information.
    *   A webhook (if supported directly by Amelia, or via a Zapier/Pabbly Connect integration with Amelia) sends the booking data (client details, appointment time, service interest) to the CRM or lead management tool.

3.  **CRM / Lead Management System Actions:**
    *   The CRM/system receives the data via the webhook.
    *   A new lead/contact is created, or an existing one is updated.
    *   The lead's stage in the sales funnel is updated accordingly (e.g., "New Inquiry," "Consultation Booked").
    *   Automated workflows can be triggered:
        *   Notifications (email, Slack, etc.) sent to the sales team.
        *   Tasks created for follow-up actions (e.g., "Call new lead," "Prepare for consultation").
        *   Automated email confirmations or welcome messages sent to the client.

This setup aims to automate the initial stages of the sales funnel, ensuring leads are captured efficiently and followed up on promptly. The specific CRM/Lead Management System will be chosen based on further discussion (as per the project plan options: WordPress-based CRM, External CRM, or Middleware integration).