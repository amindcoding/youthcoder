import React from 'react';
import './Footer.css';
// import logo from "../assets/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const userInfo = localStorage.getItem('userInfo');

  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h3>Useful Links</h3>
          <div className="footer-links">
            <a class="btn btn-outline-light m-2" href="/">
              Home
            </a>

            <a class="btn btn-outline-light m-2" href="/articles">
              Articles
            </a>
            <br />
            <a class="btn btn-outline-light m-2" href="/forum">
              Forum
            </a>
            {userInfo ? (
              <span></span>
            ) : (
              <a class="btn btn-outline-light m-2" href="/register">
                Register
              </a>
            )}
          </div>
        </div>
        <div className="footer-box">
          <h3>Members</h3>
          <div className="footer-members">
            <li>Mohammad Amin Rizki</li>
            <li>Muhammad Ayyub Ainurohqim</li>
            <li>Siska Ameliya</li>
          </div>
        </div>
        <div className="footer-box">
          <h3>Contact Us</h3>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Jl.Raya Bekasi Km.22, Cakung Jakarta
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +62 000 0000 0000
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +62 000 0000 0000
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: weyouthcoder@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.youthcoder.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          {/* <img src={logo} alt="logo" /> */}
          <p className="u-text-small">&copy; Copyright 2022. Ycoder.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
