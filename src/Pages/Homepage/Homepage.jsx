import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Advantages from '../../Components/Advantages/Advantages'
import Stats from '../../Components/Stats/Stats'
import MarqueeText from '../../Components/Marquee/Marquee'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <Stats/>
        <About />
        <Services />
        <Advantages />
        <MarqueeText />
    </div>
  )
}

export default Homepage