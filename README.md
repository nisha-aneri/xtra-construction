# XTRA Construction — Home Page Recreation

A pixel-conscious recreation of the **Construction 2** home page from the XTRA WordPress theme demo:
<https://xtratheme.com/elementor/construction-2/>

The page is a single-page React application that reproduces the reference layout, sections, imagery,
typography, colours, spacing, hover states, slider behaviour and responsive breakpoints.

---

## Project overview

The landing page contains every section of the reference home page, in the same order:

1. **Promo strip** — theme marketplace offer bar
2. **Top bar** — phone number and social links
3. **Sticky header** — logo, navigation, "Pages" dropdown, search, "Free Consultation" button and a mobile drawer
4. **Hero slider** — two slides (construction worker artwork with layered gold diagonals, and the image slide with the overlapping quote boxes), arrows, autoplay and keyboard support
5. **Features** — dark crane-background section with three image cards
6. **About** — framed site photo, heading, copy and a two-column checklist
7. **Services** — three service cards plus the gold-accented call-to-action band
8. **Process** — intro/image and three numbered construction steps
9. **Projects** — eight-item hover gallery
10. **Quote** — navy request-a-quote section with validated form and success state
11. **Testimonials** — accessible carousel with dots/arrows plus a partner logo strip
12. **Footer** — brand, quick links, services, contact details, social links and copyright bar

Additional UI behaviour: search overlay with live filtering, scroll-reveal animations, sticky header
shadow, back-to-top button, hover/focus states, reduced-motion support and mobile navigation.

---

## Technology used

| Layer      | Choice                                     |
| ---------- | ------------------------------------------ |
| UI library | React 19 (function components + hooks)     |
| Build tool | Vite 7                                     |
| Styling    | Hand-written CSS (`src/styles/global.css`) |
| Fonts      | Google Fonts — Playfair Display, Poppins, Roboto |
| Icons      | Inline SVG components (no icon library)    |
| Media      | Local images in `public/images`            |

No CSS framework, UI kit or animation library is used.

---

## Installation

Requirements: **Node.js 20+** and npm 10+.

```bash
npm install
```

## Development command

```bash
npm run dev
```

Open the printed URL (by default <http://localhost:5173>). Vite hot-reloads the page on save.

To use a different port:

```bash
npm run dev -- --port 3000
```

## Build command

```bash
npm run build
```

The production bundle is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## Deployment instructions

The project is a static Vite build and deploys without a server.

### Vercel

1. Push the repository to GitHub.
2. In Vercel choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. Confirm:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Deploy. No environment variables are required.

CLI alternative:

```bash
npm i -g vercel
vercel --prod
```

### Netlify

1. Import the repository in Netlify.
2. Use **Build command** `npm run build` and **Publish directory** `dist`.
3. Deploy.

CLI alternative:

```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

Because this build has a single route, no SPA rewrite rule is needed.

---

## Dependencies

**Runtime**

- `react` — UI rendering
- `react-dom` — DOM renderer

**Development**

- `vite` — dev server and bundler
- `@vitejs/plugin-react` — React fast refresh / JSX transform

**External resources**

- Google Fonts (Playfair Display, Poppins, Roboto) loaded in `index.html`.
- All images are bundled locally in `public/images`, sourced from the public XTRA theme demo so the
  recreation matches the reference artwork.

---

## Environment configuration

No environment variables, API keys or secrets are required. The quote form is entirely client-side.

Optional variables understood by tooling:

| Variable | Purpose | Default |
| -------- | ------- | ------- |
| `PORT`   | Dev server port (Vite `--port`) | `5173` |

Example: `PORT=3000 npm run dev`.

---

## Brief API documentation

This project has **no backend**. The quote form validates input in the browser and shows a success panel
without transmitting data.

If a backend is added, the intended contract is:

```
POST /api/quote
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Kitchen renovation",
  "department": "Business Departemant",
  "message": "We need a quote for a 120 m² renovation."
}
```

- `name`, `email`, `message` are required; `email` must be a valid address.
- Expected success response: `2xx` with `{ "ok": true }`.
- Expected validation failure: `422` with `{ "errors": { "email": "…" } }`.

Client validation rules live in `src/components/Quote.jsx` (`handleSubmit`).

---

## Project structure

```
.
├── index.html                  # Document shell, fonts and metadata
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── images/                 # Local reference imagery
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Page composition, back-to-top
    ├── data/site.js            # All page copy and content data
    ├── hooks/useReveal.js      # IntersectionObserver scroll reveal
    ├── components/
    │   ├── Header.jsx          # Promo bar, top bar, sticky nav, drawer, search
    │   ├── Hero.jsx            # Two-slide hero slider
    │   ├── Features.jsx
    │   ├── About.jsx
    │   ├── Services.jsx        # Service cards + CTA band
    │   ├── Process.jsx
    │   ├── Projects.jsx
    │   ├── Quote.jsx           # Validated quote form
    │   ├── Testimonials.jsx    # Carousel + logo strip
    │   ├── Footer.jsx
    │   ├── SectionTag.jsx      # Reusable eyebrow label
    │   └── Icons.jsx           # Inline SVG icon set
    └── styles/global.css       # Design tokens, layout and responsive rules
```

---

## Assumptions

- The brief asked only for the **home page**, so About / Services / FAQ / Blog / Shop / Contact do not
  have separate routes. Navigation, dropdown and footer links scroll to the matching content on this
  page (FAQ → process, Blog → projects, Contact → quote).
- Reference imagery is reused locally to reproduce the visual design. Replace it with licensed artwork
  for a commercial build.
- Playfair Display is used for the display serif headings to match the reference's rendered look;
  Poppins/Roboto are used for body copy and UI text.
- The quote form success state is simulated in the client. Wiring it to an API is documented above.
- Phone number, address and social URLs are demo content carried over from the reference.

## Known limitations

- No real form submission, e-mail delivery, CMS, or authentication backend.
- Promo-strip and social links point to the original theme/demo destinations, because this is a
  design recreation.
- The video button opens the reference YouTube video in a new tab rather than embedding a player.
- Very old browsers without `aspect-ratio`, CSS Grid, or `IntersectionObserver` support fall back to a
  simpler layout/animations disabled.

## Responsive & accessibility notes

- Breakpoints at 1280, 1120, 991, 860, 767 and 420 px; no horizontal scrolling at tested widths.
- Mobile navigation is a slide-in drawer with body scroll locking, Escape support and a backdrop.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), labelled controls, visible focus
  rings, `aria-expanded`/`aria-selected` states, and `prefers-reduced-motion` handling.
