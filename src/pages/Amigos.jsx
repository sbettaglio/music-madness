import React from 'react'
import LosAmigos from '../images/Amigos Invisibles.jpeg'
const Amigos = () => {
  return (
    <>
      <h1>Los Amigos Invisibles</h1>
      <main>
        <article className="pic">
          <img src={LosAmigos} alt="Los Amigos Invisibles Band Members" />
        </article>
        <section className="about">
          <p>
            Los Amigos Invisibles (Spanish for "The Invisible Friends") is a
            Venezuelan band that plays a blend of disco, acid jazz and funk
            mixed with Latin rhythms. In addition to releasing eleven critically
            acclaimed albums, the band is lauded internationally for their
            explosive, live shows, spanning nearly 60 countries.
          </p>
          <h3>Latest Album</h3>
          <article>
            <ul>
              <li>
                <span>Title:</span>El Paradise
              </li>
              <li>
                <span>Release Year:</span>2017
              </li>
              <li>
                <span>Songs:</span>17
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}

export default Amigos
