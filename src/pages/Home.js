import React from 'react'
import { Link }  from 'react-router-dom'
import "../styles/Home.css"
import Banner from "../assets/pizza-background.jpg"

function  Home () {
  return (
    <div className='homecontainer' style={{backgroundImage: `url(${Banner})` }}> 
      <div className='hometitle'>
        <h1> Shota's Pizzeria </h1>
        <p> You can choose anyone </p>
        <Link to='/menu'>
          <button> ORDER NOW </button>
        </Link>
      </div>
      
    </div>
  )
}

export default  Home 