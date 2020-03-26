import React, { useState, useEffect } from 'react'
import PhishPic from '../images/phish.jpeg'
import BandComponent from '../components/BandComponent'

const Phish = () => {
  const [phish, setPhish] = useState({})
  const [phishBio, setPhishBio] = useState({})
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
  console.log(phish)
  async function fetchMoreData() {
    const resp = await fetch(
      'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=phish&api_key=15a8aa9b0d09e6572aa2b2f6ab29fdb0&format=json'
    )
    const data = await resp.json()
    setPhishBio(data.artist.bio)
  }
  useEffect(() => {
    fetchMoreData()
  }, [])
  return (
    <>
      <BandComponent
        name={phish.name}
        pic={phish.image}
        description={phishBio.summary}
        albumTitle="Big Boat"
        year="2016"
        songs="13"
      />
    </>
  )
}

export default Phish
