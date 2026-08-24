# Vicri Aditiya — Portfolio

Personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **motion (Framer Motion)**. Dark theme, scroll animations, splash screen on first visit, and a working contact form.

## Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** motion (Framer Motion)
- **Email:** Resend
- **Analytics:** Vercel Analytics
- **Deploy:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script             | Description                 |
| ------------------ | --------------------------- |
| `npm run dev`      | Development server (Turbopack) |
| `npm run build`    | Production build            |
| `npm run start`    | Start production server     |
| `npm run lint`     | Run ESLint                  |

## Single-page sections

The site is a single page divided into sections (navigated from the sticky navbar):

| Section  | Anchor    |
| -------- | --------- |
| Home     | `#home`   |
| Projects | `#projects`|
| About    | `#about`  |
| Skills   | `#skills` |
| Contact  | `#contact`|

## Configuration

Copy `.env.example` to `.env.local` and fill in:

| Variable        | Purpose                                  |
| --------------- | ---------------------------------------- |
| `RESEND_API_KEY`| Resend API key for the contact form      |
| `EMAIL_FROM`    | Verified sender address (`Name <email>`) |

The contact form POSTs to `/api/contact`. It validates input, includes a
honeypot field for bots, and sends to the site email via Resend.

## Content

- **Projects:** edit `lib/projects.ts`
- **Personal info / socials:** edit `lib/site.ts`

## Deploy

Deploy on [Vercel](https://vercel.com). Set `RESEND_API_KEY` and `EMAIL_FROM`
in the environment (Preview + Production) and re-deploy after changes.

## Accessibility

- `prefers-reduced-motion` support (animations disabled)
- Skip-to-content link and focus-visible styles
- Semantic headings and landmark roles
- Contrast-tuned for WCAG AA
