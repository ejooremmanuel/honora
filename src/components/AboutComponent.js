import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./components.style.css";
import account from "../assets/account2.jpg";

const AboutComponent = () => {
  return (
    <div className="about__container__comp">
      <Navbar />
      <div>
        <div className="service__heading">
          <h1>About Us</h1>
        </div>
        <div
          className="other__details"
          style={{ marginTop: "20px", padding: "20px" }}
        >
          <img
            style={{ width: "400px", height: "500px" }}
            src={account}
            alt="account"
          />

          <div className="about__text">
            <h1 style={{ color: "blue" }}>Our Team</h1>
            <p>
              Our team is led by Rekhia Abu. She has a proven track record of
              managing successful finance and accounting functions in the
              Manufacturing, Service, Investment, Construction and Agricultural
              sectors. Trained at Akintola Williams Delliote and Touche, She is
              a Chartered Accountant with the Institute of Chartered Accountants
              of Nigeria, A fellow with the Institute with over 12years post
              qualification experience with considerable expertise in
              negotiations and procurement. She is a qualified Forensic Auditor.
              A business expert in strategic planning with full P&L
              responsibilities, she has an analytical mind with optimum
              Financial Reporting skills. She possesses a solid finance
              background including Internal Controls and Risk Management, Audit
              Functions and Credit Control. She is particularly Profit and
              Results oriented, with strong strategic, innovative and
              implementation skills coupled with significant experience in
              motivating, training and leading teams.
            </p>
            <div
              style={{
                width: "200px",
                height: "20px",
                backgroundColor: "green",
                padding: "20px",
                textAlign: "center",
                color: "white",
              }}
            >
              <Link style={{ color: "white" }} to="/contact">
                Request a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
