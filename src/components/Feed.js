import React, { useEffect, useState } from 'react'
import './Feed.css'
import img from '../images/3.jpg'
import UploadFile from './UploadFile'
import Post from './Post'
import { db } from '../firebase'
import {
  collection,
  query,
  getDocs,
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

const Feed = () => {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

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

  console.log(posts)

  // on form submit
  const onFormSubmit = async (e) => {
    e.preventDefault()

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
          <Avatar className="avatar" alt="profile" src={img} />
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
      <div className="posts">
        {posts &&
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                name={post.name}
                description={post.description}
                message={post.message}
                img={img}
              />
            )
          })}
      </div>
    </main>
  )
}

export default Feed
