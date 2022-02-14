import React, { useEffect, useState } from 'react'
import './Feed.css'
import UploadFile from './UploadFile'
import Post from './Post'
import { db } from '../firebase'

import { motion, AnimatePresence } from 'framer-motion'

import { getAuth } from 'firebase/auth'

import {
  collection,
  query,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
} from 'firebase/firestore'

// icons
import { Avatar } from '@material-ui/core'
import PhotoIcon from '@material-ui/icons/Photo'
import VideocamIcon from '@material-ui/icons/Videocam'
import CreateIcon from '@material-ui/icons/Create'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import FormDialog from './FormDialog'

// animation library

const Feed = () => {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  const auth = getAuth()
  const user = auth.currentUser

  // load posts
  useEffect(() => {
    const getdata = async () => {
      const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))

      onSnapshot(q, (querySnapshot) => {
        const mydata = []
        querySnapshot.forEach((doc) => {
          mydata.push(doc.data())
        })
        setPosts(mydata)
      })
    }

    getdata()
  }, [])

  // on form submit
  const onFormSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target.value)
    if (!input) {
      return alert('please fill in the form')
    }

    await addDoc(collection(db, 'posts'), {
      name: 'Zubair Ali',
      description: 'this is a test',
      message: input,
      photoUrl: '',
      timestamp: serverTimestamp(),
    })

    setInput('')
  }

  return (
    <main>
      {/* post input */}
      <div className="post_input_container">
        <div className="profile_input">
          <Avatar
            className="avatar"
            alt="profile"
            src={user?.photoURL && user.photoURL}
          />
          <form onSubmit={(e) => onFormSubmit(e)}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
          </form>
        </div>
        {/* icons & titles */}
        <div className="profile_uploads">
          <ul className="photo">
            <UploadFile color="primary" title="Photo" Icon={PhotoIcon} />
            <UploadFile color="secondary" title="Video" Icon={VideocamIcon} />
            <UploadFile color="error" title="Event" Icon={EventAvailableIcon} />
            <UploadFile
              color="primary"
              title="Write Article"
              Icon={CreateIcon}
            />
          </ul>
        </div>
      </div>

      {/* posts */}
      <motion.div layout className="posts">
        <AnimatePresence>
          {posts &&
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  name={post.name}
                  description={post.description}
                  message={post.message}
                  img={user?.photoURL}
                />
              )
            })}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}

export default Feed
