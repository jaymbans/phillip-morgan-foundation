import React, { useState } from 'react';
import CornHoleIcon from "../../components/SVGs/CornholeIcon";
import whiteLogo from '../../media/white-logo.png';
import Event from './Event';
import './_Events.scss';
import eventsData from '../../data/eventsData';

function Events() {


  return (
    <>
      <section id="events">
        <div className="events-hero">
          <div className="overlay"></div>
          <img src={whiteLogo} />
          <h2>
            Empower Change, Ignite Hope: Join Us in Making a Difference!
          </h2>
          <h1>Events</h1>
        </div>
        <div className="previously">
          <h2>previously on the...</h2>
          <h2>First Annual Philip Morgan Foundation Cornhole Tournament</h2>
          <div className="row">
            <div>
              <p>Total Donations</p>
              <p>$20,000+</p>
            </div>
          </div>
        </div>
        <div className="upcoming">
          <h2>Upcoming...</h2>
          {
            eventsData.filter(event => event.isActive).map((event, idx) => {
              return <Event key={`eventd-${idx}`} info={event} />
            })
          }
        </div>
        <div id="our-events">
          <h1 className='underline-title'>Our Events</h1>
          <div className="event-container">
            <div className="event-info">
              <div id='cornhole' className="icon-container">
                <CornHoleIcon />
              </div>
              <h3>Corn Hole Tournaments</h3>
              <p>
                We host corn hole tournaments as a fundraising initiative to support pediatric cancer. These tournaments serve as a fun and engaging way for our community to come together and raise vital funds for our cause. By participating in our tournaments, you're not only enjoying a day of friendly competition but also contributing directly to a beautiful cause.
              </p>
            </div>
            <div className="event-info">
              <div className="icon-container">
                <svg width="83" height="113" viewBox="0 0 83 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="41.3111" cy="76.5" rx="37.3111" ry="36.5" fill="#FF0000" />
                  <path d="M41.5 0L77.4401 66H5.55994L41.5 0Z" fill="#FF0000" />
                  <ellipse cx="35.5" cy="79.9891" rx="23.5" ry="22.9891" fill="white" />
                  <ellipse cx="40.5" cy="76.9891" rx="23.5" ry="22.9891" fill="#FF0000" />
                </svg>
              </div>
              <h3>Blood Drives</h3>
              <p>
                The PMF organizes blood drives to support local hospitals and patients in need. These drives play a crucial role in maintaining an adequate blood supply for emergency situations, surgeries, and ongoing medical treatments. By donating blood at our drives, you're directly saving lives and providing hope to those facing health challenges. Join us in making a life-saving impact in our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Events