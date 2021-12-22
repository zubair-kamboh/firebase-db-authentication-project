import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import './App.css'
import Dashboared from './components/Dashboared'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

import PrivateRoute from './components/PrivateRoute'
import { AuthProvider, useAuth } from './components/AuthContext'

function SigninPrivateRoute({ children }) {
  const { currentUser } = useAuth()
  console.log(currentUser, auth.currentUser)
  return !auth.currentUser ? children : <Navigate to="/dashboared" />
}

const App = () => {
  const [user, setUser] = useState()
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <AuthProvider>
      <div className="app">
        <Router>
          {/* <Navbar /> */}
          <Routes>
            {/* private route */}

            <Route
              path="/"
              element={
                <SigninPrivateRoute>
                  <SignIn />
                </SigninPrivateRoute>
              }
            />

            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboared"
              element={
                <PrivateRoute>
                  <Dashboared />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
