import React from 'react'
import "./index.css"
const Navbar = () => {
  return (
    <div className='header'>
        <div className="logo">
            <i class="fa-solid fa-music"></i>
        </div>
        <div className="list">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Promo</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default Navbar