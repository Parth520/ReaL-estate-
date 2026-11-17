import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { ListingType } from '../../types'
/** Sticky header: transparent over the hero, solid ivory after 40px of scroll. Drawer on mobile.
 *  `onPurpose` lets Buy/Rent preset the search filter (see Home). */
export default function Navbar({ onPurpose }: { onPurpose?: (p: ListingType | '') => void }) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setSolid(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  const links: { label: string; href: string; purpose?: ListingType | '' }[] = [
    { label: 'Properties', href: '/#properties', purpose: '' }, { label: 'Buy', href: '/#properties', purpose: 'buy' }, { label: 'Rent', href: '/#properties', purpose: 'rent' },
    { label: 'Sell', href: '/#contact' }, { label: 'About us', href: '/#about' }, { label: 'Contact', href: '/#contact' }]
  const go = (p?: ListingType | '') => { setOpen(false); if (p !== undefined) onPurpose?.(p) }
  const dark = !solid
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? 'bg-paper/95 backdrop-blur border-b border-stone/20 text-ink' : 'text-paper'}`}>
      <nav aria-label="Main" className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10 transition-all duration-500 ${solid ? 'py-3' : 'py-6'}`}>
        <Link to="/" className="font-serif text-2xl leading-none" aria-label="Halden & Rowe home">Halden<span className="text-brass"> &amp; </span>Rowe</Link>
        <ul className="hidden items-center gap-8 text-sm lg:flex">
          {links.map((l) => <li key={l.label}><a href={l.href} onClick={() => go(l.purpose)} className="relative py-1 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-brass after:transition-transform hover:after:scale-x-100">{l.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <a href="/#contact" className={`btn hidden sm:inline-flex ${dark ? 'bg-paper text-ink hover:bg-brass' : 'btn-solid'}`}>List your property</a>
          <button className="lg:hidden p-2 -mr-2" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu /></button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div role="dialog" aria-modal="true" aria-label="Menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-0 z-50 flex flex-col bg-ink p-6 text-paper">
            <button className="self-end p-2" aria-label="Close menu" onClick={() => setOpen(false)} autoFocus><X /></button>
            <ul className="mt-8 flex flex-col gap-5 font-serif text-4xl">{links.map((l) => <li key={l.label}><a href={l.href} onClick={() => go(l.purpose)}>{l.label}</a></li>)}</ul>
            <a href="/#contact" onClick={() => go()} className="btn mt-auto bg-brass text-ink">List your property</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
