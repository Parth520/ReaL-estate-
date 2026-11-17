import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
/** Footer incl. newsletter UI (UI-only: wire to POST /newsletter later). */
export default function Footer() {
  const [done, setDone] = useState(false)
  const [err, setErr] = useState('')
  const sub = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); const v = String(new FormData(e.currentTarget).get('email') ?? ''); if (!/^\S+@\S+\.\S+$/.test(v)) return setErr('Enter a valid email address.'); setErr(''); setDone(true) }
  const col = (t: string, items: [string, string][]) => <div><h3 className="font-serif text-lg">{t}</h3><ul className="mt-4 space-y-2 text-sm text-paper/70">{items.map(([l, h]) => <li key={l}><a className="hover:text-brass" href={h}>{l}</a></li>)}</ul></div>
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div><Link to="/" className="font-serif text-3xl">Halden<span className="text-brass"> &amp; </span>Rowe</Link><p className="mt-4 max-w-xs text-sm text-paper/70">Placeholder brand. Verified homes and commercial space, with advisers who stay until the keys change hands.</p><p className="mt-6 text-sm text-paper/70">12 Sample Street, Indore · +91 00000 00000 · hello@example.com</p></div>
        {col('Explore', [['Properties', '/#properties'], ['Services', '/#services'], ['Areas', '/#areas'], ['About us', '/#about'], ['Contact', '/#contact']])}
        {col('Property types', [['Villas', '/#properties'], ['Apartments', '/#properties'], ['Penthouses', '/#properties'], ['Commercial', '/#properties']])}
        <form onSubmit={sub} noValidate><h3 className="font-serif text-lg">New listings, monthly</h3>
          {done ? <p role="status" className="mt-4 text-sm text-brass">Subscribed. (Demo only, nothing was sent.)</p> : <>
            <label htmlFor="nl" className="sr-only">Email</label><div className="mt-4 flex border-b border-paper/40"><input id="nl" name="email" type="email" placeholder="Email address" className="w-full bg-transparent py-3 outline-none" aria-invalid={!!err} /><button className="px-3 text-sm hover:text-brass">Subscribe</button></div>{err && <p role="alert" className="mt-2 text-sm text-red-300">{err}</p>}</>}
          <div className="mt-6 flex gap-5 text-sm text-paper/70"><a href="#" className="hover:text-brass">Instagram</a><a href="#" className="hover:text-brass">LinkedIn</a><a href="#" className="hover:text-brass">YouTube</a></div></form>
      </div>
      <div className="border-t border-paper/15 px-5 py-6 text-xs text-paper/60 md:px-10"><div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-3"><span>© 2026 Halden &amp; Rowe (placeholder). All rights reserved.</span><span className="flex gap-5"><a href="#">Privacy policy</a><a href="#">Terms</a></span></div></div>
    </footer>
  )
}
