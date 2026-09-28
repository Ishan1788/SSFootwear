# SS Footwear – Digital Flagship

A premium, editorial e-commerce web experience for **SS Footwear**, one of Nepal's leading footwear manufacturers. Built to feel like a global flagship brand — clean, confident, and crafted.

![Status](https://img.shields.io/badge/status-active-success)
![Made in Nepal](https://img.shields.io/badge/made%20in-Nepal-red)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)

---

##  Overview

SS Footwear has been manufacturing premium footwear in Nepal since **1995**, supplying individual customers, retail stores, dealers, distributors, schools, hospitals, government organizations, and industries.

This website is the brand's digital flagship — designed to:

- Increase customer trust
- Drive product sales
- Generate wholesale inquiries
- Enable dealer registrations
- Showcase manufacturing capability
- Establish SS Footwear as **Nepal's premium footwear brand**

---

##  Features

### Storefront
- **Cinematic hero** with scroll-driven parallax and floating product
- **Product listing** with sticky sidebar filters (category, price, size)
- **Product detail pages** with image gallery, size selector, and feature accordions
- **Category navigation** via dropdown menu with URL-based filtering
- **Best sellers carousel** powered by Embla
- **Lifestyle gallery** with editorial grid

### Brand & Trust
- **Manufacturing timeline** — interactive history from 1995 to today
- **Factory page** — machines, artisans, step-by-step construction
- **Testimonials** — customer and dealer reviews
- **Dealer CTA** — B2B partnership program
- **Trust strip** — animated counters (years, pairs, partners)

### Contact & Support
- **Contact page** with phone, email, address, and message form
- **Dealer portal** for partnership inquiries
- **Newsletter signup** in the footer

### Experience
- Fully responsive (mobile → desktop)
- Accessibility-conscious (keyboard navigation, focus states, ARIA labels)
- SEO-ready with dynamic page titles and meta descriptions
- Performance-optimized with code splitting and lazy loading

---

##  Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 18 |
| **Language** | TypeScript 5 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Routing** | React Router DOM 6 |
| **Animation** | Framer Motion |
| **Carousel** | Embla Carousel React |
| **Data Fetching** | TanStack Query (v5) |
| **Icons** | Material Symbols |
| **Fonts** | Manrope, Inter, IBM Plex Sans |

---

##  Project Structure

```
ssfootwear/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Local images (shoes, machines, etc.)
│   ├── components/
│   │   ├── HeroSection.tsx     # Animated hero
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/
│   │       ├── ProductCard.tsx
│   │       └── SectionHeading.tsx
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Factory.tsx
│   │   ├── DealerPortal.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── index.css               # Tailwind base + custom styles
│   └── main.tsx                # App entry, router, providers
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

##  Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or `pnpm` / `yarn`)

### Installation

```bash
# Clone the repository
git clone https://github.com/Ishan1788/SSFootwear.git

# Navigate into the project
cd SSFootwear

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

The optimized build output goes to `dist/`.

### Preview the Build

```bash
npm run preview
```

---

##  Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero, categories, best sellers, timeline, testimonials |
| `/products` | Products | Listing with filter sidebar (category, price, size) |
| `/products/:id` | Product Detail | Gallery, size selector, features |
| `/factory` | Factory | Machines, artisans, step-by-step construction |
| `/dealer` | Dealer Portal | B2B partnership program |
| `/about` | About | Brand story |
| `/contact` | Contact | Contact info + message form |
| `*` | 404 | Page not found |

---

##  Design System

### Colours

| Purpose | Hex |
|---------|-----|
| Primary | `#0F2744` |
| Secondary | `#2E5EAA` |
| Accent | `#E66A1F` |
| Background | `#FAFAF8` |
| Surface | `#FFFFFF` |
| Muted Background | `#F3F6F8` |
| Text Primary | `#111827` |
| Text Secondary | `#6B7280` |
| Border | `#E5E7EB` |
| Success | `#16A34A` |
| Error | `#DC2626` |

### Typography

- **Headings** – Manrope (700–800)
- **Body** – Inter
- **Captions / Labels** – IBM Plex Sans

### Spacing Tokens

Defined in `tailwind.config.js`:
- `margin-mobile` – 20px
- `margin-desktop` – 64px
- `gutter` – 24px
- `section-gap` – 120px
- `container-max` – 1440px

---

##  Local Assets

Place product and factory images in `src/assets/`. Example structure:

```
src/assets/
├── black.png
├── doco 2.jpg
├── eila.jpg
├── gumyellow.jpg
├── panda bk.jpg
├── pattern.png
├── pink.png
├── schoolblack.jpg
├── shoe.png
├── sport.png
├── sportshoe.jpg
├── trad.png
├── white.jpg
├── Hydraulic.jpg
├── Rotary.jpg
├── EVA.jpg
├── PVC.jpg
└── Sewing.jpg
```

> **Tip:** Avoid spaces in filenames (e.g., rename `doco 2.jpg` → `doco2.jpg`).

---

##  Key Implementation Notes

### Filtering

`Products.tsx` reads the `?category=` query parameter, allowing the navbar to deep-link into filtered views:

```
/products?category=men
/products?category=sports
```

### Hero Animation

The hero uses Framer Motion’s `useScroll` + `useSpring` for a subtle, premium parallax effect. Text and product move at different speeds on scroll.

### Code Splitting

All pages are lazy-loaded via `React.lazy` and rendered through `<Suspense>` in `main.tsx` for faster initial load.

### SEO

Each page sets its own `document.title` and meta description via `useEffect`.

---

##  Deployment

This project deploys cleanly to **Vercel**, **Netlify**, or any static host.

### Vercel

1. Push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Vite and builds it.
4. Done.

If the build fails with unused import errors, ensure all imports in `.tsx` files are actually used, or disable the `noUnusedLocals` rule in `tsconfig.json`.

### Manual (Static)

```bash
npm run build
# Upload the contents of /dist to your host
```

---

##  Build Troubleshooting

Common issues and fixes:

| Error | Fix |
|-------|-----|
| `Cannot find module '../components/shared/SectionHeading'` | Ensure the folder is lowercase `shared` and the file exists |
| `'X' is declared but its value is never read` | Remove unused imports or disable `noUnusedLocals` in `tsconfig.json` |
| `Cannot find module './pages/X'` | Ensure the page file exists and is default-exported |
| White screen | Check console for React hook errors — often due to mismatched versions |

---

##  License

© 2024 SS Footwear Nepal. All rights reserved.

Crafted with precision in **Nepal** 🇳🇵.

---

##  Contributing

This is a private brand website. For partnership or wholesale inquiries, contact:

- **Phone:** +977 982-3802030
- **Email:** ssfootwearne@gmail.com
- **Address:** Jadibuti, Kathmandu, Nepal
- **Factory:** Mechinagar-6, Kakarvitta, Jhapa, Nepal

---

##  Credits

- Design & Engineering — SS Footwear Digital Team
- Fonts — Google Fonts (Manrope, Inter, IBM Plex Sans)
- Icons — Material Symbols
- Inspiration — Apple, Nike, Bellroy, Allbirds, Patagonia, Dyson, Adidas
