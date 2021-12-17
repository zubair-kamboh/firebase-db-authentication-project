import React, { useEffect, useState } from 'react'
import './Feed.css'

import { db } from '../firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

// icons
import { Avatar } from '@material-ui/core'
import PhotoIcon from '@material-ui/icons/Photo'
import VideocamIcon from '@material-ui/icons/Videocam'
import CreateIcon from '@material-ui/icons/Create'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'

const Feed = () => {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data())
        setPosts([...posts, doc.data()])
      })
    })
  }

  // load posts
  useEffect(() => {
    getPosts()
  }, [])

  console.log(posts)

  return <h1>hello world</h1>
}

export default Feed
