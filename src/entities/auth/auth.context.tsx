import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import type { User } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

interface AuthContextValue {
  currentUser: User | null
  loading: boolean
}
const AuthContext = createContext<AuthContextValue>({ currentUser: null, loading: false })

export function useAuth() {
  return useContext(AuthContext)
}

interface AuthProviderProps {
  children: ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const value = {
    currentUser,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
