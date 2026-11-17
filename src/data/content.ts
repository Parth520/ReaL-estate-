// MOCK editorial content (testimonials, services, areas). Replace with CMS/API later.
import type { Area, Service, Testimonial } from '../types'
import { img } from './images'
export const testimonials: Testimonial[] = [
  { id: 't1', quote: 'They told us what was wrong with the house before we asked. We bought a different one and have not regretted it.', name: 'Placeholder Client A', context: 'Bought a villa in Whitefield' },
  { id: 't2', quote: 'Our flat sold in nineteen days, with the paperwork finished before we had to chase it.', name: 'Placeholder Client B', context: 'Sold an apartment in Indiranagar' },
  { id: 't3', quote: 'One point of contact from the first viewing to the keys. That alone was worth it.', name: 'Placeholder Client C', context: 'Leased commercial space on MG Road' },
]
export const services: Service[] = [
  { id: 's1', title: 'Buying a home', description: 'Shortlists built from your brief, viewings arranged, and legal checks done before you commit.' },
  { id: 's2', title: 'Selling a property', description: 'Pricing advice, professional photography and a vetted buyer list.' },
  { id: 's3', title: 'Renting', description: 'Verified tenants and landlords, with agreements drafted for you.' },
  { id: 's4', title: 'Commercial space', description: 'Offices and retail sites matched to headcount, footfall and budget.' },
  { id: 's5', title: 'Investment advice', description: 'Yield and growth comparisons across neighbourhoods, in plain figures.' },
  { id: 's6', title: 'Property management', description: 'Rent collection, repairs and tenant relations handled for owners.' },
]
export const areas: Area[] = [
  { id: 'a1', name: 'Whitefield', blurb: 'Gated communities and generous plots, close to the tech corridor.', listings: 42, image: img.a[0] },
  { id: 'a2', name: 'Indiranagar', blurb: 'Tree-lined streets, cafés and well-kept apartment blocks.', listings: 31, image: img.a[1] },
  { id: 'a3', name: 'MG Road', blurb: 'The central business district: penthouses and prime offices.', listings: 18, image: img.a[2] },
]
