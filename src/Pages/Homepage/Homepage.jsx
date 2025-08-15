import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Advantages from '../../Components/Advantages/Advantages'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Promise from '../../Components/Promise/Promise'
import Appointment from '../../Components/Appointment/Appointment'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <About />
        <Services />
        <Advantages />
        <Appointment />
    </div>
  )
}

export default Homepage