import Feed from './components/Feed'
import Widget from './components/Widgets'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* App Body */}
      <main className="app-body">
        <Sidebar />
        <Feed />
        {/* <Widget /> */}
        <Sidebar />
      </main>
    </div>
  )
}

export default App
