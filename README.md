# Travel Check v1 (Static Site)

Travel-check.info v1 built with Next.js App Router and static generation from markdown content stored in-repo.

## Tech Stack

- Next.js 16 App Router
- Static Site Generation with `generateStaticParams`
- Markdown content files under `content/`
- SEO artifacts: metadata, `sitemap.xml`, `robots.txt`

## Content Model (No Database)

- `content/countries/*.md`
- `content/cities/*.md`
- `content/regions/*.md`

Each file includes frontmatter for:

- `title`, `type`, `slug`
- `seoTitle`, `seoDescription`
- `affiliateLabel`, `affiliateUrl`
- optional related slugs (`regionSlug`, `countrySlug`, `citySlug`)

## Local Run

1. `npm install`
2. `cp .env.example .env.local`
3. set `NEXT_PUBLIC_SITE_URL` in `.env.local` (example: `https://travel-check.info`)
4. `npm run dev`

## Verification

- `NEXT_PUBLIC_SITE_URL=https://travel-check.info npm run build`

## Monetization Hooks

- Reusable affiliate callout block in guide templates
- Reserved ad placeholders on homepage and guide pages, ready for ad network tags
