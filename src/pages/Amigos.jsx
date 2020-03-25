import React from 'react'
import LosAmigos from '../images/Amigos Invisibles.jpeg'
import BandComponent from '../components/BandComponent'
const Amigos = () => {
  return (
    <>
      <BandComponent
        name="Lost Amigos Invisibles"
        pic={LosAmigos}
        description="Los Amigos Invisibles (Spanish for 'The Invisible Friends') is a
            Venezuelan band that plays a blend of disco, acid jazz and funk
            mixed with Latin rhythms. In addition to releasing eleven critically
            acclaimed albums, the band is lauded internationally for their
            explosive, live shows, spanning nearly 60 countries."
        albumTitle="El Paradise"
        year="2107"
        songs="13"
      />
    </>
  )
}

export default Amigos
