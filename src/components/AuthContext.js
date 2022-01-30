import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

// custom hooks
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(false)

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user)
      } else {
        setcurrentUser(false)
      }
    })
  }, [])

  const value = { currentUser, signUp }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
