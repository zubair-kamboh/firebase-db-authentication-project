import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import './App.css'

import Dashboared from './components/Dashboared'

import { IsAuthenticated, IsNotAuthenticated } from './components/PrivateRoute'
import { AuthProvider } from './components/AuthContext'

//loader
import { HashLoader } from 'react-spinners'

const App = () => {
  const [loading, setLoading] = useState(true)

  window.addEventListener('load', () => setLoading(!loading))

  return (
    <>
      {loading ? (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <HashLoader color="#36D7B7" loading={loading} size={150} />
        </div>
      ) : (
        <AuthProvider>
          <div className="app">
            <Router>
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <IsNotAuthenticated>
                      <SignIn />
                    </IsNotAuthenticated>
                  }
                />

                <Route
                  path="/signup"
                  element={
                    <IsNotAuthenticated>
                      <SignUp />
                    </IsNotAuthenticated>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <IsAuthenticated>
                      <Dashboared />
                    </IsAuthenticated>
                  }
                />
              </Routes>
            </Router>
          </div>
        </AuthProvider>
      )}
    </>
  )
}

export default App
