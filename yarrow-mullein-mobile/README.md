# Yarrow–Mullein Bank — improved mobile prototype

**Latest entry point:** Open **index.html**. It is now a fully self-contained HTML file with inline CSS and JavaScript, matching the improved mobile app that was provided by the user and extended with automated support tickets. No build step is necessary.

## New support-ticket capabilities

- More → **Support tickets**, or Help → **Support tickets & instant fixes**.
- Automatic self-service resolutions (locally in the demo): password change after confirming the current demo password, notification-preference changes, PDF receipt retrieval, and payment-status checks against simulated transactions.
- More complex disputes, suspected fraud, outages and other issues receive a persistent ticket reference and remain **Awaiting staff review**. The app cannot contact bank staff or resolve those cases itself.
- Yarrow Assistant handles ticket-related conversation and provides an **Open support request** action with the matching issue category selected. Ask to check ticket status to see saved results.
- Every ticket and the complete support log can be downloaded as a formatted PDF. Ticket alerts appear in the existing message centre.

## Existing banking features preserved

Chequing/savings dashboard, simulated money send and internal moves, payment history and status, urgent and occasional activity notifications, scheduling, accessibility options, CSV-free PDF downloads, and a simulated login with prefilled sample Access ID. Initial demonstration password is **David123**, but it can be changed using the new instant-fix ticket. The update retains earlier browser state when available.

## Limitations and security

**Educational local-only simulation, not a banking service.** No real payment rails, SMS, external AI, staffed ticket queue, or secure backend authentication is connected. The demo password and tickets are stored in this browser's localStorage **for classroom demonstration only**, so do not use real passwords or personal financial data. For actual password reset or account-security emergencies, a bank would require secure authenticated server-side workflows.

Older multi-file source and assets remain in the same folder as historical development material, but the current deployment should serve **index.html**.
