import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import './App.css'
import Dashboard from './components/Dashboared'
import Test from './components/Test'

function App() {
  return (
    <div className="app">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboared" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
