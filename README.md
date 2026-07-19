# Personal Website

A personal website built with [Next.js](https://nextjs.org) 16 (App Router) and React 19, styled with plain CSS Modules. Pages: home (profile and projects), CV viewer, and a contact form that sends email via [Resend](https://resend.com).

## Requirements

- Node.js 20.9 or later
- npm

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For the contact form to send email locally, copy `.env.example` to `.env.local` and fill in your Resend API key.

## Editing Content

All site content lives in `src/data/site.json` — no code changes needed for:

- **Profile**: `name`, `role`, `bio`, `email`
- **Profile photo**: put an image in `public/images/` and set `profileImage` to its path (e.g. `"/images/profile.jpg"`); leave it `null` to hide the photo
- **CV**: replace `public/CV.pdf` (or point `cvFile` at a different file)
- **Social links**: entries in `socials` (`icon` can be `github`, `linkedin`, or `email`)
- **Projects**: add an object to `projects` with `title`, `description`, `link`, and `tags` — it appears on the home page automatically

## Scripts

| Command         | Description                  |
|-----------------|------------------------------|
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Project Structure

```
src/data/site.json       All editable site content
src/app/
  layout.js              Root layout: nav, footer, fonts, metadata
  page.js                Home page (hero + projects)
  cv/                    CV viewer page
  contact/               Contact page
  api/message/route.js   Contact form email endpoint (Resend)
  ui/components/         TopBar, BottomBar, ProjectCard, ContactForm, Icons
public/                  Static assets (CV.pdf, images)
```

## Contact Form Email

`POST /api/message` sends mail through the [Resend](https://resend.com) API using these environment variables (see `.env.example`): `RESEND_API_KEY`, `CONTACT_RECEIVER_EMAIL`, and optionally `CONTACT_FROM_EMAIL` (a verified sender on your own domain; without it Resend's test sender is used, which only delivers to the email your Resend account is registered with). Set them in `.env.local` for development and in your hosting provider's settings for production.

The endpoint validates input, drops bot submissions via a honeypot field, and rate-limits senders (5 messages per 10 minutes per IP).

## Deployment

Deploys anywhere Next.js runs; [Vercel](https://vercel.com) is the most direct option. Remember to configure the Resend environment variables. Vercel Analytics is wired in via `@vercel/analytics` and activates automatically on Vercel.
