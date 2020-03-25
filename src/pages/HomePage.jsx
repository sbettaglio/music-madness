import React from 'react'
import AmigosHome from '../images/amigoshome.jpeg'
import PhishHome from '../images/phishhome.jpeg'
import DeadHome from '../images/deadhome.jpeg'

const HomePage = () => {
  return (
    <>
      <h1>This is my band fan site. Feel free to look around</h1>
      <section className="intro">
        <p>
          Live music has always been a very important part of my life. This site
          is dedicated to the three most influential bands in my life. Below is
          a list of my top three. In a very particular order!
        </p>
      </section>
      <ul className="band-list-hp">
        <li>
          <h3>Phish</h3>
          <article>
            <p>
              Phish my Favorite Band in the entire world. As far as I'm
              concerned the put on the best live show out there. Phish show's
              are my happy place. When it comes to jamming, no one is on their
              level
            </p>
            <img src={PhishHome} alt="Phish show" />
          </article>
        </li>
        <li>
          <h3>The Grateful Dead</h3>
          <article>
            <p>
              The Dead are one of the most influential bands of the 20th
              century. Unfortunately, I was never able to see them live, since
              Jerry passed away in '95. I have seen most of the the remaining
              member's touring acts and many covers. They have a beautiful sound
              that is a joy to listen to.
            </p>
            <img src={DeadHome} alt="Grateful Dead show" />
          </article>
        </li>
        <li>
          <h3>Los Amigos Invisibles</h3>
          <article>
            <p>
              These guys are a straight up dance party. Very high energy music
              that i could best describe as "latin disco funk". If they are ever
              in town do yoursef a favor and go check them out!
            </p>
            <img src={AmigosHome} alt="Los Amigos Invisible" />
          </article>
        </li>
      </ul>
    </>
  )
}

export default HomePage
