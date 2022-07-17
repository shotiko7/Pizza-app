import React from 'react'
import logo from "../assets/pizzaLogo.png"
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftsidenav'> 
            <img src={logo} alt="logo" />
        </div>
        <div className='rightsidenav'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <button>
               <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default Navbar