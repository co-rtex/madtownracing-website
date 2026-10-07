# Content To-Do

Everything below is a placeholder or a deliberate fallback. Nothing on the site invents
results, sponsors, people, dates, or statistics. Replace items as they become real.

## Links & contact — `src/content/site.ts`

- [ ] `joinUrl` — application / interest form. Until set, `/join` shows "Application link coming soon".
- [ ] `sponsorEmail` (or `contactEmail`) — until set, `/partners` routes partners to Instagram DMs.
- [ ] `sponsorDeckUrl` — hosted partnership deck PDF. Until set, shows "Deck in preparation".
- [ ] Final domain → set `NEXT_PUBLIC_SITE_URL` in Vercel.
- [ ] Confirm the Instagram handle `@madtownracing` is correct and active.

## Brand

- [ ] Approved MadTown Racing logo (replace text mark in `BrandMark.tsx` and `src/app/icon.svg`).
- [ ] Confirm official status/affiliation wording. The site currently says "student-operated
      collegiate motorsports organization in Madison" and does **not** claim to be an official
      UW–Madison team. Update `siteConfig.description`/`tagline` only once confirmed.

## People — `src/content/team.ts`

- [ ] Real members (with consent): name, role, major, grad year, focus, optional circuit,
      LinkedIn, photo. While `members` is empty the team page shows "Team roster coming soon".

## Photography — `src/content/media.ts`

- [ ] All image slots listed in the README asset manifest (hero, formats, team, racing, join,
      partners, road to the grid, car profile, six paddock tiles, six car-system details,
      journal cover).

## Racing — `src/content/racing.ts`

- [ ] Confirmed event entries (round, event, circuit, dates, status, optional map SVG in
      `/public/tracks`). While empty, `/racing` shows "Schedule to be announced".
- [ ] Review the series-format copy against official CRS rules.

## Car — `src/content/car.ts`

- [ ] Review system descriptions once the car is acquired; add confirmed specifications only.
- [ ] Optionally adjust hotspot positions if a real car photo replaces the illustration.

## Road to the Grid — `src/content/roadmap.ts`

- [ ] Update milestone `status` as work progresses; add `date` only for things that happened.
- [ ] Add progress notes, related journal slugs, and gallery images.

## Partners — `src/content/partners.ts`

- [ ] Confirmed partners with approved logo files in `/public/brand/partners`.
- [ ] Approve tier names and benefit descriptions (no dollar amounts or promised deliverables
      are shown).

## Journal — `src/content/journal.ts`

- [ ] Review "Why We're Building MadTown Racing" (written to match the formation stage; it has
      no date or author — add both when published).
- [ ] Add further articles as milestones happen.

## Homepage

- [ ] The pit-stop timeline uses **illustrative** timings (clearly labelled). Replace with real
      data only if the team wants to publish it.
