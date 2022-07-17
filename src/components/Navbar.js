import React from 'react'
import logo from "../assets/pizalogo.jpg"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftsidenav'> 
            <img src={logo} alt="logo" />
        </div>
        <div className='rightsidenav'>

        </div>
    </div>
  )
}

export default Navbar