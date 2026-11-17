import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ContactForm from '../components/forms/ContactForm'
import SafeImage from '../components/common/SafeImage'
import { getPropertyBySlug } from '../services/propertyService'
import type { Property } from '../types'
import { formatPrice } from '../utils/format'
/** Detail page: GET /properties/:slug. Includes an enquiry form tied to propertyId. */
export default function PropertyDetail() {
  const { slug = '' } = useParams()
  const [p, setP] = useState<Property | null | undefined>(undefined)
  useEffect(() => { window.scrollTo(0, 0); setP(undefined); void getPropertyBySlug(slug).then((x) => { setP(x); document.title = x ? `${x.title} — Halden & Rowe` : 'Not found — Halden & Rowe' }) }, [slug])
  return (<><div className="bg-ink"><Navbar /></div>
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 md:px-10">
      {p === undefined ? <div className="mt-10 aspect-[16/7] animate-pulse bg-bone" aria-label="Loading" />
      : p === null ? <div className="py-32 text-center"><h1 className="font-serif text-4xl">We could not find that property.</h1><Link to="/#properties" className="btn btn-solid mt-6">Back to properties</Link></div>
      : <><Link to="/#properties" className="text-sm text-stone hover:text-brass">Back to properties</Link>
        <div className="mt-6 grid gap-3 md:grid-cols-3"><SafeImage eager src={p.images[0]} alt={`${p.title} exterior`} className="aspect-[4/3] w-full md:col-span-2 md:row-span-2 md:h-full" />{p.images.slice(1, 3).map((s, i) => <SafeImage key={s} src={s} alt={`${p.title} view ${i + 2}`} className="aspect-[4/3] w-full" />)}</div>
        <div className="mt-12 grid gap-14 lg:grid-cols-12"><div className="lg:col-span-7"><h1 className="font-serif text-5xl font-light">{p.title}</h1><p className="mt-2 text-stone">{p.propertyType} in {p.location} · {p.status}</p><p className="mt-6 font-serif text-3xl text-brass">{formatPrice(p.price, p.listingType === 'rent')}</p><p className="mt-6 max-w-xl text-lg">{p.description}</p>
          <dl className="mt-8 grid grid-cols-3 border-t border-stone/30 pt-6">{[['Bedrooms', p.bedrooms], ['Bathrooms', p.bathrooms], ['Area (sq ft)', p.area.toLocaleString('en-IN')]].map(([k, v]) => <div key={k}><dt className="text-sm text-stone">{k}</dt><dd className="font-serif text-2xl">{v}</dd></div>)}</dl>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">{p.features.map((f) => <li key={f} className="border-b border-stone/20 py-2">{f}</li>)}</ul></div>
          <aside className="lg:col-span-5"><h2 className="mb-6 font-serif text-2xl">Enquire about this property</h2><ContactForm propertyId={p.id} /></aside></div></>}
    </main><Footer /></>)
}
