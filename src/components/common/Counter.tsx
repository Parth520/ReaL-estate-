import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
/** Counts up once when scrolled into view; shows final value immediately if reduced motion is on. */
export default function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [v, setV] = useState(reduce ? to : 0)
  useEffect(() => { if (inView && !reduce) { const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) }); return () => c.stop() } }, [inView, to, reduce])
  return <span ref={ref}>{v.toLocaleString('en-IN')}{suffix}</span>
}
