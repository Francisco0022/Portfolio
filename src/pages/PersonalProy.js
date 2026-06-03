import React from "react";
import "./PersonalProyStyles.css";

import IntroImg from "../assets/IntroImg3.jpeg";

const Proyectos = () => {
  return (
    <div className="project_container">
      <div className="background">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="list_projects">
        <h1>Proyectos</h1>
      </div>
    </div>
  );
};

export default Proyectos;
