import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  ADMIN_DEMO_PASSWORD,
  ADMIN_USERNAME,
  AUTH_STORAGE_KEY,
  createSessionPayload,
  isSessionValid,
} from '@/lib/auth'

type AuthContextValue = {
  isAuthenticated: boolean
  username: string | null
  login: (username: string, password: string) => Promise<{ ok: boolean; message?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function readInitialSession(): { ok: boolean; user: string | null } {
  if (typeof window === 'undefined') return { ok: false, user: null }
  const raw = localStorage.getItem(AUTH_STORAGE_KEY)
  if (!isSessionValid(raw)) return { ok: false, user: null }
  const user = localStorage.getItem('cm_admin_username')
  return { ok: true, user: user || ADMIN_USERNAME }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [{ ok, user }, setState] = useState(readInitialSession)

  const login = useCallback(async (username: string, password: string) => {
    const trimmed = username.trim().toLowerCase()
    if (trimmed !== ADMIN_USERNAME) {
      return { ok: false, message: 'Invalid credentials.' }
    }
    if (password !== ADMIN_DEMO_PASSWORD) {
      return { ok: false, message: 'Invalid credentials.' }
    }
    localStorage.setItem(AUTH_STORAGE_KEY, createSessionPayload())
    localStorage.setItem('cm_admin_username', ADMIN_USERNAME)
    setState({ ok: true, user: ADMIN_USERNAME })
    return { ok: true }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    localStorage.removeItem('cm_admin_username')
    setState({ ok: false, user: null })
  }, [])

  const value = useMemo(
    () => ({
      isAuthenticated: ok,
      username: user,
      login,
      logout,
    }),
    [ok, user, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
