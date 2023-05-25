import React from 'react'
import './_Navbar.scss'
import blueLogo from '../media/blue_small_logo.png'

function Navbar() {

  return (
    <nav>
      <div className="nav-left">
        <img src={blueLogo} />
        <h4>
          The Philip Morgan Foundation
        </h4>
      </div>
      <div className="nav-mid">
        <button>HOME</button>
        <button>ABOUT</button>
        <button>EVENTS</button>
        <button>CONTACT</button>
      </div>
      <div className="nav-right">
        <button>GIVE</button>
      </div>
    </nav>
  )
}

export default Navbar