import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import '../App.css'

const Dashboared = () => {
  return (
    <main className="app-body">
      <Sidebar />
      <Feed />
      <Sidebar />
    </main>
  )
}

export default Dashboared
