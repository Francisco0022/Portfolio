import "./ContactStyle.css";

import React from "react";
import IntroImg from "../assets/IntroImg3.jpeg";

import { Panel } from "primereact/panel";

const ContactBody = () => {
  return (
    <div className="contact_container">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
        <div className="contact_div">
          <Panel className="panel">
          </Panel>
          <div className="photo_contact">
            <img className="photo" src="" alt="" />
            <h1>*FOTO REFERENCIAL*</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactBody;
