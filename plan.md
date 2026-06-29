# BRUTALIST PORTFOLIO — MASTER BLUEPRINT
> Stack: React (Vite) · TypeScript · Tailwind CSS · Framer Motion · Lucide React  
> Aesthetic: Neo-Brutalism — raw, intentional, unapologetically bold.

---

## TABLE OF CONTENTS

1. [Project Overview & Concept](#1-project-overview--concept)
2. [Architecture & File Structure](#2-architecture--file-structure)
3. [Tech Stack & Configuration](#3-tech-stack--configuration)
4. [Core Pages & Components Breakdown](#4-core-pages--components-breakdown)
5. [Interaction & Animation Guide](#5-interaction--animation-guide)
6. [Step-by-Step Implementation Roadmap](#6-step-by-step-implementation-roadmap)

---

## 1. PROJECT OVERVIEW & CONCEPT

### 1.1 Konsep Portofolio

Website ini adalah portofolio pribadi yang dirancang dengan gaya **Neo-Brutalism** — sebuah respons terhadap desain web yang terlalu "halus", generik, dan menjilat. Filosofinya: **struktur adalah pesan itu sendiri**. Tidak ada gradasi samar, tidak ada card dengan `border-radius: 2rem`, tidak ada warna pastel menenangkan. Semuanya terlihat jelas, mentah, dan *on-purpose*.

Tujuan website:
- Memperkenalkan diri sebagai developer/designer dengan kepribadian yang kuat dan karya yang berbicara sendiri.
- Menampilkan proyek terbaik dengan cara yang tidak bisa diabaikan.
- Menjadi bukti hidup dari kemampuan teknis dan estetik pemiliknya.

**Tagline desain:** *"Built different. Literally."*

---

### 1.2 Karakteristik Desain Neo-Brutalism yang Diterapkan

| Elemen | Spesifikasi Brutalist |
|---|---|
| **Warna Latar** | Putih `#FFFFFF` atau Krem `#FFFBF0` sebagai kanvas |
| **Warna Aksen** | Kuning `#FFE500`, Merah `#FF3C3C`, Biru `#0057FF`, Hijau Neon `#00FF85` |
| **Border** | `border: 3px solid #000` atau `4px solid #000` — tidak ada pengecualian |
| **Box Shadow** | `4px 4px 0px 0px #000` — menciptakan efek "terangkat" yang kaku dan kuat |
| **Tipografi** | Display: `Space Grotesk` atau `Syne` (raksasa, ≥ 6rem di hero). Body: `JetBrains Mono` atau `IBM Plex Mono` untuk nuansa teknikal |
| **Grid** | Asimetris, 12-kolom, elemen boleh menonjol keluar dari container |
| **Hover Effect** | Elemen "bergeser" 2-4px ke kanan-bawah, shadow hilang — efek "tertekan" |
| **Foto/Gambar** | Grayscale atau dengan overlay warna solid aksen, border hitam tebal |
| **Dekorasi** | Shapes geometris (persegi, segitiga) sebagai elemen dekoratif mentah |
| **Link** | Underline tebal, langsung terlihat, tidak tersembunyi |
| **Whitespace** | Digunakan dengan *sengaja*, bukan untuk "breathing room" standar |

---

### 1.3 Design Token Summary

```
PALETTE (4 warna inti + 1 teks + 1 background)
  --brutal-black:   #000000   ← border, teks utama, shadow
  --brutal-white:   #FFFBF0   ← background canvas
  --brutal-yellow:  #FFE500   ← aksen utama / hero highlight
  --brutal-red:     #FF3C3C   ← call-to-action / warning accent
  --brutal-blue:    #0057FF   ← link / skill badge
  --brutal-green:   #00FF85   ← success / project tag (pilih 2-3 aksen saja)

TYPOGRAPHY
  Display  → "Space Grotesk", weights 700–800, tracking -0.02em
  Mono     → "JetBrains Mono", weights 400–500, untuk code snippet & label
  Body     → "Space Grotesk", weight 400, line-height 1.6

SPACING SCALE (Tailwind custom)
  brutal-xs:  6px
  brutal-sm:  12px
  brutal-md:  24px
  brutal-lg:  48px
  brutal-xl:  96px

BORDER
  default: 3px solid #000
  thick:   5px solid #000

SHADOW
  brutal-sm:  2px 2px 0px 0px #000
  brutal:     4px 4px 0px 0px #000
  brutal-lg:  8px 8px 0px 0px #000
  brutal-xl:  12px 12px 0px 0px #000
```

---

## 2. ARCHITECTURE & FILE STRUCTURE

### 2.1 Inisialisasi Project

```bash
npm create vite@latest brutal-portfolio -- --template react-ts
cd brutal-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react
npm install @fontsource/space-grotesk @fontsource/jetbrains-mono
```

---

### 2.2 Struktur Folder Lengkap

```
brutal-portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.png             ← Open Graph image untuk social sharing
│   └── noise.png                ← Tekstur noise opsional untuk background
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── avatar.jpg       ← Foto profil (akan di-grayscale via CSS)
│   │   │   └── projects/        ← Screenshots / mockup tiap proyek
│   │   │       ├── project-1.png
│   │   │       └── project-2.png
│   │   └── icons/               ← SVG ikon custom (jika ada)
│   │
│   ├── components/
│   │   │
│   │   ├── ui/                  ← Primitive UI components (atom level)
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Tag.tsx
│   │   │   └── Divider.tsx
│   │   │
│   │   ├── layout/              ← Struktur halaman
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   │
│   │   ├── sections/            ← Blok konten per-halaman (molecule level)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   └── common/              ← Komponen reusable lintas halaman
│   │       ├── Marquee.tsx      ← Teks berjalan horizontal
│   │       ├── CursorFollower.tsx ← Custom cursor (opsional)
│   │       ├── SectionLabel.tsx ← Label "[01 — ABOUT]"
│   │       ├── ProjectCard.tsx
│   │       └── SkillBar.tsx
│   │
│   ├── hooks/                   ← Custom React hooks
│   │   ├── useScrollProgress.ts
│   │   ├── useInView.ts         ← Deteksi elemen masuk viewport
│   │   └── useMousePosition.ts
│   │
│   ├── pages/                   ← Route-level components
│   │   ├── HomePage.tsx
│   │   └── ProjectDetailPage.tsx ← (opsional, jika ada halaman detail)
│   │
│   ├── data/                    ← Static data / "database" lokal
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   │
│   ├── types/                   ← TypeScript interfaces & types
│   │   └── index.ts
│   │
│   ├── utils/                   ← Helper functions
│   │   └── cn.ts                ← Class name merger (clsx + tailwind-merge)
│   │
│   ├── styles/
│   │   └── globals.css          ← Tailwind directives + CSS custom properties
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── index.html
└── package.json
```

---

## 3. TECH STACK & CONFIGURATION

### 3.1 `tailwind.config.js` — Tema Brutalism Lengkap

```javascript
// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ─── COLORS ──────────────────────────────────────────────────────
      colors: {
        brutal: {
          black:  '#000000',
          white:  '#FFFBF0',
          yellow: '#FFE500',
          red:    '#FF3C3C',
          blue:   '#0057FF',
          green:  '#00FF85',
          pink:   '#FF6FD8',
          // Shades untuk variasi
          'yellow-dark': '#CCBA00',
          'red-dark':    '#CC2E2E',
          'blue-dark':   '#0040CC',
        },
      },

      // ─── TYPOGRAPHY ──────────────────────────────────────────────────
      fontFamily: {
        display: ['"Space Grotesk"', ...fontFamily.sans],
        mono:    ['"JetBrains Mono"', ...fontFamily.mono],
        sans:    ['"Space Grotesk"', ...fontFamily.sans],
      },
      fontSize: {
        // Skala display raksasa untuk hero
        'display-xl': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3rem, 7vw,  6rem)', { lineHeight: '1.0',  letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 5vw,  4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },

      // ─── BORDER ──────────────────────────────────────────────────────
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      borderColor: {
        DEFAULT: '#000000',
      },

      // ─── BOX SHADOW ──────────────────────────────────────────────────
      // Kunci utama neo-brutalism: shadow solid, bukan blur
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal':    '4px 4px 0px 0px #000000',
        'brutal-md': '6px 6px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-xl': '12px 12px 0px 0px #000000',
        // Variasi warna shadow
        'brutal-yellow': '4px 4px 0px 0px #FFE500',
        'brutal-red':    '4px 4px 0px 0px #FF3C3C',
        'brutal-blue':   '4px 4px 0px 0px #0057FF',
        // Shadow putih (untuk dark background)
        'brutal-white':  '4px 4px 0px 0px #FFFBF0',
        // Reset (untuk efek "tertekan" saat hover/active)
        'none': 'none',
      },

      // ─── SPACING ─────────────────────────────────────────────────────
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },

      // ─── ANIMATION ───────────────────────────────────────────────────
      keyframes: {
        // Marquee scroll horizontal
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Efek glitch teks
        glitch: {
          '0%, 100%': { clipPath: 'inset(0 0 100% 0)', transform: 'translate(0)' },
          '20%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-4px, 2px)' },
          '40%': { clipPath: 'inset(50% 0 30% 0)', transform: 'translate(4px, -2px)' },
          '60%': { clipPath: 'inset(80% 0 5%  0)', transform: 'translate(-2px, 4px)' },
          '80%': { clipPath: 'inset(10% 0 80% 0)', transform: 'translate(2px, -4px)' },
        },
        // Blink cursor terminal
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      animation: {
        'marquee':       'marquee 20s linear infinite',
        'marquee-slow':  'marquee 35s linear infinite',
        'marquee-fast':  'marquee 10s linear infinite',
        'glitch':        'glitch 0.5s steps(2) infinite',
        'blink':         'blink 1s step-end infinite',
      },

      // ─── GRID ────────────────────────────────────────────────────────
      gridTemplateColumns: {
        'brutal': 'repeat(12, 1fr)',
        'brutal-auto': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [],
}
```

---

### 3.2 `src/styles/globals.css` — CSS Global & Custom Properties

```css
/* src/styles/globals.css */
@import '@fontsource/space-grotesk/400.css';
@import '@fontsource/space-grotesk/600.css';
@import '@fontsource/space-grotesk/700.css';
@import '@fontsource/space-grotesk/800.css';
@import '@fontsource/jetbrains-mono/400.css';
@import '@fontsource/jetbrains-mono/500.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── CSS CUSTOM PROPERTIES ─────────────────────────────────────── */
:root {
  --brutal-border: 3px solid #000;
  --brutal-border-thick: 5px solid #000;
  --brutal-shadow: 4px 4px 0px 0px #000;
  --brutal-shadow-lg: 8px 8px 0px 0px #000;
  --brutal-radius: 0px; /* Zero border radius — law of the land */
  --brutal-transition: 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* ─── BASE RESET ─────────────────────────────────────────────────── */
@layer base {
  *, *::before, *::after {
    border-radius: 0 !important; /* Zero tolerance untuk rounded corners */
  }

  html {
    scroll-behavior: smooth;
    cursor: crosshair; /* Cursor kustom khas brutalism */
  }

  body {
    @apply bg-brutal-white text-brutal-black font-sans;
    font-feature-settings: 'kern' 1, 'liga' 1;
  }

  ::selection {
    background-color: #FFE500;
    color: #000;
  }

  /* Scrollbar kustom */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #FFFBF0; border-left: 2px solid #000; }
  ::-webkit-scrollbar-thumb { background: #000; }
  ::-webkit-scrollbar-thumb:hover { background: #FF3C3C; }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-bold leading-none tracking-tight;
  }

  a {
    @apply underline decoration-2 underline-offset-2;
  }

  img {
    /* Semua gambar default grayscale — bisa di-override per komponen */
    filter: grayscale(100%);
    transition: filter 300ms ease;
  }

  img:hover {
    filter: grayscale(0%);
  }
}

/* ─── COMPONENT LAYER ────────────────────────────────────────────── */
@layer components {
  /* Brutal button base */
  .btn-brutal {
    @apply 
      inline-flex items-center justify-center gap-2
      px-6 py-3
      font-display font-bold text-sm uppercase tracking-widest
      border-3 border-brutal-black
      shadow-brutal
      transition-all duration-150
      cursor-pointer
      no-underline;
  }

  .btn-brutal:hover {
    @apply translate-x-[3px] translate-y-[3px] shadow-none;
  }

  .btn-brutal:active {
    @apply translate-x-[4px] translate-y-[4px] shadow-none;
  }

  /* Brutal card base */
  .card-brutal {
    @apply 
      border-3 border-brutal-black
      shadow-brutal
      bg-brutal-white
      transition-all duration-150;
  }

  .card-brutal:hover {
    @apply translate-x-[3px] translate-y-[3px] shadow-none;
  }

  /* Noise texture overlay */
  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/noise.png');
    opacity: 0.03;
    pointer-events: none;
  }
}

/* ─── UTILITY LAYER ──────────────────────────────────────────────── */
@layer utilities {
  /* Teks dengan outline (stroke) */
  .text-outline {
    -webkit-text-stroke: 2px #000;
    color: transparent;
  }

  .text-outline-white {
    -webkit-text-stroke: 2px #FFFBF0;
    color: transparent;
  }

  /* Horizontal marquee track */
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee var(--marquee-speed, 20s) linear infinite;
  }

  /* Staggered grid item */
  .brutal-stagger {
    transition-delay: calc(var(--index, 0) * 80ms);
  }
}
```

---

### 3.3 `src/types/index.ts` — TypeScript Interfaces

```typescript
// src/types/index.ts

// ─── PROJECT ──────────────────────────────────────────────────────
export interface Project {
  id:          string;
  title:       string;
  slug:        string;
  description: string;           // Satu kalimat tajam
  longDesc?:   string;           // Untuk halaman detail
  tags:        string[];         // ['React', 'TypeScript', 'API']
  accentColor: string;           // Hex — warna background card
  image:       string;           // Path ke gambar
  liveUrl?:    string;
  repoUrl?:    string;
  year:        number;
  featured:    boolean;
}

// ─── SKILL ────────────────────────────────────────────────────────
export interface Skill {
  id:         string;
  name:       string;
  level:      number;            // 0–100
  category:   SkillCategory;
  icon?:      string;            // Nama Lucide icon
}

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'devops' 
  | 'design' 
  | 'tools';

// ─── EXPERIENCE ───────────────────────────────────────────────────
export interface Experience {
  id:          string;
  company:     string;
  role:        string;
  period:      string;           // "Jan 2022 – Sekarang"
  description: string[];        // Array of bullet points
  tags:        string[];
  current:     boolean;
}

// ─── NAV ITEM ─────────────────────────────────────────────────────
export interface NavItem {
  label:  string;
  href:   string;
  index:  string;                // "[01]", "[02]", dst.
}

// ─── CONTACT FORM ─────────────────────────────────────────────────
export interface ContactForm {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

// ─── SOCIAL LINK ──────────────────────────────────────────────────
export interface SocialLink {
  platform: string;
  url:      string;
  icon:     string;             // Nama Lucide icon
}
```

---

### 3.4 `src/utils/cn.ts` — Class Name Utility

```typescript
// src/utils/cn.ts
// Install: npm install clsx tailwind-merge
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

> **Catatan:** Install `clsx` dan `tailwind-merge` dengan:  
> `npm install clsx tailwind-merge`

---

### 3.5 `src/data/projects.ts` — Sample Data

```typescript
// src/data/projects.ts
import { Project } from '@/types'

export const projects: Project[] = [
  {
    id:          '1',
    title:       'CRUNCH — Expense Tracker',
    slug:        'crunch-expense-tracker',
    description: 'Aplikasi pelacak pengeluaran real-time dengan visualisasi data yang kasar.',
    tags:        ['React', 'TypeScript', 'Supabase', 'Recharts'],
    accentColor: '#FFE500',
    image:       '/images/projects/crunch.png',
    liveUrl:     'https://crunch-app.vercel.app',
    repoUrl:     'https://github.com/username/crunch',
    year:        2024,
    featured:    true,
  },
  {
    id:          '2',
    title:       'BLOC — Design System',
    slug:        'bloc-design-system',
    description: 'Design system berbasis komponen neo-brutalist untuk tim produk.',
    tags:        ['React', 'Storybook', 'Tailwind', 'Figma'],
    accentColor: '#0057FF',
    image:       '/images/projects/bloc.png',
    repoUrl:     'https://github.com/username/bloc',
    year:        2024,
    featured:    true,
  },
]
```

---

## 4. CORE PAGES & COMPONENTS BREAKDOWN

### 4.1 Halaman Utama (`HomePage.tsx`)

Halaman ini adalah *single long-scroll page* yang terdiri dari sections berurutan:

```
[NAVBAR]
    ↓
[HERO SECTION]          ← Tipografi raksasa, CTA, foto dengan border
    ↓
[MARQUEE STRIP]         ← Teks berjalan "AVAILABLE FOR WORK · OPEN TO COLLABORATE ·"
    ↓
[ABOUT SECTION]         ← Teks tentang diri, foto, stats
    ↓
[SKILLS SECTION]        ← Grid skill badge / progress bar
    ↓
[FEATURED PROJECTS]     ← Grid project cards besar
    ↓
[EXPERIENCE SECTION]    ← Timeline horizontal atau vertical
    ↓
[CONTACT SECTION]       ← Form + info kontak
    ↓
[FOOTER]
```

---

### 4.2 Component: `Navbar.tsx`

**Desain:** Asimetris — logo di kiri dengan border box, navigasi di kanan, tombol CTA dengan background kuning.

```tsx
// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'

const navItems = [
  { label: 'About',    href: '#about',    index: '01' },
  { label: 'Work',     href: '#projects', index: '02' },
  { label: 'Skills',   href: '#skills',   index: '03' },
  { label: 'Contact',  href: '#contact',  index: '04' },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-brutal-white border-b-3 border-brutal-black'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ── LOGO ── */}
        <a
          href="/"
          className={cn(
            'font-display font-black text-xl uppercase tracking-tighter',
            'border-3 border-brutal-black px-3 py-1',
            'no-underline hover:bg-brutal-yellow transition-colors'
          )}
        >
          YourName<span className="text-brutal-red">.</span>
        </a>

        {/* ── DESKTOP NAV ── */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  'font-mono text-xs uppercase tracking-widest',
                  'px-3 py-2 no-underline',
                  'hover:bg-brutal-black hover:text-brutal-white',
                  'transition-colors duration-100',
                  'border-3 border-transparent hover:border-brutal-black'
                )}
              >
                <span className="text-brutal-red mr-1">[{item.index}]</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA BUTTON ── */}
        <a
          href="#contact"
          className="hidden md:block btn-brutal bg-brutal-yellow hover:bg-brutal-yellow"
        >
          Hire Me
        </a>

        {/* ── MOBILE MENU TOGGLE ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border-3 border-brutal-black p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brutal-white border-b-3 border-brutal-black overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-0">
              {navItems.map((item) => (
                <li key={item.href} className="border-b-3 border-brutal-black last:border-0">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 py-4 font-display font-bold text-lg no-underline hover:pl-4 transition-all"
                  >
                    <span className="font-mono text-xs text-brutal-red">[{item.index}]</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
```

---

### 4.3 Component: `HeroSection.tsx`

**Desain:** Tipografi yang mendominasi layar penuh. Nama sebagai headline raksasa. Foto dengan border hitam tebal dan offset shadow besar. Teks deskripsi singkat + dua tombol CTA.

```tsx
// src/components/sections/HeroSection.tsx
import { motion } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// Variants animasi masuk (staggered)
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden:  { y: 60,  opacity: 0 },
  visible: { y: 0,   opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
      >
        {/* ── KOLOM KIRI: TEKS ── */}
        <div className="lg:col-span-8 space-y-6">
          {/* Label status */}
          <motion.div variants={itemVariants}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] bg-brutal-green border-3 border-brutal-black px-3 py-1 inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-brutal-black rounded-none inline-block" />
              Available for Work
            </span>
          </motion.div>

          {/* Headline raksasa */}
          <motion.h1
            variants={itemVariants}
            className="text-display-xl font-display font-black leading-none tracking-tighter"
          >
            {/* Nama dengan outline effect pada kata kedua */}
            CREATIVE<br />
            <span className="text-outline">DEVELOPER</span><br />
            <span className="text-brutal-yellow bg-brutal-black px-4 inline-block">&amp; DESIGNER</span>
          </motion.h1>

          {/* Deskripsi singkat */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg max-w-xl leading-relaxed"
          >
            Saya membangun produk digital yang{' '}
            <strong className="underline decoration-brutal-yellow decoration-4">
              berfungsi dengan baik
            </strong>{' '}
            dan terlihat tidak seperti yang lain. Berspesialisasi di React, TypeScript, dan pengalaman pengguna yang tidak membosankan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href="#projects">
              Lihat Karya Saya <ArrowDownRight size={20} />
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Hubungi Saya
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-3 pt-2">
            {[
              { href: 'https://github.com/username',  icon: <Github size={18} />,   label: 'GitHub' },
              { href: 'https://linkedin.com/in/user', icon: <Linkedin size={18} />, label: 'LinkedIn' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="border-3 border-brutal-black p-2 hover:bg-brutal-black hover:text-brutal-white transition-colors no-underline"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── KOLOM KANAN: FOTO ── */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 relative"
        >
          {/* Background offset block */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-brutal-yellow border-3 border-brutal-black" />
          {/* Foto */}
          <div className="relative border-3 border-brutal-black overflow-hidden aspect-[3/4]">
            <img
              src="/images/avatar.jpg"
              alt="Foto profil"
              className="w-full h-full object-cover"
              // Hover: warna kembali (lihat globals.css)
            />
            {/* Overlay label */}
            <div className="absolute bottom-0 left-0 right-0 bg-brutal-black text-brutal-white p-3">
              <p className="font-mono text-xs uppercase tracking-widest">
                YourName — Web Developer
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-16 flex items-center gap-3"
      >
        <div className="w-px h-16 bg-brutal-black" />
        <span className="font-mono text-xs uppercase tracking-widest rotate-90 origin-left translate-y-6">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
```

---

### 4.4 Component: `Button.tsx` — Primitive Reusable

```tsx
// src/components/ui/Button.tsx
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  ButtonVariant
  size?:     ButtonSize
  href?:     string              // Render sebagai <a> jika ada
  external?: boolean
  children:  React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-brutal-yellow text-brutal-black hover:bg-brutal-yellow',
  secondary: 'bg-brutal-black  text-brutal-white hover:bg-brutal-black',
  outline:   'bg-transparent   text-brutal-black hover:bg-brutal-black hover:text-brutal-white',
  ghost:     'bg-transparent   text-brutal-black border-transparent hover:border-brutal-black',
  danger:    'bg-brutal-red    text-brutal-white hover:bg-brutal-red',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-4   text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, external, className, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center gap-2',
      'font-display font-bold uppercase tracking-wider',
      'border-3 border-brutal-black',
      'shadow-brutal',
      // Hover: geser + hilangkan shadow
      'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      'transition-all duration-100',
      'cursor-pointer no-underline',
      variantClasses[variant],
      sizeClasses[size],
      className
    )

    if (href) {
      return (
        <a
          href={href}
          className={baseClasses}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
```

---

### 4.5 Component: `Card.tsx` — Primitive Reusable

```tsx
// src/components/ui/Card.tsx
import { cn } from '@/utils/cn'

interface CardProps {
  children:     React.ReactNode
  className?:   string
  accent?:      string        // Warna hex untuk top border / background
  hoverable?:   boolean
  onClick?:     () => void
}

export function Card({ children, className, accent, hoverable = true, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'border-3 border-brutal-black bg-brutal-white',
        'shadow-brutal',
        hoverable && [
          'hover:translate-x-[4px] hover:translate-y-[4px]',
          'hover:shadow-none',
          'transition-all duration-150',
          onClick && 'cursor-pointer',
        ],
        className
      )}
      style={accent ? { borderTopColor: accent, borderTopWidth: '6px' } : undefined}
    >
      {children}
    </div>
  )
}
```

---

### 4.6 Component: `ProjectCard.tsx` — Card Proyek

```tsx
// src/components/common/ProjectCard.tsx
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Project } from '@/types'
import { cn } from '@/utils/cn'

interface ProjectCardProps {
  project: Project
  index:   number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card
        accent={project.accentColor}
        className="group overflow-hidden"
      >
        {/* ── GAMBAR ── */}
        <div
          className="relative overflow-hidden border-b-3 border-brutal-black aspect-video"
          style={{ backgroundColor: project.accentColor }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay nomor proyek */}
          <div className="absolute top-3 left-3 font-mono text-xs bg-brutal-black text-brutal-white px-2 py-1">
            [{String(index + 1).padStart(2, '0')}]
          </div>
        </div>

        {/* ── KONTEN ── */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display font-black text-xl leading-tight">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-brutal-black/50 shrink-0">
              {project.year}
            </span>
          </div>

          {/* Deskripsi */}
          <p className="font-sans text-sm leading-relaxed text-brutal-black/80">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2 border-t-3 border-brutal-black">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider',
                  'no-underline hover:underline hover:decoration-2'
                )}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider',
                  'no-underline hover:underline hover:decoration-2'
                )}
              >
                <Github size={14} /> Source Code
              </a>
            )}
            <a
              href={`/projects/${project.slug}`}
              className={cn(
                'ml-auto flex items-center gap-1 font-display font-bold text-xs uppercase',
                'no-underline border-3 border-brutal-black px-3 py-1.5',
                'hover:bg-brutal-black hover:text-brutal-white transition-colors'
              )}
            >
              Detail <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
```

---

### 4.7 Component: `Marquee.tsx` — Teks Berjalan

```tsx
// src/components/common/Marquee.tsx
import { cn } from '@/utils/cn'

interface MarqueeProps {
  items:        string[]
  speed?:       'slow' | 'normal' | 'fast'
  direction?:   'left' | 'right'
  separator?:   string
  className?:   string
  bgColor?:     string
  textColor?:   string
}

const speedMap = {
  slow:   'animate-marquee-slow',
  normal: 'animate-marquee',
  fast:   'animate-marquee-fast',
}

export function Marquee({
  items,
  speed      = 'normal',
  direction  = 'left',
  separator  = '★',
  className,
  bgColor    = '#000',
  textColor  = '#FFE500',
}: MarqueeProps) {
  // Double items untuk seamless loop
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div
      className={cn(
        'overflow-hidden py-4 border-y-3 border-brutal-black',
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={cn(
          'flex whitespace-nowrap',
          speedMap[speed],
          direction === 'right' && '[animation-direction:reverse]'
        )}
        style={{ color: textColor }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 font-display font-black text-base uppercase tracking-widest">
            {item}
            <span className="text-brutal-red opacity-80">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Penggunaan di halaman ──────────────────────────────────────────
// <Marquee
//   items={['Available for Work', 'Based in Jakarta', 'Open to Remote', 'Let\'s Build Together']}
//   speed="normal"
//   bgColor="#000"
//   textColor="#FFE500"
// />
```

---

### 4.8 Component: `Badge.tsx` & `SectionLabel.tsx`

```tsx
// src/components/ui/Badge.tsx
import { cn } from '@/utils/cn'

interface BadgeProps {
  children:  React.ReactNode
  color?:    'black' | 'yellow' | 'red' | 'blue' | 'green'
  className?: string
}

const colorMap = {
  black:  'bg-brutal-black  text-brutal-white',
  yellow: 'bg-brutal-yellow text-brutal-black',
  red:    'bg-brutal-red    text-brutal-white',
  blue:   'bg-brutal-blue   text-brutal-white',
  green:  'bg-brutal-green  text-brutal-black',
}

export function Badge({ children, color = 'black', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-xs uppercase tracking-wider',
        'px-2 py-0.5 border-2 border-brutal-black',
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  )
}
```

```tsx
// src/components/common/SectionLabel.tsx
// Komponen "[01 — ABOUT]" untuk label tiap section

interface SectionLabelProps {
  index:   string         // "01", "02", dst.
  title:   string
  accent?: string         // Warna hex aksen
}

export function SectionLabel({ index, title, accent = '#FFE500' }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-xs text-brutal-red">[{index}]</span>
      <div
        className="h-px flex-1 border-t-3 border-brutal-black max-w-[60px]"
        style={{ borderColor: accent }}
      />
      <h2 className="font-display font-black text-sm uppercase tracking-[0.2em]">
        {title}
      </h2>
      <div className="h-px flex-1 border-t-3 border-brutal-black opacity-20" />
    </div>
  )
}
```

---

### 4.9 Component: `SkillsSection.tsx`

```tsx
// src/components/sections/SkillsSection.tsx
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/common/SectionLabel'
import { Badge } from '@/components/ui/Badge'
import { skills } from '@/data/skills'
import { SkillCategory } from '@/types'

const categories: { key: SkillCategory; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend'  },
  { key: 'devops',   label: 'DevOps'   },
  { key: 'design',   label: 'Design'   },
  { key: 'tools',    label: 'Tools'    },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionLabel index="03" title="Skills & Tools" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-3 border-brutal-black">
        {categories.map((cat, catIdx) => {
          const catSkills = skills.filter((s) => s.category === cat.key)
          if (!catSkills.length) return null
          return (
            <div
              key={cat.key}
              className="p-8 border-b-3 border-r-3 border-brutal-black odd:border-r-0 lg:odd:border-r-3 last:border-b-0"
            >
              <h3 className="font-display font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="text-brutal-red font-mono">[{String(catIdx + 1).padStart(2, '0')}]</span>
                {cat.label}
              </h3>

              <div className="space-y-4">
                {catSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-sans font-semibold text-sm">{skill.name}</span>
                      <span className="font-mono text-xs text-brutal-black/50">{skill.level}%</span>
                    </div>
                    {/* Progress bar khas brutalism */}
                    <div className="h-3 border-3 border-brutal-black bg-brutal-white overflow-hidden">
                      <motion.div
                        className="h-full bg-brutal-yellow"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
```

---

### 4.10 Component: `ContactSection.tsx`

```tsx
// src/components/sections/ContactSection.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Calendar } from 'lucide-react'
import { SectionLabel } from '@/components/common/SectionLabel'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/types'

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: '', email: '', subject: '', message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Integrate dengan Formspree / EmailJS / API Route di sini
    try {
      await new Promise((res) => setTimeout(res, 1500)) // Simulasi
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = [
    'w-full px-4 py-3',
    'font-mono text-sm',
    'border-3 border-brutal-black bg-brutal-white',
    'placeholder:text-brutal-black/30',
    'focus:outline-none focus:border-brutal-blue focus:shadow-brutal-blue',
    'transition-shadow duration-100',
  ].join(' ')

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionLabel index="05" title="Get In Touch" accent="#FF3C3C" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border-3 border-brutal-black">
        {/* ── INFO KONTAK ── */}
        <div className="lg:col-span-2 p-10 bg-brutal-black text-brutal-white border-b-3 lg:border-b-0 lg:border-r-3 border-brutal-black space-y-8">
          <div>
            <h3 className="font-display font-black text-display-md leading-none mb-4">
              Mari<br/>
              <span className="text-brutal-yellow">Berkolaborasi</span>
            </h3>
            <p className="font-sans text-sm text-brutal-white/70 leading-relaxed">
              Saya terbuka untuk proyek freelance, kerja sama jangka panjang, atau sekadar ngobrol tentang ide-ide gila kalian.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Mail size={16} />,     label: 'Email',    value: 'hello@yourname.dev' },
              { icon: <MapPin size={16} />,   label: 'Lokasi',   value: 'Jakarta, Indonesia' },
              { icon: <Calendar size={16} />, label: 'Tersedia', value: 'Mulai Jan 2025' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 border-b border-brutal-white/20 pb-4 last:border-0">
                <span className="mt-0.5 text-brutal-yellow">{icon}</span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-brutal-white/50">{label}</p>
                  <p className="font-sans text-sm font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FORM ── */}
        <div className="lg:col-span-3 p-10">
          {status === 'sent' ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 border-3 border-brutal-green p-8 shadow-brutal-lg"
            >
              <div className="text-6xl font-black text-brutal-green">✓</div>
              <h3 className="font-display font-black text-2xl">Pesan Terkirim!</h3>
              <p className="font-mono text-sm text-brutal-black/60">Saya akan membalas dalam 24–48 jam.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider">Nama</label>
                  <input name="name" value={form.name} onChange={handleChange}
                    required placeholder="John Doe" className={inputClass} />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="john@example.com" className={inputClass} />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase tracking-wider">Subjek</label>
                <input name="subject" value={form.subject} onChange={handleChange}
                  required placeholder="Kolaborasi Project / Pertanyaan" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase tracking-wider">Pesan</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  required rows={6} placeholder="Ceritakan proyek atau idemu..."
                  className={inputClass + ' resize-none'} />
              </div>
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                disabled={status === 'sending'}
                className="w-full sm:w-auto"
              >
                {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
                <Send size={18} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
```

---

## 5. INTERACTION & ANIMATION GUIDE

### 5.1 Filosofi Animasi untuk Brutalism

Neo-brutalism memiliki dua strategi animasi yang saling kontras namun sama-sama valid:

| Strategi | Deskripsi | Kapan Dipakai |
|---|---|---|
| **Staccato** | Gerakan tiba-tiba, step-function, snap-to | Hover effects, mikro-interaksi, button press |
| **Fluid (sebagai kontras)** | Easing curves yang smooth, stagger masuk | Page load, scroll reveal — membuat staccato terasa lebih dramatis |

**Prinsip utama:** Jangan animasi semuanya. Pilih 3–4 momen animasi yang paling impactful.

---

### 5.2 Setup Framer Motion — `motion.ts` Utility

```typescript
// src/utils/motion.ts
// Kumpulan variants yang sudah jadi — impor ke mana saja dibutuhkan

import { Variants } from 'framer-motion'

// ── FADE IN UP ────────────────────────────────────────────────────
export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
}

// ── FADE IN (TANPA GERAK) ─────────────────────────────────────────
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

// ── STAGGER CONTAINER ─────────────────────────────────────────────
// Gunakan pada parent untuk stagger children
export const staggerContainer = (delay = 0): Variants => ({
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: delay }
  },
})

// ── SLIDE IN LEFT ─────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
}

// ── SCALE IN ──────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  },
}

// ── BRUTAL HOVER ─────────────────────────────────────────────────
// Efek "tertekan" khas brutalism
export const brutalHover = {
  rest: {
    x: 0, y: 0,
    boxShadow: '4px 4px 0px 0px #000000',
  },
  hover: {
    x: 4, y: 4,
    boxShadow: '0px 0px 0px 0px #000000',
    transition: { duration: 0.1, ease: 'linear' }
  },
  tap: {
    x: 5, y: 5,
    boxShadow: '0px 0px 0px 0px #000000',
    transition: { duration: 0.05 }
  },
}

// ── PAGE TRANSITION ───────────────────────────────────────────────
export const pageTransition: Variants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0,  transition: { duration: 0.3 } },
  exit:     { opacity: 0, y: -20, transition: { duration: 0.2 } },
}
```

---

### 5.3 Implementasi Page Transition di `App.tsx`

```tsx
// src/App.tsx
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/pages/HomePage'
import { pageTransition } from '@/utils/motion'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            {/* Tambah route lain di sini */}
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
```

---

### 5.4 Scroll-Triggered Animations — Contoh Pattern

```tsx
// Pattern untuk scroll reveal — gunakan whileInView
// Tersedia di semua komponen section

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/motion'

function ProjectsSection() {
  return (
    <section>
      {/* Parent: stagger container */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Children: masing-masing fade in up */}
        {projects.map((project, i) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <ProjectCard project={project} index={i} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
```

---

### 5.5 Micro-Interactions Spesifik Brutalism

```tsx
// ── 1. BUTTON: BRUTAL PRESS EFFECT ───────────────────────────────
import { motion } from 'framer-motion'
import { brutalHover } from '@/utils/motion'

function BrutalButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      variants={brutalHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="px-6 py-3 border-3 border-brutal-black bg-brutal-yellow font-bold uppercase"
    >
      {children}
    </motion.button>
  )
}

// ── 2. CURSOR FOLLOWER (OPSIONAL) ──────────────────────────────────
// Tambahkan custom cursor yang mengikuti mouse dengan delay

// ── 3. GLITCH EFFECT PADA TEKS HERO ───────────────────────────────
// Gunakan animate-glitch dari tailwind.config.js
// <span className="animate-glitch">YourName</span>

// ── 4. STAGGER NUMBER COUNTER ─────────────────────────────────────
// Untuk stats di About section
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedCounter({ target, suffix = '' }: { target: number, suffix?: string }) {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count,  setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = target / 40
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 30)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-display font-black text-display-md tabular-nums">
      {count}{suffix}
    </span>
  )
}
```

---

### 5.6 `prefers-reduced-motion` — Aksesibilitas

```tsx
// src/hooks/useReducedMotion.ts
import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}

// Penggunaan di komponen:
// const reducedMotion = useReducedMotion()
// <motion.div
//   animate={{ y: reducedMotion ? 0 : [-5, 0, -5] }}
//   transition={{ repeat: reducedMotion ? 0 : Infinity }}
// />
```

---

## 6. STEP-BY-STEP IMPLEMENTATION ROADMAP

### PHASE 1: SETUP & FOUNDATION (Hari 1)

**Estimasi waktu: 2–3 jam**

```bash
# Step 1.1 — Buat project
npm create vite@latest brutal-portfolio -- --template react-ts
cd brutal-portfolio

# Step 1.2 — Install semua dependencies
npm install framer-motion lucide-react clsx tailwind-merge react-router-dom
npm install @fontsource/space-grotesk @fontsource/jetbrains-mono
npm install -D tailwindcss postcss autoprefixer @types/node

# Step 1.3 — Init Tailwind
npx tailwindcss init -p

# Step 1.4 — Setup path alias di vite.config.ts
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
})
```

```json
// tsconfig.json — tambahkan paths
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**Checklist Phase 1:**
- [ ] Project ter-create dan bisa jalan (`npm run dev`)
- [ ] `tailwind.config.js` sudah ada semua config brutalism (Section 3.1)
- [ ] `globals.css` sudah ada semua custom properties dan base styles (Section 3.2)
- [ ] Folder structure sudah dibuat sesuai Section 2.2
- [ ] `tsconfig.json` sudah ada path alias `@/*`
- [ ] `vite.config.ts` sudah ada resolve alias

---

### PHASE 2: CORE COMPONENTS (Hari 1–2)

**Estimasi waktu: 4–6 jam**

**Urutan pengerjaan (dari yang paling fundamental):**

```
[Primitives dulu — atom]
  └─ 1. utils/cn.ts
  └─ 2. types/index.ts
  └─ 3. ui/Button.tsx
  └─ 4. ui/Card.tsx
  └─ 5. ui/Badge.tsx

[Layout]
  └─ 6. layout/Container.tsx
  └─ 7. layout/Section.tsx
  └─ 8. layout/Navbar.tsx         ← Test di browser
  └─ 9. layout/Footer.tsx

[Common/Reusable]
  └─ 10. common/SectionLabel.tsx
  └─ 11. common/Marquee.tsx       ← Test loop-nya
  └─ 12. common/ProjectCard.tsx

[Utils]
  └─ 13. utils/motion.ts          ← Variants Framer Motion
  └─ 14. hooks/useReducedMotion.ts
```

**Setelah tiap komponen, test di browser.** Buat file `src/TestPage.tsx` sementara untuk render komponen isolasi:

```tsx
// src/TestPage.tsx — HAPUS setelah selesai
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Marquee } from '@/components/common/Marquee'

export function TestPage() {
  return (
    <div className="p-12 space-y-8 bg-brutal-white min-h-screen">
      <div className="flex gap-4 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
      </div>
      <Card className="p-6 max-w-sm">
        <Badge color="yellow">React</Badge>
        <p className="mt-3">Card dengan shadow brutal</p>
      </Card>
      <Marquee items={['Available for Work', 'Based in Jakarta', 'Open to Remote']} />
    </div>
  )
}
```

**Checklist Phase 2:**
- [ ] Semua primitive UI bisa dirender
- [ ] Button hover effect berfungsi (translate + shadow hilang)
- [ ] Card hover effect berfungsi
- [ ] Navbar responsive (desktop + mobile menu)
- [ ] Marquee loop seamless tanpa jitter
- [ ] Framer Motion variants berjalan smooth

---

### PHASE 3: PAGES, DATA & SECTIONS (Hari 2–3)

**Estimasi waktu: 6–8 jam**

```
[Data Layer]
  └─ 1. data/skills.ts       ← Isi data skill kamu
  └─ 2. data/projects.ts     ← Isi 3–6 proyek terbaik
  └─ 3. data/experience.ts

[Sections — urutan sesuai halaman]
  └─ 4. sections/HeroSection.tsx     ← Paling penting, kerjakan duluan
  └─ 5. sections/AboutSection.tsx
  └─ 6. sections/SkillsSection.tsx
  └─ 7. sections/ProjectsSection.tsx
  └─ 8. sections/ExperienceSection.tsx
  └─ 9. sections/ContactSection.tsx

[Pages]
  └─ 10. pages/HomePage.tsx   ← Rakit semua sections
  └─ 11. App.tsx              ← Setup routing + AnimatePresence

[Assets]
  └─ 12. Tambahkan foto profil di /public/images/avatar.jpg
  └─ 13. Tambahkan screenshot proyek di /public/images/projects/
```

**Template `data/skills.ts`:**

```typescript
// src/data/skills.ts
import { Skill } from '@/types'

export const skills: Skill[] = [
  { id: 's1', name: 'React',       level: 90, category: 'frontend' },
  { id: 's2', name: 'TypeScript',  level: 85, category: 'frontend' },
  { id: 's3', name: 'Tailwind CSS',level: 88, category: 'frontend' },
  { id: 's4', name: 'Next.js',     level: 80, category: 'frontend' },
  { id: 's5', name: 'Node.js',     level: 75, category: 'backend'  },
  { id: 's6', name: 'PostgreSQL',  level: 70, category: 'backend'  },
  { id: 's7', name: 'Docker',      level: 60, category: 'devops'   },
  { id: 's8', name: 'Figma',       level: 82, category: 'design'   },
  { id: 's9', name: 'Git',         level: 88, category: 'tools'    },
]
```

**Checklist Phase 3:**
- [ ] Semua sections ter-render di `HomePage.tsx`
- [ ] Data proyek tampil di ProjectsSection
- [ ] Data skill tampil dengan progress bar animasi
- [ ] Form kontak menampilkan state `sent` setelah submit
- [ ] Routing berfungsi (`/` dan optional `/projects/:slug`)
- [ ] Scroll antar section smooth

---

### PHASE 4: POLISH, SEO & DEPLOYMENT (Hari 3–4)

**Estimasi waktu: 3–4 jam**

#### 4a. Performance & Responsiveness

```tsx
// Checklist per breakpoint:
// - Mobile  (320px–767px):  1 kolom, tipografi diperkecil, Marquee tetap jalan
// - Tablet  (768px–1023px): 2 kolom
// - Desktop (1024px+):      layout penuh seperti desain

// Lazy load gambar
<img loading="lazy" decoding="async" src={...} alt={...} />

// Lazy load section (jika banyak konten)
import { lazy, Suspense } from 'react'
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'))
```

#### 4b. SEO & Meta Tags

```tsx
// src/components/layout/SEO.tsx
// Install: npm install react-helmet-async

import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title:       string
  description: string
  image?:      string
  url?:        string
}

export function SEO({ title, description, image, url }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image || '/og-image.png'} />
      <meta property="og:url"         content={url} />
      <meta name="twitter:card"       content="summary_large_image" />
    </Helmet>
  )
}
```

#### 4c. Deployment ke Vercel

```bash
# Option 1: Via Vercel CLI
npm install -g vercel
vercel login
vercel --prod

# Option 2: Via GitHub
# 1. Push ke GitHub
# 2. Import di vercel.com
# 3. Build Command: npm run build
# 4. Output Dir: dist
# 5. Framework: Vite

# vercel.json — untuk SPA routing
```

```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### 4d. Final Polish Checklist

- [ ] **Lighthouse Score** ≥ 90 untuk Performance, Accessibility, SEO
- [ ] **Responsiveness** ditest di 320px, 375px, 768px, 1280px, 1920px
- [ ] **Keyboard Navigation** berfungsi (Tab order masuk akal)
- [ ] **prefers-reduced-motion** direspek di semua animasi
- [ ] **`alt` text** ada di semua gambar
- [ ] **Contrast ratio** ≥ 4.5:1 untuk semua teks
- [ ] **Favicon** sudah dipasang di `public/favicon.ico`
- [ ] **OG Image** sudah dibuat dan dipasang di `public/og-image.png` (1200×630px)
- [ ] **404 Page** dibuat untuk route yang tidak ada
- [ ] **Loading state** pada form kontak berfungsi
- [ ] **Error state** pada form kontak ditangani
- [ ] Tidak ada `console.error` di browser
- [ ] Tidak ada TypeScript error (`npm run tsc --noEmit`)
- [ ] Build sukses tanpa warning (`npm run build`)

---

### PHASE 5: OPTIONAL ENHANCEMENTS (Minggu 2+)

> Fitur-fitur tambahan yang bisa diimplementasikan setelah MVP selesai.

```
[ ] Dark Mode — Balik warna: background #0A0A0A, shadow putih
[ ] Project Detail Page — /projects/:slug dengan full case study
[ ] Blog Section — MDX-powered writing area
[ ] Custom Cursor — Cursor besar yang ganti ikon saat hover elemen berbeda
[ ] Noise Texture Background — Canvas atau PNG overlay di body
[ ] Easter Egg — Konami code atau klik sequence untuk hidden page
[ ] i18n — Internasionalisasi (id/en toggle)
[ ] Sitemap & Robots.txt — Untuk SEO lebih lanjut
[ ] Google Analytics / Umami — Analytics yang privacy-friendly
[ ] Formspree/Resend Integration — Email form yang benar-benar terkirim
```

---

## APPENDIX

### A. Perintah Berguna

```bash
# Dev server
npm run dev

# Type check
npx tsc --noEmit

# Build production
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

### B. Dependencies Lengkap (`package.json` snapshot)

```json
{
  "dependencies": {
    "clsx":              "^2.1.0",
    "framer-motion":     "^11.x.x",
    "lucide-react":      "^0.383.0",
    "react":             "^18.x.x",
    "react-dom":         "^18.x.x",
    "react-helmet-async":"^2.x.x",
    "react-router-dom":  "^6.x.x",
    "tailwind-merge":    "^2.x.x",
    "@fontsource/space-grotesk":    "^5.x.x",
    "@fontsource/jetbrains-mono":   "^5.x.x"
  },
  "devDependencies": {
    "@types/node":      "^20.x.x",
    "@types/react":     "^18.x.x",
    "autoprefixer":     "^10.x.x",
    "postcss":          "^8.x.x",
    "tailwindcss":      "^3.x.x",
    "typescript":       "^5.x.x",
    "vite":             "^5.x.x",
    "@vitejs/plugin-react": "^4.x.x"
  }
}
```

### C. Font Import Order di `main.tsx`

```tsx
// src/main.tsx
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/space-grotesk/800.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import '@/styles/globals.css'          // ← Tailwind dan custom styles
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
```

### D. Referensi & Inspirasi

- [Brutalist Websites](https://brutalistwebsites.com) — Galeri website brutalist
- [Neobrutalism Components](https://www.neobrutalism.dev) — Komponen siap pakai
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — Referensi utility classes
- [Framer Motion API](https://www.framer.com/motion) — Dokumentasi lengkap
- [Space Grotesk Typeface](https://fonts.google.com/specimen/Space+Grotesk) — Font yang dipakai

---

> **Dokumentasi ini dibuat sebagai panduan coding dari nol hingga deployment.**  
> Mulai dari Phase 1, jangan skip setup awal — fondasi yang kuat menentukan kecepatan pengerjaan Phase 3 dan 4.  
>  
> Good luck, dan buatlah sesuatu yang tidak bisa dilupakan. 🖤
