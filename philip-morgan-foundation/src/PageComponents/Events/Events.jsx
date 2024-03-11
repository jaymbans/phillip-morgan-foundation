import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            eventsData.map((event, idx) => {
              return <Event key={`eventd-${idx}`} info={event} />
            })
          }
          <Link to='/cornhole-event'>Learn More</Link>
        </div>
      </section>
    </>
  )
}

export default Events