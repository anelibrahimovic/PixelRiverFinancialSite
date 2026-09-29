# Yarrow–Mullein Bank — improved mobile app with automated support tickets

Open `YarrowMullein_Mobile_AutomatedTickets.html` directly in Chrome or Edge. This single-file version preserves the supplied app and adds a ticketing centre accessible from Help and More, plus ticket-aware Yarrow Assistant responses.

**Presentation credentials**: prefilled Access ID `4532 9087 1140 6621`; initial password `David123` or simulated Face ID.

## Support ticket automation
- **Password change:** enter the current *demo* password and a new password twice. After validation, the new password works on the next sign-in. It affects this local demo only. No password is saved in tickets or PDF outputs.
- **Alerts:** enable or disable an app alert type immediately and receive an automated ticket resolution.
- **Receipts:** select a payment and generate its formatted PDF receipt; the resolved support request is retained.
- **Payment status:** select a payment and retrieve its live simulated status without modifying the payment.
- **Complex support:** payment disputes, suspected fraud, outages or other issues receive a persistent local ticket ID and remain **Awaiting staff review**. No live bank integration or real staff response is implied.
- **Chatbot:** ask about tickets, changing a password, reporting fraud, payment disputes or tracking ticket numbers. Ticket intent triggers an **Open support request** button with the relevant issue category preselected.
- **Reporting:** view locally stored tickets, download individual ticket PDFs or a complete ticket-log PDF. Ticket-related alerts appear in the existing message centre and link to the support centre.

### Simulation scope
No live banking, payment rails, SMS, AI backend or staffed ticket service exists here. Data (including the demo password) is stored in **localStorage** for presentation convenience. Do **not** use real banking credentials. Automated fixes represent local operations within this educational demo, not changes to actual bank systems. Real deployment requires authenticated backend password-reset flows, secure ticket storage, audited authorization, personnel escalation and verified financial integrations.