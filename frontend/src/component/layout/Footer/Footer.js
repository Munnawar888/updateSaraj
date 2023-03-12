import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="row">
          <div className="col">
            <img className="footer_logo" alt="Saraj" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              facilis a assumenda officia, sequi eaque quasi eligendi? Delectus
              enim repudiandae ea, excepturi quo, nisi sint impedit quasi quis
              architecto beatae.
            </p>
          </div>
          <div className="col">
            <h3>Office</h3>
            <p>R-75</p>
            <p>Near Akshardham</p>
            <p>Delhi, PIN 110092, India</p>
            <p className="email">Saraj@gmail.com</p>
            <p>+91 7065203254</p>
          </div>
          <div className="col">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/">Service</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Newsletter</h3>
            <form></form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
