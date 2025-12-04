import React from 'react'

const Cord = ({lat,lon}) => {
  return (
    <div className='cord'>
        <div className='lat'>
            <p>latitude</p>
            <p>{lat}</p>
        </div>
        <div className='lon'>
            <p>longitude</p>
            <p>{lon}</p>
        </div>
    </div>
  )
}

export default Cord
