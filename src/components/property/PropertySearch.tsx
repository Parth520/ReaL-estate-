import { Search } from 'lucide-react'
import type { FormEvent } from 'react'
import type { ListingType, PropertyFilters, PropertyType } from '../../types'
const locations = ['Whitefield', 'Indiranagar', 'MG Road']
const types: PropertyType[] = ['Villa', 'Apartment', 'Penthouse', 'Townhouse', 'Commercial']
const budgets: [string, number][] = [['Any budget', 0], ['Up to ₹1 Cr', 1e7], ['Up to ₹5 Cr', 5e7], ['Up to ₹10 Cr', 1e8]]
/** Controlled search bar. Emits PropertyFilters; knows nothing about data fetching. */
export default function PropertySearch({ filters, onSearch }: { filters: PropertyFilters; onSearch: (f: PropertyFilters) => void }) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = new FormData(e.currentTarget)
    onSearch({ listingType: (d.get('purpose') as ListingType) || '', location: String(d.get('location') ?? ''), propertyType: (d.get('type') as PropertyType) || '', maxPrice: Number(d.get('budget')) || undefined })
  }
  const sel = 'w-full bg-transparent border-b border-stone/40 py-2.5 text-base outline-none focus:border-brass'
  return (
    <form onSubmit={submit} aria-label="Search properties" key={JSON.stringify(filters)} className="grid gap-5 bg-paper p-6 text-ink shadow-2xl sm:grid-cols-2 md:p-8 lg:grid-cols-[repeat(4,1fr)_auto] lg:items-end">
      <div><label htmlFor="purpose" className="text-sm text-stone">I want to</label><select id="purpose" name="purpose" defaultValue={filters.listingType ?? ''} className={sel}><option value="">Buy or rent</option><option value="buy">Buy</option><option value="rent">Rent</option></select></div>
      <div><label htmlFor="location" className="text-sm text-stone">Area</label><select id="location" name="location" defaultValue={filters.location ?? ''} className={sel}><option value="">All areas</option>{locations.map((l) => <option key={l}>{l}</option>)}</select></div>
      <div><label htmlFor="type" className="text-sm text-stone">Property type</label><select id="type" name="type" defaultValue={filters.propertyType ?? ''} className={sel}><option value="">All types</option>{types.map((t) => <option key={t}>{t}</option>)}</select></div>
      <div><label htmlFor="budget" className="text-sm text-stone">Budget</label><select id="budget" name="budget" defaultValue={filters.maxPrice ?? 0} className={sel}>{budgets.map(([l, v]) => <option key={l} value={v}>{l}</option>)}</select></div>
      <button className="btn btn-solid sm:col-span-2 lg:col-span-1"><Search size={16} aria-hidden /> Search</button>
    </form>
  )
}
