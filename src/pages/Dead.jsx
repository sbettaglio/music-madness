import React from 'react'
import TheDead from '../images/Grateful Dead.jpeg'

const Dead = () => {
  return (
    <>
      <h1>The Grateful Dead</h1>
      <main>
        <article className="pic">
          <img src={TheDead} alt="Grateful Dead Band Members" />
        </article>
        <section className="about">
          <p>
            The Grateful Dead was an American rock band formed in 1965 in Palo
            Alto, California. The band is known for its eclectic style, which
            fused elements of rock, folk, country, jazz, bluegrass, blues,
            gospel, and psychedelic rock; for live performances of lengthy
            instrumental jams; and for its devoted fan base, known as
            "Deadheads." "Their music," writes Lenny Kaye, "touches on ground
            that most other groups don't even know exists." These various
            influences were distilled into a diverse and psychedelic whole that
            made the Grateful Dead "the pioneering Godfathers of the jam band
            world".
          </p>
          <h3>Latest Album</h3>
          <article>
            <ul>
              <li>
                <span>Title:</span>Without a Net
              </li>
              <li>
                <span>Release Year:</span>1990
              </li>
              <li>
                <span>Songs:</span>14
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}

export default Dead
