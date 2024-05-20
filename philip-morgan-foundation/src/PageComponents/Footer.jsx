import React from 'react'
import { Link } from 'react-router-dom'
import './_Footer.scss'

function Footer() {
  return (
    <footer id='custom-footer'>
      <div className="flex-row">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/events'>Events</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className="flex-row">
        <a target='_blank' href='https://www.facebook.com/PhilipMorganFoundation/'><img src={require('../media/footer-fb.png')} /></a>
        <a target='_blank' href='https://www.instagram.com/philipmorganfoundation/'><img src={require('../media/footer-ig.png')} /></a>
        <a target='_blank' href='mailto:pmfoundationorg@gmail.com'><img src={require('../media/footer-mail.png')} /></a>
        <p>
          +1 (201) 815 1537
        </p>
      </div>
      <div className="flex-row">
        <p>
          PHILIP MORGAN FOUNDATION, INC |  501 (c) (3)
        </p>
      </div>
    </footer>
  )
}

export default Footer