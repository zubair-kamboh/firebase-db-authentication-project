import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import Avatar from '@mui/material/Avatar'

// image
import image from '../images/3.jpg'

const Navlink = ({ title, Icon, photo }) => {
  const navigate = useNavigate()

  const logOut = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <li className="navlink" onClick={logOut}>
      {Icon && <Icon />}

      {photo && <Avatar src={photo} />}

      {/* {firstLetter && (
        <Avatar alt="zubair ali" className="avatar-img">
          {firstLetter.slice(0, 1)}
        </Avatar>
      )} */}
      <span className="title">{title}</span>
    </li>
  )
}

export default Navlink
