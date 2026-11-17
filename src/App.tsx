import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import PropertyDetail from './pages/PropertyDetail'
/** Routes. Also scrolls to #hash targets after navigation (e.g. /#contact from the detail page). */
export default function App() {
  const { hash, pathname } = useLocation()
  useEffect(() => { if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 50) }, [hash, pathname])
  return <Routes><Route path="/" element={<Home />} /><Route path="/properties/:slug" element={<PropertyDetail />} /><Route path="*" element={<Home />} /></Routes>
}
