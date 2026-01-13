import React from "react";

// import { FiFacebook } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa6";
// import { LuTwitter } from "react-icons/lu";
// import { CiYoutube } from "react-icons/ci";
import "./Footer.css"; // CSS faylni ulash

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-content">
          <ul className="footer-top-row">
            {/* Brand Section */}
            <li className="footer-brand">
              <a href="/">
                
              </a>
              <h2 className="footer-title">Bespoke software solutions</h2>
              <div className="footer-socials">
                {/* <a href="#" className="social-link"><FiFacebook /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
                <a href="#" className="social-link"><LuTwitter /></a>
                <a href="#" className="social-link"><CiYoutube /></a> */}
              </div>
            </li>

            {/* Links Section */}
            <li className="footer-column">
              <h4 className="footer-col-title">Company</h4>
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Services</a>
              <a href="#" className="footer-link">Blog</a>
            </li>

            {/* Connect Section */}
            <li className="footer-column">
              <h4 className="footer-col-title">Connect</h4>
              <a href="mailto:hi@finsweet.com" className="footer-link">hi@finsweet.com</a>
              <a href="tel:+1234567890" className="footer-link">+(123) 456-7890</a>
            </li>

            {/* Newsletter Section */}
            <li className="footer-column newsletter">
              <h4 className="footer-col-title">Join Newsletter</h4>
              <div className="newsletter-input-group">
                <input type="email" required placeholder="Your Email" className="footer-input" />
              </div>
              <button type="submit" className="footer-btn">Subscribe</button>
            </li>
          </ul>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="copyright">© All rights reserved – Finsweet</p>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;