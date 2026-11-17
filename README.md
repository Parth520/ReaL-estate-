# Halden & Rowe: real estate frontend (placeholder brand)

React + TypeScript + Vite + Tailwind + Framer Motion + React Router + Lucide.

## Run
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # type-checks, then bundles to dist/

## Structure
- `src/components/{layout,common,property,sections,forms}`: presentational components. None import mock data.
- `src/pages`: `Home` (owns search state via `hooks/usePropertySearch`) and `PropertyDetail` (`/properties/:slug`).
- `src/services`: **the only place UI gets data**. `propertyService.ts`, `contactService.ts`.
- `src/data`: mock data and image URLs (`images.ts` centralises every image).
- `src/types`: TypeScript interfaces. `src/config/api.ts`: base URL (`VITE_API_BASE_URL`) and mock latency helper.

## How mock data works
Service functions wait ~600 ms (to exercise loading states) and read from `src/data`. To go live, replace each function body with `fetch(`${API_BASE_URL}/...`)`. Signatures and return types stay the same, so no UI change is needed.

## Endpoints needed
| Function | Endpoint |
|---|---|
| searchProperties / getProperties | GET /properties?location=&propertyType=&listingType=&maxPrice= |
| getFeaturedProperties | GET /properties/featured |
| getPropertyBySlug | GET /properties/:slug (404 -> null) |
| submitContact | POST /contact |
| submitListing | POST /listings (service exists; no form uses it yet) |
| getAreas, getServices, getTestimonials | GET /areas, /services, /testimonials (or a CMS) |

## Expected data
See `src/types/index.ts`. `Property`: id, title, slug, description, price (rent = per month), location, propertyType, listingType ('buy'|'rent'), bedrooms, bathrooms, area (sq ft), images[], features[], status ('Available'|'Under offer'|'Sold'). The area filter currently lists Whitefield, Indiranagar and MG Road in `PropertySearch.tsx`; load them from the backend later.

## Customising the brand
Colours and fonts: `tailwind.config.js` and the font link in `index.html`. Name and logo text: `Navbar.tsx`, `Footer.tsx`, `index.html`. Copy: `src/data/content.ts` and the section files. Images: `src/data/images.ts`.

## Known limits
- Image URLs are Unsplash links that were not checked from the build sandbox; `SafeImage` falls back to a neutral block if one fails. Replace with licensed photography.
- Newsletter form is UI only. The Sell button goes to the contact form.
