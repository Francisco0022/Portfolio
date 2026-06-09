import React from 'react'
import Navbar from '../components/Navbar';
//import ContactBody from '../pages/ContactBody';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact" text="contactame para conversar:"/>
      <Footer />
    </div>
  );
};

export default Contact