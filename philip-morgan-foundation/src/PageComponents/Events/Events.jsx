import React, { useState } from 'react';
import NavBar from '../NavBar';
import './_Events.scss'
import { Link } from 'react-router-dom';
import whiteLogo from '../../media/white-logo.png';
import Event from './Event';
import Footer from '../Footer';

function Events() {
  const [eventsList, setEventsList] = useState([
    {
      day: '03',
      month: 'Jul',
      type: 'Blood Drive',
      locationName: 'Emerson Senior Center',
      locationAddress: '123 Sesame St Emerson, NJ 10000',
      sponsorUrl: '',
      thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeNWL_ApRTo33UXrt0vSnYfZhxFD0-brJCa0SO8KDdSGDAJkCUJ0QaTG4PUxyzJToVXo&usqp=CAU'
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
          <h2>previously...</h2>
          <h2>Spring Corn Hole Tourney</h2>
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
          <Link to='#'>Learn More</Link>
        </div>
      </section>
    </>
  )
}

export default Events