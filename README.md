<div align="center">

<br/>

```
███╗   ██╗███████╗██╗  ██╗ ██████╗ ██████╗  █████╗
████╗  ██║██╔════╝╚██╗██╔╝██╔═══██╗██╔══██╗██╔══██╗
██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║██████╔╝███████║
██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║██╔══██╗██╔══██║
██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝██║  ██║██║  ██║
╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
```

### `// PORTFOLIO ARCHITECTURE — BY PIUSH MAJI`

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_LIVE_DEMO-000000?style=for-the-badge&logoColor=E8541A)](https://nexorabypiush.vercel.app/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<br/>

> *"Built to be seen. Engineered to be felt."*

<br/>

</div>

---

<br/>

## ◈ VISUAL SHOWCASE

<br/>

### 01 — Hero / Archway Landing

<div align="center">
  <img src="./public/screenshots/hero.png" alt="Nexora Hero — Symmetrical Archway Layout" width="100%" style="border-radius:8px"/>
</div>

> **The Symmetrical Archway** — A 4-layer Z-index composition. A dark industrial `PORTFOLIO` watermark anchors the canvas, layered beneath an ultra-thick 10-layer CSS 3D-extruded foreground name `PIUSH MAJI`. No UI kit, no shortcuts — entirely hand-engineered.

<br/>

---

### 02 — Projects / Cinematic Horizontal Scroll

<div align="center">
  <img src="./public/screenshots/project.png" alt="Nexora Projects — Horizontal Pin Scroll" width="100%" style="border-radius:8px"/>
</div>

> **The Horizontal Pin** — GSAP `ScrollTrigger` hijacks the vertical viewport (`pin: true`). Vertical mouse velocity is translated into horizontal movement with 0-lag scrubbing (`scrub: 1`). Each project card slides in with staggered depth offsets.

<br/>

---

### 03 — About / Biographical Architecture

<div align="center">
  <img src="./public/screenshots/skill.png" alt="Nexora About — Biographical Section" width="100%" style="border-radius:8px"/>
</div>

> **The Identity Layer** — Type-first layout featuring oversized editorial numerals, tracked-out sub-labels, and asymmetric column breaks. Every detail reinforces the Obsidian brand system: `#050505` canvas, `#E8541A` accent.

<br/>

---

### 04 — Contact / Magnetic Parallax

<div align="center">
  <img src="./public/screenshots/contact.png" alt="Nexora Contact — Magnetic Button Effects" width="100%" style="border-radius:8px"/>
</div>

> **Magnetic Interactions** — Floating 3D `.avif` shapes respond to viewport cursor tracking via absolute positioning. The CTA button uses a custom liquid-fill "button-pull" effect that snaps back on release — zero library dependency.

<br/>

---

### 05 — Mobile Responsiveness

<div align="center">
  <img src="./public/screenshots/mobile.png" alt="Nexora — Responsive Mobile View" width="55%" style="border-radius:8px"/>
</div>

> **Breakpoint Integrity** — The archway hero, horizontal scroll pin, and magnetic effects all gracefully degrade to full-viewport mobile experiences without losing the cinematic language.

<br/>

---

<br/>

## ◈ ABOUT THE PROJECT

```
STATUS ········· Production-Ready
CANVAS ·········  #050505  True Black
ACCENT ·········  #E8541A  Neon Orange
FONT (DISPLAY) · Bebas Neue
FONT (BODY) ···· Inter
TARGET FPS ····· 60fps sustained
```

Nexora is a **cinematic developer portfolio** that refuses the default. Where most developer portfolios end at a flat card grid and a hero section, Nexora constructs a full spatial environment — layered depth, physics-informed scrolling, and magnetic interaction design that signals senior craft to design agencies, engineering leads, and creative recruiters on first scroll.

The **Obsidian Brand System** (`#050505` + `#E8541A`) is not a color choice — it's a statement. Every animation, typeface decision, and spacing ratio serves a singular editorial voice.

<br/>

---

<br/>

## ◈ TECHNICAL ARCHITECTURE

<br/>

```
┌─────────────────────────────────────────────────────────────┐
│                     NEXORA STACK                            │
├──────────────┬──────────────────────────────────────────────┤
│  Framework   │  React 19 + Vite (HMR, tree-shaking)         │
│  Styling     │  TailwindCSS 3 (utility-first, purged)        │
│  Animation   │  GSAP 3 + ScrollTrigger Plugin                │
│  Typography  │  Bebas Neue (display) · Inter (body)          │
│  Assets      │  .avif (parallax) · .png (layered elements)   │
│  Deploy      │  Vercel (zero-config, edge CDN)               │
└──────────────┴──────────────────────────────────────────────┘
```

<br/>

### Animation Systems Breakdown

| System | Technique | Performance |
|--------|-----------|-------------|
| **Archway Hero** | 4-layer Z-index + CSS 3D text-shadow stacking | GPU-composited, `will-change: transform` |
| **Horizontal Pin** | GSAP ScrollTrigger `pin: true`, `scrub: 1` | rAF-synced, 0-lag |
| **Parallax Shapes** | Cursor-tracked absolute positioning | Debounced `mousemove` |
| **Magnetic Button** | Custom spring physics on `mousemove` delta | Vanilla JS, no deps |
| **Entrance Reveals** | GSAP `fromTo` stagger chains | Intersection Observer trigger |

<br/>

---

<br/>

## ◈ QUICK START

```bash
# 1 — Clone the repository
git clone https://github.com/piushmaji/Nexora.git

# 2 — Move into project root
cd nexora

# 3 — Install all dependencies (React 19, Tailwind, GSAP)
npm install

# 4 — Launch Vite dev server with HMR
npm run dev

# 5 — Production build (case-sensitive path resolution included)
npm run build
```

<br/>

> **Note on Vercel Deploys:** All asset paths in `Projects.jsx` are matched to exact filesystem casing for Linux build compatibility. Do not rename image files after cloning.

<br/>

---

<br/>

## ◈ PROJECT STRUCTURE

```
nexora/
├── public/
│   ├── screenshots/         ← README preview images
│   └── shapes/              ← .avif parallax assets
├── src/
│   ├── components/
│   │   ├── Hero.jsx          ← Archway layout + 3D type
│   │   ├── Projects.jsx      ← GSAP horizontal pin scroll
│   │   ├── About.jsx         ← Editorial biography section
│   │   └── Contact.jsx       ← Magnetic button + parallax
│   ├── styles/
│   │   └── index.css         ← Tailwind directives + CSS vars
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

<br/>

---

<br/>

## ◈ BRAND SYSTEM

```
┌──────────────────────────────────────────┐
│  OBSIDIAN BRAND SCALE                    │
│                                          │
│  ████  True Canvas    #050505            │
│  ████  Neon Accent    #E8541A            │
│  ████  Off-White      #F0EDEA            │
│  ████  Muted Text     #888580            │
│                                          │
│  DISPLAY  →  Bebas Neue  (400)           │
│  BODY     →  Inter       (400 / 500)     │
└──────────────────────────────────────────┘
```

<br/>

---

<br/>

<div align="center">

```
DESIGNED & ENGINEERED BY PIUSH MAJI
```

[![GitHub](https://img.shields.io/badge/GitHub-piushmaji-181717?style=flat-square&logo=github)](https://github.com/piushmaji)
[![Portfolio](https://img.shields.io/badge/Live_Site-nexora-E8541A?style=flat-square)](https://nexorabypiush.vercel.app/)

<br/>

*Built with obsessive attention to craft. No UI templates. No shortcuts.*

<br/>

</div>