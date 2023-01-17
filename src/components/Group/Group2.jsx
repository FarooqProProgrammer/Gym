import React from 'react'
import "./index.css"
import bg from "../../assets/her_bg.png"
import One from "../../assets/1.png"
const Group2 = () => {
  return (
    <div className='Group'>
        <div className="box1 bg-[#e8631c] flex justify-center items-center">
                <div className="boxtext w-[450px] h-[300px]  flex flex-col justify-around items-start">
                    <p className='text-white text-6xl  font-black ml-3'>Fitness</p>
                    <p className='text-white lg:text-xl md:text-[16px] sm:text-[16px] w-[80%] ml-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quam distinctio iure dolore vitae ut animi fuga molestiae inventore earum?</p>
                    <button className='w-[200px] h-[50px] bg-gray-600 text-white ml-3'>Read More</button>
                </div>
            </div>
            <div className="box1">
                <img src={One} className="w-full h-full" alt="" />
            </div>
            
            
    </div>
  )
}

export default Group2