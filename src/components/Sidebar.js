import React from 'react'
import './Sidebar.css'

// icons and images
import img from '../images/3.jpg'
import { Avatar } from '@material-ui/core'
import RecentSearch from './RecentSearch'
import { RecentActors } from '@material-ui/icons'

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-container">
        {/* profile container */}
        <div className="profile-container">
          <div className="bg-img"></div>
          <div className="profile-img-container">
            <Avatar src={img} alt="profile image" className="profile-avatar" />
          </div>
          <div className="profile">
            <h3 className="profile-name">Zubair Ali</h3>
            <p>Front end website developer</p>
          </div>

          {/* who viewed you */}
          <div className="views-container">
            <div className="who-viewed-you">
              <p>Who viewed your profile</p>
              <span>31</span>
            </div>
            <div className="post-views">
              <p>Viewes of your post</p>
              <span>140</span>
            </div>
          </div>
        </div>

        {/* Recent Searches */}
        <div className="recent-searches-container">
          <p className="recent-para">Recent</p>
          <div className="recent-searches">
            <ul>
              <RecentSearch
                title="React, Redux & Material-UI"
                Icon={RecentActors}
              />
              <RecentSearch
                title="Global Careers - Jobs USA"
                Icon={RecentActors}
              />
              <RecentSearch title="Jobs in Europe (EU)" Icon={RecentActors} />
              <RecentSearch
                title="I LOVE EUROPEAN STARTUPS"
                Icon={RecentActors}
              />
              <RecentSearch
                title="Small Business Owners Groups"
                Icon={RecentActors}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
