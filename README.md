# Securing NtapAT&T Digital's Growth

A cybersecurity strategy for **NtapAT&T Digital**, a fictional company used as a case study. It's a practical plan to protect customer data while the business grows.

**Team:** Morenike Orimalade · Da'ron Tucker · Nia Bethea · Savannah Williamson
NetApp · November 2026

> All customer records in this project are synthetic. No real customer data was used.

## What we turn in

| ✓ | Deliverable | What it covers | Where |
|---|-------------|----------------|-------|
| ✅ | **Risk report** | The top risks, ranked | [deliverables/1-risk-report.md](deliverables/1-risk-report.md) |
| ✅ | **Fix plan + roadmap** | What to do, in what order | [deliverables/2-fix-plan-and-roadmap.md](deliverables/2-fix-plan-and-roadmap.md) |
| ✅ | **Budget** | Cost and business value | [deliverables/3-budget.md](deliverables/3-budget.md) |
| ✅ | **Success measures** | How we'll know it worked | [deliverables/4-success-measures.md](deliverables/4-success-measures.md) |
| ✅ | **Demo video + slide deck** | For leadership | [deliverables/5-presentation/](deliverables/5-presentation/) |
| ✅ | **Strategy website** | Everything above on one interactive page | [index.html](index.html) |
| ✅ | **ProveIt demo** | Clickable prototype of the Vendor Management Program | [demo/index.html](demo/index.html) |

**Tools:** AI tools (Claude) helped build the slides, the mock data, the website and the demo. The strategy, risks, targets and budget come from our own case work.

## The plan in 30 seconds

- **Problem:** the business is growing faster than its security. In under a minute, a customer's data goes to three outside partners.
- **Top risks:** vendor leaks (20/25) and cyberattacks (20/25), followed by excessive internal access (16/25).
- **Recommendation:** a **Vendor Management Program**: every vendor has to prove it protects customer data. Three supporting steps back it up: give people less access, keep less data, and spot problems faster.
- **Roadmap:** 4 phases over 365 days, each with an owner and a deadline.
- **Budget:** **$617,161** in year one, about **$0.62 per customer**.
- **Success:** 8 measurable targets by day 365, confirmed by an independent privacy audit.

## Repository layout

```
.
├── index.html                    # Strategy website (home page)
├── assets/
│   ├── styles.css
│   └── main.js                   # Mock-data table, heat map, impact tabs
├── demo/
│   └── index.html                # ProveIt vendor-security prototype
├── deliverables/
│   ├── 1-risk-report.md
│   ├── 2-fix-plan-and-roadmap.md
│   ├── 3-budget.md
│   ├── 4-success-measures.md
│   └── 5-presentation/
│       ├── README.md             # Deck, scripts, video link, timing
│       ├── Slide_Deck_Securing_Digital_Business_Growth.pptx
│       ├── Presentation_Script_Outline.docx
│       └── Presentation_Script_Talking_Points.docx
├── .nojekyll
└── README.md
```

## View the website

**Online:** turn on GitHub Pages (below). The strategy page is at `https://<username>.github.io/<repo>/` and the demo at `.../demo/`.

**On your computer:** open `index.html` in a browser, or run a small local server from this folder:

```bash
python3 -m http.server 8000
# strategy page: http://localhost:8000
# demo:          http://localhost:8000/demo/
```

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to *Deploy from a branch*, pick `main` and `/ (root)`, then click **Save**.
4. After about a minute, the site is live.
