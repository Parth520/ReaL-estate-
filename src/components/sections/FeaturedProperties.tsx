import type { Property } from '../../types'
import PropertyCard from '../property/PropertyCard'
/** Property results grid with loading + empty states. Staggered offsets break the uniform-card look. */
export default function FeaturedProperties({ results, loading, onReset }: { results: Property[]; loading: boolean; onReset: () => void }) {
  const span = ['lg:col-span-7', 'lg:col-span-5 lg:mt-24', 'lg:col-span-5', 'lg:col-span-7 lg:mt-16', 'lg:col-span-6', 'lg:col-span-6 lg:mt-20']
  return (
    <section id="properties" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-24 md:px-10">
      <h2 className="max-w-xl font-serif text-4xl font-light md:text-5xl">Currently on our books</h2>
      <div aria-live="polite" className="mt-14">
        {loading ? <div className="grid gap-10 lg:grid-cols-12">{[7, 5].map((c) => <div key={c} className={`lg:col-span-${c} aspect-[4/3] animate-pulse bg-bone`} aria-label="Loading properties" />)}</div>
        : results.length === 0 ? <div className="border-y border-stone/30 py-20 text-center"><p className="font-serif text-3xl">No properties match those filters.</p><p className="mt-2 text-stone">Widen the budget or choose a different area.</p><button onClick={onReset} className="btn btn-solid mt-6">Clear filters</button></div>
        : <div className="grid gap-x-10 gap-y-16 lg:grid-cols-12">{results.map((p, i) => <div key={p.id} className={span[i % span.length]}><PropertyCard property={p} tall={i % 3 === 1} /></div>)}</div>}
      </div>
    </section>
  )
}
