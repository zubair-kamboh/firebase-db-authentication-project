import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

// image
import image from '../images/3.jpg'

const Navlink = ({ title, Icon, Avatar }) => {
  const navigate = useNavigate()

  const logOut = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <li className="navlink" onClick={logOut}>
      {Icon && <Icon />}
      {Avatar && <Avatar alt="Zubair Ali" className="avatar-img" src={image} />}
      <span className="title">{title}</span>
    </li>
  )
}

export default Navlink
