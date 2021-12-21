import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import '../App.css'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const Dashboared = ({ user }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const logout = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <main className="app-body1">
      <h1>{user && user}</h1>
      <Button onClick={logout} variant="contained" color="secondary">
        Logout
      </Button>
      {/* <Sidebar />
      <Feed />
      <Sidebar /> */}
    </main>
  )
}

export default Dashboared
