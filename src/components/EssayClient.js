'use client'

import { useRef } from 'react'
import ReadingProgress from '@/components/ReadingProgress'

/**
 * Client shell for the essay page.
 * Wraps the article body in a ref so ReadingProgress can track it precisely.
 * Everything else stays server-rendered.
 */
export default function EssayClient({ children }) {
  const articleRef = useRef(null)

  return (
    <>
      <ReadingProgress articleRef={articleRef} />
      <div ref={articleRef}>
        {children}
      </div>
    </>
  )
}
