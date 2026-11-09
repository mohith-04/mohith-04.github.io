# Portfolio

Personal portfolio of Mohith Savaram. Built with React, Vite, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All text, projects, education and links live in `src/data.js`.

- **Photo:** drop an image in `public/` (e.g. `public/profile.jpg`) and set `photo: '/profile.jpg'`.
- **Resume button:** drop your PDF in `public/` and set `resume: '/Mohith_Savaram_Resume.pdf'`.
- **Live demo on a project:** add `live: 'https://...'` to that project.

## Deploy

### GitHub Pages (automatic)

Every push to `main` builds and publishes the site via `.github/workflows/deploy.yml`.
Live URL: https://mohith-04.github.io

One-time setup: on GitHub open **Settings → Pages** and set **Source** to **GitHub Actions**.

### Docker

```bash
docker build -t mohith-portfolio .
docker run -p 8080:80 mohith-portfolio
```

Then open http://localhost:8080.

### Vercel / Netlify

Import the repo. The build command is `npm run build` and the output folder is `dist`.
