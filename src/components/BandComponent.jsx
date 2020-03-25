import React from 'react'

const BandComponent = ({ name, pic, description, albumTitle, year, songs }) => {
  return (
    <>
      <h1>{name}</h1>
      <main>
        <article className="pic">
          <img src={pic} alt="Band Members" />
        </article>
        <section className="about">
          <p>{description}</p>
          <h3>Latest Album</h3>
          <article>
            <ul>
              <li>
                <span>Title:</span>
                {albumTitle}
              </li>
              <li>
                <span>Release Year:</span>
                {year}
              </li>
              <li>
                <span>Songs:</span>
                {songs}
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}

export default BandComponent
