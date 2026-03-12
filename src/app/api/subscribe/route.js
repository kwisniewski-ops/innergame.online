/**
 * POST /api/subscribe
 *
 * Body: { email: string }
 *
 * Forwards the subscription to ConvertKit using server-side env vars.
 * The CONVERTKIT_SECRET_KEY is never exposed to the browser.
 *
 * Required environment variables (set in Vercel dashboard):
 *   CONVERTKIT_SECRET_KEY  — your ConvertKit secret API key
 *   CONVERTKIT_FORM_ID     — the numeric ID of your signup form
 */

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    const apiKey  = process.env.CONVERTKIT_SECRET_KEY
    const formId  = process.env.CONVERTKIT_FORM_ID

    if (!apiKey || !formId) {
      console.error('Missing CONVERTKIT_SECRET_KEY or CONVERTKIT_FORM_ID env vars')
      return Response.json(
        { error: 'Newsletter service is not configured yet.' },
        { status: 503 }
      )
    }

    const ckRes = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          tags: ['sovereign-letter'],   // Tag applied in ConvertKit for this form
        }),
      }
    )

    const ckData = await ckRes.json()

    if (!ckRes.ok) {
      console.error('ConvertKit error:', ckData)
      return Response.json(
        { error: 'Could not subscribe. Please try again.' },
        { status: 500 }
      )
    }

    return Response.json({ success: true })

  } catch (err) {
    console.error('Subscribe route error:', err)
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
