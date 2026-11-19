# Securing NtapAT&T Digital's Growth

A one-page cybersecurity strategy for **NtapAT&T Digital**, a fictional company used as a case study. It covers the problem, what's at stake, the top risks, the mitigation plan, a 365-day roadmap, the first-year budget and how success is measured.

> All customer records on the page are synthetic. No real customer data was used.

## What's on the page

| # | Section | What it covers |
|---|---------|----------------|
| — | Story | Maria's purchase leaves the company three times in 90 seconds (animated data trail) |
| 01 | The problem | The business is growing faster than its security |
| 02 | What's at stake | The six kinds of customer data the company holds |
| 03 | Mock data | Five synthetic customer records, with a full-record vs. role-based-summary toggle |
| 04 | Risks | Five risks scored on a likelihood × impact heat map |
| 05 | Business impact | What each risk costs finance, sales and marketing |
| 06 | Recommendation | The Vendor Management Program and three supporting measures |
| 07 | Mitigation plan | A fix, an owner and a KPI for each risk |
| 08 | Roadmap | Four phases over 365 days |
| 09 | Budget | $617,161 for year one ($0.62 per customer) |
| 10 | Success measures | Targets, owners and deadlines |

## Roadmap at a glance

| Phase | Days | Focus | Owner |
|-------|------|-------|-------|
| 1 | 0–30 | Build the foundation: vendor inventory, tiers, review rule | Vendor Mgmt & IT/Security |
| 2 | 31–90 | Lock down access (2FA, least privilege) and review Tier 1 vendors | IT/Security & Managers |
| 3 | 91–180 | Open customer rights: privacy portal, Tier 2–3 reviews, incident drill | Legal/Compliance & Vendor Mgmt |
| 4 | 181–365 | Keep proving it: yearly re-reviews, 100% of vendors with valid proof | Vendor Mgmt & IT/Data Management |

## Project structure

```
.
├── index.html          # The page
├── assets/
│   ├── styles.css      # All styling
│   └── main.js         # Mock-data table, heat map and impact tabs
├── .nojekyll           # Tells GitHub Pages to serve files as-is
└── README.md
```

It's plain HTML, CSS and JavaScript. There's nothing to install or build.

## View it locally

Open `index.html` in a browser, or run a small local server from this folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, pick `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Team

Morenike Orimalade · Da'ron Tucker · Nia Bethea · Savannah Williamson

NetApp · November 16, 2026
