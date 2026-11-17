# Ian Rebuffo — Portfolio (`ian-portfolio`)

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS and GSAP, featuring bilingual support (`EN` / `ES`) and configured for free static hosting on **GitHub Pages** (`/ian-portfolio/`).

## Local Development

```bash
npm install
npm run dev
```

Local dev URL: `http://localhost:5173/ian-portfolio/`

## Production Build & Preview

```bash
npm run build
npm run preview
```

## Project Structure

- `src/data/projects.ts` — Centralized projects catalog (Editorial, Web & Product, Brand Identity)
- `src/data/i18n.ts` — Complete English (`en`) and Spanish (`es`) copy dictionary
- `src/data/site.ts` — Personal profile & contact metadata
- `src/assets/` — Dedicated asset folders per project (`tay`, `nudos`, `patagonia`, `global`)
- `public/404.html` & `index.html` — SPA deep-link routing support for GitHub Pages
- `.github/workflows/deploy.yml` — Automated GitHub Actions build & deployment to GitHub Pages
