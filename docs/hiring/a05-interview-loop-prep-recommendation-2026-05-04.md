# A05 Interview-Loop Prep Recommendation (2026-05-04)

## Scope
This packet activates sourcing slot A05 under [TRA-49](/TRA/issues/TRA-49), using the Week 1 sourcing and outreach artifacts from [TRA-4](/TRA/issues/TRA-4) and [TRA-6](/TRA/issues/TRA-6).

## Source Snapshot
- Slot: `A05` (`Candidate-05`)
- Segment: Travel/Marketplace
- Outreach channel: Email
- Outreach status: Sent on 2026-05-04; follow-ups scheduled for 2026-05-08 and 2026-05-13
- Baseline fit signal: Reduced booking funnel drop-off (conversion-critical execution)

## Fit Summary (Founding Engineer Bar)
| Dimension | Signal | Assessment |
|---|---|---|
| Product sense | Demonstrated conversion impact in booking funnel work | Medium-High |
| Technical execution | Evidence of implementing measurable funnel improvements | High |
| Ownership/autonomy | Signal implies ownership of a customer-critical metric path | Medium-High |

Initial recommendation: **Advance A05 to CTO screen** with emphasis on metric rigor and reliability under release pressure.

## Interview Focus Areas
1. Funnel-diagnosis method: how A05 identified the highest-leverage drop-off root cause.
2. Experiment design quality: guardrails, sample sizing tradeoffs, and confidence thresholds.
3. Production execution discipline: rollback criteria, instrumentation integrity, and post-launch monitoring.

## Risk Flags And Mitigations
| Risk flag | Why it matters | Mitigation in first interview |
|---|---|---|
| Incremental-only optimization profile | Funnel tuning can mask weak 0->1 product building ability | Require one end-to-end feature example with ambiguous starting scope |
| Metric-local optimization risk | Local conversion gains may hurt broader product value | Ask for one tradeoff where short-term CTR/revenue was deprioritized for long-term user trust |
| Reliability blind spot under growth pressure | Fast funnel iteration can introduce regressions | Probe incident handling when experiment code impacted checkout or attribution |

## Success/Fail Criteria For A05 Screen
### Pass criteria (all required)
- Technical execution score >= 4/5 with concrete implementation detail (not only strategy talk).
- Product sense score >= 3/5 with explicit user-impact and business-impact tradeoff reasoning.
- Ownership/autonomy score >= 4/5 with direct accountability for outcome and correction loops.
- No unresolved red flag in reliability ownership or metric integrity.

### Fail criteria (any one is sufficient)
- Cannot explain causal chain between implemented change and measured funnel outcome.
- Cannot describe a quality or reliability safeguard used during conversion-focused launches.
- Optimizes local conversion while dismissing downstream UX/trust impacts.
- Provides only team-level outcomes without specific personal ownership.

## Decision Rule
Advance A05 to technical deep dive only if:
- Weighted score >= 75/100 against founding engineer rubric, and
- No unresolved red flag from the fail criteria above.

## Immediate Next Action
Run the 30-minute CTO screen for A05 using this packet and record evidence snippets immediately after the call for calibration against anchor profiles.
