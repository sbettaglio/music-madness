import React from 'react'
import PhishPic from '../images/phish.jpeg'

const Phish = () => {
  return (
    <>
      <h1>Phish</h1>
      <main>
        <article className="pic">
          <img src={PhishPic} alt="Phish Band Members" />
        </article>
        <section className="about">
          <p>
            Phish is an American rock band that formed in Burlington, Vermont in
            1983. The band is known for musical improvisation, extended jams,
            blending of genres, and a dedicated fan base. The band consists of
            guitarist Trey Anastasio, bassist Mike Gordon, drummer Jon Fishman,
            and keyboardist Page McConnell, all of whom perform vocals, with
            Anastasio being the primary lead vocalist.
          </p>
          <h3>Latest Album</h3>
          <article>
            <ul>
              <li>
                <span>Title:</span>Big Boat
              </li>
              <li>
                <span>Release Year:</span>2016
              </li>
              <li>
                <span>Songs:</span>13
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}

export default Phish
