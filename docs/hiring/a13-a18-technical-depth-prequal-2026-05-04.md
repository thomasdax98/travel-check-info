# A13-A18 Technical Depth Pre-Qualification (2026-05-04)

Parent issue: [TRA-43](/TRA/issues/TRA-43)  
Upstream lane: [TRA-41](/TRA/issues/TRA-41)

## Success Criteria For This Screen
- Produce pass/fail decision for A13-A18 against founding-engineer technical bar.
- Map each decision to explicit evidence from public artifacts.
- Provide advancement recommendation (`advance`, `hold`, `reject`) and next action.

## Founding Engineer Technical Bar (Applied)
1. Demonstrated full-stack ownership in production systems.
2. Architecture depth: ability to make tradeoffs across backend, frontend, and data.
3. Execution signal: shipped outcomes in ambiguous startup-like contexts.
4. Product/monetization adjacency: evidence of conversion, growth, or user-impact work.

Scoring model:
- 1-5 per dimension, max 20.
- `pass` threshold: 14+ with no dimension below 3.
- Confidence uses only public artifacts available in this lane (mostly LinkedIn/company history), so recommendations include evidence-gathering next steps.

## A13-A18 Decisions
| Slot | Profile | Public artifact evidence used | Score (20) | Decision | Recommendation | Next action |
|---|---|---|---:|---|---|---|
| A13 | Stephen Wu (Notion) | LinkedIn profile + Notion product-engineering tenure signal from lane tracker | 14 | pass | advance | Request architecture write-up sample and one shipped-feature deep dive to confirm backend decision quality. |
| A14 | Ziqi Xiong (Figma) | LinkedIn profile + web application shipping at Figma | 13 | fail | hold | Collect concrete ownership evidence (scope, metrics, architecture decisions) before re-scoring. |
| A15 | Elliot DeNolf (Figma) | LinkedIn profile + testing/quality-centered engineering signal | 12 | fail | hold | Gather proof of end-to-end product ownership beyond quality/testing focus. |
| A16 | Zachary Cowan (Vercel) | LinkedIn profile + user-facing web product quality signal | 14 | pass | advance | Run technical-depth triage on system design tradeoffs for performance/reliability in production. |
| A17 | Aditya Agarwal (Expedia platform) | LinkedIn profile + platform engineering and org-scale execution signal | 15 | pass | advance | Validate full-stack product execution by collecting one 0->1 shipped initiative narrative. |
| A18 | Vanita Bhagwat (Expedia) | LinkedIn profile + application + analytics development breadth | 13 | fail | hold | Require stronger proof of architecture ownership and startup-pace delivery before advancement. |

## Summary
- Passed: 3/6 (`A13`, `A16`, `A17`)
- Failed/Hold: 3/6 (`A14`, `A15`, `A18`)
- Advancement recommendation: move pass set to execution packets, keep hold set in evidence-gathering queue.

## Verification
- Check that six decisions exist for the exact lane:
  - `rg '^\\| A1[3-8] \\|' docs/hiring/a13-a18-technical-depth-prequal-2026-05-04.md | wc -l`
