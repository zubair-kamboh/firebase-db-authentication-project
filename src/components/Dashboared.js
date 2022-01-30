import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import '../App.css'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Button, Container, Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

const Dashboared = ({ user }) => {
  const navigate = useNavigate()
  let { currentUser } = useAuth()

  const logout = () => {
    auth.signOut()

    navigate('/')
  }

  return (
    <main className="app-body1">
      <Container maxWidth="xl" sx={{ my: 3 }}>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Sidebar />
          </Grid>
          <Grid item md={6}>
            <Feed />
          </Grid>
          <Grid item md={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default Dashboared
