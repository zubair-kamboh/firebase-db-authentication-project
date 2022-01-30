// import { Dashboard } from '@material-ui/icons'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export function IsAuthenticated({ children }) {
  const { currentUser } = useAuth()

  return currentUser ? children : <Navigate to="/" />
}

export function IsNotAuthenticated({ children }) {
  const { currentUser } = useAuth()
  console.log(currentUser)

  return !currentUser ? children : <Navigate to="/dashboard" />
}
