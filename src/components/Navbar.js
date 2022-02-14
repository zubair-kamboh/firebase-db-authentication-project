import './Navbar.css'

// components
import Navlink from './Navlink'

// icons
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna'
import WorkIcon from '@material-ui/icons/Work'
// import MessageIcon from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { getAuth } from 'firebase/auth'
import { useAuth } from './AuthContext'
import FormDialog from './FormDialog'

const Navbar = () => {
  const [photo, setPhoto] =
    'https://www.nicepng.com/png/detail/138-1388174_login-account-icon.png'

  // const currentUser = getAuth().currentUser
  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <header className="nav-bar">
      <div className="header-container">
        {/* left-part */}
        <div className="left-part">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            className="global-nav__logo logo"
          >
            <title>LinkedIn</title>

            <g>
              <path
                d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>

          <div className="search-input-container">
            <SearchIcon fontSize="small" />
            <input
              type="text"
              placeholder="Search for jobs, skills, companies..."
            />
          </div>
        </div>

        {/* menu-bar */}
        <div className="menu-bar">
          <ul className="navlinks">
            <Navlink title="Home" Icon={HomeIcon} />
            <Navlink title="My Network" Icon={SettingsInputAntennaIcon} />
            <Navlink title="Jobs" Icon={WorkIcon} />
            <Navlink title="Messaging" Icon={WorkIcon} />
            <Navlink title="Notifications" Icon={NotificationsIcon} />
            <Navlink
              title="Me"
              photo={currentUser?.photoURL ? currentUser.photoURL : photo}
            />
            {currentUser && <FormDialog />}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
