/**
 * @/lib/essays.js
 * Data layer — swap functions for Sanity GROQ queries when CMS is connected.
 */

export const T5_TIERS = {
  T1: { label: 'Tier One · Immediate',      color: '#8A8478' },
  T2: { label: 'Tier Two · Ultradian',      color: '#A07840' },
  T3: { label: 'Tier Three · Daily',        color: '#C9A96E' },
  T4: { label: 'Tier Four · Developmental', color: '#8A8478' },
  T5: { label: 'Tier Five · Existential',   color: '#C9A96E' },
}

const essays = [
  {
    slug:        'what-is-the-inner-game',
    title:       'What Is the Inner Game?',
    tier:        'T5',
    glyph:       'T5',
    glyphBg:     'linear-gradient(135deg, #1C1C18 0%, #2a2a24 100%)',
    excerpt:     'The question beneath every performance. Not what you do, but who you are when you do it. An introduction to the framework that changes everything.',
    readTime:    '8 min read',
    publishedAt: '2025-01-14',
    featured:    true,
    body: `
The question beneath every performance is not what you do — it is who you are when you do it.

This is the Inner Game. And it begins not in the weight room, not on the field, but in the quiet moments before you ever lace up.

Stoic philosophy has a word for the discipline of perception: phantasia. Every impression — every moment of pressure, every setback, every unexpected outcome — arrives first as a raw perception. What you do with that perception in the next half-second determines everything. Not talent. Not preparation. Perception.

Adlerian psychology adds a complementary lens: the belief that behavior is always purposive. You are not driven by your past — you are pulled by your future. By the vision of who you are choosing to become. The Inner Game is the practice of making that vision coherent, vivid, and demanding.

## The T5 Connection

The T5 Timescale Framework maps this work across five distinct layers of human experience — from the breath in the present second, to the values that define a lifetime. The Inner Game is not one layer. It is the thread that runs through all five.

Every T5 tier asks the same question in a different register: who are you choosing to be right now? At T1, it is the choice to breathe before reacting. At T5, it is the choice to live in alignment with what you actually value, regardless of what it costs.

## Why This Matters More Than Any Drill

The outer game — technique, tactics, physical conditioning — can be taught. It is learnable. It is coachable in the traditional sense. You do the drill, you get better at the drill.

The inner game is different. It requires something harder than practice. It requires honesty. The kind of honesty that looks at what you actually do under pressure — not what you intend to do, not what you believe you would do, but what you actually do — and decides to change it.

That's the work. And it is the only work that compounds across every domain of your life.

This is what I mean when I say the game is won inside first. Not as a metaphor. As a map. — KW
    `,
  },
  {
    slug:        'architecture-of-a-value-driven-life',
    title:       'The Architecture of a Value-Driven Life',
    tier:        'T1',
    glyph:       '01',
    glyphBg:     'linear-gradient(135deg, #1a1810 0%, #2c2618 100%)',
    excerpt:     'Hard decisions make for an easy life. Easy decisions make for a hard one. How the structure beneath your choices determines the texture of your years.',
    readTime:    '11 min read',
    publishedAt: '2025-01-07',
    featured:    true,
    body: `
Marcus Aurelius kept a private journal. Not for publication — for correction. Every morning, he wrote not to record what happened, but to remind himself who he was choosing to be.

That is the architecture of a value-driven life: a daily return to the question of character.

## The Problem With Goals

Goals are useful. But they are the wrong foundation for a performance life. A goal is an outcome. Outcomes are never entirely within your control. A value is a commitment to a way of being. A way of being is always within your control.

The athlete who commits to effort — genuine, full effort, every repetition — has something that cannot be taken from them by a bad result. The athlete whose identity lives in outcomes is one injury, one loss, one bad season away from collapse.

Hard decisions make for an easy life. Easy decisions make for a hard one.

This is not a motivational aphorism. It is a structural observation. When you make the hard decision early — to prioritize values over comfort, to hold a standard when no one is watching — you eliminate thousands of small decisions downstream. The architecture does the work.

## Building the Structure

The T1 timescale — the Immediate — is where values meet action. In the breath before contact. In the half-second between stimulus and response. Stoic practice calls this the discipline of assent: the trained capacity to pause, examine, and choose your response rather than react from habit.

Adler called this lifestyle: the pattern of meaning that organizes all our behaviors toward a chosen goal. Not goals in the conventional sense — a goal as north star, as identity, as the person you have decided to become.

The architecture is simple. The discipline is hard. The result — a life that feels like yours — is worth every difficult choice that built it. — KW
    `,
  },
  {
    slug:        'who-is-brave-is-free',
    title:       'Who Is Brave Is Free',
    tier:        'T4',
    glyph:       '04',
    glyphBg:     'linear-gradient(135deg, #181820 0%, #22222e 100%)',
    excerpt:     'Seneca said it. I respond. We do not think freely until we choose the landscape in which our thinking occurs. On bravery, environment, and the athlete\'s identity.',
    readTime:    '9 min read',
    publishedAt: '2024-12-31',
    featured:    true,
    body: `
Seneca wrote it in a letter to Lucilius, sometime around 65 AD: Ille fortis et strenuus — the brave and energetic man. He who is brave is free.

I've been sitting with that sentence for three years.

## What Seneca Meant

Seneca wasn't talking about courage in combat. He was talking about freedom from the tyranny of opinion — the capacity to think, act, and live without the constant referendum of other people's judgment.

Most athletes are not free in this sense. They are performing for an audience that exists primarily in their own head. The imagined coach. The imagined critics. The imagined comparisons to peers. This internal audience is far more demanding than any real one — and it is entirely constructed by you.

Bravery, in Seneca's sense, is the discipline of dismantling that audience. Of choosing to act from your values rather than from your fear of how it will look.

## The Environment Problem

We do not think freely until we choose the landscape in which our thinking occurs.

This is the developmental timescale — T4 — at its most fundamental. The environments we inhabit over months and years shape the default settings of our character. Who you train with. What you read. The conversations you choose to have or avoid.

Every environment is a training protocol. The question is whether it is training you toward the person you are choosing to become, or away from them.

## The Brave Decision

The brave decision is rarely dramatic. It is usually quiet. It is choosing to hold the standard when no one is watching. It is choosing the difficult conversation over the comfortable silence. It is choosing, again and again, to be the person you said you were going to be.

Who is brave is free. I believe that. I train toward it every day. — KW
    `,
  },
  {
    slug:        'the-90-minute-athlete',
    title:       'The 90-Minute Athlete',
    tier:        'T2',
    glyph:       '02',
    glyphBg:     'linear-gradient(135deg, #141416 0%, #1e1c14 100%)',
    excerpt:     'Your body runs on a 90-minute ultradian rhythm. Ignore it and you train against yourself. Work with it and performance compounds automatically.',
    readTime:    '7 min read',
    publishedAt: '2024-12-24',
    featured:    false,
    body: `
Your body doesn't care about your schedule. It runs on a 90-minute clock — the ultradian rhythm — cycling between high-focus performance states and recovery. Fight this clock, and you accumulate a debt of fatigue you can't name. Work with it, and performance compounds automatically.

## What the Research Shows

The ultradian performance rhythm was first documented by sleep researcher Nathaniel Kleitman, who found that the 90-minute sleep cycle we're all familiar with continues throughout the day in our waking state. Every 90-120 minutes, your brain moves through a cycle of high arousal and low arousal.

The high phase: sharp focus, clear thinking, strong motivation. The low phase: diffuse attention, physical restlessness, mental drift.

Most athletes interpret the low phase as a failure of discipline. They push through it with caffeine, willpower, and self-criticism. This is training against yourself.

## The Protocol

The T2 athlete structures their day around these windows:

Work in 90-minute blocks of focused effort. When the low phase arrives — and you will feel it, usually as an urge to check your phone or a vague restlessness — stop. Rest. Breathe. Walk. 20 minutes is sufficient.

Then begin the next cycle.

This isn't a productivity hack. It is alignment with your biology. And alignment always outperforms force. — KW
    `,
  },
  {
    slug:        'on-the-architecture-of-a-morning',
    title:       'On the Architecture of a Morning',
    tier:        'T3',
    glyph:       '03',
    glyphBg:     'linear-gradient(135deg, #16140e 0%, #221e12 100%)',
    excerpt:     'How you design the first 90 minutes of your day determines the character of every hour that follows. A ritual is not a routine — it is a declaration of identity.',
    readTime:    '10 min read',
    publishedAt: '2024-12-17',
    featured:    false,
    body: `
The Stoics had a practice they called the morning meditation. Before the day's demands could colonize the mind, they would sit with a question: What kind of person am I choosing to be today?

Not a goal. Not a to-do list. A character commitment.

## Ritual vs. Routine

A routine is a sequence of actions. You can perform a routine on autopilot. Many people do. They have an elaborate morning routine that they execute while their attention is already at the office, at yesterday's argument, at the day's anxieties.

A ritual is different. A ritual is a sequence of actions performed with attention. The attention is the point. The sequence is just the container.

The athlete who builds a morning ritual — and maintains the quality of attention it requires — is performing an act of character before they've done a single rep.

## What the First 90 Minutes Determine

The first 90 minutes of your day establish the nervous system's baseline for everything that follows. This is not metaphor — it is physiology. The cortisol awakening response, the first ultradian performance window, the consolidation of sleep-learning: all of these processes occur in the first 90 minutes.

Colonize them with intention, and the rest of the day follows. Surrender them to the reactive pull of notifications and urgency, and you spend the day in catch-up.

## The Design Principle

Design the morning around what you want to be, not what you have to do.

What has to be done will always find its way into the day. What you want to be — the disciplined, clear-thinking, values-aligned person you are choosing to become — will only appear if you build it in. — KW
    `,
  },
  {
    slug:        'the-examined-season',
    title:       'The Examined Season',
    tier:        'T4',
    glyph:       '04',
    glyphBg:     'linear-gradient(135deg, #181820 0%, #22222e 100%)',
    excerpt:     'A season without reflection is just elapsed time. How to extract philosophy from the arc of athletic competition — and carry it forward.',
    readTime:    '12 min read',
    publishedAt: '2024-12-10',
    featured:    false,
    body: `
Socrates said the unexamined life is not worth living. I think the unexamined season is not worth having had.

A season is the longest natural unit of athletic experience. It has a beginning — defined by hope, possibility, the clean slate of preseason. A middle — defined by the grinding reality of competition, the management of fatigue and disappointment and small victories. An end — defined by closure, if you let it be, and by the weight of what you've learned.

Most athletes experience all three. Very few extract the philosophy.

## What Extraction Looks Like

The examined season is a practice of structured reflection. Not the vague "what did I learn?" that athletes answer with platitudes in post-season interviews. A precise accounting.

These are the questions I ask every athlete at season's end:

Where did your values and your behavior align? Be specific. What did you do that you're genuinely proud of — not for the result, but for the character it demonstrated?

Where did they diverge? When did you know what the right thing was and do something else? Not to punish yourself — to understand the pattern.

What did this season reveal about who you are under pressure that you didn't know before?

## The Arc Forward

The Developmental timescale — T4 — is built from seasons. Not from individual games or practices. The character that emerges over years is assembled from the choices made across hundreds of competitions, thousands of training sessions, and the reflection that knits them into meaning.

An examined season becomes a building block. An unexamined one is just elapsed time.

The Stoics called this taking the long view: seeing your life not as a series of disconnected events but as a coherent project of character development. The season is a chapter. You are the author. — KW
    `,
  },
]

export function getAllEssays() {
  return essays.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

export function getFeaturedEssays(count = 3) {
  return essays.filter((e) => e.featured).slice(0, count)
}

export function getEssayBySlug(slug) {
  return essays.find((e) => e.slug === slug) ?? null
}

export function getAllSlugs() {
  return essays.map((e) => ({ slug: e.slug }))
}
