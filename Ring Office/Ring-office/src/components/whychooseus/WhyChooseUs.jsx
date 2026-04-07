import "./WhyChooseUs.css";
import { FaHandshake } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why">
      <h2 className="why-title">Why Choose RingOffice?</h2>

      <div className="why-container">

        <div className="why-card">
          <div className="icon-box">
            <FaHandshake className="icon" />
          </div>
          <h3>Seamless Collaboration</h3>
          <p>
            Effortlessly connect with your teams anytime, anywhere,
            enhancing productivity and workflow efficiency.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaCloud className="icon" />
          </div>
          <h3>Advanced Cloud Solutions</h3>
          <p>
            Unlock scalable, flexible, and cutting-edge technology
            tailored to support your evolving business needs.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaHeadset className="icon" />
          </div>
          <h3>Expert Support</h3>
          <p>
            Rely on a dedicated team committed to providing fast,
            reliable, and personalized assistance.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaMedal className="icon" />
          </div>
          <h3>Trusted SMB Experts</h3>
          <p>
            Over 15 years of delivering agile, hassle-free communication
            solutions for growing businesses.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;