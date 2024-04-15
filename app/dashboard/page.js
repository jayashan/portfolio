"use client"
import { Suspense } from 'react'
export default function Page() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <h1>hello</h1>
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <h2>hello</h2>
      </Suspense>
    </section>
  )
}