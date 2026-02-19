# BRIEF.md — Tend Studio Website Build

## What is Tend Studio?
Tend Studio is a productised Klaviyo email marketing consultancy targeting small-to-medium Australian ecommerce businesses (primarily Shopify). We help brands set up, optimise, and manage their email and SMS marketing to improve customer retention and lifetime value.

**Domain:** tendstudio.com.au
**Tagline:** We tend to your customers.
**Descriptor:** Email & CRM by design (appears centred in nav, in terracotta #C8705A)
**Brand emoji:** 🌱

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Forms:** Start with a simple form that sends to an email address (can upgrade to a proper backend later)
- **Font:** Plus Jakarta Sans via Google Fonts

## Pages to Build
1. **Homepage** (`/`) — Hero, brand bar, what we do, who it's for, how it works, final CTA
2. **Services** (`/services`) — One-time project cards, ongoing management cards, "not sure" CTA
3. **Enquire** (`/enquire`) — Contact form with service pre-selector

See `website-copy.md` for the complete copy, section-by-section, mapped to the wireframes.
See the wireframe images in `/docs/wireframes/` for layout reference.

## Brand Identity

### Colour Palette
| Name | Hex | Usage |
|------|-----|-------|
| Forest | #2D6A4F | Primary. Headings, buttons, key accents. |
| Sage | #74A68D | Secondary. Borders, highlights, secondary elements. |
| Mint | #B7D7C8 | Light accent. Brand bar background, illustration fills, soft emphasis. |
| Terracotta | #C8705A | Warm accent. CTAs, highlights, descriptor text. Use sparingly. |
| Cream | #FDF6EE | Main background colour. |
| Warm White | #FEFCF9 | Card backgrounds. |
| Charcoal | #2C2C2C | Primary text, illustration line work. |
| Warm Grey | #6B6B6B | Secondary text, descriptions, captions. |

**Ratio:** 60% cream/white, 25% forest/sage greens, 10% charcoal/grey, 5% terracotta.

### Typography
- **Headings:** Plus Jakarta Sans — bold (700)
- **Card headings, button text, emphasis:** Plus Jakarta Sans — semi-bold (600)
- **Body:** Plus Jakarta Sans — regular (400)
- Load via Google Fonts: https://fonts.google.com/specimen/Plus+Jakarta+Sans
- Weights to load: 400, 500, 600, 700

### Illustrations
All illustrations are from the **Streamline Manchester** set, recoloured to the Tend Studio palette.

**Colour mapping from Manchester originals:**
| Manchester original | Tend Studio replacement | Hex |
|---|---|---|
| Dark brown (line work) | Charcoal | #2C2C2C |
| Light pink/peach (fills) | Mint | #B7D7C8 |
| Orange/red (accents) | Terracotta | #C8705A |
| Yellow/amber (secondary) | Forest | #2D6A4F |
| White/light grey (backgrounds) | Cream | #FDF6EE |

Illustrations are provided as SVG or PNG files in `/public/illustrations/`. Reference `website-copy.md` for which illustration goes where.

**Icons:** Streamline Flex icon set, recoloured to brand palette.

### Visual Tone
- Warm, calm, approachable — like Headspace meets Gusto
- **IMPORTANT — Softness throughout:** The entire site should feel soft and rounded. No sharp corners anywhere.
  - Cards: `border-radius: 20px` with soft box shadows (`0 4px 16px rgba(0,0,0,0.06)`)
  - Buttons: `border-radius: 12px–16px` (rounded, not pill). Generous horizontal padding (24px–32px).
  - Input fields: `border-radius: 10px–12px`
  - Images/containers: `border-radius: 12px–16px`
- Generous white space and padding (24–32px inside cards, 80–120px between sections)
- Cream backgrounds, not clinical white
- Alternating cream (#FDF6EE) and warm white (#FEFCF9) sections for rhythm — avoid hard divider lines
- Smooth transitions on all hover states (200–300ms ease)
- Soft, diffused shadows — nothing harsh. NO neumorphic/inset shadows.
- **Overall: the site should feel like picking up a product with beautiful packaging. Warm, unhurried, and considered.**

### Brand Voice (for any copy decisions)
- Plain language always — no marketing jargon
- Warm and friendly, not corporate
- Contractions always (we're, you'll, it's)
- Australian English (colour, optimise, analyse)
- Sentence case for headings
- Short paragraphs (2-3 sentences max)

## Layout Decisions

### Homepage
- **Hero:** Two-column. Headline + subheading + button LEFT-ALIGNED on left. Illustration on right. Everything on the left shares the same left edge. Do NOT centre the subheading or button.
- **Brand bar:** Full-width, auto-scrolling marquee. Mint/sage tinted background (#E8F0EC). NOT grey. Greyscale logos. Pause on hover.
- **What we do:** Three cards in a row. Each card has: emoji + title, illustration, body copy. Cards are white (#FEFCF9) on cream background.
- **Built for brands that think long-term:** Two-column. Text left, illustration (plant ladder) right. First sentence of body copy is bold.
- **How it works:** Staggered zigzag layout — Step 1 left, Step 2 right, Step 3 left, Step 4 right. Cards offset vertically to imply flow. NO arrows between cards. On mobile, cards stack vertically in a single column.
- **Final CTA:** Forest green (#2D6A4F) background block. Illustration on left, heading + body + button on right. White/cream text.

### Services Page
- **One-time projects:** Three cards in a row (Quick Look, Health Check, Ground Up). Each has illustration, title, description, bullet list, price, and "Enquire now" button.
- **Ongoing management:** Three cards in a row (Sprout, Grow, Flourish). Each has plant illustration, title, "Best for" line, bullet list, price/month, and "Enquire now" button. Plant illustrations progress from small seedling → medium plant → full flowering plant.
- **Below retainer cards:** Text line: "All retainers start with a 3-month minimum — it takes at least that long to see real results from email. After that, it's a 30-day rolling agreement. No lock-ins."
- **Not sure CTA:** Forest green block at bottom. Two buttons: "Get your scorecard" (terracotta, placeholder link) and "Enquire now" (white/outline, links to /enquire).

### Enquire Page
- **Header:** Two-column. "Let's chat" headline + subheading on left. Illustration on right.
- **Form fields:** Dropdown (service selector), name, email, website URL, textarea, dropdown (how did you find us). See `website-copy.md` for full field specs.
- **Service pre-selection:** The service dropdown should pre-select based on URL params (e.g., `/enquire?service=quick-look`).
- **Submit button:** "Send enquiry" — NOT "Submit".
- **Confirmation:** Inline confirmation message after submit (no separate page needed).

## Key UX Decisions
- **Pricing is visible.** This is a deliberate differentiator — most competitors hide pricing behind "get in touch." We show it clearly.
- **Navigation is minimal.** Logo (left) + descriptor (centre) + two links (right): Services, Contact. No dropdown menus. Descriptor hides on mobile.
- **Brand bar with client logos** scrolls horizontally (auto-scrolling marquee, pause on hover, greyscale logos).
- **Enquiry form pre-selects a service** when linked from a specific package card (use URL params like `/enquire?service=quick-look`).
- **Mobile-first responsive.** Cards stack, form goes full-width, generous touch targets, hero illustration stacks above or below text.
- **No scorecard in nav or as primary CTA until it's built.** Launch CTAs point to /services.

## Folder Structure
```
/tend-studio-website
├── /docs
│   ├── BRIEF.md (this file)
│   ├── website-copy.md
│   ├── brand-guide.docx
│   └── /wireframes
│       ├── HOME.png
│       ├── SERVICES.png
│       └── ENQUIRE.png
├── /public
│   ├── /illustrations (Manchester SVGs/PNGs, recoloured)
│   └── /logos (client brand logos for the brand bar — placeholders for v1)
├── /src
│   ├── /app
│   │   ├── page.tsx (homepage)
│   │   ├── layout.tsx (global layout with Header + Footer)
│   │   ├── globals.css (Tailwind + custom styles)
│   │   ├── /services
│   │   │   └── page.tsx
│   │   └── /enquire
│   │       └── page.tsx
│   └── /components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── BrandBar.tsx
│       ├── ServiceCard.tsx (reusable for both one-time and retainer cards)
│       ├── HowItWorksStep.tsx
│       └── EnquiryForm.tsx
└── tailwind.config.ts (with brand colours defined)
```

## Tailwind Config — Brand Colours
```js
// Add to tailwind.config.ts theme.extend.colors
colors: {
  forest: '#2D6A4F',
  sage: '#74A68D',
  mint: '#B7D7C8',
  terracotta: '#C8705A',
  cream: '#FDF6EE',
  'warm-white': '#FEFCF9',
  charcoal: '#2C2C2C',
  'warm-grey': '#6B6B6B',
}
```

## What "Done" Looks Like for v1
- Three pages live and responsive
- All copy from website-copy.md implemented exactly
- Brand colours and typography applied consistently
- Illustrations placed per the assignments in website-copy.md
- Brand bar scrolling with placeholder logos
- Enquiry form functional (sends to email)
- Service pre-selection via URL params working
- Deployed to Vercel on tendstudio.com.au
- Performance: fast, accessible, clean
- Soft, rounded, warm aesthetic throughout — no sharp corners, no harsh shadows
- **No blog, no scorecard, no client portal — those come later**
