import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Card from './Card';
import EventTile from './EventTile'
import "./_Home.scss";
import calendarIcon from '../../media/calendar-icon.png'
import Footer from '../Footer';
import { waysWehelp } from "../../data/homepageData"
import eventsData from '../../data/eventsData';

function Home() {
  const [upcomingEvents, setUpcomingEvents] = useState(
    eventsData.filter(event => event.isActive))

  return (
    <div>
      <section id="home">
        <div className="hero">
          <div className="overlay"></div>
          <main>
            <div className="title">
              <h1>Supporting families</h1>
              <h5>experiencing the devastating illness of a loved one</h5>
              <Link to='about' className="white btn">Learn More</Link>
            </div>
          </main>
        </div>
        <div className="homepage-section">
          <h1 className='underline-title'>Ways we help</h1>
          <main>
            {
              waysWehelp.map((info, idx) => {
                return <Card key={`card-${idx}`} info={info} />
              })
            }
          </main>
        </div>
        <div className="homepage-section">
          <h1 className='underline-title'>Join Us</h1>
          <div>
            <img src={calendarIcon} alt="" />
            <h2>Upcoming Events</h2>
          </div>
          <div className="events">
            {
              upcomingEvents.length ? "" : <p className='disclaimer'>There are currently no upcoming events</p>
            }
            {
              eventsData.map((event, idx) => {
                if (event.isActive) {
                  return <EventTile key={`event-${idx}`} event={event} />
                }
              })
            }
          </div>
          <Link to='/events' className="blue btn">learn more</Link>
        </div>
      </section>
    </div>
  )
}

export default Home