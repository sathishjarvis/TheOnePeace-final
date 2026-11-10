# The One Peace - animated, SEO-ready site (plain CSS + Framer Motion)

## Setup
1. Vite + React project. Replace `src/`, and copy `index.html` and `public/` to the project root.
2. `npm i framer-motion lucide-react`  (Tailwind and react-icons are NOT needed any more)
3. Delete old `App.css` / `index.css` (the Tailwind import).
4. Assets in `src/assets/`: `toplogo.png`, `founder.png`, `favicon.png`
5. Assets in `public/`: `favicon.png`, `toplogo.png`, `og-image.png` (1200x630, used when the link is shared)
6. `.env` -> `VITE_WEB3FORMS=your_access_key`
7. Optional AdSense: add the script from the comment in `AdSlot.jsx` to `index.html`.

## Where to edit
- Text, services, projects, FAQ: `src/lib/content.js`
- SEO title, description, keywords: `index.html` (+ `src/lib/seo.js`)
- Styles: `src/styles/<component>.css`
