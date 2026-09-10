# Portfolio

A cinematic single-page portfolio — React 19 + TypeScript + Vite + Tailwind v4,
with Framer Motion animation and Lenis smooth scrolling.

## Credit

The design and component code are adapted, with permission, from
[lohithadamisetti123/cinematic-portfolio](https://github.com/lohithadamisetti123/cinematic-portfolio)
by Damisetti Shamya Lohitha. The original repository carries no licence file, so
the layout and styling are used here by personal arrangement rather than under an
open-source licence.

None of the original author's personal media was copied — her portrait, hero
video and personal insignia were deliberately left out and replaced with
placeholders. Please don't add them back.

## Running it

```bash
cd portfolio
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run lint     # oxlint
```

## Editing your content

**Everything personal lives in [`src/content.ts`](src/content.ts).** Edit that one
file and the whole site updates — you shouldn't need to open the components.

It is organised in the order the page reads:

| Export | Controls |
| --- | --- |
| `profile` | Nav name, hero headline, disciplines, tagline, motto, signature, résumé link |
| `navItems` | The links across the top nav |
| `sectionLabels` | The gold `01 / ABOUT ME` eyebrow above each section |
| `about` | About headline, bio, the four stat figures, portrait |
| `projects` | The scroll-stacked Selected Work cards |
| `skills` | The four bento cards in the Capability Matrix |
| `journey` | The vertical timeline |
| `awards` | The Achievements grid |
| `leadership` | The positions-of-responsibility strip under the awards |
| `contact` | Contact headline, blurb, form endpoint, email, phone, LinkedIn |

If you add or remove a section, update `sectionLabels` so the numbering stays
in sequence, and `navItems` so the nav still matches.

## Your media

All three assets are in place. To change any of them:

- **Résumé** — replace `public/resume.pdf`, or repoint `profile.resumeUrl`.
- **Hero video** — replace `public/videos/hero.mp4`. The hero scales it to the
  full viewport height, so supply it at 1080p or better; anything smaller gets
  stretched and looks soft. Without the file the hero falls back to an animated
  gradient.
- **Portrait** — replace `src/assets/about.jpg`. The frame is 4:5 and crops from
  the top, so use a portrait-orientation photo with the face in the upper half.
  About 900px wide is plenty: the card renders at 390px, which covers a 2x
  retina screen. Setting `about.portrait` to null falls back to a monogram plate.

Strip metadata from anything published here — `ffmpeg -i in.jpg -map_metadata -1
out.jpg` does it. Phone photos often carry location data.

The favicon at `public/favicon.svg` is a monogram; change the letter in it to
match `profile.monogram`.

## Fonts

Bebas Neue, Montserrat and Herr Von Muellerhoff are self-hosted from
`public/fonts` (70 KB total) and declared in `src/index.css`, so the page does
not block on a third-party request and renders identically offline. Montserrat
is a single variable file covering weights 300–700. To add a family, drop the
`.woff2` in `public/fonts` and add an `@font-face` block alongside the others.

## Making the contact form work

Out of the box `contact.formEndpoint` is empty, so the form falls back to opening
the visitor's mail client addressed to `contact.email` — nothing is silently
dropped. To collect submissions properly, sign up with a form backend such as
[Formspree](https://formspree.io) and paste the endpoint URL into
`contact.formEndpoint`. The form POSTs JSON (`name`, `email`, `message`) and
shows a delivery-failed message with your address if the request fails.

## Deploying

`npm run build` emits a static bundle in `dist/` that any static host will serve.

### GitHub Pages (already wired up)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`. The
only setup step is in the repository: **Settings → Pages → Build and deployment
→ Source: GitHub Actions**. Push after that and the site goes live.

The workflow works out the base path itself: a repo named
`<username>.github.io` is served from the domain root, and any other repo from
`/<repo>/`. It passes the right value to the build as `VITE_BASE`, so asset
URLs, fonts, the résumé and the hero video resolve either way.

### Vercel, Netlify or Cloudflare Pages

Import the repository and accept the defaults — build command `npm run build`,
output directory `dist`. These serve from the domain root, so `VITE_BASE` is not
needed and `base` falls back to `/`.

### Anywhere else

Serve `dist/` as static files. If it is not at the domain root, build with
`VITE_BASE=/your/path/ npm run build`.
