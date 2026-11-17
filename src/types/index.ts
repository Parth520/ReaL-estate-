// Shapes the backend must return. Keep in sync with README "Expected data".
export type ListingType = 'buy' | 'rent'
export type PropertyType = 'Villa' | 'Apartment' | 'Penthouse' | 'Townhouse' | 'Commercial'
export type PropertyStatus = 'Available' | 'Under offer' | 'Sold'
export interface Property {
  id: string; title: string; slug: string; description: string
  price: number            // whole currency units; rent = per month
  location: string; propertyType: PropertyType; listingType: ListingType
  bedrooms: number; bathrooms: number; area: number // sq ft
  images: string[]; features: string[]; status: PropertyStatus
}
export interface PropertyFilters { location?: string; propertyType?: PropertyType | ''; listingType?: ListingType | ''; maxPrice?: number }
export interface Testimonial { id: string; quote: string; name: string; context: string }
export interface Service { id: string; title: string; description: string }
export interface Area { id: string; name: string; blurb: string; listings: number; image: string }
export interface ContactPayload { name: string; email: string; phone?: string; message: string; propertyId?: string }
export interface ListingPayload { ownerName: string; email: string; address: string; propertyType: PropertyType; notes?: string }
