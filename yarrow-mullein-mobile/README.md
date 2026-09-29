# Yarrow–Mullein Bank · Mobile prototype

This is a standalone, interactive educational prototype for a non-technical banking customer (David), themed in botanical green, cream, and yarrow gold. The UI includes everyday chequing and savings accounts, validatable send and move flows, pending/completed/failed transaction tracking, status timelines, printable receipts, scheduled weekly/monthly payments, area-specific simulated outages, urgent in-app alerts, printable automatic daily reports, searchable history and FAQs, a rule-based chatbot with optional voice input, CSV export and large text.

## Launch

Open **index.html** on a modern browser through HTTPS/localhost. The loader decompresses the complete standalone HTML application stored in the four bundle text files, without any remote APIs or external dependencies. The original editable source files and standalone HTML are also included in the downloadable project ZIP available from the project author.

To recover the standalone source directly from this GitHub branch:
```sh
cat bundle.0.txt bundle.1.txt bundle.2.txt bundle.3.txt | base64 -d | gzip -d > standalone.html
```
Open `standalone.html` in a browser or serve it over HTTPS/localhost. The inline application code and styles in this extracted file are readable and editable.

## What is simulated

**This is not a real banking product.** Payments do not leave this browser; all balances are fictitious. New simulated pending transfers typically settle after ~65 seconds unless presenter-simulated outages interrupt them. An app-open timer / catch-up on reopening handles automatic scheduling and morning report creation. Alerts stay in the demo inbox, with optional browser notifications; no SMS, phone line, real outage feed, external AI, persistent server scheduling or banking integration exists.

Use More → Presenter controls to simulate a service outage, fail the next transfer, settle pending payments, run a recurring payment or reset the data. No real credentials should be entered. Real-bank rollout would require backend payment and authentication integrations, regional incident feeds, an audited ledger, secure scheduling, SMS delivery and security/privacy review.

The `bundle.*.txt` files are a gzip/base64 transport encoding of the complete client-side standalone HTML; no executable server is needed.