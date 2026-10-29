<div align="center">

# 🌸 SAKURA ANIMATION PORTFOLIO

### Maryam Abdul Karim
**Software Developer · Python & Django · Web Applications**

*A developer portfolio told through cinematic motion and anime-inspired visuals.*

![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-141414?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-141414?style=for-the-badge&logo=typescript)
![CSS](https://img.shields.io/badge/Custom_CSS-8B0032?style=for-the-badge&logo=css&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL_2-E0115F?style=for-the-badge&logo=webgl&logoColor=white)

[Explore the Code](https://github.com/maryamabdulkarim361-lab/Sakura-Animation-Portfolio) · [Features](#-experience-highlights) · [Getting Started](#-run-locally) · [Connect](#-connect)

</div>

---

## 🎞️ Visual identity

<div align="center">
  <img src="https://raw.githubusercontent.com/maryamabdulkarim361-lab/Sakura-Animation-Portfolio/main/public/stills/masked.jpg" width="31%" alt="Sakura character artwork — masked pose" />
  <img src="https://raw.githubusercontent.com/maryamabdulkarim361-lab/Sakura-Animation-Portfolio/main/public/stills/face.jpg" width="31%" alt="Sakura character artwork — face detail" />
  <img src="https://raw.githubusercontent.com/maryamabdulkarim361-lab/Sakura-Animation-Portfolio/main/public/stills/kunai.jpg" width="31%" alt="Sakura character artwork — kunai pose" />
  <p><em>Character stills included in the project; these are visual assets, not full-page screenshots.</em></p>
</div>

**Obsidian backgrounds. Burgundy depth. Sakura-pink highlights.**

Sakura Animation Portfolio presents my projects, skills, education, and professional journey through a sequence of animated sections. It combines a scroll-controlled character performance with a structured, resume-aligned portfolio.

## ✨ Experience highlights

| Experience | How it works |
| :--- | :--- |
| 🎬 Scroll-controlled character | WebP image sequences drawn on a fixed HTML5 Canvas respond to page progress |
| 🌸 Continuous section transition | The character travels from the hero into the About section, with afterimages and a landing ring |
| 🌫️ Atmospheric background | A custom WebGL 2 shader creates slowly moving fog that responds to the cursor and scrolling |
| 🖱️ Pointer depth | Perspective transforms add a subtle lean to the character stage |
| 🧩 Rotating skills display | A CSS 3D drum reveals categorized technical skills as the visitor scrolls |
| 📂 Project showcase | Featured applications, educational prototypes, documented designs, and planned projects have distinct labels |
| 🎓 Career and education | Resume-aligned experience, degree details, certifications, and training |
| ✉️ Direct contact | Email, phone, social links, clipboard actions, and a downloadable resume |
| 📱 Responsive presentation | Separate character placement and sizing for desktop and smaller viewports |

## 🛠️ Technology stack

| Layer | Implementation |
| :--- | :--- |
| Framework | Next.js 14 App Router, React 18 |
| Language | TypeScript |
| Styling | Custom CSS, CSS variables, media queries, perspective transforms |
| UI animation | Framer Motion |
| Smooth scrolling | Lenis |
| Character renderer | HTML5 Canvas 2D, WebP frame sequences, requestAnimationFrame |
| Atmosphere | Custom WebGL 2 vertex and fragment shaders |
| Typography | Bebas Neue, Inter, JetBrains Mono, and a local Bangers font |

Three.js and React Three Fiber packages are included in the dependencies. The inspected character stage uses Canvas 2D, and the fog backdrop uses WebGL 2 directly.

## ⚙️ Behind the animation

The character is rendered from pre-rendered images. Scroll position selects the image to display; pointer position adds perspective to the whole stage.

- **Hero:** 216 active frames, using source frames `025.webp` through `240.webp`. The first 24 source frames are skipped by configuration.
- **About:** 96 active frames, using `001.webp` through `096.webp`.
- **Progressive loading:** Frames load in increasingly dense passes with steps of 16, 8, 4, 2, and 1, using six concurrent image requests.
- **Loading fallback:** If the requested frame is not available yet, the renderer selects the nearest loaded frame.
- **Display sizing:** The character canvas caps device pixel ratio at 2. The fog renders at one-third viewport resolution and is enlarged through CSS.

The Lenis wrapper skips smooth-scroll initialization when reduced motion is requested. This does not imply that every other animated effect is disabled.

## 📂 Projects presented

| Project | Focus | Category |
| :--- | :--- | :--- |
| [Little Lemon Restaurant Web Application](https://github.com/maryamabdulkarim361-lab/little-lemon-web-application) | Menu and booking REST APIs, Djoser authentication, database configuration, and API tests | Django capstone |
| [Metriva](https://github.com/maryamabdulkarim361-lab/Metriva) | Conversational analytics, database exploration, SQL validation, and saved reports | Analytics project |
| [Zaiqa](https://github.com/maryamabdulkarim361-lab/Zaiqa) | Restaurant interfaces with 3D dish previews and AR support for compatible assets and devices | Front-end prototype |
| [Breast Ultrasound Classifier](https://github.com/maryamabdulkarim361-lab/Ultrasound-Diagnosis-for-Breast-Cancer) | PyTorch classification, Flask interface, and Grad-CAM visualization support | Educational AI prototype |
| [AI Database Assistant](https://github.com/maryamabdulkarim361-lab/AI-Database-Assistant) | Natural-language-to-SQL workflow and read-only query validation concepts | Documented system design |

Zaiqa's database-backed functionality is planned. The ultrasound classifier is an educational research prototype, and the AI Database Assistant is presented as a documented design rather than a deployed application.

**Planned work:** Live Restaurant Application and Cybersecurity Attack Analysis Agent.

## 🚀 Run locally

Prerequisites: Git, npm, and a Node.js version compatible with Next.js 14.

```bash
git clone https://github.com/maryamabdulkarim361-lab/Sakura-Animation-Portfolio.git
cd Sakura-Animation-Portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm start
```

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |

The current package scripts do not define a test or lint command. Keep `public/frames/`, `public/stills/`, `public/fonts/`, and `public/resume/` available when running or deploying the project.

## 🗂️ Code map

| Path | Responsibility |
| :--- | :--- |
| `app/page.tsx` | Page composition, loading flow, and global pointer tracking |
| `app/layout.tsx` | Root layout and metadata |
| `app/globals.css` | Theme, typography, layouts, and CSS effects |
| `lib/data.ts` | Profile, skills, projects, education, experience, and contact information |
| `lib/frames.ts` | Progressive frame loading and nearest-frame lookup |
| `lib/store.ts` | Shared animation state, frame counts, and scroll-to-frame mapping |
| `lib/useScroll.ts` | Scroll helpers |
| `components/stage/CharacterStage.tsx` | Character rendering and section transitions |
| `components/stage/Backdrop.tsx` | WebGL fog shader |
| `components/sections/` | Billboard, About, Arsenal, Missions, Honors, Journey, and Finale |
| `components/ui/` | Intro, cursor, navigation, and smooth-scroll components |
| `public/` | Character frames, stills, fonts, and resume |

## 🎨 Personalization guide

1. Edit `lib/data.ts` to update profile details, project links, skills, experience, education, and training.
2. Change theme variables in `app/globals.css` to adjust burgundy and Sakura-pink accents.
3. Replace `public/resume/Maryam-Abdul-Karim-Resume.pdf` when updating the resume.
4. Keep frame filenames consistent with `lib/frames.ts`; adjust frame counts and offsets in `lib/store.ts` when replacing sequences.
5. Update metadata in `app/layout.tsx` and confirm all links after making changes.

The contact section opens email and phone applications and links to social profiles. It does not provide a server-side message-delivery service.

## 👩‍💻 About me

I am **Maryam Abdul Karim**, a Computer Science graduate building Python, Django, and JavaScript applications, with experience in freelance front-end development and web and mobile project coordination.

**Education:** Bachelor of Computer Science with Honours, Lahore College for Women University, 2011–2015 — degree completed.

My project interests include REST APIs, relational databases, authentication, responsive interfaces, and educational AI prototypes. I am also continuing to learn machine learning and RAG.

## 🤝 Connect

[![GitHub](https://img.shields.io/badge/GitHub-Maryam-141414?style=for-the-badge&logo=github)](https://github.com/maryamabdulkarim361-lab)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-8B0032?style=for-the-badge)](https://www.linkedin.com/in/maryamabdulkarim361)
[![Email](https://img.shields.io/badge/Email-Say_Hello-E0115F?style=for-the-badge)](mailto:maryamabdulkarim361@gmail.com)

[View Resume](public/resume/Maryam-Abdul-Karim-Resume.pdf) · [Report an Issue](https://github.com/maryamabdulkarim361-lab/Sakura-Animation-Portfolio/issues)

---

<div align="center">
  <strong>🌸 Code with purpose. Present with personality.</strong><br />
  <sub>Sakura Animation Portfolio · Maryam Abdul Karim</sub>
</div>
