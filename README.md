# Shubham Patil — Developer Portfolio

A modern, animated portfolio site for a Java Full Stack Developer, built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** lucide-react + react-icons (for brand logos)
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (code/labels) — self-hosted via `@fontsource`
- **Contact form:** API route (`/api/contact`) with optional [Resend](https://resend.com) integration

## Project structure

```
src/
  app/                 # Routes, layout, metadata, API route
    api/contact/       # Contact form endpoint
    layout.tsx          # Root layout, fonts, SEO metadata
    page.tsx             # Assembles all sections
    sitemap.ts / robots.ts
    icon.tsx             # Generated favicon
  components/
    layout/              # Navbar, Footer, ThemeProvider, LoadingScreen, etc.
    sections/             # Hero, About, Skills, Projects, Experience, Education,
                           # Certifications, Services, Achievements, Contact
    ui/                    # Button, Container, GlassCard, SectionHeading, RevealOnScroll
  constants/data.ts      # All portfolio content (edit this to personalize)
  hooks/                  # useTypingEffect, useScrollProgress, useActiveSection, useCountUp
  lib/utils.ts
  types/index.ts
public/
  projects/               # Placeholder project preview SVGs — replace with real screenshots
  resume.pdf              # Placeholder — replace with your real resume
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalizing content

Almost everything lives in **`src/constants/data.ts`**: your name, role, bio, skills, projects, experience, education, certifications, services, and achievement numbers. Update that one file first.

Then:
- Replace `public/resume.pdf` with your real resume.
- Replace the SVGs in `public/projects/` with real project screenshots (same filenames, or update the `image` paths in `data.ts`).
- Update social links in `SOCIAL_LINKS` in `data.ts`.
- Update `siteUrl` in `src/app/layout.tsx` and `src/app/sitemap.ts` / `robots.ts` once you have a real domain.

## Contact form (optional email delivery)

The contact form works out of the box — submissions are logged server-side even without configuration. To actually receive emails:

1. Create a free account at [resend.com](https://resend.com) and get an API key.
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=your_key_here
   CONTACT_TO_EMAIL=you@example.com
   ```
3. Restart the dev server.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Add the environment variables (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`) in the Vercel project settings if you're using the contact form.
4. Deploy — Vercel auto-detects Next.js, no config needed.

Or via CLI:

```bash
npm install -g vercel
vercel
```

## Performance & SEO notes

- Fonts are self-hosted (`@fontsource`) so there's no external font request at runtime.
- `sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically.
- `layout.tsx` sets Open Graph and Twitter card metadata — update the `siteUrl` and add a real `public/og-image.png` for social share previews.
- Images use `next/image` for automatic optimization and lazy loading.
- Respects `prefers-reduced-motion` for accessibility.
- Run `npm run build` locally and check the Lighthouse report in Chrome DevTools before shipping.
