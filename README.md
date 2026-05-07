# Sivaraj G Portfolio

Modern full-stack developer portfolio for Sivaraj G, built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Features

- Dark premium glassmorphism UI
- Responsive recruiter-friendly layout
- Animated hero with typing roles
- Scroll progress indicator and active navbar state
- Smooth section animations with Framer Motion
- Project cards with visual preview assets
- Contact form with Formspree support and email fallback
- Downloadable resume button
- SEO-ready meta tags
- Vercel deployment-ready structure

## Folder Structure

```text
.
├── public
│   ├── favicon.svg
│   ├── projects
│   │   ├── collab-editor.svg
│   │   ├── student-ai.svg
│   │   └── triage-agent.svg
│   └── resume
│       └── Sivaraj-G-Resume.pdf
├── src
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CursorGlow.jsx
│   │   ├── ExperienceEducation.jsx
│   │   ├── FloatingSocials.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionHeader.jsx
│   │   └── Skills.jsx
│   ├── data
│   │   └── portfolio.js
│   ├── hooks
│   │   ├── useActiveSection.js
│   │   └── useTypingText.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add environment variable `VITE_FORMSPREE_ENDPOINT` if you want the contact form to submit through Formspree.
7. Deploy.

## Replace Resume

The resume is referenced at:

```text
public/resume/Sivaraj-G-Resume.pdf
```

Replace that file with the latest PDF using the same filename, or update `profile.resume` in:

```text
src/data/portfolio.js
```

## Replace Project Links

Project data lives in:

```text
src/data/portfolio.js
```

Update each project object:

- `github`: replace with the real GitHub repository URL.
- `live`: replace with the deployed demo URL.
- `image`: replace with a real screenshot path if desired.

Project preview assets live in:

```text
public/projects
```

## Contact Form Setup

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Then set:

```text
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Without this value, the contact form opens the user's email client as a fallback.
