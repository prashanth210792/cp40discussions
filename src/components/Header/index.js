// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Popup} from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

const Header = () => (
  <nav className="nav-bar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>

    <div>
      <Popup
        modal="true"
        trigger={
          // write code here
          //   <button type="button">
          <button type="button" testid="hamburgerIconButton">
            {<GiHamburgerMenu />}
          </button>
        }
        className="popup-content"
      >
        {/* //write code here */}
        {close => (
          <ul>
            <Link to="/" onClick={() => close()}>
              <li>
                <AiFillHome />
                Home
              </li>
            </Link>
            <Link to="/about" onClick={() => close()}>
              <li>
                <BsInfoCircleFill />
                About
              </li>
            </Link>
            {/* <button type="button"> */}
            <button type="button" testid="closeButton">
              {<IoMdClose onClick={() => close()} />}
            </button>
          </ul>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
