/**
 * @/lib/essays.js
 *
 * Data layer for INNERGAME essays.
 *
 * Currently ships mock data for local development and static builds.
 * To connect Sanity CMS, replace the functions below with Sanity GROQ
 * queries using `@sanity/client`. The component API remains identical.
 *
 * SANITY MIGRATION GUIDE (when ready):
 * ──────────────────────────────────────
 * 1. npm install @sanity/client next-sanity
 * 2. Create /src/lib/sanity.js with createClient({ projectId, dataset, ... })
 * 3. Replace getEssays() with:
 *    const client = createClient({ ... })
 *    export async function getEssays() {
 *      return client.fetch(`*[_type == "essay"] | order(publishedAt desc)`)
 *    }
 * 4. Make page.js async: export default async function WritingPage()
 * 5. Await the data: const essays = await getEssays()
 */

// ── T5 TIER METADATA ──────────────────────────────────────────────────────
export const T5_TIERS = {
  T1: { label: 'Tier One · Immediate',      color: '#8A8478' },
  T2: { label: 'Tier Two · Ultradian',      color: '#A07840' },
  T3: { label: 'Tier Three · Daily',        color: '#C9A96E' },
  T4: { label: 'Tier Four · Developmental', color: '#8A8478' },
  T5: { label: 'Tier Five · Existential',   color: '#C9A96E' },
}

// ── ESSAY DATA ────────────────────────────────────────────────────────────
const essays = [
  {
    slug:         'what-is-the-inner-game',
    title:        'What Is the Inner Game?',
    tier:         'T5',
    glyph:        'T5',
    glyphBg:      'linear-gradient(135deg, #1C1C18 0%, #2a2a24 100%)',
    excerpt:      'The question beneath every performance. Not what you do, but who you are when you do it. An introduction to the framework that changes everything.',
    readTime:     '8 min read',
    publishedAt:  '2025-01-14',
    featured:     true,
  },
  {
    slug:         'architecture-of-a-value-driven-life',
    title:        'The Architecture of a Value-Driven Life',
    tier:         'T1',
    glyph:        '01',
    glyphBg:      'linear-gradient(135deg, #1a1810 0%, #2c2618 100%)',
    excerpt:      'Hard decisions make for an easy life. Easy decisions make for a hard one. How the structure beneath your choices determines the texture of your years.',
    readTime:     '11 min read',
    publishedAt:  '2025-01-07',
    featured:     true,
  },
  {
    slug:         'who-is-brave-is-free',
    title:        'Who Is Brave Is Free',
    tier:         'T4',
    glyph:        '04',
    glyphBg:      'linear-gradient(135deg, #181820 0%, #22222e 100%)',
    excerpt:      'Seneca said it. I respond. We do not think freely until we choose the landscape in which our thinking occurs. On bravery, environment, and the athlete\'s identity.',
    readTime:     '9 min read',
    publishedAt:  '2024-12-31',
    featured:     true,
  },
  {
    slug:         'the-90-minute-athlete',
    title:        'The 90-Minute Athlete',
    tier:         'T2',
    glyph:        '02',
    glyphBg:      'linear-gradient(135deg, #141416 0%, #1e1c14 100%)',
    excerpt:      'Your body runs on a 90-minute ultradian rhythm. Ignore it and you train against yourself. Work with it and performance compounds automatically.',
    readTime:     '7 min read',
    publishedAt:  '2024-12-24',
    featured:     false,
  },
  {
    slug:         'on-the-architecture-of-a-morning',
    title:        'On the Architecture of a Morning',
    tier:         'T3',
    glyph:        '03',
    glyphBg:      'linear-gradient(135deg, #16140e 0%, #221e12 100%)',
    excerpt:      'How you design the first 90 minutes of your day determines the character of every hour that follows. A ritual is not a routine — it is a declaration of identity.',
    readTime:     '10 min read',
    publishedAt:  '2024-12-17',
    featured:     false,
  },
  {
    slug:         'the-examined-season',
    title:        'The Examined Season',
    tier:         'T4',
    glyph:        '04',
    glyphBg:      'linear-gradient(135deg, #181820 0%, #22222e 100%)',
    excerpt:      'A season without reflection is just elapsed time. How to extract philosophy from the arc of athletic competition — and carry it forward.',
    readTime:     '12 min read',
    publishedAt:  '2024-12-10',
    featured:     false,
  },
]

// ── PUBLIC API ────────────────────────────────────────────────────────────

/** Return all essays, most recent first */
export function getAllEssays() {
  return essays.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  )
}

/** Return the N featured essays for the homepage */
export function getFeaturedEssays(count = 3) {
  return essays
    .filter((e) => e.featured)
    .slice(0, count)
}

/** Return a single essay by slug */
export function getEssayBySlug(slug) {
  return essays.find((e) => e.slug === slug) ?? null
}

/** Return all slugs for static generation */
export function getAllSlugs() {
  return essays.map((e) => ({ slug: e.slug }))
}
