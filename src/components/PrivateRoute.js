// import { Dashboard } from '@material-ui/icons'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase'
const PrivateRoute = ({ children }) => {
  const user = auth.currentUser
  console.log(user && user.email)
  return user ? children : <Navigate to="/" />
}

export default PrivateRoute
