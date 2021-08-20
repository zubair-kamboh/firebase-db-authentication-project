import React from 'react'

const UploadFile = ({ color, Icon, title }) => {
  return (
    <li>
      {color ? <Icon color={color} /> : <Icon />}
      <span className="file">{title}</span>
    </li>
  )
}

export default UploadFile
