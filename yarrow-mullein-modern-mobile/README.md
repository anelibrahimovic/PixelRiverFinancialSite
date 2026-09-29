# Yarrow–Mullein Mobile Banking · Automated Tickets + Chat History

Finished offline classroom mobile banking prototype. Open `index.html` (or the standalone HTML) in Chrome or Edge.

## New: chat history and respectful-language filter
- **Chat history** is available in **Help** and **Yarrow Assistant**. Search previous conversations, resume a saved conversation, start a new conversation, clear local history, or download all saved chats as a PDF.
- Conversations persist in this browser's localStorage, including across sign-outs and reloads. Up to 30 archived conversations and 200 messages in the active conversation are retained.
- A **best-effort offline filter** rejects obvious slurs, hateful attacks, explicit profanity and messages containing passwords or long payment-card numbers. Messages rejected by the filter are not stored.
- The filter **does not ban neutral words describing religious or ethnic identities**. It detects common abusive uses, not every possible harmful phrase; production banking would need managed server-side moderation and audit controls.
- Chat history exports include the text you entered. Avoid real personal, financial or security information; the app is entirely a simulation.

## Automated support tickets
- In **Help > Support tickets**, change the demo password after verifying the current password, repair simulated alert settings, request a PDF receipt, or check payment status.
- Complex issues create **Awaiting Staff Review** tickets stored in this browser. No real bank employee or backend is connected.
- Ask the chatbot about ticketing or password changes to preselect the appropriate support request.
- Core payment ledger, chequing/savings transfers, notifications, schedules and PDF exports remain available.

**Demo login:** prefilled sample Access ID; starting password `David123`. Never enter actual bank passwords or card numbers.