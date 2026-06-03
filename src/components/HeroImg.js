import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/IntroImg3.jpeg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" /> 
      </div>
      <div className="content">
        <p>Hola, soy ingeniero informatico</p>
        <h1>Java, React Developer</h1>
        <div>
          <Link to="/projects" className="btn">Proyectos</Link>
          <Link to="/contact" className="btn btn-light">Contacto</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg