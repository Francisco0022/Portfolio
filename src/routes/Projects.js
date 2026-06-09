import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard'
import HeroImg2 from '../components/HeroImg2'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Proyectos." text="A continuacion mis proyectos mas importantes:"/> 
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Projects