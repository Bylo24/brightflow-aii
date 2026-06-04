## Goal

The "Why BrightFlow" / ValueProp section is where we explain what the agency actually does. Right now the copy is fine but the framing is buried and the three cards read at one even visual weight, so the core message ("we fully automate the repetitive manual admin within your business") doesn't land hard enough. This plan tightens the copy and re-stages the section so the promise is unmistakable — without touching colors.

## Scope

File: `src/routes/index.tsx`, `ValueProp()` only. No color tokens, no global typography changes, no other sections.

## Copy changes

Replace the current eyebrow + heading + 3 cards with a tighter, more declarative version pulled from the user's bullets.

- Eyebrow: `WHAT WE DO`
- Headline (kept short, the differentiator italicized):
  > We fully automate the repetitive manual admin *inside your business.*
- Sub-lede directly under the headline (new — currently missing):
  > Your time is more valuable than the work that's eating it. We take the low-value, mundane tasks off your plate so you can focus on the work that actually grows the business.

Three cards rewritten from the user's bullets — each gets a short, punchy title + one tight sentence (instead of the current generic "Reclaim time / Built for your workflow / Managed monthly" framing, which doesn't match the message they want):

1. **Eliminate the mundane** — Strip out the repetitive, low-engagement tasks draining your team, so attention goes to strategic work instead of busywork.
2. **Reclaim your highest-value hours** — Stop being bogged down by work anyone could do. Redirect your time to the high-impact decisions that actually move the business.
3. **Scale without adding headcount** — Offload the routine running of your business to a system that doesn't get tired, sick, or distracted — and grow without the overhead.

## Visual emphasis changes (no color edits)

The current layout puts the heading in a `max-w-3xl` block and the 3 cards in an even bordered grid — everything reads at the same weight. Restage to create a clear hierarchy:

1. **Bigger, centered headline block.** Center-align the eyebrow + headline + new sub-lede, widen to `max-w-4xl mx-auto text-center`, bump the headline to match the hero scale (`text-4xl sm:text-5xl md:text-6xl`). The italic phrase `inside your business.` stays as the visual hook (same serif italic treatment already used elsewhere).
2. **Lead card + supporting cards.** Replace the equal 3-col grid with an asymmetric layout: the first point ("Eliminate the mundane") becomes a wide lead card spanning the full row at larger type; the other two sit beneath as a 2-col row. Keeps the bordered/divided look already in use but creates a clear "1 → 2" reading rhythm.
3. **Stronger card typography.** Bump card titles from `text-lg` to `text-xl sm:text-2xl` with tighter tracking. Increase body line-height and size slightly (`text-[15px] leading-relaxed`). Keep existing icon chip style.
4. **Numbered markers.** Add a small `01 / 02 / 03` index above each card title (muted, uppercase, tracked — same style as existing eyebrows) to reinforce that these are a sequence of guarantees, not loose features. Replaces the icons OR sits alongside them (I'll sit it alongside to preserve current visual rhythm).
5. **More breathing room.** Increase section vertical padding one step (`py-24 sm:py-32 md:py-40`) and gap between headline block and cards (`mb-16 sm:mb-20`) so the message gets the room it deserves.

## Out of scope

- Hero, Bento, Process, Metrics, FAQ sections
- Color tokens, fonts, dark/light theming
- BookCallDialog, nav, footer

## Verification

After build, visit `/`, scroll to the "What we do" section, confirm: headline is centered and dominant, sub-lede reads clearly, lead card is visually heavier than the two beneath it, numbered markers render, no layout regressions on mobile (cards stack to single column under `md`).
