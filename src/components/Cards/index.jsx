import React from 'react'
import "./index.css"
import One from "../../assets/1.png"
import two from "../../assets/2.png"
import Three from "../../assets/her_bg.png"

const Cards = () => {
  return (
    <div className='Cards '>
            <div className="textBox">
                    <p className='bg-text'>Fitness</p>
                    <p className="small_Text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aperiam omnis porro hic, nisi earum neque veritatis eveniet optio quam?</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:h-auto md:h-auto sm:h-auto  sm:grid-cols-1 grid-rows-1 place-items-center gap-10">
                <div className="lg:w-[400px] lg:h-[400px] md:w-full sm:w-full  bg-[#303030]">
                       <div className="image w-full h-[250px] ">
                            <img src={One} alt="" className='w-full h-full'/>
                       </div>
                       <p className='text-3xl text-white ml-3 mt-2'>America</p>
                       <p className='text-white ml-3 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, sequi. </p>
                      
                </div>
                <div className="lg:w-[400px] lg:h-[400px] md:w-full sm:w-full bg-[#303030]">
                       <div className="image w-full h-[250px] ">
                            <img src={two} alt="" className='w-full h-full'/>
                       </div>
                       <p className='text-3xl text-white ml-3 mt-2'>Asia</p>
                       <p className='text-white ml-3 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, sequi. </p>
                      
                </div>
                <div className="lg:w-[400px] lg:h-[400px] md:w-full sm:w-full bg-[#303030]">
                       <div className="image w-full h-[250px] ">
                            <img src={Three} alt="" className='w-full h-full'/>
                       </div>
                       <p className='text-3xl text-white ml-3 mt-2'>Austrialia</p>
                       <p className='text-white ml-3 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, sequi. </p>
                      
                </div>
             
                
            </div>
    </div>
  )
}

export default Cards