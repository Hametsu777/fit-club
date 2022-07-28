import React from "react";
import "./Footer.css";
import Github from "../../assets/github-logo.png";
import Instagram from "../../assets/instagram-logo.png";
import LinkedIn from "../../assets/linkedin-logo.png";
import Logo from "../../assets/fitclub-logo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-footer">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur footer-blur1"></div>
      <div className="blur footer-blur2"></div>
    </div>
  );
}
