# Namou Investment Deck / Screen-Share Tool — Structure & Guidelines

> **Source of truth.** When this file conflicts with older prototypes or screenshots, this file wins.

## Core purpose

This is not a static deck. It is a **live deal-structuring tool** used by a Namou specialist during a video call.

The experience must:
- educate the investor
- let them explore land options clearly
- calculate land price live during the call
- drive toward a concrete action, especially submitting an offer

---

## Design rules and visual tone

### 1) Simple
- Minimal UI clutter
- Every element must earn its place
- No decorative borders
- No glass elements
- No floating decorative UI artifacts

### 2) Interactive
- ROI tool must be live and adjustable during the investor call
- The tool should feel responsive and interactive, not like a static presentation

### 3) Educational
- Guide the investor through the logic step by step before asking for commitment
- Explain ROI clearly before presenting the result

### 4) Transactional
- The experience is designed to produce an offer or another concrete next step
- It should not just inform the prospect

---

## Non-negotiable aesthetic rules

- **Primary color: Emerald Green**
- No soft colors
- No mint green
- No nude tones
- No pastel accents
- Content should occupy ~95% of the page — minimize empty margin space
- Remove all unnecessary borders, glass elements, and floating decorative pieces
- Sidebar on the left
- **Sidebar must be collapsible/foldable** so full-screen content can be shown when needed

---

# SECTION 1 — LANDING PAGE

## Purpose
Introduce the opportunity and orient the client immediately with clarity and no clutter.

## Required structure
- Left-side navigation layout mirroring the website
- Sidebar must be collapsible
- Content fills most of the viewport

## Navigation — five land category buttons

Categories are by **LAND TYPE**, not by geographic area:

1. Residential
2. Commercial
3. Industrial
4. Agriculture
5. Hospitality

### Homepage behavior
- Homepage starts by **land type**, not area
- When a user selects a land type → show all plots in that category as small selectable icons/cards
- This is the primary entry flow

> **Important:** Land categories must be grouped by type, not by area, to reduce clutter and allow standardized ROI comparison across similar assets.

---

# SECTION 2 — INTERACTIVE MAP VIEW

## Purpose
Show the full geographic scope of Namou landholdings.

## Map platform
Use **Mango** as the map reference / intended platform (replaces heavy static zoom behavior).

## Geographic coverage
The map should support plots across:
- Sharjah
- Umm Al Quwain
- Ras Al Khaimah

## Plot interaction behavior
After selecting a land category, open the map and show **only plots relevant to that category**.

Each plot on the map must be clickable. When clicked, open a **side popup/panel** attached to the map showing:
- Plot name
- Zone type
- Size
- Location
- Photo thumbnails / preview image
- Simple image carousel access
- CTA button: **"Go to Land Specs"**

### Land Specs navigation from map
When "Go to Land Specs" is clicked:
- Open a **new tab**
- Go directly to that selected land's specs (not a generic page)

### Filter controls
The map supports filtering visible plots by the same five land categories:
- Residential / Commercial / Industrial / Agriculture / Hospitality

---

# SECTION 3 — IN-DEPTH SECTION

> Renamed from "Master Plan" — this is more precise and investor-appropriate.

## Purpose
Provide complete, structured data for each specific plot on a single page.

### UX rules
- No pop-ups
- No redirects
- No page exits to find key data
- The user should never have to leave this area to understand the plot

## Split-screen layout

### Right panel — Selection Panel
- Scrollable list of land plots
- Each item: thumbnail, name, zone badge
- Primary focus can begin with hospitality plots
- Always visible on load

### Left panel — Detail Panel
Updates instantly when a plot is selected on the right. Must include:
- Plot overview
- Payment information
- Asset specs
- Image gallery
- Location map

### Navigation rule
- Selecting a plot updates details instantly — zero page changes, zero pop-ups, no redirects

### One-stop-shop rule
Everything the investor needs is visible here: payment info, asset specs, location, images, surrounding context. No external links. No click-out behavior.

---

# SECTION 4 — ASSET SPECS

## Data-first rule
Specs must be **visually dominant** and clearly visible on screen. Not buried in narrative.

## Asset specs fields
- Plot Size
- Max Height
- Floor Area Ratio (FAR)
- Gross Floor Area (GFA)
- Zoning
- Infrastructure Access

## Specialist behavior
The specialist should not have to read every technical spec aloud — the data should be clearly visible.

---

# SECTION 5 — ROI EXPLANATION + LIVE ROI TOOL

## ROI explanation purpose
Teach the investor the logic step by step before showing the output:
1. Development assumptions
2. Construction cost
3. Sellable area
4. Sale price assumptions
5. Profit margin

This leads directly into the live ROI tool.

## Live ROI tool
This is a **live deal-structuring tool**, not a static calculator.

### Adjustable variables (inputs)
- Construction Cost / sq ft
- Expected Sale Price / sq ft
- Net Sellable Area % (NSA)
- Target Developer Profit Margin

> **Important:** Construction cost for high-end towers = **$800 / sq ft**. The previous $220 figure is permanently removed.

### Input UX
Use **text input fields**, not sliders. The specialist should type assumptions manually.

### Auto-calculated outputs
- ROI
- Total Development Value
- Maximum Land Price
- GFA Price

## Goal
The investor reverse-engineers the land price they are willing to offer based on their own assumptions.

## Example deal
- Asset: RAK Central
- Type: High-end commercial tower
- Construction Cost: $800 / sq ft

---

# SECTION 6 — GALLERY

## Purpose
Show the actual plots visually before the final CTA.

## Content
- Land photos, drone shots, area highlights, surroundings
- Placeholders acceptable where real assets are missing

## Format
- Gallery-style layout
- Minimal text
- Premium visual presentation
- Not cluttered

---

# SECTION 7 — FINAL ACTION / CTA

## Purpose
Drive immediate next steps. This experience is **transactional**.

## CTA options (six total)
1. Schedule a Site Visit
2. Follow-up Call
3. Schedule Video Meeting
4. Request Detailed Report
5. Meet The Master Plan Developer
6. **Submit an Offer** ← primary CTA, visually distinguished

## Final offer calculation
Immediately above Submit Offer, display:

> "Based on your assumptions, your land offer would be:"

Show: GFA Price · Total Land Value · ROI — values pulled directly from the ROI tool.

## Offer behavior
- Offer amount starts from ROI-calculated maximum land price
- Remains editable by the specialist before submission

## Action modal behavior
When any action is selected (Submit Offer, Schedule Visit, etc.):
- Open a **popup/modal**
- Collect: name, date, time, notes

## Submission handling (for now)
No backend integrations yet. Structure as if data goes to a sheet or manual follow-up. CRM / Zoho integration is future scope.

---

# Product / UX direction

This should feel like:
- A premium sales tool
- A screen-share-first product
- Elegant, practical, interactive
- Easy for a specialist to explain live

This should NOT feel like:
- A static deck or brochure
- A decorative concept UI
- A cluttered dashboard

## Corrected user flow

```
Land Type → Category Plots → Filtered Map → Selected Plot Popup → Land Specs + ROI → Final Action
```

## Additional guidance
- Old Adobe XD screenshots are reference only, not the design ceiling
- This spec takes priority when there is a conflict
- Placeholders acceptable for missing media
- Specialist-led, one-on-one screen-share is the primary scenario
- Optimize for clarity, speed, and transparent explanation during the call
