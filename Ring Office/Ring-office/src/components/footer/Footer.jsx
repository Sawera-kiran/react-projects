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

          {/* <div className="social-icons">
            <FaTwitter />
            <FaLinkedinIn />
            <FaFacebookF />
            <FaYoutube />
          </div> */}

          <div className="social-icons">
            <a
              href="https://x.com/ringoffice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/RingOffice.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/channel/UC_nonDAdlUOGHCj0aJoXuRw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>

          <a href="https://ringoffice.com/cloud-phone-systems" target="_blank">
            Cloud Phone System
          </a>
          <a href="https://ringoffice.com/3cx-phone-system" target="_blank">
            3CX Phone Systems
          </a>
          <a href="https://ringoffice.com/sip-trunking-canada" target="_blank">
            SIP Trunking
          </a>
          <a
            href="https://ringoffice.com/managed-it-services-canada"
            target="_blank"
          >
            Managed IT Services
          </a>
          <a href="https://ringoffice.com/microsoft-solutions" target="_blank">
            Microsoft Solutions
          </a>
          <a href="https://ringoffice.com/aws-managed-cloud" target="_blank">
            AWS Solutions
          </a>
          <a href="https://ringoffice.com/resellers" target="_blank">
            Reseller Program
          </a>
          <a href="https://ringoffice.com/blog" target="_blank">
            Blog
          </a>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>

          <a href="https://ringoffice.com/about-us" target="_blank">
            About Us
          </a>
          <a href="https://ringoffice.com/support" target="_blank">
            Support
          </a>
          <a href="https://ringoffice.com/faq" target="_blank">
            FAQ
          </a>
          <a href="https://ringoffice.com/privacy-policy" target="_blank">
            Privacy Policy
          </a>
          <a href="https://ringoffice.com/terms-of-service" target="_blank">
            Terms of Service
          </a>

          <div className="contact-info">
            <p>
              <FaEnvelope className="contactinfo-icons" /> sales@ringoffice.com
            </p>
            <p>
              <FaPhone className="contactinfo-icons" /> +1-647-660-1111
            </p>
            <p>
              <FaMapMarkerAlt className="contactinfo-icons" /> 155 Commerce
              Valley Drive East, Markham, ON, L3T7T2
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
