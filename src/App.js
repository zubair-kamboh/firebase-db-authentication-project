import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import './App.css'
import Dashboard from './components/Dashboared'

function App() {
  return (
    <div className="app">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboared" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
