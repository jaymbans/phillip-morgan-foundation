import React from 'react'

function EventTile({ info }) {
  console.log(info)
  return (
    <div className="tile">
      <div>
        <h1>{info.date.day}</h1>
        <p className="bolded">{info.date.month}</p>
      </div>
      <p>{info.title}</p>
      <p className="bolded">{info.timeframe}</p>
      <p>@{info.locationName}</p>
    </div>
  )
}

export default EventTile