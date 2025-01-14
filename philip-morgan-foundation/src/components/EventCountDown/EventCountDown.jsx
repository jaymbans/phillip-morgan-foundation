import React, { useState, useEffect } from 'react'
import "./_EventCountDown.scss"
import { Link } from 'react-router-dom'

function EventCountDown() {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(currentYear, 2, 15, 0, 0, 0)

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // The target date has passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div id="event-countdown-container">
      <div className="left">
        <div className="time-container">
          <div className="time">
            {timeLeft.days}
          </div>
          <div className="metric">
            Days
          </div>
        </div>
        <div className="time-container">
          <div className="time">
            {timeLeft.hours}
          </div>
          <div className="metric">
            Hours
          </div>
        </div>
        <div className="time-container">
          <div className="time">
            {timeLeft.minutes}
          </div>
          <div className="metric">
            Minutes
          </div>
        </div>
        <div className="time-container">
          <div className="time">
            {timeLeft.seconds}
          </div>
          <div className="metric">
            Seconds
          </div>
        </div>
      </div>
      <h1 className="middle">
        HURRY! GET YOUR TICKETS TO OUR 3RD ANNUAL CORNHOLE TOURNAMENT
      </h1>
      <div className="right">
        <Link to="/cornhole-event">Learn More</Link>
      </div>
    </div>
  )
}

export default EventCountDown