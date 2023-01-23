import React, { useState } from 'react'
import "./index.css"
import {CgGym} from "react-icons/cg"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"
const Navbar = () => {
  const [header,setHeader] = useState(false);
  return (
    <>
    <div className='header'>
        <div className="logo flex w-[250px]">
            <CgGym className='text-6xl text-white'/>
            {/* <p className='text-white'>Gym Partner</p> */}
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
        <div className="icons" onClick={() => setHeader(true)}>
            <FaBars className='bar'/>
        </div>
       
    </div>

    {header &&  <div className="mobile_bar  w-full h-[400px] mt-1 z-10 absolute bg-[#303030] ">
      <div className="mobile w-full h-full flex flex-col justify-around items-center relative">
      <ImCross className='absolute top-0 right-2 text-3xl mt-1 text-white ' onClick={()=> setHeader(false)}/>
      <span className='text-white'>Home</span>
      <span className='text-white'>Product</span>
      <span className='text-white'>Promo</span>
      <span className='text-white'>About</span>
      <span className='text-white'>Contact</span>
      </div>
    
      </div>
  }
   
    </>
  )
}

export default Navbar