import React from 'react'
import "./_PopupEvents.scss"
import Navbar from '../NavBar'
import Footer from '../Footer'
import EventCountDown from '../../components/EventCountDown/EventCountDown'
import CornholeIcon from '../../components/SVGs/CornholeIcon'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'

function CornholeEvent() {
  return (
    <>
      <EventCountDown />
      <div id='popup-event-container'>
        <Navbar />
        <main>
          <div className="content">
            <div className="left">
              <h1>Join Us</h1>
              <h3>
                FOR THE 2ND ANNUAL PHILIP MORGAN FOUNDATION CORNHOLE TOURNAMENT
              </h3>
              <a href={require("../../media/cornhole-tournament-flyer.jpeg")}>Open Flyer</a>
              <p>
                Indoors at Valley Brook Country Club | April 06 at 1pm
              </p>
              <small>
                15 River Vale Road
              </small>
              <small>
                River Vale, NJ
              </small>
              <p>
                $75 entry - Includes food and Pitchers of Wine & Beer
              </p>
              <img src={require("../../media/cornhole-qr-code.png")} />
              <small>
                All proceeds go to the Philip Morgan Foundation Inc. 501 (c) (3)
              </small>
            </div>
            <div className="right">
              <Link to="/events">
                Exit to Events Page
                <CloseIcon />
              </Link>
              <CornholeIcon />
            </div>
          </div>
          <div className="phone-number">
            Text or Call 201 294 3265 to reserve tickets by March 31st
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default CornholeEvent