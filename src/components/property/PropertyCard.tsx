import { BedDouble, Bath, Ruler } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Property } from '../../types'
import { formatPrice } from '../../utils/format'
import SafeImage from '../common/SafeImage'
/** Presentational card. `tall` lets the parent grid vary rhythm without a second component. */
export default function PropertyCard({ property: p, tall = false }: { property: Property; tall?: boolean }) {
  return (
    <article className="group">
      <Link to={`/properties/${p.slug}`} className="block" aria-label={`View details: ${p.title}`}>
        <div className={`relative overflow-hidden ${tall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
          <SafeImage src={p.images[0]} alt={`${p.propertyType} ${p.title} in ${p.location}`} className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-105" />
          <span className={`absolute left-0 top-5 px-4 py-1.5 text-xs ${p.status === 'Available' ? 'bg-paper text-ink' : 'bg-ink text-paper'}`}>{p.status}</span>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4"><div><h3 className="font-serif text-2xl">{p.title}</h3><p className="text-sm text-stone">{p.propertyType} in {p.location}</p></div><p className="whitespace-nowrap font-serif text-xl text-brass">{formatPrice(p.price, p.listingType === 'rent')}</p></div>
        <ul className="mt-4 flex gap-6 border-t border-stone/25 pt-4 text-sm text-stone">
          {p.bedrooms > 0 && <li className="flex items-center gap-2"><BedDouble size={16} aria-hidden /> {p.bedrooms} beds</li>}
          <li className="flex items-center gap-2"><Bath size={16} aria-hidden /> {p.bathrooms} baths</li><li className="flex items-center gap-2"><Ruler size={16} aria-hidden /> {p.area.toLocaleString('en-IN')} sq ft</li>
        </ul>
        <span className="mt-4 inline-block border-b border-ink pb-0.5 text-sm group-hover:border-brass group-hover:text-brass">View details</span>
      </Link>
    </article>
  )
}
