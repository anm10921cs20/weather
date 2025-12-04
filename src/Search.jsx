import React from 'react'

const Search = ({text, setText, weatherApi}) => {
  
  const handleKeyDown = (e) =>{
    if(e.key === "Enter")
    {
      weatherApi()
    }
  }
  
  return (
      <div className='input-container'>
        <input type="text" name="search" id="searchInput" value={text} onChange={(e) => setText(e.target.value)} className='searchInput' placeholder='Type City Name' onKeyDown={handleKeyDown} />
        <i className='fas fa-magnifying-glass search' onClick={weatherApi}></i>
      </div>
  )
}

export default Search
