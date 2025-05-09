# Lead Management Workflow for Top Notch Renovations & Home Services

**Goal:** To establish an efficient and organized workflow for capturing, tracking, qualifying, and managing leads generated through the website, utilizing the user's preferred tools (TypeForm, Amelia, Airtable/Notion, Zapier/N8N/Make).

## Lead Sources:

1.  **General Contact / Quote Request:** Captured via TypeForm embedded on the Contact page.
2.  **Consultation Booking:** Captured via Amelia Booking embedded on the Contact page and linked from CTAs.

## Preferred Tools:

*   **Data Aggregation:** TypeForm, Amelia
*   **Data Storage:** Airtable (Primary example used here, Notion is an alternative)
*   **Automation:** Zapier / N8N / Make (Choice depends on user preference and specific integration capabilities/costs)
*   **Notifications:** Email, Slack (or preferred internal communication tool)
*   **Calendar:** Google Calendar (for consultation scheduling)

## Workflow 1: General Contact / Quote Request (TypeForm)

1.  **Trigger:** New submission received in TypeForm.
2.  **Automation (Zapier/N8N/Make):**
    *   **Step 1:** Trigger fires on new TypeForm entry.
    *   **Step 2:** Parse the submission data (Name, Email, Phone, Service Interest, Description, Address, Timeframe, Budget, Referral, Message).
    *   **Step 3 (Data Storage - Airtable):**
        *   Search for an existing lead in the Airtable "Leads" base using the submitted Email.
        *   **If Found:** Update the existing record with any new information (e.g., add new inquiry details, update timestamp). Do NOT overwrite existing status unless appropriate.
        *   **If Not Found:** Create a new record in the Airtable "Leads" base. Populate fields:
            *   `Name`
            *   `Email`
            *   `Phone`
            *   `Submission Date` (Timestamp)
            *   `Source`: "TypeForm - Contact/Quote"
            *   `Service Interest`
            *   `Project Description` (Combine relevant fields)
            *   `Project Address`
            *   `Timeframe`
            *   `Budget Range`
            *   `Referral Source`
            *   `Lead Status`: Set to "New"
            *   `Follow-up Notes`: Add initial message if provided.
    *   **Step 4 (Notification):** Send an email or Slack message to Pedro/Sales Team containing key lead details (Name, Service Interest, Brief Description, Contact Info) and a link to the Airtable record.
    *   **Step 5 (Optional - Email Marketing):** If the user opts-in (consider adding a checkbox to the form) or based on business rules, add the contact to a relevant list in Site Mailer / Beehiiv for nurturing.

## Workflow 2: Consultation Booking (Amelia)

1.  **Trigger:** Appointment status changes to "Approved" in Amelia (or equivalent trigger for a confirmed booking).
2.  **Automation (Zapier/N8N/Make - Requires Amelia integration, often via Webhooks):**
    *   **Step 1:** Trigger fires on new approved Amelia booking.
    *   **Step 2:** Parse booking data (Customer Name, Email, Phone, Appointment Date/Time, Custom Fields: Project Address, Project Description).
    *   **Step 3 (Data Storage - Airtable):**
        *   Search for an existing lead in the Airtable "Leads" base using the submitted Email.
        *   **If Found:** Update the existing record:
            *   Set `Lead Status` to "Consultation Scheduled".
            *   Populate `Consultation Date/Time`.
            *   Add/Update `Project Address` and `Project Description` from booking fields.
            *   Add a note in `Follow-up Notes` (e.g., "Consultation booked via Amelia on [Date]").
        *   **If Not Found:** Create a new record in the Airtable "Leads" base:
            *   Populate `Name`, `Email`, `Phone`.
            *   `Submission Date` (Timestamp)
            *   `Source`: "Amelia - Consultation Booking"
            *   `Lead Status`: "Consultation Scheduled"
            *   `Consultation Date/Time`
            *   `Project Address`
            *   `Project Description`
            *   (Other fields like Service Interest might need manual input later based on consultation).
    *   **Step 4 (Calendar Sync - Native Amelia):** Ensure Amelia is configured to sync approved appointments to Pedro's Google Calendar.
    *   **Step 5 (Client Notifications - Native Amelia):** Rely on Amelia's built-in email/SMS notifications for booking confirmation and reminders to the client.
    *   **Step 6 (Internal Notification):** Send an email or Slack message to Pedro/Sales Team confirming the consultation details (Client Name, Date/Time, Address, Project Description) and linking to the Airtable record.

## Data Structure Example (Airtable "Leads" Base)

*   **Fields:**
    *   `Lead ID` (Autonumber or Unique Formula)
    *   `Name` (Text)
    *   `Email` (Email)
    *   `Phone` (Phone Number)
    *   `Submission Date` (Date/Time - Created Time)
    *   `Last Modified` (Date/Time - Last Modified Time)
    *   `Source` (Single Select: TypeForm - Contact/Quote, Amelia - Consultation Booking, Manual Entry, Referral, Other)
    *   `Service Interest` (Single/Multi Select: Renovation, Electrical, Improvement, Consultation, Other)
    *   `Project Description` (Long Text)
    *   `Project Address` (Text)
    *   `Timeframe` (Single Select: ASAP, 1-3 months, 3-6 months, Planning)
    *   `Budget Range` (Single Select: <$5k, $5k-$10k, $10k-$25k, $25k-$50k, $50k+, Prefer not to say)
    *   `Referral Source` (Single Select: Google, Referral, Social Media, Truck, Other)
    *   `Lead Status` (Single Select: New, Contact Attempted, Contacted, Consultation Scheduled, Consultation Done, Proposal Sent, Follow-up Needed, Qualified, Unqualified - No Fit, Unqualified - No Response, Project Won, Project Lost)
    *   `Consultation Date/Time` (Date/Time)
    *   `Assigned To` (Collaborator: Pedro Ribeiro)
    *   `Follow-up Notes` (Long Text - Append new notes)
    *   `Next Follow-up Date` (Date)
    *   `Estimated Project Value` (Currency)
    *   `Outcome` (Single Select: Won, Lost, Pending)
    *   `Link to Project Files` (URL - Link to Google Drive folder if applicable)

## Lead Status Management & Follow-up:

*   **Initial Triage:** Pedro/Team reviews new leads in Airtable (or via notifications).
*   **Contact:** Update status to "Contact Attempted" or "Contacted" upon reaching out.
*   **Scheduling:** If consultation is booked (via Amelia or manually after contact), status changes to "Consultation Scheduled".
*   **Post-Consultation:** Update status to "Consultation Done". Add detailed notes. Determine if lead is "Qualified".
*   **Proposal:** Update status to "Proposal Sent". Set "Next Follow-up Date".
*   **Follow-up:** Use "Next Follow-up Date" and status views in Airtable to manage ongoing communication.
*   **Outcome:** Update status to "Project Won" or "Project Lost" upon decision. Add reasons for lost projects if possible.
*   **Views:** Create views in Airtable filtered by `Lead Status` (e.g., "New Leads", "Needs Follow-up", "Consultations Scheduled This Week") for easy management.

## Review & Refinement:

*   Regularly review the workflow (e.g., quarterly) to identify bottlenecks or areas for improvement.
*   Ensure automation tools (Zapier/N8N/Make) are running correctly.
*   Refine Airtable fields or status options as needed based on business processes.

