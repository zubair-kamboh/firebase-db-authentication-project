import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import './App.css'
import Dashboard from './components/Dashboared'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { render } from '@testing-library/react'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  const [user, setUser] = useState()
  const [isLoggedIn, setisLoggedIn] = useState(false)

  const us = auth.currentUser

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setisLoggedIn(true)
        setUser(user.email)
      } else {
        console.log('user signed out')
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="app">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* private route */}

          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboared"
            element={
              <PrivateRoute>
                <Dashboard user={user} />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
