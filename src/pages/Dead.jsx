import React from 'react'
import TheDead from '../images/Grateful Dead.jpeg'
import BandComponent from '../components/BandComponent'

const Dead = () => {
  return (
    <>
      <BandComponent
        name="The Grateful Dead"
        pic={TheDead}
        description="The Grateful Dead was an American rock band formed in 1965 in Palo
            Alto, California. The band is known for its eclectic style, which
            fused elements of rock, folk, country, jazz, bluegrass, blues,
            gospel, and psychedelic rock; for live performances of lengthy
            instrumental jams; and for its devoted fan base, known as
            'Deadheads.' 'Their music,' writes Lenny Kaye, 'touches on ground
            that most other groups don't even know exists.' These various
            influences were distilled into a diverse and psychedelic whole that
            made the Grateful Dead 'the pioneering Godfathers of the jam band
            world'."
        albumTitle="Without a Net"
        year="1990"
        songs="14"
      />
    </>
  )
}

export default Dead