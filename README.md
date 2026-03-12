# INNERGAME — Next.js Site

> The Performance Philosophy Studio  
> Kyle Wisniewski · innergame.online

---

## Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Framework   | Next.js 14 (App Router)       |
| Styling     | CSS Modules + CSS Variables   |
| CMS (ready) | Sanity.io (see migration guide) |
| Email       | ConvertKit (drop-in endpoint) |
| Hosting     | Vercel (zero-config)          |
| Fonts       | Google Fonts (Cormorant Garamond, Montserrat, IM Fell English) |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout — fonts, metadata, cursor
│   ├── page.js                 # Home page (composes all sections)
│   ├── not-found.js            # 404 page
│   └── writing/
│       ├── page.js             # Essay archive listing
│       └── [slug]/
│           └── page.js         # Individual essay with per-page SEO metadata
│
├── components/                 # One component = one .js + one .module.css
│   ├── Cursor.js/.module.css   # Custom gold cursor (client-side only)
│   ├── Nav.js/.module.css      # Sticky nav with scroll state + mobile drawer
│   ├── Hero.js/.module.css     # Canvas particle field hero
│   ├── Marquee.js/.module.css  # Infinite scroll marquee
│   ├── Philosophy.js           # Section wrapper (server)
│   ├── PhilosophyClient.js     # Section content (client, uses useReveal)
│   ├── Philosophy.module.css
│   ├── T5Method.js/.module.css # Horizontal T5 carousel (client)
│   ├── Offerings.js/.module.css# Three-tier pricing cards
│   ├── About.js/.module.css    # Kyle bio section
│   ├── Writing.js/.module.css  # Homepage featured essays
│   ├── Testimonial.js/.module.css
│   ├── Newsletter.js/.module.css # Email signup with form state
│   └── Footer.js/.module.css
│
├── hooks/
│   ├── useScrolled.js          # Returns true when page.scrollY > threshold
│   └── useReveal.js            # IntersectionObserver for .reveal animations
│
├── lib/
│   └── essays.js               # Data layer — swap functions for Sanity queries
│
└── styles/
    └── globals.css             # Design tokens, reset, global utilities
```

---

## Adding a Real Essay

Edit `src/lib/essays.js` and add an object to the `essays` array:

```js
{
  slug:        'your-essay-slug',          // URL: /writing/your-essay-slug
  title:       'Your Essay Title',
  tier:        'T5',                       // T1 | T2 | T3 | T4 | T5
  glyph:       'T5',                       // Number or short label for hero image
  glyphBg:     'linear-gradient(135deg, #1C1C18, #2a2a24)',
  excerpt:     'Short description...',
  readTime:    '8 min read',
  publishedAt: '2025-02-01',              // ISO date, used for sorting & OG
  featured:    true,                       // Show on homepage?
}
```

Then add the essay body in `/src/app/writing/[slug]/page.js` — currently a placeholder. When Sanity is connected, replace the static placeholder with `<PortableText value={essay.body} />`.

---

## Connecting Sanity CMS

### 1. Install

```bash
npm install @sanity/client @sanity/image-url next-sanity @portabletext/react
```

### 2. Create Sanity project

```bash
npx sanity init --bare
```

### 3. Create `/src/lib/sanity.js`

```js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2025-01-01',
  useCdn:    process.env.NODE_ENV === 'production',
})
```

### 4. Replace functions in `/src/lib/essays.js`

```js
import { client } from './sanity'

export async function getAllEssays() {
  return client.fetch(`*[_type == "essay"] | order(publishedAt desc)`)
}

export async function getEssayBySlug(slug) {
  return client.fetch(
    `*[_type == "essay" && slug.current == $slug][0]`,
    { slug }
  )
}

export async function getAllSlugs() {
  const slugs = await client.fetch(`*[_type == "essay"].slug.current`)
  return slugs.map(slug => ({ slug }))
}
```

### 5. Make pages async

```js
// app/writing/[slug]/page.js
export default async function EssayPage({ params }) {
  const essay = await getEssayBySlug(params.slug)
  // ...
}
```

### 6. Add schema to Sanity Studio

Create `schemas/essay.js` in your Sanity studio:

```js
export default {
  name: 'essay',
  title: 'Essay',
  type: 'document',
  fields: [
    { name: 'title',       type: 'string' },
    { name: 'slug',        type: 'slug', options: { source: 'title' } },
    { name: 'tier',        type: 'string', options: { list: ['T1','T2','T3','T4','T5'] } },
    { name: 'excerpt',     type: 'text' },
    { name: 'body',        type: 'array', of: [{ type: 'block' }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'featured',    type: 'boolean' },
    { name: 'readTime',    type: 'string' },
  ],
}
```

---

## Connecting ConvertKit (Newsletter)

In `src/components/Newsletter.js`, replace the fake `await new Promise(...)` with:

```js
const res = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
    email,
  }),
})
```

Or better — create an API route at `src/app/api/subscribe/route.js` to keep the API key server-side.

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com for automatic deployments
```

Set these environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `CONVERTKIT_API_KEY`

---

## Design Tokens

All design decisions live in `src/styles/globals.css` under `:root {}`:

```css
--bone:       #F5F0E8   /* Primary light text / backgrounds */
--gold:       #C9A96E   /* Accent — use sparingly */
--gold-dark:  #A07840   /* Hover states */
--near-black: #0E0E0B   /* Page background */
--muted:      rgba(245, 240, 232, 0.45)  /* Secondary text */
--border:     rgba(201, 169, 110, 0.22)  /* Accent borders */
```

---

## Adding Photography

Replace the CSS placeholder monogram in `About.module.css` and `About.js`:

```jsx
// In About.js, replace the .img div with:
import Image from 'next/image'

<div className={styles.imgWrapper}>
  <Image
    src="/images/kyle-about.jpg"   // Place in /public/images/
    alt="Kyle Wisniewski"
    fill
    style={{ objectFit: 'cover' }}
    priority
  />
</div>
```

Recommended: 800×1000px, high-contrast, minimal background — consistent with the dark editorial aesthetic.

---

*The game is won inside first. — INNERGAME*
