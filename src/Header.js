import React from 'react'

function Header({handleChange, handleClick}) {
  return (
    <header>
      <div className='header-search'>
        <input type="search" onChange={handleChange} placeholder="Search Countries..."/>
        <button onClick={handleClick}><i className="fa-solid fa-magnifying-glass-location fa-xl"></i></button>
        
        </div>
    </header>
  )
}

export default Header