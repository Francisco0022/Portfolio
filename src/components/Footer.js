import "./FooterStyles.css";

import React from 'react';

//import { FaHome } from "react-icons/fa";

import 'primeicons/primeicons.css';
        

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="item">
            <i className="pi pi-home icon" style={{ color: '#fff'}}></i>
            <div>
              <p>Jose Miguel Carrera 716. / Talagante / Region Metropolitana</p>
            </div>
            <div className="item">
              <i className="pi pi-phone icon" style={{ color: '#fff'}}></i>
              <h4>+56 9 22586140</h4>
            </div>
            <div className="item">
              <i className="pi pi-envelope icon" style={{ color: '#fff'}}></i>
              <h4>franzunigapalma@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="rigth">
          <div className="social">
            <i className="pi pi-github social" style={{ color: '#fff', fontSize: '1.5rem'}}></i>
            <i className="pi pi-linkedin social" style={{ color: '#fff', fontSize: '1.5rem'}}></i>
            <i className="pi pi-twitter social" style={{ color: '#fff', fontSize: '1.5rem'}}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer