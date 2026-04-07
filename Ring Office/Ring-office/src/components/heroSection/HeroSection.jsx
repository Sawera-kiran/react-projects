import "./HeroSection.css";
import cloudimg from "../../assets/cloudimg.PNG";
import partnerLogo from "../../assets/3cxLogo.PNG";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-content">
          <img src={partnerLogo} alt="3CX Partner" className="partner-logo" />

          <h1>
            Empower Your Business with <br />
            <span>3CX Cloud Phone Systems</span>
          </h1>

          <p>
            Flexible, Cost-Effective Phone Solutions <br />
            Backed by Local Canadian Support
          </p>

          <div className="hero-buttons">
            <button className="primary-btn  heroBtns">Get a Quote</button>
            <button className="secondary-btn heroBtns">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="hero-bottom"></div>

      <div className="hero-cloud">
        <img src={cloudimg} alt="Cloud phones" />
      </div>
    </section>
  );
}

export default HeroSection;
