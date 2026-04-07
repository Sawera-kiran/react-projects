import "./Footer.css";
import logo from "../../assets/logo/logo.webp";

import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col company">
          <img src={logo} alt="logo" className="footer-logo" />

          <p>
            Streamlining Business Communication - 3CX VoIP & Cloud Solutions
            Provider since 2007
          </p>

          <div className="social-icons">
            <FaTwitter />
            <FaLinkedinIn />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>


        <div className="footer-col">
          <h3>Quick Links</h3>

          <a href="#">Cloud Phone System</a>
          <a href="#">3CX Phone Systems</a>
          <a href="#">SIP Trunking</a>
          <a href="#">Managed IT Services</a>
          <a href="#">Microsoft Solutions</a>
          <a href="#">AWS Solutions</a>
          <a href="#">Reseller Program</a>
          <a href="#">Blog</a>
        </div>


        <div className="footer-col">
          <h3>Use Cases</h3>

          <a href="#">Hospitality</a>
          <a href="#">Contact Center</a>
          <a href="#">Healthcare</a>
          <a href="#">Retail</a>
          <a href="#">Manufacturing</a>
        </div>


        <div className="footer-col">
          <h3>Contact Us</h3>

          <a href="#">About Us</a>
          <a href="#">Support</a>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>

          <div className="contact-info">
            <p>
              <FaEnvelope className="contactinfo-icons" /> sales@ringoffice.com
            </p>
            <p>
              <FaPhone className="contactinfo-icons" /> +1-647-660-1111
            </p>
            <p>
              <FaMapMarkerAlt className="contactinfo-icons" /> 155 Commerce Valley Drive East, Markham, ON,
              L3T7T2
            </p>
          </div>

          <button className="billing-btn">MyBilling</button>
        </div>

      </div>

      <div className="footer-bottom">2025 RingOffice. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
