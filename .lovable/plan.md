# Full polish pass — elite tier

All edits in `src/routes/index.tsx` (plus a small final CTA section added before `<FAQ />` and a subtle FAQ hover token in `src/styles.css` if needed). No new dependencies, no copy rewrites — composition, contrast, rhythm and restraint only.

---

## 1. Hero — split layout, product-feeling

Convert centered hero to **left headline + CTA, right dominant UI preview**.

- Wrapper: `grid lg:grid-cols-12 gap-12 lg:gap-16 items-center`
- Left (`lg:col-span-7`): left-aligned eyebrow chip ("Live in under 7 days · Managed end-to-end"), H1 slightly smaller (`text-5xl md:text-6xl lg:text-7xl`), tighter subtext (`text-base max-w-md`), CTAs flush left.
- Right (`lg:col-span-5`): bring back a **dominant** product mock (taller, leans off the right edge with `lg:-mr-12`). Built from divs: a "Call Net" inbox-style card showing 3 captured calls with name / time / one-line summary and a green "callback sent" pill. Subtle shadow + 1px border, no gloss.
- On mobile (`<lg`): mock hides, CTAs stay flush left, headline left-aligned.
- AuroraBackground stays but tone down opacity.

## 2. Section rhythm — alternating bands

Sequence becomes: hero (light) → stats (tint) → marquee (light) → ValueProp (light) → Products (tint band) → Testimonials (dark) → Process (tint) → Final CTA (dark) → FAQ (light).

Concretely:
- Products: wrap section in `bg-secondary/30` band, keep inner container.
- Testimonials: swap from `bg-secondary/40` to **dark** (`bg-foreground text-background`); rebuild quote cards with `border-background/15 bg-background/[0.03]`, accent quote glyph at `text-accent`.
- Process: switch from full dark to `bg-secondary/40` (light tint) since dark is now owned by Testimonials and Final CTA — keeps the strong "From first call…" moment without dark-on-dark fatigue. Numbers/labels become `text-foreground`, dividers `border-border`.
- Final CTA (new): dark band, see §7.

Net effect: light → tint → light → light → tint → **dark** → tint → **dark** → light. Real rhythm, no two adjacent same-tone blocks except the intentional light/light pairing where the marquee acts as a separator.

## 3. ValueProp — remove the outer container

Strip the bordered grid box entirely. Replace with breathing editorial layout:

- Lead block: full width, no card. Big number `01` mono on left (`col-span-1`), title + body on right (`col-span-11`), 1px top + bottom hairline only.
- Supporting items (02, 03): same row pattern stacked, hairlines between. No background, no padded card.
- Increase vertical padding between rows (`py-12 sm:py-16`).
- Drop the icon chips — index number alone carries the marker.

Result: minimal, all whitespace, no awkward middle ground.

## 4. Products — tighten and align flagship cards

- Increase inner padding on dark card to `p-10 sm:p-14`; light card matches at `p-10 sm:p-14`.
- Add explicit `border` on light card with `border-foreground/12`; dark card border `border-foreground` becomes `border-transparent` since the fill carries it.
- Force identical internal rhythm: header block `mb-10`, title `mb-5`, body `mb-10`, stats divider `pt-8`, stats `mb-10`, CTA at bottom. Both cards use `flex flex-col h-full` so CTAs bottom-align.
- Stats grid: tighten gap to `gap-6`, value sizes match (`text-2xl`).
- Remove the duplicate "Two systems. Built for real businesses." dark bar below the grid — redundant with the dark Testimonials section now coming next. Net element removal.

## 5. Testimonials — break the 3-equal-cards pattern

Now dark, and recomposed as **1 large + 2 small**:

- `grid lg:grid-cols-3 gap-6`
- First quote: `lg:col-span-2 lg:row-span-2`, larger type (`text-xl lg:text-2xl`), more padding, accent quote glyph prominent.
- Other two: stacked on the right, `text-base`, compact.
- Cards: `bg-background/[0.04] border border-background/15`, no rounded change.

## 6. Process — sharpen the strongest section

Keep editorial row layout; refinements only:
- Vertical rhythm: `py-12 sm:py-14` per row (was `py-8 sm:py-10`).
- Step labels (`Audit`, `Build`, …): bump weight to `font-semibold` and size to `text-3xl sm:text-4xl`.
- Dividers: `border-border` (since section is now light tint), slightly stronger via `border-border` solid 1px.
- Number color shifts to `text-foreground/40`.

## 7. Final CTA — new closing moment (before FAQ)

New `<FinalCTA />` section, dark band:
- `py-32 sm:py-40` (more breathing room than hero).
- Centered, max-w-3xl.
- Eyebrow "Ready when you are" in `text-background/55`.
- Headline `text-5xl md:text-7xl` with italic serif accent on the closing phrase.
- Single primary CTA button (Book a free audit), no secondary.
- Subtle radial gradient overlay using `--accent` at 6% to give it visual energy distinct from hero.

## 8. FAQ — remove default-component feel

- Row spacing: `py-8` (was `py-6`).
- Hover: row gets `hover:bg-secondary/40` transition on the whole `<div>`, not just text color.
- Drop the outer `border-t` line, keep only inter-item `border-b border-border/60` (softer).
- Plus icon button: remove the circular border ring; use a plain `text-muted-foreground` glyph that rotates on open. Cleaner, less library-default.
- Left column heading stays.

## 9. Restraint pass (10–15% element removal)

While editing, delete:
- Hero trust-row checkmarks (already implied by stats strip directly below).
- Redundant Products dark CTA bar (see §4).
- Icon chips in ValueProp (see §3).
- FAQ plus-icon ring (see §8).
- One of the StatsStrip dividers via lighter `divide-border/60`.

---

## Technical notes

- All work in `src/routes/index.tsx`; one new component `FinalCTA` added in-file and wired into `Index()` between `<Process />` and `<FAQ />`.
- Possible tiny addition in `src/styles.css`: none expected — current tokens cover everything.
- Lucide imports may need `MessageSquare` removed / unchanged; verify import list after edits.
- After edits: screenshot at desktop 1440 and mobile 390 to verify rhythm, hero split, dark-band transitions, and that no card grid feels equal-weighted anymore.
