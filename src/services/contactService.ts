// INTEGRATION POINT: POST /contact { name, email, phone?, message, propertyId? } -> 201
import { wait } from '../config/api'
import type { ContactPayload } from '../types'
export async function submitContact(payload: ContactPayload): Promise<{ ok: true }> {
  await wait(800); console.info('[mock] contact', payload); return { ok: true }
}
