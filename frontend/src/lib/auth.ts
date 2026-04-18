/** Single institutional admin — no registration. Backend will replace this with real JWT/session. */
export const AUTH_STORAGE_KEY = 'cm_admin_session'

export const ADMIN_USERNAME = 'admin'

/** Demo only — replace with API verification. */
export const ADMIN_DEMO_PASSWORD = 'admin123'

export function isSessionValid(raw: string | null): boolean {
  if (!raw) return false
  try {
    const parsed = JSON.parse(raw) as { v?: number }
    return parsed.v === 1
  } catch {
    return false
  }
}

export function createSessionPayload(): string {
  return JSON.stringify({ v: 1, at: Date.now() })
}
