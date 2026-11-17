import { useState } from 'react'
/** Lazy image with a neutral fallback so a dead URL never shows a broken icon. */
export default function SafeImage({ src, alt, className = '', eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div role="img" aria-label={alt} className={`bg-bone ${className}`} />
  return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} className={`object-cover ${className}`} />
}
