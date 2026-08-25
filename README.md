# Portfolio — Abheyjeet Singh Gill

React + Vite portfolio with the React Bits **Prism** WebGL background.

## Run it

```bash
npm install     # installs react, vite, and ogl
npm run dev     # http://localhost:5173
npm run build   # outputs to dist/
```

## Files

```
index.html
src/
├─ main.jsx            entry
├─ App.jsx             the page (sections, layout)
├─ App.css             section styles
├─ index.css           design tokens, reset, shared bits
├─ data.js             ← all your content lives here
└─ components/
   ├─ Prism.jsx        react-bits background (unchanged)
   ├─ Prism.css
   └─ Reveal.jsx       scroll-in wrapper
```

**To change any text on the site, edit `src/data.js`.** Projects, skills,
education, awards, and your links are all arrays in that one file — the
components just map over them, so adding a fourth project is one object.

## Design notes

- The Prism background is the hero's thesis, so the palette is neutral glass
  (`#05060A` ink, `#ECEBF3` bone) with a violet → cyan → amber spectrum used
  only where it means something: card edges, the section dot, the email
  underline.
- Your name loads split into violet and amber ghosts that converge — the
  chromatic fringe a prism actually produces. It's the one flourish; everything
  else stays quiet.
- Type: **Bricolage Grotesque** (display), **Instrument Sans** (body),
  **Martian Mono** (labels and data). Loaded from Google Fonts in `index.html`.

## Prism knobs

In `App.jsx`, the hero uses your settings:

```jsx
<Prism animationType="rotate" timeScale={0.5} height={3.5} baseWidth={5.5}
       scale={3.6} hueShift={0} colorFrequency={1} noise={0} glow={1} />
```

- `hueShift` rotates the whole spectrum — try `0.6` for a cooler, more violet
  prism, `-0.5` for warmer. If you change it, adjust `--violet` / `--cyan` /
  `--amber` in `index.css` to match.
- `glow` and `bloom` control brightness; `scale` controls how much of the frame
  the prism fills. Larger `scale` = smaller prism.
- `timeScale` is set to `0` automatically for visitors who have reduced motion
  turned on.

## Deploying

`vite.config.js` uses `base: './'`, so `dist/` works on Netlify, Vercel, or
GitHub Pages without changes. For GitHub Pages, push `dist/` to `gh-pages` or
use the Pages action.

## One thing I left out on purpose

Your street address and phone number are on your résumé but not on this site —
a public page is a scraped page. Email, GitHub, and LinkedIn are on there, which
is what a recruiter actually uses. Add them back in `src/data.js` if you want.
