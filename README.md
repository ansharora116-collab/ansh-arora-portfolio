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

## Adding your media

Your résumé is already in place at `public/resume.pdf`, so the hero's Download
Resume button works. Two assets are still missing — the site renders complete
without them, falling back to a gold gradient and a monogram plate:

- **Hero video** — put an `.mp4` at `public/videos/hero.mp4`. Without it the hero
  shows an animated gradient, which leaves the right half of the screen fairly
  bare; a video is what fills it.
- **Portrait** — put an image in `src/assets/`, then in
  `src/components/AboutSection.tsx` import it and pass it through
  `about.portrait`. Without it you get the monogram plate.

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

`npm run build` emits a static bundle in `dist/`, which any static host will
serve — Vercel, Netlify, Cloudflare Pages or GitHub Pages. Set the project root
to `portfolio/`, the build command to `npm run build` and the output directory to
`dist`. For GitHub Pages, also set `base` in `vite.config.ts` to your repository
name.
