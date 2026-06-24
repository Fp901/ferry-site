# The Ferry Cafe — Website

The official website for **The Ferry Cafe**, an iconic 1950s-themed seaside café at Felixstowe Ferry, Suffolk. Est. 1953.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), optimised for local SEO and fast static delivery.

---

## Overview

| | |
|---|---|
| **Framework** | Astro 4 |
| **Styling** | Tailwind CSS 3 |
| **Language** | TypeScript |
| **Target domain** | `https://theferry.cafe` |
| **Location** | Felixstowe Ferry, Suffolk, IP11 9RZ |

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage — hero, USPs, photo gallery, menu highlights, nearby attractions, FAQ |
| `/menu` | `src/pages/menu.astro` | Full food & drinks menu |
| `/about` | `src/pages/about.astro` | Cafe history and story |
| `/contact` | `src/pages/contact.astro` | Contact details, map, opening hours |

---

## Project Structure

```
my-cafe-site/
├── public/
│   ├── assets/          # Food photos, logo (WebP)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro # Sticky nav with mobile hamburger menu
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro # Base layout with SEO meta, Open Graph, JSON-LD
│   └── pages/
│       ├── index.astro
│       ├── menu.astro
│       ├── about.astro
│       └── contact.astro
├── astro.config.mjs
├── tailwind.config.*
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- npm (bundled with Node)

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Opens at `http://localhost:4321` with hot module replacement.

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

### Preview the production build locally

```bash
npm run preview
```

---

## SEO Features

- Canonical URLs and `robots` meta on every page
- **Open Graph** and **Twitter Card** tags
- **JSON-LD structured data** — Restaurant/LocalBusiness on every page (via `Layout.astro`), plus `Menu` on /menu, `FAQPage` on the homepage and `BreadcrumbList` on sub-pages
- Geographic meta tags (`geo.region`, `geo.position`, ICBM) for local search signals
- Semantic HTML with descriptive `alt` text on all images

---

## Deployment

The site is a fully static build (`dist/`) and can be deployed to any static host:

- **Netlify** — connect the repo and set build command `npm run build`, publish directory `dist`
- **Vercel** — auto-detects Astro; zero config needed
- **GitHub Pages** — add the `@astrojs/github-pages` adapter or deploy `dist/` via GitHub Actions

Update the `site` field in [astro.config.mjs](astro.config.mjs) to match the live domain before deploying.

---

## Contact

**The Ferry Cafe**
Felixstowe Ferry, Felixstowe, Suffolk, IP11 9RZ
Phone: 01394 276305
Email: hello@theferry.cafe
Open: Wednesday – Sunday, 10am – 2pm
