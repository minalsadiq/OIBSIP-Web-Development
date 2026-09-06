# 🌐 Landing Page — Minal's Ember & Oak Coffee Roasters
**OASIS INFOBYTE Internship - Web Development & Designing | Level 1, Task 1**

## Objective
A visually polished static landing page for a locally crafted small-batch coffee roastery based in Faisalabad, built by Minal to establish foundational HTML/CSS layout skills (no JavaScript).

## Tech Stack
HTML5 · CSS3 (Flexbox + Grid, no JavaScript)

## Design Notes
- **Palette:** warm parchment (`#FAF5EC`) base, roasted-bean ink (`#2B1B12`), copper accent (`#A85C2A`), and a muted sage green (`#5B6B3F`) for secondary labels chosen to evoke the roastery's own materials (beans, wood, farm) rather than a generic SaaS palette.
- **Type:** `Fraunces` (serif display, variable optical size) for headings, `Work Sans` for body copy a confident, editorial type scale (hero heading up to 3.8rem).
- **Layout:** every section uses a different structure on purpose a two-column hero with a hand-built SVG illustration of a drum roaster, an asymmetric "How We Roast" section (image + numbered steps), a 3-card product grid for the roasts, and an editorial pull-quote layout for reviews (not another card grid) so the page doesn't read as one repeated template block.
- **Depth & interaction:** soft warm-toned shadows, hover lift on buttons and roast cards, underline-on-hover nav links.
- **Craft details:** a custom SVG roastery mark in the nav, an 8px spacing scale used consistently throughout, and a mobile nav that wraps to a second row rather than collapsing into a hamburger — every one of the required nav links stays visible at every screen size.

## Feature Checklist Coverage
- Sticky nav bar with 4 navigation links (Process, Our Coffees, Reviews, Visit Us)
- Hero section with headline, subheadline, and two CTA buttons featuring Minal's brand
- 3 distinct content sections: Process, Coffees (product cards), Reviews (testimonials)
- Footer with Faisalabad location details, placeholder contact info, and social links
- Consistent colour palette across all sections
- Fully responsive (CSS Grid/Flexbox; tested at 1400px, 390px)
- No element overlap; deliberate spacing throughout
- Two clearly distinct font sizes/families (display vs. body)

## Folder Structure

WebDev-L1-LandingPage/
├── index.html
├── style.css
├── images/        
└── README.md


## How to View
Open `index.html` directly in any browser — no build step or server required.