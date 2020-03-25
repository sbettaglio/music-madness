import React from 'react'
import AmigosHome from '../images/amigoshome.jpeg'
import PhishHome from '../images/phishhome.jpeg'
import DeadHome from '../images/deadhome.jpeg'

const HomePage = () => {
  return (
    <>
      <h1>World's Greatest Bands</h1>

      <ul className="band-list-hp">
        <li className="band-card">
          <h3>Phish</h3>
          <article>
            <img src={PhishHome} alt="Phish show" />
            <p>
              Phish my Favorite Band in the entire world. As far as I'm
              concerned the put on the best live show out there. Phish show's
              are my happy place. When it comes to jamming, no one is on their
              level
            </p>
          </article>
        </li>
        <li className="band-card">
          <h3>The Grateful Dead</h3>
          <article>
            <img src={DeadHome} alt="Grateful Dead show" />
            <p>
              The Dead are one of the most influential bands of the 20th
              century. Unfortunately, I was never able to see them live, since
              Jerry passed away in '95. I have seen most of the the remaining
              member's touring acts and many covers. They have a beautiful sound
              that is a joy to listen to.
            </p>
          </article>
        </li>
        <li className="band-card">
          <h3>Los Amigos Invisibles</h3>
          <article>
            <img src={AmigosHome} alt="Los Amigos Invisible" />
            <p>
              These guys are a straight up dance party. Very high energy music
              that i could best describe as "latin disco funk". If they are ever
              in town do yoursef a favor and go check them out!
            </p>
          </article>
        </li>
      </ul>
    </>
  )
}

export default HomePage
