import React from "react";
import Navbar from "../components/Navbar";
import "./pages.style.css";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="service__heading">
        <h1 style={{ color: "white" }}>Contact Us</h1>
      </div>
      <div className="contact__container">
        <div className="contact__container__address">
          <div className="contact__map">
            <div className="map"></div>
            <h3>Find Us Here</h3>
            <span>Address: 4, Lugbe, Lagos Nigeria</span>
            <a href="mailto://instagram.com/honoraconsult">
              help@honoraconsult.com
            </a>
            <a href="tel://+2348142992539">+234 810 0021</a>
          </div>

          <div className="contact__container__details">
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
            <a href="https://instagram.com/honoraconsult">
              <span>
                <FaYoutube />
              </span>
            </a>
            <a href="https://instagram.com/honoraconsult">
              <span>
                <FaTiktok />
              </span>
            </a>
          </div>
        </div>
        <form action="" method="post">
          <label>Full Name</label>
          <input placeholder="First Name" type="text" />
          <label>Company</label>
          <input placeholder="Your Company" type="text" />
          <label>Email Address</label>
          <input placeholder="Email Address" type="text" />
          <label>Your Message</label>

          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
