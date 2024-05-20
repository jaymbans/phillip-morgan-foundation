import React, { useEffect, useState } from 'react';
import CornHoleIcon from "../../components/SVGs/CornholeIcon";
import whiteLogo from '../../media/white-logo.png';
import Event from './Event';
import './_Events.scss';
import eventsData from '../../data/eventsData';

function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState(
    eventsData.filter(event => event.isActive))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <div className="upcoming">
          <h2>Upcoming...</h2>
          {
            upcomingEvents.length ? "" : <p>There are currently no upcoming events</p>
          }
          {
            upcomingEvents.map((event, idx) => {
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
        <div className="previously">
          <h1>Previously...</h1>
          <h2>
            The Second Annual Philip Morgan Foundation Corn Hole Tournament
          </h2>
          <div className="event-stats">
            <div className="stat">
              <p className="desc">Attendees</p>
              <p className="data">134</p>
            </div>
            <div className="stat">
              <p className="desc">Donations</p>
              <p className="data">$12,000+</p>
            </div>
          </div>
          <div className="slider-container container">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={require("../../media/cht2024-1.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
                <div class="carousel-item">
                  <img src={require("../../media/cht2024-2.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
                <div class="carousel-item">
                  <img src={require("../../media/cht2024-3.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
                <div class="carousel-item">
                  <img src={require("../../media/cht2024-4.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
                <div class="carousel-item">
                  <img src={require("../../media/cht2024-5.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
                <div class="carousel-item">
                  <img src={require("../../media/cht2024-6.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
                <div class="carousel-item">
                  <img src={require("../../media/cht2024-7.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
                <div class="carousel-item">
                  <img src={require("../../media/cht2024-8.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
                <div class="carousel-item">
                  <img src={require("../../media/cht2024-9.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
                <div class="carousel-item">
                  <img src={require("../../media/cht2024-10.jpg")} class="d-block w-100" alt="pictures of participants at cornhole tournament" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <h2 className='greeting'>
            Thank you for participating!
          </h2>
        </div>
      </section>
    </>
  )
}

export default Events