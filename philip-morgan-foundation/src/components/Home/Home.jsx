import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Card from './Card';
import EventTile from './EventTile'
import "./_Home.scss";
import calendarIcon from '../../media/calendar-icon.png'

function Home() {
  const [cardInfo, setCardInfo] = useState([
    {
      title: 'fund raise',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      imgUrl: 'fundraise'
    },
    {
      title: 'events',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      imgUrl: 'events'
    },
    {
      title: 'donate',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      imgUrl: 'donate'
    }
  ])

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      date: { month: 'June', day: '01' },
      title: 'summer corn hole tournament',
      timeframe: '10am-7pm',
      locationName: 'country club'
    },
    {
      date: { month: 'June', day: '01' },
      title: 'summer corn hole tournament',
      timeframe: '10am-7pm',
      locationName: 'country club'
    },
    {
      date: { month: 'June', day: '01' },
      title: 'summer corn hole tournament',
      timeframe: '10am-7pm',
      locationName: 'country club'
    }
  ]);


  return (
    <div>
      <NavBar />
      <section id="home">
        <div className="hero">
          <div className="overlay"></div>
          <main>
            <div className="title">
              <h1>Supporting families</h1>
              <h5>experiencing the devastating illness of a loved one</h5>
              <Link to='about' className="white btn">Learn More</Link>
            </div>
            <div className="title-desc">
              <p className="quote">
                “Phil’s Mission Lorem Ipsum is simply dummy text of the printing and typesetting industry.”
                <span> ~Philip Morgan</span>
              </p>
            </div>
          </main>
        </div>
        <div className="homepage-section">
          <h1>What we do</h1>
          <main>
            {
              cardInfo.map(info => {
                return <Card info={info} />
              })
            }
          </main>
        </div>
        <div className="homepage-section">
          <h1>Join Us</h1>
          <div>
            <img src={calendarIcon} alt="" />
            <h2>Upcoming Events</h2>
          </div>
          <div className="events">
            {
              upcomingEvents.map(event => {
                return <EventTile info={event} />
              })
            }
          </div>
          <Link to='/events' className="blue btn">see more</Link>
        </div>
      </section>
    </div>
  )
}

export default Home