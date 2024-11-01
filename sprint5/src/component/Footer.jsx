import React from "react";
import facebook from "../assets/facebook-logo.svg";
import twitter from "../assets/twitter-logo.svg";
import youtube from "../assets/youtube-logo.svg";
import instagram from "../assets/instagram-logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="contentFooter">
          <div className="footerLeft">
            <ul>@codeit - 2024</ul>
          </div>
          <div className="footerCenter">
            <ul className="Privacy_Policy">Privacy Policy</ul>
            <ul className="FAQ">FAQ</ul>
          </div>
          <div className="footerRight">
            <a href="https://www.facebook.com" target="_blank" title="Facebook">
              <img className="footerImg" src={facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" title="Twitter">
              <img className="footerImg" src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com" target="_blank" title="YouTube">
              <img className="footerImg" src={youtube} alt="YouTube" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              title="Instagram"
            >
              <img className="footerImg" src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
