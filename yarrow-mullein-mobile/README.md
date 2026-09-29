# Yarrow–Mullein Bank · Interactive mobile prototype

A **responsive mobile banking educational prototype** themed in Yarrow–Mullein’s botanical green, cream and yarrow gold and designed for David, a customer who prefers straightforward controls and proactive transaction communication.

## Run

Open `index.html` in a modern browser or host this folder over HTTPS/localhost for PWA offline caching and optional browser notifications. No build step, API keys or external libraries are needed. If merged into a repository with GitHub Pages configured to host its root, the site can be opened at `/yarrow-mullein-mobile/`.

## Core interactions

- Normal banking dashboard with chequing/savings balances and available funds.
- Send to a payee or move between simulated accounts, with amount validation, review/confirm, automatic pending settlement, and account balance updates.
- Searchable Activity screen, Pending/Completed/Failed filters, unique tracking references, seven-step status timeline and print/save-PDF receipts.
- Recurring weekly/monthly simulated automatic payments (create, pause, resume and remove), processed while the app is open or upon reopening after the due date.
- Area-specific demonstration outage status, browser-read-aloud updates, failed-payment and outage message centre, alert preferences, optional permission-based browser notifications, plus an explicitly non-functional actual-SMS field.
- Daily auto-generated printable report, CSV export, searchable FAQ, a local keyword chatbot with optional microphone input, larger-text toggle, offline static caching.
- Presenter controls to simulate outages/failures, finish payments, trigger an automatic payment or reset data.

## Important simulation boundaries

This is a local educational simulation, **not a real bank app**. It does not move real money, authenticate users, use a core banking API, fetch live outages, send actual SMS, run scheduled jobs while the app remains closed, or use hosted generative AI. Browser notifications depend on permission and app availability. Do not enter real financial credentials. All state is stored on the current browser using localStorage. Real deployment requires a secure server-side payment API/ledger, authenticated event webhooks, incident feed, scheduled worker, SMS/notification queue and full security and privacy assessment.

The ChatGPT deliverable ZIP also contains an **enhanced single-file standalone version** with a richer UI for offline presentations.