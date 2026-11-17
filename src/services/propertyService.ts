// INTEGRATION POINT: each function below has a mock body. Replace with fetch(`${API_BASE_URL}/...`).
import { wait } from '../config/api'
import { properties } from '../data/properties'
import { areas, services, testimonials } from '../data/content'
import type { Area, ListingPayload, Property, PropertyFilters, Service, Testimonial } from '../types'

/** GET /properties?location=&propertyType=&listingType=&maxPrice= */
export async function searchProperties(filters: PropertyFilters = {}): Promise<Property[]> {
  await wait()
  return properties.filter((p) =>
    (!filters.location || p.location === filters.location) &&
    (!filters.propertyType || p.propertyType === filters.propertyType) &&
    (!filters.listingType || p.listingType === filters.listingType) &&
    (!filters.maxPrice || p.price <= filters.maxPrice))
}
/** GET /properties */
export const getProperties = () => searchProperties()
/** GET /properties/featured */
export async function getFeaturedProperties(): Promise<Property[]> { await wait(300); return properties.slice(0, 4) }
/** GET /properties/:slug */
export async function getPropertyBySlug(slug: string): Promise<Property | null> { await wait(300); return properties.find((p) => p.slug === slug) ?? null }
/** POST /listings */
export async function submitListing(payload: ListingPayload): Promise<{ ok: true }> { await wait(800); console.info('[mock] listing', payload); return { ok: true } }
/** GET /areas, /services, /testimonials (or serve from a CMS) */
export const getAreas = async (): Promise<Area[]> => areas
export const getServices = async (): Promise<Service[]> => services
export const getTestimonials = async (): Promise<Testimonial[]> => testimonials
