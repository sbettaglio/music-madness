import React, { useState, useEffect } from 'react'
import LosAmigos from '../images/Amigos Invisibles.jpeg'
import BandComponent from '../components/BandComponent'

const Amigos = () => {
  const [amigos, setAmigos] = useState({})
  const [amigosBio, setAmigosBio] = useState({})
  async function fetchData() {
    const resp = await fetch(
      'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=amigosinvisibles&api_key=15a8aa9b0d09e6572aa2b2f6ab29fdb0&format=json'
    )
    const data = await resp.json()
    setAmigos(data.artist)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(amigos)
  async function fetchMoreData() {
    const resp = await fetch(
      'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=amigosinvisibles&api_key=15a8aa9b0d09e6572aa2b2f6ab29fdb0&format=json'
    )
    const data = await resp.json()
    setAmigosBio(data.artist.bio)
  }
  useEffect(() => {
    fetchMoreData()
  }, [])
  return (
    <>
      <BandComponent
        name={amigos.name}
        pic={LosAmigos}
        description={amigosBio.summary}
        albumTitle="El Paradise"
        year="2107"
        songs="13"
      />
    </>
  )
}

export default Amigos
