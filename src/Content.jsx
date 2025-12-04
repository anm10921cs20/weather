import React from 'react'

const Content = ({ temp, location, country }) => {
    return (
        <div>
            <div className='content-container'>
                <div className='temp'>{temp} &deg;C</div>
                <div className='location'>
                    {location}
                </div>
                <div className='country'>
                    {country}
                </div>
            </div>
        </div>
    )
}

export default Content
