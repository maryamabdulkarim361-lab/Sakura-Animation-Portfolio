<div align="center">

# ✦ MARYAM · 3D PORTFOLIO

### Software Developer · Python & Django · Web Applications

A cinematic portfolio with movement, depth, and personality.

**240-frame canvas hero · Pointer-driven rotation · Crimson & obsidian UI**

[![Next.js](https://img.shields.io/badge/Next.js-14-080607?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-080607?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-080607?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-080607?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

[Explore the code](https://github.com/maryamabdulkarim361-lab/3D-portfolio) · [Features](#-experience-highlights) · [Run locally](#-run-locally) · [Connect](#-connect)

</div>

---

## 🎬 Hero frame preview

![Frame from the portfolio's 240-frame hero sequence](https://raw.githubusercontent.com/maryamabdulkarim361-lab/3D-portfolio/main/public/frames/frame-001.png)

<div align="center">
  <img src="https://raw.githubusercontent.com/maryamabdulkarim361-lab/3D-portfolio/main/public/frames/frame-080.png" width="48%" alt="Hero sequence — frame 80" />
  <img src="https://raw.githubusercontent.com/maryamabdulkarim361-lab/3D-portfolio/main/public/frames/frame-160.png" width="48%" alt="Hero sequence — frame 160" />
  <p><em>Actual frame assets from the repository. These previews show the hero imagery, not screenshots of the full interface.</em></p>
</div>

## ✨ Overview

My personal portfolio brings together a cinematic hero, layered motion, and a structured presentation of my background, skills, and projects. An obsidian background with crimson, burgundy, and amber accents gives the interface a consistent visual identity.

The centerpiece is a **240-frame image sequence rendered with the HTML5 Canvas 2D API**. Mouse and touch positions determine the viewing angle, creating an interactive 3D-style experience from pre-rendered images.

## 🧩 Experience highlights

| Feature | Implementation |
| :--- | :--- |
| 🎞️ Interactive hero | 240 PNG frames mapped to pointer direction around the screen center |
| 🖱️ Mouse & touch input | Angular tracking with smooth interpolation across the rotation boundary |
| 🖼️ Progressive loading | Initial frame loads first; remaining frames load in batches of 12 |
| 📐 Adaptive canvas | Cover-style image sizing and device-pixel-ratio handling, capped at 2 |
| 🪄 Layered motion | Scroll reveals, parallax layers, and tilted project cards |
| 🧭 Portfolio navigation | Fixed navigation and a reading-progress indicator |
| 🧑‍💻 Career presentation | About, education, experience, skills, and featured-project sections |
| ✉️ Contact interactions | Copy-email action, sound feedback, and a simulated submission animation |

## 🛠️ Technology

| Layer | Tools |
| :--- | :--- |
| Application | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS, custom CSS, clsx, tailwind-merge |
| Motion | GSAP, Framer Motion, CSS transforms |
| Hero rendering | HTML5 Canvas 2D, PNG image sequence, requestAnimationFrame |
| Interface details | Lucide React, canvas-confetti, Web Audio helpers |

## ⚙️ How the hero works

1. Load the first image, then fetch the rest of the sequence in batches.
2. Measure the mouse or touch position relative to the viewport center.
3. Convert that position into an angle using `Math.atan2`.
4. Interpolate along the shortest angular path for smooth rotation.
5. Map the angle to a frame index and draw the image on the canvas.

The active home page uses `CanvasMouseHero.tsx`. A separate `CanvasScrollSequence.tsx` component also exists in the source; it is not the hero mounted by `src/app/page.tsx`.

## 🚀 Run locally

Install Node.js compatible with Next.js 14, npm, and Git.

```bash
git clone https://github.com/maryamabdulkarim361-lab/3D-portfolio.git
cd 3D-portfolio
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

The `predev` and `prebuild` scripts automatically run the frame-sync utility. It reads PNGs from `frames/` and `public/frames/`, then creates normalized names such as `frame-001.png` and `frame_001.png` under `public/frames/`.

### Production build

```bash
npm run build
npm start
```

### Available commands

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Synchronize frames and start the development server |
| `npm run build` | Synchronize frames and create a production build |
| `npm start` | Serve the production build |
| `npm run sync-frames` | Normalize frame filenames manually |
| `npm run lint` | Invoke Next.js linting; local ESLint setup may be required |

## 🗂️ Source guide

| Location | What lives here |
| :--- | :--- |
| `src/app/page.tsx` | Home-page composition and section order |
| `src/app/layout.tsx` | Root layout and site metadata |
| `src/components/CanvasMouseHero.tsx` | Frame loading, pointer tracking, and canvas rendering |
| `src/components/ProjectShowcase.tsx` | Featured-project content and visual mockups |
| `src/components/ParallaxCard.tsx` | Interactive card depth and tilt |
| `src/components/InteractiveContact.tsx` | Contact UI, copy-email action, and submission animation |
| `src/hooks/` | Mouse-parallax and scroll-velocity hooks |
| `src/lib/` | Audio helpers and shared utilities |
| `src/styles/globals.css` | Global styles and visual effects |
| `tailwind.config.ts` | Theme configuration |
| `frames/`, `public/frames/` | Hero image-sequence assets |
| `scripts/sync-frames.mjs` | Frame synchronization utility |

## 🎨 Personalize the portfolio

- Update biography, education, and experience in the corresponding section components.
- Edit skills in `TechMatrix.tsx` and project entries in `ProjectShowcase.tsx`.
- Set your contact details and social destinations in `InteractiveContact.tsx`.
- Adjust the palette in `tailwind.config.ts` and `src/styles/globals.css`.
- Replace the frame sequence and update `totalFrames` in `src/app/page.tsx` if its length changes.

## 📝 Current implementation notes

- The contact form currently simulates submission with a timer and success animation. Connect a backend or email service before using it to receive messages.
- Several social and project links currently point to generic destinations or `#contact`; replace them with the intended URLs.
- Featured-project cards include illustrative UI mockups. Their displayed telemetry is presentation content, not live measurements from those products.
- Frame assets are required for the hero. Keep the image directories available when running or deploying the application.

## 👩‍💻 About the developer

I am Maryam Abdul Karim, a Computer Science graduate with freelance front-end development experience, web and mobile project coordination experience, and a growing portfolio of Python, Django, and JavaScript applications. My interests include REST APIs, relational databases, authentication, responsive interfaces, and educational AI prototypes.

**Education:** Bachelor of Computer Science with Honours, Lahore College for Women University, 2011–2015 — degree completed.

## 🔎 More of my work

These repositories are listed in my resume. This directory is separate from the portfolio website's current project-card content, which is being aligned with my resume.

| Project | Focus | Status |
| :--- | :--- | :--- |
| [Little Lemon](https://github.com/maryamabdulkarim361-lab/little-lemon-web-application) | Django REST menu and booking APIs, token authentication, and API tests | Django capstone |
| [Metriva](https://github.com/maryamabdulkarim361-lab/Metriva) | Django and React/TypeScript conversational analytics, SQL validation, reports, and Docker configuration | Analytics project |
| [Zaiqa](https://github.com/maryamabdulkarim361-lab/Zaiqa) | Restaurant interfaces, 3D dish previews, and AR support for compatible assets/devices | Front-end prototype; database extension planned |
| [Breast Ultrasound Classifier](https://github.com/maryamabdulkarim361-lab/Ultrasound-Diagnosis-for-Breast-Cancer) | PyTorch classification, Flask interface, and Grad-CAM support | Educational AI prototype |
| [AI Database Assistant](https://github.com/maryamabdulkarim361-lab/AI-Database-Assistant) | Natural-language-to-SQL workflow, read-only validation, and analytics concepts | Documented system design |

## 🧭 Next steps

- Align website project cards, biography, experience, and contact details with my resume.
- Replace generic social and project destinations with the correct links.
- Connect the contact experience to real message delivery or an honest email action.

## 🤝 Connect

Built by **Maryam Abdul Karim**.

[GitHub profile](https://github.com/maryamabdulkarim361-lab) · [LinkedIn](https://www.linkedin.com/in/maryamabdulkarim361) · [Email](mailto:maryamabdulkarim361@gmail.com) · [Report an issue](https://github.com/maryamabdulkarim361-lab/3D-portfolio/issues)

If this project sparks an idea, a star or a thoughtful piece of feedback is always welcome.

---

<div align="center">
  <strong>Code. Motion. Personality.</strong><br />
  <sub>A portfolio designed to be explored.</sub>
</div>
