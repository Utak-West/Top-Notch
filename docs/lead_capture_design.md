# Lead Capture Form Design

This document outlines the design specifications for the lead capture forms for the Top Notch Renovations & Home Services website, focusing on user experience and collecting relevant information for lead qualification and follow-up.

## 1. General Contact / Quote Request Form (TypeForm)

**Goal:** Capture inquiries for various services, gather initial project details, and qualify leads efficiently.

**Platform:** TypeForm (Leveraging its conversational style and conditional logic)

**Structure & Questions:**

1.  **Welcome Screen:**
    *   Image/Logo: Top Notch Renovations logo.
    *   Text: "Ready to start your home project? Tell us a bit about what you need, and we'll get back to you shortly!" or "Get a Free Quote or Ask a Question"

2.  **Contact Information:**
    *   Question 1: "What's your full name?"
    *   Question 2: "What's the best email address to reach you?"
    *   Question 3: "And your phone number? (Optional, but helpful for quicker contact)"

3.  **Service Type:**
    *   Question 4: "What type of service are you interested in?" (Multiple Choice)
        *   Complete Renovation (Kitchen, Bathroom, Basement, etc.)
        *   Electrical Service (Panel upgrade, lighting, wiring, etc.)
        *   Home Improvement (Tile, carpentry, painting, repairs, etc.)
        *   General Inquiry / Not Sure Yet

4.  **Conditional Logic - Based on Service Type:**

    *   **If "Complete Renovation":**
        *   Question 5a: "Which area(s) are you planning to renovate?" (Checkboxes: Kitchen, Bathroom, Basement, Living Area, Multiple Rooms, Other)
        *   Question 5b: "Briefly describe your renovation goals."

    *   **If "Electrical Service":**
        *   Question 5a: "What kind of electrical work do you need?" (Checkboxes: Panel Upgrade, New Wiring/Outlets, Lighting Installation, Smart Home Setup, Troubleshooting/Repair, Safety Inspection, Other)
        *   Question 5b: "Please provide a brief description of the electrical issue or project."

    *   **If "Home Improvement":**
        *   Question 5a: "What type of improvement are you looking for?" (Checkboxes: Tile Work, Carpentry/Trim, Drywall/Painting, Fixture Replacement, General Repairs, Other)
        *   Question 5b: "Briefly describe the improvement project."

    *   **If "General Inquiry / Not Sure Yet":**
        *   Question 5a: "No problem! Briefly tell us what's on your mind or what you'd like help with."

5.  **Project Details (Applicable to Renovation/Electrical/Improvement):**
    *   Question 6: "What is the address of the property where the work will be done?" (Helps determine service area)
    *   Question 7: "Do you have a preferred timeframe for starting this project?" (Multiple Choice: ASAP, Within 1-3 months, 3-6 months, Just Planning)
    *   Question 8 (Optional - Phrased carefully): "To help us provide the best initial guidance, do you have an estimated budget range in mind for this project?" (Multiple Choice: <$5k, $5k-$10k, $10k-$25k, $25k-$50k, $50k+, Prefer not to say)

6.  **Referral Source:**
    *   Question 9: "How did you hear about Top Notch Renovations & Home Services?" (Multiple Choice: Google Search, Referral, Social Media, Saw Our Truck, Other)

7.  **Additional Information:**
    *   Question 10: "Is there anything else you'd like to add or ask?" (Long Text)

8.  **Thank You Screen:**
    *   Text: "Thank you for reaching out! We've received your request and will review it carefully. Pedro or someone from our team will contact you within 1-2 business days to discuss the next steps. You can also book a free consultation directly below."
    *   Button/Link: "Book a Free Consultation Now" (Links to Contact Page #consultation section or direct Amelia link)

**Integration:** Connect TypeForm to preferred data storage (Notion/Airtable) and CRM/email marketing tools via Zapier/N8N/Make for lead tracking and follow-up automation.

## 2. Free Consultation Booking Form (Amelia)

**Goal:** Allow qualified leads (or anyone interested) to easily schedule a dedicated consultation time.

**Platform:** Amelia Booking Plugin

**Setup & Fields:**

1.  **Service Configuration:**
    *   Service Name: "Free Initial Consultation"
    *   Duration: e.g., 30-60 minutes (Allow enough time for site visit/discussion)
    *   Price: $0
    *   Assigned Employee: Pedro Ribeiro

2.  **Employee Configuration:**
    *   Configure Pedro Ribeiro's working hours and availability specifically for consultations.
    *   Set buffer times before/after appointments if needed.

3.  **Booking Form Fields (Frontend):**
    *   **Standard Fields:**
        *   Select Service (Pre-selected or only option: Free Initial Consultation)
        *   Select Employee (Pre-selected or only option: Pedro Ribeiro)
        *   Select Date & Time (Calendar/Slot view)
        *   First Name (Required)
        *   Last Name (Required)
        *   Email (Required)
        *   Phone Number (Required)
    *   **Custom Fields (Add in Amelia):**
        *   "Project Address" (Text, Required - To know where the consultation will take place)
        *   "Brief Project Description" (Text Area, Required - To give Pedro context before the meeting, e.g., "Looking to remodel master bathroom", "Need quote for panel upgrade")
        *   "How did you hear about us?" (Dropdown/Radio - Optional, can help track marketing effectiveness if not captured elsewhere)

4.  **Notifications:**
    *   Configure automated email/SMS notifications for both the customer and Pedro (Appointment Pending/Approved/Rejected, Reminders).
    *   Customize notification templates with relevant details and branding.

5.  **Integration:** Ensure Amelia integrates with Google Calendar for scheduling visibility. Consider Zapier/N8N/Make integration to push booking data to CRM/Data Storage if needed.

**Placement:** Embed the Amelia booking form directly on the Contact page (under the `#consultation` ID) and potentially link to it from the TypeForm thank you screen and relevant CTAs throughout the site.

