import React, { useState } from "react";
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
import { submitData } from "../services/services";
import toast from "react-hot-toast";
const Contact = () => {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    submitData({ email, name, company, message });
    setLoading(true)
      .then(() => {
        toast.success("Message sent successfully");
        setLoading(false);
      })
      .catch(() => {
        toast.success("Error sending message");
        setLoading(false);
      });
    setCompany("");
    setEmail("");
    setFullName("");
    setMessage("");
  }
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
            <a href="mailto://help@honoraconsult.com">help@honoraconsult.com</a>
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
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            placeholder="First Name"
            type="text"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            value={name}
          />
          <label>Company</label>
          <input
            placeholder="Your Company"
            type="text"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            value={company}
          />
          <label>Email Address</label>
          <input
            placeholder="Email Address"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label>Your Message</label>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          ></textarea>
          {loading ? <button>Submit</button> : <button>Submitting...</button>}
        </form>
      </div>
    </>
  );
};

export default Contact;
