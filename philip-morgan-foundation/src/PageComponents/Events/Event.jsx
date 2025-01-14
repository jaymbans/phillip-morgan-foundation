import React from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Event({ info }) {
  const copyLocationName = () => {
    navigator.clipboard.writeText(info.locationAddress)
    return
  }

  return (
    <div className='event'>
      <div className="date">
        <h3>{info.day}</h3>
        <h3>{info.month}</h3>
      </div>
      <div className="content">
        {
          info.thumbnailUrl &&
          <img src={info.thumbnailUrl} />
        }
        <div className="info">
          <h4>{info.title}</h4>
          <p>{info.locationName}</p>
          <span>
            <button onClick={copyLocationName}>
              <ContentCopyIcon />
            </button>
            <p>{info.locationAddress}</p>
          </span>
          {
            info.attachments.length > 0 && (
              <div className="attachments">
                {
                  info.attachments?.length && info.attachments.map(attachment => {
                    return <a href={attachment.url} target='_blank'>{attachment.name}</a>
                  })
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Event