import React from 'react'

function EventTile({ event }) {

  return (
    <div className="tile">
      <div>
        <h1>{event.day}</h1>
        <p className="bolded">{event.month}</p>
      </div>
      <p>{event.title}</p>
      <p className="bolded">{event.timeframe}</p>
      <p>@{event.locationName}</p>
    </div>
  )
}

export default EventTile