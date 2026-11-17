/** Compact INR-style price, e.g. ₹4.85 Cr / ₹94 L / ₹85,000 per month */
export function formatPrice(n: number, rent = false): string {
  const s = n >= 1e7 ? `₹${+(n / 1e7).toFixed(2)} Cr` : n >= 1e5 && !rent ? `₹${+(n / 1e5).toFixed(1)} L` : `₹${n.toLocaleString('en-IN')}`
  return rent ? `${s} / month` : s
}
