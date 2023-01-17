import React from 'react'
import "./index.css"
import {CgGym} from "react-icons/cg"
const Navbar = () => {
  return (
    <div className='header'>
        <div className="logo">
            <CgGym className='text-6xl text-white'/>
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