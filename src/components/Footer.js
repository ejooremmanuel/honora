import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="company__details">
        <div className="socialmediahandles">
          <h2>Stay connected with us on social media</h2>
          <div className="social__links">
            <a href="https://instagram.com/honoraconsult">
              <span>
                <FaInstagram />
              </span>
            </a>
            <a href="https://instagram.com/honoraconsult">
              <span>
                <FaTwitter />
              </span>
            </a>
            <a href="https://instagram.com/honoraconsult">
              <span>
                <FaFacebook />
              </span>
            </a>
            <a href="https://instagram.com/honoraconsult">
              <span>
                <FaLinkedin />
              </span>
            </a>
          </div>
        </div>
        <div className="company__sitemap">
          <h2>Company</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="contact__details">
          <h2>Contact Us</h2>
          <span>Address: 4, Lugbe, Lagos Nigeria</span>
          <a href="tel://+2348024780213 ">+2348024780213</a>
          <a href="tel://+2349057029961 ">+2349057029961</a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="site__credits">
        <h3>&copy; All Rights Reserved - Honora Consult Limited.</h3>
        <h3>Site Credits</h3>
      </div>
    </footer>
  );
};

export default Footer;
