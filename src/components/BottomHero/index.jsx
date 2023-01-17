import React from 'react'
import "./index.css"
import One from "../../assets/1.png"
const BottomHero = () => {
  return (
    <div className='bb w-full h-[600px]  relative flex flex-col justify-center items-center'>
        <img src={One} className='w-full h-full absolute -z-50' alt="" />
        <p className='text-white font-black lg:text-3xl lg:w-[50%] md:w-[70%] md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit ea nam, exercitationem accusantium hic culpa corrupti facere maiores ex.</p>
        <p className='text-white text-5xl font-black mt-3'>Farooq  </p>
    </div>
  )
}

export default BottomHero