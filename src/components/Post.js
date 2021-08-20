import React from 'react'
import UploadFile from './UploadFile'

// icons
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import SmsIcon from '@material-ui/icons/Sms'
import ShareIcon from '@material-ui/icons/Share'
import SendIcon from '@material-ui/icons/Send'

const Post = ({ name, message, description, img }) => {
  return (
    <div className="post">
      {/* Channel & Profile */}
      <div className="channel_details_container">
        <Avatar alt="my profile" src={img} />
        <div className="title_container">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      {/* Article & Post */}
      <div className="article_post">
        <p>{message}</p>
      </div>
      {/* Buttons */}
      <ul className="post_buttons">
        <UploadFile color="primary" Icon={ThumbUpIcon} title="Like" />
        <UploadFile color="secondary" Icon={SmsIcon} title="Comment" />
        <UploadFile color="error" Icon={ShareIcon} title="Share" />
        <UploadFile color="primary" Icon={SendIcon} title="Send" />
      </ul>
    </div>
  )
}

export default Post