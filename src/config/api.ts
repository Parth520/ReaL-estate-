// Central API config. Set VITE_API_BASE_URL in .env when a backend exists.
export const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL ?? '/api'
export const wait = (ms = 600) => new Promise((r) => setTimeout(r, ms)) // simulates latency in mocks
