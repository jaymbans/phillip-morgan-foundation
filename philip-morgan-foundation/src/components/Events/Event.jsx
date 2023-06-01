import React from 'react'
import copyIcon from '../../media/copy-icon.png';

function Event({ info }) {
  return (
    <div className='event'>
      <div className="date">
        <h3>{info.day}</h3>
        <h3>{info.month}</h3>
      </div>
      <div className="content">
        <img src={info.thumbnailUrl} />
        <div className="info">
          <h4>{info.type}</h4>
          <p>{info.locationName}</p>
          <span>
            <button>
              <img src={copyIcon} />
            </button>
            <p>{info.locationAddress}</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Event