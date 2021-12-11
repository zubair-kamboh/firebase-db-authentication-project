import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app-body">
        <Sidebar />
        <Feed />

        <Sidebar />
      </main>
    </div>
  )
}

export default App
