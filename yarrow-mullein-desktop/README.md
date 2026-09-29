# Yarrow–Mullein Bank | Finished Desktop Prototype

**Desktop counterpart to the finished Yarrow–Mullein mobile prototype.** This is a full-width desktop banking interface, not the mobile application enlarged to fit a monitor. Its navigation, layouts, payment review dialogs, account summaries, reporting and assistant use a purpose-built desktop structure and yellow-forward Yarrow–Mullein visual identity.

**Educational simulation only.** It does not authenticate against a real bank, connect to payment networks, exchange actual money, send real SMS, use general-purpose AI, or fetch live outages. No real access identifiers, passwords or financial records should be entered.

## Open and present

1. **No installation:** Open `standalone.html` in current Chrome or Edge. It contains the desktop app, CSS and PDF generator in a single file; no external resources are needed. If an embedded chat preview blocks JavaScript, download the actual file and open it in the browser.
2. **Developer website:** Serve this folder and open `index.html`. Files are separated for easy editing: `app.js`, `pdf.js`, `styles.css`, `icon.svg`.
3. **Optional actual desktop window:** With Node.js and npm installed, run `npm install` then `npm start` from this directory. This launches an Electron desktop window with desktop minimum sizing and disabled Node.js integration. No compiled executable is included.

### Sample classroom login

- **Access ID:** `4532 9087 1140 6621` (prefilled)
- **Password:** `David123`

Incorrect credentials do not sign in. The desktop version intentionally has **no Face ID, camera/microphone feature, phone-size view, bottom tabs, or SMS-phone input**. Sign out is available in the persistent left sidebar.

## Functional desktop features

- Wide desktop dashboard with greeting, live combined balance, Chequing, Savings, account cards, and quick actions.
- Simulated send-money flow: choose account, recipient and amount, then review projected balances. **Confirmation immediately reduces the selected account and combined total; completion never double-charges.** Failed transfers do not deduct money.
- Simulated move-money flow: confirmation **immediately debits the source and credits the destination**; the combined total correctly remains unchanged.
- Searchable transaction history and pending, completed and failed filters; details with transaction reference and tracking timeline; downloadable PDF receipt for each transfer.
- Automatic payment management: ongoing weekly/monthly, selected-week and customizable planting-season windows, with pause, resume and delete. Due payments process while open, or catch up on the next visit, without an external server.
- Yarrow Assistant **text-only desktop chat**, with working text area, Enter-to-send, Shift+Enter new line, varied follow-up phrasing, suggested prompts and assisted scheduling. It uses local example answers, not a real AI backend.
- Notifications: low-frequency, optional simulated incoming payments (at most four a day) that credit Chequing, appear in history and trigger a matching alert. Presenter controls can immediately inject an example incoming payment from Emily and simulate failures or outages.
- All exports are genuine PDFs: daily report, transaction history, notification history, recurring schedules and individual receipts. The sample reports in `sample-reports/` were exported by the working app and validated with a PDF reader.
- Larger-text preference, desktop browser notifications (with permission), separate desktop data storage and desktop-oriented centered review dialogs.

## Testing

A Chromium-driven regression suite is included in `tests/`:

```bash
python tests/test_desktop.py
python tests/test_reports_and_notifications.py
```

The suites validate desktop login (including incorrect password), send and move accounting, PDF downloads, typed chat, sidebar navigation, a live simulated incoming payment with matching ledger/notification, and planting-season scheduling. They can run without localhost access by embedding the static source in Chromium directly.

## What production implementation would require

Secure server-side identity and authorization, a real transaction ledger and payment APIs, hosted job scheduling and notifications, protected personal data storage, bank-controlled audit logs, fraud controls, live incident feeds, and comprehensive security/accessibility assessment. Public sample login details and browser-local ledger data in this educational prototype are **not appropriate for real financial use**.