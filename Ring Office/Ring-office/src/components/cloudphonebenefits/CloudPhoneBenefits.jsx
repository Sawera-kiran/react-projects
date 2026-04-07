import "./CloudPhoneBenefits.css";
import benefitsImg from "../../assets/servicespage/cloudbenefitimg.PNG";

import {
  FaMobileAlt,
  FaSearchDollar,
  FaExpandArrowsAlt,
  FaBriefcase,
  FaThumbsUp,
} from "react-icons/fa";

function CloudPhoneBenefits() {
  return (
    <section className="cloud-benefits-section">
      <div className="benefits-grid">
        <div className="benefit-item">
          <div className="benefit-icon">
            <FaMobileAlt />
          </div>
          <h3>Mobile Friendly</h3>
          <p>RingOffice Cloud Phone Systems ensure seamless connectivity with clients and colleagues, regardless of location. Powerful mobile apps and desktop apps allow you to take your work extension with you wherever you go. Maintain a professional experience for everyone, even while working remotely.</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaSearchDollar />
          </div>
          <h3>Cost Effective</h3>
          <p>RingOffice Cloud Phone Systems are cost-effective VoIP phone systems built on robust infrastructure, providing small and medium-sized companies with an affordable and enhanced communication platform.</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaExpandArrowsAlt />
          </div>
          <h3>Scalable</h3>
          <p>RingOffice Cloud Phone Systems offers seamless scalability, accommodating your business growth effortlessly. Whether expanding within Canada, the USA, or globally, RingOffice provides comprehensive coverage to meet your needs.</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaBriefcase />
          </div>
          <h3>Easy to Manage</h3>
          <p>With RingOffice Hosted Phone Systems, you have the flexibility to make call routing and feature changes at any time using the 24/7 online admin portal. Easily manage your phone system from your preferred device, even on vacation or during late hours, ensuring you stay in control.</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaThumbsUp />
          </div>
          <h3>Feature Rich</h3>
          <p>RingOffice Cloud Phone Systems, empower you to personalize call flows, greetings, and features on a per-user or company-wide basis, worldwide or locally, at any desired time. Discover the unparalleled power and comprehensive support of our phone system - give RingOffice a try and witness its transformative capabilities.</p>
        </div>

        <div className="benefits-image">
          <img src={benefitsImg} alt="Cloud Phone System" />
        </div>
      </div>
    </section>
  );
}

export default CloudPhoneBenefits;
