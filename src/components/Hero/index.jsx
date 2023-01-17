import React from 'react'
import "./index.css"
import bg from '../../assets/her_bg.png'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={bg} alt="" />
        <h1>Fitness</h1>
        <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fugit vel soluta dolorum illum optio maxime rem culpa, vero iure consectetur modi doloribus sunt, delectus laborum.
        </p>
        <div className="hero_btn">
            Register Now
        </div>
    </div>
  )
}

export default Hero