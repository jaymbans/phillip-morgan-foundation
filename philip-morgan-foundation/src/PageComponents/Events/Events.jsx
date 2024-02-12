import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '../../media/white-logo.png';
import Event from './Event';
import './_Events.scss';
import eventsData from '../../data/eventsData';

function Events() {
  const [eventsList, setEventsList] = useState([
    {
      day: '06',
      month: 'April',
      type: '2nd Annual Philip Morgan Foundation Cornhole Tournament',
      locationName: 'Valley Brook Country Club',
      locationAddress: '15 River Vale Road, River Vale, NJ 07675',
      sponsorUrl: '',
      time: "10am-7pm"
    }
  ])



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
              <p>Attendees</p>
              <p>1,500+</p>
            </div>
            <div>
              <p>Donors</p>
              <p>100+</p>
            </div>
            <div>
              <p>Raised</p>
              <p>$20,000+</p>
            </div>
          </div>
        </div>
        <div className="upcoming">
          <h2>Upcoming...</h2>
          {
            eventsList.map((event, idx) => {
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