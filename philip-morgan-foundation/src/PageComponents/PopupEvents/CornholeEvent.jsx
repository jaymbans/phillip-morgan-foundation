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
              <h3 className='text-white'>
                FOR THE 3RD ANNUAL PHILIP MORGAN FOUNDATION CORNHOLE TOURNAMENT
              </h3>
              <div className="link-container">
                <a href={"https://res.cloudinary.com/hxn9dbuhd/image/upload/v1736027321/xxksd4zoasssdcg3yxda.png"}
                  target='_blank'>
                  Open Flyer
                </a>
                <Link to="donate">
                  Buy Ticket
                </Link>
              </div>
              <p>
                Indoors at Valley Brook Country Club | March 22 at 1pm
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
              <div className='rules d-flex align-items-center justify-content-center flex-column'>
                <h3 className='text-primary'>RULES</h3>
                <strong>
                  <h4>
                    <u className='text-primary'>
                      THIS IS A FUNDRAISER
                    </u>
                  </h4>
                </strong>
                <h4 className="text-primary">
                  <ol>
                    <li>It is not a regulation event</li>
                    <li>Distance & Height between boards may vary</li>
                    <li>Everyone <u>must</u> use bags provided</li>
                    <li>If a bag hits the ceiling, the point does not count</li>
                  </ol>
                </h4>
              </div>
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
            Text or Call 201 294 3265 to reserve tickets by March 15th
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default CornholeEvent