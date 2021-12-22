// import { Dashboard } from '@material-ui/icons'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth()

  return currentUser ? children : <Navigate to="/" />
}

export default PrivateRoute
