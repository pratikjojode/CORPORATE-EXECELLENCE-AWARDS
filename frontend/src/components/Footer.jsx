import React from "react";
import "../Styles/Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaUserShield,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Corporate Excellence Awards</h3>
          <p>
            The Corporate Excellence Award represents a distinguished
            recognition, generating extraordinary achievements and unwavering
            commitment exhibited by individuals and organizations across diverse
            domains.
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="icon" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a href="/admin-dashboard/nominations" aria-label="Admin Dashboard">
              <FaUserShield className="icon" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#awards">Awards</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#nominees">Nominees</a>
            </li>
            <li>
              <a href="#events">Previous Events</a>
            </li>
            <li>
              <a href="#sponsors">Sponsors</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>For more information, Contact us:</p>
          <p>
            <i className="contact-icon">📞</i>{" "}
            <a href="tel:+918888181889">8308333301</a>{" "}
          </p>
          <p>
            <i className="contact-icon">✉️</i>{" "}
            <a href="mailto:info@corporateexcellenceawards.com">
              info@corporateexcellenceawards.com
            </a>
          </p>
          <div className="newsletter">
            <h4>Subscribe to Us</h4>
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Corporate Excellence Awards. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
