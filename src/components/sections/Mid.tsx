import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getAreas, getServices, getTestimonials } from '../../services/propertyService'
import type { Area, Service, Testimonial } from '../../types'
import SafeImage from '../common/SafeImage'

const useData = <T,>(fn: () => Promise<T[]>) => { const [d, s] = useState<T[]>([]); useEffect(() => { void fn().then(s) }, [fn]); return d }

const reasons = [['Verified listings', 'Title, approvals and encumbrances are checked before anything is advertised.'], ['Neighbourhood specialists', 'One adviser per area, who can tell you what a street is really like.'], ['Fees in writing', 'You see every charge before you sign anything.'], ['One person throughout', 'The adviser who shows you the house is the one who hands over the keys.']]
export function WhyUs() {
  return <section className="bg-moss text-paper"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-12"><h2 className="font-serif text-4xl font-light md:text-5xl lg:col-span-4">What you can count on</h2>
    <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">{reasons.map(([t, d]) => <div key={t} className="border-t border-paper/30 pt-5"><dt className="font-serif text-2xl">{t}</dt><dd className="mt-2 text-paper/75">{d}</dd></div>)}</dl></div></section>
}

export function Services() {
  const items = useData<Service>(getServices)
  return <section id="services" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-24 md:px-10"><h2 className="font-serif text-4xl font-light md:text-5xl">How we can help</h2>
    <ul className="mt-12 border-t border-stone/30">{items.map((s) => <li key={s.id} className="grid gap-2 border-b border-stone/30 py-6 transition-colors hover:bg-bone/60 md:grid-cols-12 md:px-3"><h3 className="font-serif text-2xl md:col-span-5">{s.title}</h3><p className="text-stone md:col-span-7">{s.description}</p></li>)}</ul></section>
}

export function Areas({ onPick }: { onPick: (location: string) => void }) {
  const items = useData<Area>(getAreas)
  return <section id="areas" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 pb-24 md:px-10"><h2 className="font-serif text-4xl font-light md:text-5xl">Where we work</h2>
    <div className="mt-12 grid gap-6 md:grid-cols-3">{items.map((a, i) => <article key={a.id} className={`group relative overflow-hidden text-paper ${i === 1 ? 'md:mt-12' : ''}`}><SafeImage src={a.image} alt={`${a.name} neighbourhood`} className="aspect-[3/4] w-full transition-transform duration-[900ms] group-hover:scale-105" />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/10 p-6"><h3 className="font-serif text-3xl">{a.name}</h3><p className="mt-1 text-sm text-paper/80">{a.blurb}</p><p className="mt-3 text-sm">{a.listings} listings</p><a href="#properties" onClick={() => onPick(a.name)} className="mt-3 w-fit border-b border-paper pb-0.5 text-sm">Explore properties in {a.name}</a></div></article>)}</div></section>
}

export function Testimonials() {
  const items = useData<Testimonial>(getTestimonials); const [i, setI] = useState(0)
  if (!items.length) return null
  const t = items[i]; const go = (n: number) => setI((n + items.length) % items.length)
  return <section className="bg-bone"><div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-10"><h2 className="sr-only">Client testimonials</h2>
    <div aria-live="polite" className="min-h-[15rem]"><AnimatePresence mode="wait"><motion.figure key={t.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}><blockquote className="font-serif text-3xl font-light leading-snug md:text-4xl">“{t.quote}”</blockquote><figcaption className="mt-6 text-stone"><span className="text-ink">{t.name}</span>, {t.context}</figcaption></motion.figure></AnimatePresence></div>
    <div className="mt-8 flex items-center justify-center gap-4"><button aria-label="Previous testimonial" onClick={() => go(i - 1)} className="p-2 hover:text-brass"><ChevronLeft /></button><span className="text-sm text-stone">{i + 1} of {items.length}</span><button aria-label="Next testimonial" onClick={() => go(i + 1)} className="p-2 hover:text-brass"><ChevronRight /></button></div></div></section>
}
