import React, { useEffect, useState } from 'react'
import './Feed.css'
import img from '../images/3.jpg'
import UploadFile from './UploadFile'
import Post from './Post'
import { db } from '../firebase'

  // on form submit

  // on input change
  const onInputChange = (e) => {
    setInput(e.target.value)
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
              onChange={(e) => onInputChange(e)}
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
      {/* <div className="posts">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              name={post.data.name}
              description={post.data.description}
              message={post.data.message}
              img={img}
            />
          )
        })}
      </div> */}
    </main>
  )
}

export default Feed
