import { useCallback, useEffect, useState } from 'react'
import { searchProperties } from '../services/propertyService'
import type { Property, PropertyFilters } from '../types'
/** Owns filters + results + loading so UI components stay presentational. */
export function usePropertySearch() {
  const [filters, setFilters] = useState<PropertyFilters>({})
  const [results, setResults] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const run = useCallback(async (f: PropertyFilters) => { setLoading(true); setResults(await searchProperties(f)); setLoading(false) }, [])
  useEffect(() => { void run(filters) }, [filters, run])
  return { filters, setFilters, results, loading }
}
