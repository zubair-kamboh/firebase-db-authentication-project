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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user)
      } else {
        setcurrentUser(false)
      }
    })
  }, [])

  const value = { currentUser }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
