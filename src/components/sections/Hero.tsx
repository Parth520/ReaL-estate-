import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { img } from '../../data/images'
import type { PropertyFilters } from '../../types'
import PropertySearch from '../property/PropertySearch'
import SafeImage from '../common/SafeImage'
/** Hero composition: photo bleeds off the right edge, headline sits on an ink panel that overlaps it,
 *  and the search bar docks across the seam. Motion: one load sequence (image wipe, then headline lines)
 *  plus a gentle parallax on the photo. All of it is disabled under prefers-reduced-motion. */
export default function Hero({ filters, onSearch }: { filters: PropertyFilters; onSearch: (f: PropertyFilters) => void }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%'])
  const line = (i: number) => ({ initial: { y: reduce ? 0 : '100%' }, animate: { y: 0 }, transition: { duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const } })
  return (
    <section ref={ref} className="relative bg-ink text-paper">
      <div className="mx-auto grid min-h-[92vh] max-w-[1440px] lg:grid-cols-12">
        <div className="relative z-10 flex flex-col justify-end px-5 pb-16 pt-36 md:px-10 lg:col-span-6 lg:pb-40">
          <h1 className="font-serif text-[clamp(2.8rem,7vw,6.5rem)] font-light leading-[0.95] lg:-mr-40">
            {['Homes that', 'earn their', 'address.'].map((t, i) => <span key={t} className="block overflow-hidden pb-2"><motion.span className="block" {...line(i)}>{t}</motion.span></span>)}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-8 max-w-md text-lg text-paper/75">Every listing is inspected and legally checked by our team before it reaches you. Buy, sell or rent with people who put their names to the advice.</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-8 flex flex-wrap gap-4">
            <a href="#properties" className="btn bg-brass text-ink hover:bg-paper">Browse properties</a><a href="#contact" className="btn btn-line border-paper/60 hover:bg-paper hover:text-ink">Book a consultation</a>
          </motion.div>
        </div>
        <motion.div initial={{ clipPath: reduce ? 'inset(0)' : 'inset(0 0 0 100%)' }} animate={{ clipPath: 'inset(0)' }} transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }} className="relative h-[55vh] overflow-hidden lg:col-span-6 lg:h-auto">
          <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0"><SafeImage eager src={img.hero} alt="Modern residence with a lit glass facade at dusk" className="h-full w-full" /></motion.div>
        </motion.div>
      </div>
      <div className="relative z-20 mx-auto max-w-[1440px] px-5 md:px-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:translate-y-1/2"><PropertySearch filters={filters} onSearch={onSearch} /></div>
    </section>
  )
}
