// Filename - components/Footer.js

import React from "react";

import "./Footerstyle.css";

const Footer = () => {
  return (
    <div className="box">
      <div className="footercontainer">
        <div className="row">
          <div className="column">
            <img src={require("../img/bblogo.png")} alt="logo" />
          </div>
          <div className="column">
            <div className="heading">About Us</div>
            <div className="footerlink">
              <a href="/home">
                <button id="no-btn">Home</button>
              </a>
            </div>
            <div className="footerlink">
              <a href="/vision">
                <button id="no-btn">vision</button>
              </a>
            </div>
            <div className="footerlink">
              <a href="/testimonial">
                <button id="no-btn">Testimonials</button>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="heading">Services</div>
            <div className="footerlink">
              <a href="#">Writing</a>
            </div>
            <div className="footerlink">
              <a href="#">Internships</a>
            </div>
            <div className="footerlink">
              <a href="#">Coding</a>
            </div>
            <div className="footerlink">
              <a href="#">Teaching</a>
            </div>
          </div>
          <div className="column">
            <div className="heading">Contact Us</div>
            <div className="footerlink">
              <a href="#">Uttar Pradesh</a>
            </div>
            <div className="footerlink">
              <a href="#">Ahmedabad</a>
            </div>
            <div className="footerlink">
              <a href="#">Indore</a>
            </div>
            <div className="footerlink">
              <a href="#">Mumbai</a>
            </div>
          </div>
          <div className="column">
            <div className="heading">Social Media</div>
            <div className="footerlink">
              <i className="fab fa-facebook-f"></i>
              <a href="#" target="_blank">
                <span>Facebook</span>
              </a>
            </div>
            <div className="footerlink">
              <i className="fab fa-instagram"></i>
              <a href="#" target="_blank">
                <span>Instagram</span>
              </a>
            </div>
            <div className="footerlink">
              <i className="fab fa-twitter"></i>
              <a href="#" target="_blank">
                <span>Twitter</span>
              </a>
            </div>
            <div className="footerlink">
              <i className="fab fa-youtube"></i>
              <a href="#" target="_blank">
                <span>Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
