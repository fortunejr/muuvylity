import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Advantages from './Pages/Advantages/Advantages'
import Contact from './Pages/Contact/Contact'
import Team from './Pages/Team/team'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/"  element = {<Homepage />}/>
        <Route path = "/about"  element = {<About />}/>
        <Route path = "/services"  element = {<Services />}/>
        <Route path = "/advantages"  element = {<Advantages />}/>
        <Route path = "/contact"  element = {<Contact />}/>
        <Route path = "/abouttheteam"  element = {<Team />}/>
        <Route path = "*"  element={<p>Nothing to show</p>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App