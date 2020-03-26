import React, { useState, useEffect } from 'react'
import PhishPic from '../images/phish.jpeg'
import BandComponent from '../components/BandComponent'
import axios from 'axios'

const Phish = () => {
  const [phish, setPhish] = useState({})
  async function fetchData() {
    const resp = await fetch(
      'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=phish&api_key=15a8aa9b0d09e6572aa2b2f6ab29fdb0&format=json'
    )
    const data = await resp.json()
    setPhish(data.artist)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(phish.bio)
  return (
    <>
      <BandComponent
        name={phish.name}
        // pic="https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png"
        // description={phish.bio.links.summary}
        albumTitle="Big Boat"
        year="2016"
        songs="13"
      />
    </>
  )
}

export default Phish
