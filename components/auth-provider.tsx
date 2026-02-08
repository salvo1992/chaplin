"use client"

import { createContext, useContext, useEffect, useMemo, useState, useRef, type ReactNode } from "react"
import type { User as FirebaseUser } from "firebase/auth"
import { isFirebaseConfigured } from "../lib/firebase"

export type AppRole = "user" | "admin"

export interface AppUser {
  uid: string
  email: string
  displayName?: string | null
  photoURL?: string | null
  role: AppRole
  idToken?: string
}

interface AuthContextType {
  user: AppUser | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  loginWithGoogleProvider: () => Promise<{ success: boolean; error?: any }>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
  isCheckingRedirect: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function setRoleCookie(role: "user" | "admin" | "") {
  const maxAge = 60 * 60 * 24 * 7
  const isHttps = typeof window !== "undefined" && window.location.protocol === "https:"
  const secure = isHttps ? "Secure; " : ""
  if (role) {
    document.cookie = `app_role=${role}; Path=/; Max-Age=${maxAge}; ${secure}SameSite=Lax`
  } else {
    document.cookie = `app_role=; Path=/; Max-Age=0; ${secure}SameSite=Lax`
  }
}

async function readUserRole(uid: string): Promise<AppRole> {
  if (!isFirebaseConfigured) return "user"
  try {
    const { db } = await import("../lib/firebase")
    if (!db) return "user"
    const { doc, getDoc } = await import("firebase/firestore")
    const snap = await getDoc(doc(db, "users", uid))
    if (!snap.exists()) return "user"
    const raw = (snap.data()?.role as string | undefined) ?? "user"
    return raw === "admin" ? "admin" : "user"
  } catch {
    return "user"
  }
}

function firebaseToAppUser(fbUser: FirebaseUser, idToken: string, role: AppRole): AppUser {
  return {
    uid: fbUser.uid,
    email: fbUser.email ?? "",
    displayName: fbUser.displayName,
    photoURL: fbUser.photoURL,
    role,
    idToken,
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null)
  const [isLoading, setIsLoading] = useState(isFirebaseConfigured)
  const [isCheckingRedirect, setIsCheckingRedirect] = useState(isFirebaseConfigured)
  const hasCheckedRedirectRef = useRef(false)

  // Firebase non configurato -> skip tutto
  useEffect(() => {
    if (!isFirebaseConfigured) {
      setIsLoading(false)
      setIsCheckingRedirect(false)
      return
    }

    if (hasCheckedRedirectRef.current) return
    hasCheckedRedirectRef.current = true

    const init = async () => {
      try {
        const { handleGoogleRedirect } = await import("../lib/firebase")
        const fbUser = await handleGoogleRedirect()
        if (fbUser) {
          const [idToken, role] = await Promise.all([fbUser.getIdToken(true), readUserRole(fbUser.uid)])
          setUser(firebaseToAppUser(fbUser, idToken, role))
          setRoleCookie(role)
          sessionStorage.removeItem("google_auth_error")
        }
      } catch (error: any) {
        if (error?.code) sessionStorage.setItem("google_auth_error", error.code)
      } finally {
        setIsCheckingRedirect(false)
      }
    }

    init()
  }, [])

  useEffect(() => {
    if (!isFirebaseConfigured) return

    let unsub: (() => void) | undefined

    const setup = async () => {
      try {
        const { auth } = await import("../lib/firebase")
        if (!auth) {
          setIsLoading(false)
          return
        }
        const { onIdTokenChanged } = await import("firebase/auth")
        unsub = onIdTokenChanged(auth, async (fbUser) => {
          try {
            if (!fbUser) {
              setUser(null)
              setRoleCookie("")
              setIsLoading(false)
              return
            }
            const [idToken, role] = await Promise.all([fbUser.getIdToken(false), readUserRole(fbUser.uid)])
            setUser(firebaseToAppUser(fbUser, idToken, role))
            setRoleCookie(role)
          } catch {
            setUser(null)
            setRoleCookie("")
          } finally {
            setIsLoading(false)
          }
        })
      } catch {
        setIsLoading(false)
      }
    }

    setup()
    return () => { unsub?.() }
  }, [])

  const refreshToken = async () => {
    if (!isFirebaseConfigured) return
    const { auth } = await import("../lib/firebase")
    if (!auth?.currentUser) return
    const [idToken, role] = await Promise.all([auth.currentUser.getIdToken(true), readUserRole(auth.currentUser.uid)])
    setUser(firebaseToAppUser(auth.currentUser, idToken, role))
    setRoleCookie(role)
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      const { loginWithEmail } = await import("../lib/firebase")
      const fbUser = await loginWithEmail(email, password)
      const [idToken, role] = await Promise.all([fbUser.getIdToken(true), readUserRole(fbUser.uid)])
      setUser(firebaseToAppUser(fbUser, idToken, role))
      setRoleCookie(role)
      return true
    } catch {
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithGoogleProvider = async (): Promise<{ success: boolean; error?: any }> => {
    try {
      sessionStorage.removeItem("google_auth_error")
      const { loginWithGoogle } = await import("../lib/firebase")
      const fbUser = await loginWithGoogle()
      if (fbUser) {
        const [idToken, role] = await Promise.all([fbUser.getIdToken(true), readUserRole(fbUser.uid)])
        setUser(firebaseToAppUser(fbUser, idToken, role))
        setRoleCookie(role)
      }
      return { success: true }
    } catch (e: any) {
      if (e?.code) sessionStorage.setItem("google_auth_error", e.code)
      return { success: false, error: e }
    }
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      const { registerWithEmail } = await import("../lib/firebase")
      const fbUser = await registerWithEmail(email, password, name)
      const [idToken, role] = await Promise.all([fbUser.getIdToken(true), readUserRole(fbUser.uid)])
      setUser(firebaseToAppUser(fbUser, idToken, role))
      setRoleCookie(role)
      return true
    } catch {
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      const { logout: fbLogout } = await import("../lib/firebase")
      await fbLogout()
    } catch {}
    setUser(null)
    setRoleCookie("")
  }

  const value = useMemo<AuthContextType>(
    () => ({ user, isLoading, login, loginWithGoogleProvider, register, logout, refreshToken, isCheckingRedirect }),
    [user, isLoading, isCheckingRedirect],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider")
  return ctx
}
