import { useState, type FormEvent } from 'react'
import { submitContact } from '../../services/contactService'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>
/** Validated contact form. Submission goes through services/contactService.ts only.
 *  Pass `propertyId` from a detail page so the backend can attach the enquiry to a listing. */
export default function ContactForm({ propertyId, dark = false }: { propertyId?: string; dark?: boolean }) {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const d = new FormData(form)
    const v = { name: String(d.get('name') ?? '').trim(), email: String(d.get('email') ?? '').trim(), phone: String(d.get('phone') ?? '').trim(), message: String(d.get('message') ?? '').trim() }
    const err: Errors = {}
    if (v.name.length < 2) err.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) err.email = 'Enter an email address like name@example.com.'
    if (v.message.length < 10) err.message = 'Tell us a little more (at least 10 characters).'
    setErrors(err)
    if (Object.keys(err).length) { form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(); return }
    setStatus('sending')
    try { await submitContact({ ...v, phone: v.phone || undefined, propertyId }); setStatus('sent'); form.reset() } catch { setStatus('failed') }
  }
  const Field = ({ id, label, type = 'text', area = false }: { id: 'name' | 'email' | 'phone' | 'message'; label: string; type?: string; area?: boolean }) => {
    const e = (errors as Record<string, string | undefined>)[id]
    const p = { id, name: id, 'aria-invalid': !!e, 'aria-describedby': e ? `${id}-err` : undefined, className: 'field' }
    return <div><label htmlFor={id} className="text-sm opacity-70">{label}</label>{area ? <textarea rows={4} {...p} /> : <input type={type} autoComplete={id} {...p} />}{e && <p id={`${id}-err`} className="mt-1 text-sm text-red-700">{e}</p>}</div>
  }
  if (status === 'sent') return <p role="status" className="font-serif text-2xl">Thank you. We will reply within one working day.</p>
  return (
    <form onSubmit={onSubmit} noValidate className={`grid gap-6 ${dark ? 'text-paper' : ''}`}>
      <Field id="name" label="Full name" /><Field id="email" label="Email" type="email" /><Field id="phone" label="Phone (optional)" type="tel" /><Field id="message" label="How can we help?" area />
      {status === 'failed' && <p role="alert" className="text-sm text-red-700">We could not send that. Check your connection and try again.</p>}
      <button className="btn btn-solid justify-self-start disabled:opacity-60" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
    </form>
  )
}
