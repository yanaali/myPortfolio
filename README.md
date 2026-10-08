# Aaliyan Muhammad's Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS, adapted from [Naresh Khatri's 3D Portfolio](https://github.com/Naresh-Khatri/3d-portfolio).

The site includes education and experience, the original interactive 3D keyboard with 24 personalized keys, a typing cat, scrolling project previews, a PDF resume, light/dark modes, and Side B: the music of yanaali.

## Run locally

Use Node.js 24.x. This project pins pnpm 11.20.0 and uses the existing pnpm lockfile; native dependency builds are approved in `pnpm-workspace.yaml`.

```powershell
cd "C:\Users\ali20\OneDrive\Desktop\projects CS\myPortfolio"
npx --yes pnpm@11.20.0 install --frozen-lockfile
Copy-Item .env.example .env.local # Only if .env.local does not already exist
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Keep the terminal running. Saved source changes appear automatically; restart the server after changing environment variables. Press Ctrl+C to stop it.

Dependencies have already been installed for the current local setup, so restarting only requires `npm run dev`.

## Personalize

| File | Content |
| --- | --- |
| `src/data/config.ts` | Name, emails, bio, education, metadata, social links, resume path |
| `src/data/constants.ts` | Skills, icons, keyboard order, descriptions, and experience |
| `src/data/projects.tsx` | Projects, summaries, screenshots, tech stacks, live and source links |
| `src/data/music.ts` | yanaali's release titles, artwork, dates, Spotify IDs, and colours |
| `src/components/music/` | Record-sleeve gallery, release dialogs, and Spotify players |
| `src/components/animated-background.tsx` | Spline interactions, keyboard sounds, and scroll animations |
| `src/components/animated-background-config.ts` | Keyboard position and rotation for each section |
| `public/assets/skills-keyboard-personalized.spline` | Original scene with personalized key names and logo textures |
| `src/app/globals.css` | Theme colors and shared styling |
| `public/Aaliyan_Muhammad_Resume.pdf` | Resume shown at `/resume` |
| `public/assets/projects-screenshots/` | Career Compass, audioDecoded, and portfolio previews |

The keyboard preserves the fork's Spline geometry, key transitions, scroll rotations, and bongo cat. Its 24 keys match `KEYBOARD_SKILLS`; remaining technologies appear beneath the Tech Stack section. Key labels and descriptions come from `SKILLS`. Changing a key's logo or object name also requires updating the Spline asset. The untouched original scene remains at `public/assets/skills-keyboard.spline`.

Hover or tap a key, or use the original shortcuts: `1`–`6`, `Q`–`Y`, `A`–`H`, and `Z`–`N`. Click, tap, or press a key once to enable audio under browser autoplay rules. Reduced motion, unavailable WebGL, or a failed scene load displays an accessible skills grid.

Career Compass, audioDecoded, and this portfolio are displayed with colour-matched gradient cards. Their screenshots scroll on hover and return to the top on mouse leave. Blog routes return 404 and are absent from navigation and the sitemap.

Side B lives at `/side-b`, reached through the menu or the About card. It features four albums and the Affection Hours mixtape, with locally stored artwork verified against [yanaali's Spotify catalogue](https://open.spotify.com/artist/07aKpXxqGKl3YQ7iSzKtui). Click a cover to open a release; the embedded Spotify player loads only when requested. To add a release, place its cover in `public/assets/music/` and add its metadata to `src/data/music.ts`.

## Environment variables

Copy `.env.example` to `.env.local` if needed.

- `NEXT_PUBLIC_SITE_URL`: Set to the portfolio's public URL when deploying. Defaults to `http://localhost:3000`.
- `RESEND_API_KEY`: Required for sending contact-form messages. Without it, the page still works and the form directs visitors to email Aaliyan.
- `NEXT_PUBLIC_WS_URL`: Optional realtime backend. Leave empty to disable live cursors, chat, and presence.
- `UMAMI_SITE_ID`, `UMAMI_DOMAIN`, `NEXT_PUBLIC_GA_ID`: Optional analytics.
- `NEXT_PUBLIC_LEGACY_HOST`: Optional notice for a previous portfolio domain.

The original template's automatic deployment-hostname reporting is no longer mounted.

## Checks and production build

```powershell
npm run typecheck
npm run lint
npm run build
npm run start
```

Some original animation/realtime components still produce ESLint warnings; lint errors must be fixed. Google Fonts require network access during compilation.

## Deploy on Vercel

1. Push this repository to GitHub and import `yanaali/myPortfolio` as a new Vercel project.
2. Use the repository root (`./`) and the Next.js framework preset. `vercel.json` supplies the pinned install and build commands; `package.json` selects Node.js 24.x.
3. Add `RESEND_API_KEY` in Vercel's environment-variable settings if you want the contact form to send messages. Keep `.env.local` on your computer; never commit it. Leave the realtime and analytics variables unset unless you configure those services.
4. Deploy. Once you have your public URL, set `NEXT_PUBLIC_SITE_URL` to that HTTPS URL in Vercel and redeploy so canonical URLs, the sitemap, and social previews point to the live site.

Vercel's [Next.js integration](https://vercel.com/docs/frameworks/full-stack/nextjs) handles the pages and API routes. The explicit [install command](https://vercel.com/docs/package-managers) keeps deployment consistent with the local pnpm version. The `.next` output and `node_modules` are generated during deployment and are excluded from Git.

## Credits

Based on [Naresh Khatri's open-source portfolio](https://github.com/Naresh-Khatri/3d-portfolio). The original assets and reusable components remain available for further customization.
