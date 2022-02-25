import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./pages.style.css";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { submitData } from "../services/services";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
const Contact = () => {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    submitData({ email, name, company, message })
      .then((data) => {
        toast.success("Message sent successfully");
        setLoading(false);
      })
      .catch((err) => {
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
            <span>Address: 5a, Johnson St. Off Coker Rd , Ilupeju Lagos</span>
            <a href="mailto://help@honoraconsult.com">help@honoraconsult.com</a>
            <a href="tel://+2348024780213 ">+2348024780213 09057029961</a>
            <a href="tel://+2349057029961 ">+2349057029961</a>
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
            required
          />
          <label>Company</label>
          <input
            placeholder="Your Company"
            type="text"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            value={company}
            required
          />
          <label>Email Address</label>
          <input
            placeholder="Email Address"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
          <label>Your Message</label>

          <textarea
            name=""
            id=""
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
            value={message}
          ></textarea>
          {loading ? <button>Submitting...</button> : <button>Submit</button>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
