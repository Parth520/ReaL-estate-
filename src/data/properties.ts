// MOCK DATA ONLY. Components never import this; use services/propertyService.ts.
import type { Property } from '../types'
import { img } from './images'
const f = ['Private garden', 'Smart-home wiring', 'Covered parking', '24h security']
export const properties: Property[] = [
  { id: 'p1', slug: 'the-cedar-house', title: 'The Cedar House', description: 'A low, timber-clad residence arranged around a courtyard, with deep eaves and a double-height living room.', price: 48500000, location: 'Whitefield', propertyType: 'Villa', listingType: 'buy', bedrooms: 5, bathrooms: 6, area: 6200, images: [img.p[0], img.p[4], img.p[6]], features: f, status: 'Available' },
  { id: 'p2', slug: 'atelier-12', title: 'Atelier 12', description: 'Corner apartment with floor-to-ceiling glazing and a library wall.', price: 16800000, location: 'Indiranagar', propertyType: 'Apartment', listingType: 'buy', bedrooms: 3, bathrooms: 3, area: 2100, images: [img.p[1], img.p[7], img.p[6]], features: f, status: 'Available' },
  { id: 'p3', slug: 'skyline-penthouse', title: 'Skyline Penthouse', description: 'Top-floor home with wraparound terrace and private lift.', price: 92000000, location: 'MG Road', propertyType: 'Penthouse', listingType: 'buy', bedrooms: 4, bathrooms: 5, area: 4800, images: [img.p[2], img.p[1], img.p[7]], features: f, status: 'Under offer' },
  { id: 'p4', slug: 'grain-exchange', title: 'Grain Exchange Offices', description: 'Restored brick commercial floors, open plan, with a street-level entrance.', price: 380000, location: 'MG Road', propertyType: 'Commercial', listingType: 'rent', bedrooms: 0, bathrooms: 4, area: 7500, images: [img.p[3], img.p[6]], features: f, status: 'Available' },
  { id: 'p5', slug: 'orchard-row-4', title: 'Orchard Row 4', description: 'Corner townhouse on a quiet lane, finished in lime plaster and oak.', price: 9400000, location: 'Whitefield', propertyType: 'Townhouse', listingType: 'buy', bedrooms: 3, bathrooms: 3, area: 2400, images: [img.p[4], img.p[0], img.p[7]], features: f, status: 'Available' },
  { id: 'p6', slug: 'lakeside-flat-7', title: 'Lakeside Flat 7', description: 'Bright two-bedroom with a balcony facing the water.', price: 85000, location: 'Indiranagar', propertyType: 'Apartment', listingType: 'rent', bedrooms: 2, bathrooms: 2, area: 1350, images: [img.p[5], img.p[1], img.p[7]], features: f, status: 'Sold' },
]
