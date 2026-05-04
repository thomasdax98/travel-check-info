# A25-A30 Interview-Loop Readiness Packet (2026-05-04)

## Scope
This packet activates sourcing lane A25-A30 for CTO interview-loop readiness under [TRA-44](/TRA/issues/TRA-44), using the agent-only pipeline entries from [TRA-37](/TRA/issues/TRA-37).

## Source Snapshot
All six profiles are currently in `Not contacted` state in the 30-agent capacity tracker.

| Slot | Candidate | Source | Baseline fit signal | Current state |
|---|---|---|---|---|
| A25 | Candidate-25 | GitHub rapid-shipping repos | High shipping cadence and bias to action | Not contacted |
| A26 | Candidate-26 | GitHub platform tooling repos | Platform leverage and systems thinking | Not contacted |
| A27 | Candidate-27 | GitHub bugfix and quality contributors | Debugging depth and root-cause rigor | Not contacted |
| A28 | Candidate-28 | GitHub polyglot engineering profile | Cross-stack adaptability | Not contacted |
| A29 | Candidate-29 | GitHub product infra contributors | Product + infra hybrid ownership | Not contacted |
| A30 | Candidate-30 | GitHub startup-leaning OSS profile | Generalist ownership under ambiguity | Not contacted |

## Fit Summary (Founding Engineer Bar)
| Slot | Product sense | Technical execution | Ownership signal | Initial recommendation |
|---|---|---|---|---|
| A25 | Medium | High | High | Advance to CTO screen with delivery-tradeoff probe |
| A26 | Medium | High | Medium-High | Advance to CTO screen with architecture-scope probe |
| A27 | Medium | High | Medium | Advance to CTO screen with incident-debug probe |
| A28 | Medium-High | Medium-High | Medium | Advance with scope-control probe to avoid breadth-only fit |
| A29 | High | High | High | Priority advance; strong match for founding breadth |
| A30 | Medium-High | Medium-High | High | Advance with execution-planning probe |

## Risk Flags
| Slot | Risk flag | Why it matters | Mitigation in first interview |
|---|---|---|---|
| A25 | Speed-over-quality risk | High shipping velocity can hide reliability debt | Ask for one launch they slowed down intentionally and why |
| A26 | Platform-over-product bias | Platform-first engineers can underweight user outcomes | Require one concrete user-impact metric tied to platform work |
| A27 | Maintenance-heavy background | Quality/debug specialists may have lower greenfield speed | Probe for a shipped 0->1 feature with timeline constraints |
| A28 | Breadth without depth risk | Polyglot profile can mask shallow technical depth | Force deep dive into one stack decision and tradeoff chain |
| A29 | Context-switch load risk | Product+infra hybrids can be stretched too thin | Test prioritization under conflicting delivery demands |
| A30 | Startup signal ambiguity | OSS/startup signal may not map to production rigor | Ask for production incident ownership and postmortem decisions |

## Calibration Notes For CTO Loop
- Use a single scoring rubric across all six profiles with explicit pass thresholds:
  - Technical execution >= 4/5
  - Product sense >= 3/5
  - Ownership/autonomy >= 4/5
- Enforce 30-minute screen structure:
  - 10 min shipped-system walkthrough
  - 10 min tradeoff/incident drill
  - 10 min execution planning for a 2-week product slice
- Normalize decisions with evidence snippets immediately after each call; avoid memory-based ranking.
- Treat A29 and A30 as anchor comparisons for lane quality calibration.

## Suggested First Interview Focus Areas
| Slot | Focus area 1 | Focus area 2 | Focus area 3 |
|---|---|---|---|
| A25 | Release quality gates | Rollback decision-making | Delivery speed vs reliability balance |
| A26 | Platform abstraction tradeoffs | Build-vs-buy decisions | Product KPI linkage |
| A27 | Incident triage method | Root-cause communication | Testing strategy under time pressure |
| A28 | Stack-depth validation | Boundary-setting in architecture | Migration decision clarity |
| A29 | Product/infra prioritization | Instrumentation ownership | Team-facing technical communication |
| A30 | Ambiguous roadmap scoping | 0->1 execution planning | Operational maturity in production |

## Lane Decision Rule
Advance a profile to technical deep dive only if both are true:
- Weighted score >= 75/100 against the founding engineer scorecard.
- No unresolved red flag in reliability ownership or product-prioritization judgment.

## Immediate Next Action
Run CTO screens for A29 and A30 first as calibration anchors, then A25-A28 in descending score confidence order (A26, A25, A28, A27).
