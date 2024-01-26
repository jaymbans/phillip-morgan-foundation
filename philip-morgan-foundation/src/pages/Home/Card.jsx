import React from 'react'

function Card({ info }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={require(`../../media/${info.imgUrl}.png`)} />
      </div>
      <h5>{info.title}</h5>
      <p>{info.description}</p>
    </div>
  )
}

export default Card