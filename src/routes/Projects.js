import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Work from '../components/Work'
import HeroImg2 from '../components/HeroImg2'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Proyectos." text="A continuacion mis proyectos mas importantes:"/> 
      <Work />
      <Footer />
    </div>
  )
}

export default Projects