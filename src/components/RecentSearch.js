import React from 'react'

const RecentSearch = ({ title, Icon }) => {
  return (
    <li>
      <Icon />
      <span>{title}</span>
    </li>
  )
}

export default RecentSearch
