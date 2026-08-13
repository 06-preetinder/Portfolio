# Preetinderjeet Singh — Portfolio

React + Vite + Tailwind v4 + Framer Motion. RCA Records-inspired visual
identity: near-black/brass/rust palette, catalog-number motif ("CAT-01",
"EXP-02") instead of generic numbering, and a rotating vinyl-label mark as
the signature element (`src/components/VinylMark.jsx`).

## Edit content

Everything text/link-based lives in one file:

```
src/data/content.js
```

- `profile` — name, tagline, email, LinkedIn, GitHub
- `projects` — the 5 project cards (Projects page + Home preview). Add
  `image: "/projects/one.jpg"` once you have real screenshots — drop the
  image file in `public/projects/` first.
- `experience` — the 4 work entries (Experience page + Home preview)
- `research` — the 2 preprints, currently "coming soon". Add full fields
  (abstract, link) once each moves past preprint, and update
  `src/pages/Research.jsx` to render them.
- `epoch` — tagline, page description, and the issue archive array. Each
  issue has a `type` of `"paper"` or `"news"`, which changes the badge
  color on the Epoch page. Add new issues to the **top** of the array (the
  browser shows index 0 as "this week").

No other file needs touching for routine content updates.

## Add project images

1. Drop the image in `public/projects/your-image.jpg`
2. In `content.js`, set that project's `image: "/projects/your-image.jpg"`

Same pattern works for any other image — anything in `public/` is served
from the site root.

## Run locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy to Vercel

1. Push this folder to a GitHub repo (see below)
2. Go to [vercel.com/new](https://vercel.com/new), import the repo
3. Vercel auto-detects Vite — framework preset "Vite", build command
   `npm run build`, output directory `dist`. Just click Deploy.

### Push to GitHub first, if you haven't

```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

`node_modules` and `dist` are already in `.gitignore`, so they won't get
committed.

## Structure

```
src/
  App.jsx              — routes + layout (Nav/Footer wrap every page)
  components/
    Nav.jsx             — top nav, 5 links
    Footer.jsx          — contact section
    Marquee.jsx         — scrolling ticker on the homepage
    VinylMark.jsx        — the rotating catalog-label signature element
  pages/
    Home.jsx
    Projects.jsx        — "Releases"
    Experience.jsx      — "Credits"
    Research.jsx        — "coming soon" preprint cards
    Epoch.jsx            — description + interactive issue browser
  data/
    content.js           — all editable text/links (see above)
```
