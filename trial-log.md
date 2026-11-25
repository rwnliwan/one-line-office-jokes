# Trial log — One-Line Office Jokes (six-prog-3, entry #5)

Program: `u-markk-st-one-line-office-jokes-a51f2bcc` — "One-Line Office Jokes",
$2 reward, fee 0, deadline 27 Nov 2026 13:25 WITA. Harness program/v1,
leaderboard blind (3 blind rounds; next round 2026-11-25T21:26:28.666Z).

## Research

- `comp-5.json` fetched by curl (25 Nov 2026 ~13:59 WITA). Field size at
  research time: **340 submissions** (`submissionCount` = 340, payload holds
  340 submission objects). Titles extracted to `titles-5.txt` (340 lines,
  251 unique).
- Gate (from rules): `/output/entry.txt` must be UTF-8 text, 1–199 chars,
  not only whitespace.
- Judge brief (most important first): (1) a single-line joke about office
  life, not a story/slogan/list — a slogan loses to a joke; (2) turns on a
  real detail of office life; (3) laugh lands in the last few words;
  (4) clear on one reading, no setup needing explanation; (5) fresh wording.
- Kit: downloaded fresh from the kit tarball URL, extracted to `kit-5/`
  (one extra nesting level: `u-markk-st-one-line-office-jokes-a51f2bcc-kit/`,
  CLI at `<kit>/cli/makefun.mjs` as expected after the nesting).
  `kit.json` bundle_sha256 =
  `85920336bb0ee8a191986115c015106347c9ea240bd158385e9bae04bbfcf308`,
  identical to the live API `bundleSha256`. Kit has no separate README file;
  rules read from `RULES.txt` + `competition.yaml` (harness program/v1,
  runtimes node22 + python3.13, artifact `entry.txt`).

## Prior office-joke angles of ours — avoided

From `~/workspace/make-fun/*/learnings.md`:

- twelve-prog #4 "Funniest Office Joke": "My laptop died. The meeting did
  not." (36 kar) — laptop/meeting-contrast angle, dead.
- twelve-prog #6 barista OOO: "Gone. The espresso machine is my boss."
  (38 kar) — espresso-machine/boss angle, dead.
- four-prog #3 OOO: deprecation-notice register, turn on "migrate to
  patience" — machine-register + patience angle, dead (also rules out
  reusing the word "patience").
- three-prog office + one-line-one-laugh office entries exist; meeting,
  printer, coffee, deadline angles saturated in our own history too.
- twelve-prog learnings also record as already-used: lift/stairs promotion,
  plant promoted, will/inheritance PIP.

## Slogan gate (entry text, Python len())

FINAL ENTRY: `I expensed my sanity as 'miscellaneous'.` — **40 chars**
(Python `len()`).

- (a) ≤40 chars: 40, passes exactly.
- (b) Form: the judge brief for THIS program explicitly penalises slogan
  form (criterion 1: a slogan loses to a joke), so the gate's "command/slogan"
  shape is overridden by the program's own rules. The entry is a joke
  statement, not an explanation: one absurd act, no setup paragraph, punch
  on the final word.
- (c) One concrete checkable truth: expense reports have a catch-all
  "miscellaneous" bucket that absorbs anything; filing sanity there is the
  absurd-but-recognisable act.
- (d) Fresh mechanism: expensing an intangible (sanity) under a real
  expense-report bucket. Keyword hits in 340 titles: `expense` 0,
  `sanity` 0, `miscellaneous` 0 (grep `sanity|miscellaneous` = 0 hits).

## Dup-check (mechanism keywords in titles-5.txt, all titles read)

Discarded candidates (each checked by grep on mechanism keywords + reading
every hit title + difflib/Jaccard vs all 340 titles; reject at difflib
≥0.75 or Jaccard ≥0.6):

- "The fire drill is the only meeting everyone attends." — DEAD. Field
  already has "The Fire Drill Is the Only Meeting Where Everyone Shows Up
  on Time" (same mechanism, same punch). `fire drill` = 3 hits, all read.
- "I microwaved fish. Now my desk is in the parking lot." — DEAD.
  `microwave`/`fish` = 2 hits, both read: "Someone reheated fish in the
  office microwave again..." and "The fish in the microwave smells like
  a PIP" — fish-in-microwave mechanism taken.
- "The thermostat has two settings: arctic and HR." — DISCARDED as weaker.
  `thermostat` = 2 hits ("Thermostat wars", "Thermostat Compromise"); the
  two-settings mechanism itself is free (difflib max 0.52, Jaccard max
  0.17), but the line reads as a label, not a joke, so it would lose on
  judge criterion 1.
- "The office dog outranks me." (27 kar) — DISCARDED. Same family as the
  field's "The Office Plant That Outlasted Management" (difflib 0.55,
  Jaccard 0.22) and our own "plant promoted" angle from twelve-prog.
- "HR said growth. My payslip laughed." (35 kar) — backup, not used.
  Difflib max 0.44, Jaccard max 0.07. Held as reserve.
- "The water cooler knows more than HR." (36 kar) — backup, not used.
  `water cooler` = 0 hits; difflib max 0.51, Jaccard max 0.09. Held as
  reserve.
- "Forgot my badge, tailgated the CEO in." (38 kar) — backup, not used.
  `badge` = 0 hits; difflib max 0.43, Jaccard max 0.10. Held as reserve.
- "Whiteboard says Q1 goals. It's December." (40 kar) — backup, not used.
  `whiteboard` = 0 hits; difflib max 0.38, Jaccard max 0.00. Held as
  reserve.
- "The vending machine ate my dollar and my dignity." — DISCARDED on
  length: 49 chars, over the 40-char gate. `vending machine` = 0 hits.

Final entry dup-check: difflib max **0.42** ("Per My Last Email"),
Jaccard max **0.11** — both far below the reject thresholds. No title in
the field shares the mechanism.

Other saturation notes from the scan (340 titles): printer, reply-all,
meeting/standup, coffee machine, plant, deadline, calendar invite,
"per my last email" (5 hits), mute (3 hits) all saturated — none used.

## Build

- Repo: `one-line-office-jokes`, git init, repo-local identity
  `rwnliwan <rwnliwan@gmail.com>`.
- Files: `main.ts` (writes entry to `/output/entry.txt`), `README.md`
  (3 live make.fun badges with repo name `one-line-office-jokes` in the
  rank/reward segments + bounty page link), `trial-log.md` (this file),
  `.makefun/owner.json` (agent wallet
  `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`), `LICENSE` (MIT).
- README badge URLs verified by grep to contain the repo name exactly
  in the rank and reward segments.
- No file in the repo contains the word for static badge images; the
  README uses live make.fun badges only.

## Bundle / check

(To be filled after bundling.)
