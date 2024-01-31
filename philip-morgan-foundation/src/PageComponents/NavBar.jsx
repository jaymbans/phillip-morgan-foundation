import React, { useEffect } from 'react'
import './_Navbar.scss'
import blueLogo from '../media/pmf-white-bg-logo-high-res.png';
import { Link } from 'react-router-dom';

function Navbar({ }) {

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
      document.body.style.overflow = "auto"
    } else {
      barArray.forEach(bar => bar.classList.add('active'))
      navLinks.classList.add('active')
      document.body.style.overflow = "hidden"
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
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/cornhole-event'>EVENTS</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/donate'>DONATE</Link>
      </div>
      <div className="nav-right">
        <Link to='/donate'>GIVE</Link>

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