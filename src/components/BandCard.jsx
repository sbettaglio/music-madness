import React from 'react'

const BandCard = ({ name, pic, description }) => {
  return (
    <>
      <li className="band-card">
        <h3>{name}</h3>
        <article>
          <img src={pic} alt="band" />
          <p>{description}</p>
        </article>
      </li>
    </>
  )
}

export default BandCard
