import { useEffect } from 'react'
import { usePropertySearch } from '../hooks/usePropertySearch'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Intro from '../components/sections/Intro'
import FeaturedProperties from '../components/sections/FeaturedProperties'
import { Areas, Services, Testimonials, WhyUs } from '../components/sections/Mid'
import CallToAction from '../components/sections/CallToAction'
/** Landing page. Owns the search state; sections stay presentational. */
export default function Home() {
  const { filters, setFilters, results, loading } = usePropertySearch()
  useEffect(() => { document.title = 'Halden & Rowe — Homes that earn their address' }, [])
  // Search from the hero also scrolls to results.
  const search = (f: typeof filters) => { setFilters(f); document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' }) }
  return (<>
    <Navbar onPurpose={(p) => setFilters({ ...filters, listingType: p })} />
    <main><Hero filters={filters} onSearch={search} /><Intro /><FeaturedProperties results={results} loading={loading} onReset={() => setFilters({})} /><WhyUs /><Services /><Areas onPick={(l) => setFilters({ location: l })} /><Testimonials /><CallToAction /></main>
    <Footer />
  </>)
}
