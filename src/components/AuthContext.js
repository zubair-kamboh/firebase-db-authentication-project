import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

// custom hooks
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState()

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // const signIn = (email, password) => {
  //   return signInWithEmailAndPassword(auth, email, password)
  // }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user)
      } else {
        console.log('user signed out')
      }
    })
  }, [])

  const value = { currentUser, signUp }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
