import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Pricing from '../components/Pricing/Pricing'
import Group1 from '../components/Group/Group1'
import Group2 from '../components/Group/Group2'
import Statistics from '../components/Statistics'
import BottomHero from '../components/BottomHero'
import Form from '../components/Form'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <Hero/>
        <Cards/>
        <Pricing/>
        <Group1/>
        <Group2/>
        <Statistics/>
        <BottomHero/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Home