import React from 'react'

const Img = ({img}) => {
  return (
    <div className='img-container'>
        <img src={img} alt="image" />
      </div>
  )
}

export default Img
