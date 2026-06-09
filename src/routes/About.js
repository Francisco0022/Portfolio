import React from 'react'
import Navbar from '../components/Navbar'
//import AboutMe from '../pages/SobreMi'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="Un poco sobre mi"/>
      <Footer />
    </div>
    
  )
}

export default About