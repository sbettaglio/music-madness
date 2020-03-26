import React, { useState, useEffect } from 'react'
import TheDead from '../images/Grateful Dead.jpeg'
import BandComponent from '../components/BandComponent'

const Dead = () => {
  const [dead, setDead] = useState({})
  const [deadBio, setDeadBio] = useState({})
  async function fetchData() {
    const resp = await fetch(
      'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=the_grateful_dead&api_key=15a8aa9b0d09e6572aa2b2f6ab29fdb0&format=json'
    )
    const data = await resp.json()
    setDead(data.artist)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(dead)
  async function fetchMoreData() {
    const resp = await fetch(
      'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=the_grateful_dead&api_key=15a8aa9b0d09e6572aa2b2f6ab29fdb0&format=json'
    )
    const data = await resp.json()
    setDeadBio(data.artist.bio)
  }
  useEffect(() => {
    fetchMoreData()
  }, [])
  return (
    <>
      <BandComponent
        name={dead.name}
        pic={TheDead}
        description={deadBio.summary}
        albumTitle="Without a Net"
        year="1990"
        songs="14"
      />
    </>
  )
}

export default Dead
