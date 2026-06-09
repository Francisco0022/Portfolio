import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
//import "foto lado derecho 1" from "ruta";
//import "foto lado derecho 2" from "ruta";

export const AboutContent = () => {
  return (
  <div className="about">
    <div className="left">
        <h1>Quien soy?</h1>
        <p></p>
        <Link to="/contact">
            <button className="btn">Contactame</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack bottom">
                <img src="" alt=""/>
            </div>
        </div>
    </div>
   
  </div>)
};
