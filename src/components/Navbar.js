import React, { useState } from 'react'
import logo from "../assets/pizzaLogo.png"
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from "react-router-dom"

function Navbar() {
    const [hideLinks, setHideLinks] = useState(false)
    
    const onClickToogle =()=>{
        setHideLinks(!hideLinks)       
    }
  return (
    <div className='navbar'>
        <div className='leftsidenav' id={hideLinks ? 'open' : 'close'}> 
           <img src={logo} alt="logo" />
            <div className='hiddenLinks'>
               <Link to="/"> Home </Link>
               <Link to="/menu"> Menu </Link>
               <Link to="/about"> About </Link>
               <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className='rightsidenav'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={onClickToogle}>
               <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default Navbar