import React from 'react'
import './_Navbar.scss'
import blueLogo from '../media/blue_small_logo.png'

function Navbar() {
  const activateHamburgerMenu = (e) => {
    // select menu
    const menu = document.getElementById('hamburger')

    const navLinks = document.querySelector('.nav-mid')

    // select bars
    const barArray = Array.from(menu.children);

    // toggle activeness
    if (Array.from(barArray[0].classList).includes('active')) {
      barArray.forEach(bar => bar.classList.remove('active'));
      navLinks.classList.remove('active')
    } else {
      barArray.forEach(bar => bar.classList.add('active'))
      navLinks.classList.add('active')
    }

    return
  }

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
        <button>DONATE</button>
      </div>
      <div className="nav-right">
        <button>GIVE</button>

        <button onClick={activateHamburgerMenu} id="hamburger">
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar