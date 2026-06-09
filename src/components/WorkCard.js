import React from "react";
import { NavLink } from "react-router-dom";

import "./WorkCardStyles.css";

// Importar aqui imagen desde assets y utilizar la clase dentro de <img src={}... /> Y agregar "image" en alt=""...

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
