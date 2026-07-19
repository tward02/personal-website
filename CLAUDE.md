# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal website for Tyler Ward built with Next.js 16 (App Router) and React 19, written in plain JavaScript (no TypeScript). No component library — all styling is CSS Modules on top of design tokens.

## Commands

```bash
npm run dev     # Dev server at http://localhost:3000 (Turbopack)
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint (flat config; `next lint` was removed in Next 16)
```

There is no test suite configured.

## Architecture

- **Content is data-driven**: `src/data/site.json` holds all site content — name, bio, socials, CV path, and the projects list. Pages and components import it directly. Content changes (e.g. adding a project) should edit this JSON, not components.
- **Shared chrome lives in the root layout**: `src/app/layout.js` renders `TopBar` and `BottomBar` around every page, loads Geist fonts, and derives metadata from `site.json`. Pages render only their own `<main>` content; the base `main` container styles (max-width, padding, flex-grow) are in `globals.css`.
- **Design tokens**: colors, fonts, radius, and content width are CSS variables defined in `src/app/globals.css`, with a dark variant under `prefers-color-scheme`. Component CSS Modules must use these variables, not hard-coded colors.
- **Icons**: inline SVGs in `src/app/ui/components/icons/Icons.js` (keyed by name: `github`, `linkedin`, `email`). Do not add icon libraries.
- **Contact form**: `ContactForm` (client component) POSTs to `src/app/api/message/route.js`, which validates input, drops honeypot submissions, rate-limits by IP, and sends mail via the Resend REST API (plain `fetch`, no SDK). Requires `RESEND_API_KEY` and `CONTACT_RECEIVER_EMAIL`; optional `CONTACT_FROM_EMAIL` for a verified domain sender (see `.env.example`).
- **Path alias**: `@/*` maps to `./src/*` (configured in `jsconfig.json`).

## Constraints

- Dependencies are kept deliberately minimal (next, react, @vercel/analytics). Prefer plain CSS/SVG/fetch over adding packages.
- `package.json` has an `overrides` entry pinning `postcss` to a patched version until Next bumps its own dependency; keep it until `npm audit` passes without it.
- The design avoids gradients, glassmorphism, and heavy shadows: warm neutral palette, one green accent, 1px borders, 6px radius. Keep new UI consistent with the tokens in `globals.css`.
