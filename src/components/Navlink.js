import React from 'react'

// image
import image from '../images/3.jpg'

const Navlink = ({ title, Icon, Avatar }) => {
  return (
    <li className="navlink">
      {Icon && <Icon />}
      {Avatar && <Avatar alt="Zubair Ali" className="avatar-img" src={image} />}
      <span className="title">{title}</span>
    </li>
  )
}

export default Navlink
