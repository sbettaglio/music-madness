import React from 'react'
import PhishPic from '../images/phish.jpeg'
import BandComponent from '../components/BandComponent'

const Phish = () => {
  return (
    <>
      <BandComponent
        name="Phish"
        pic={PhishPic}
        description="Phish is an American rock band that formed in Burlington, Vermont in
            1983. The band is known for musical improvisation, extended jams,
            blending of genres, and a dedicated fan base. The band consists of
            guitarist Trey Anastasio, bassist Mike Gordon, drummer Jon Fishman,
            and keyboardist Page McConnell, all of whom perform vocals, with
            Anastasio being the primary lead vocalist."
        albumTitle="Big Boat"
        year="2016"
        songs="13"
      />
    </>
  )
}

export default Phish
