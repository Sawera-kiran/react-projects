import "./PartnerPrograms.css";
import { FaCheckCircle } from "react-icons/fa";

function PartnerPrograms() {

  const benefits = [
    "Transparent Pricing",
    "Sales Enablement",
    "Increased Recurring Revenue",
    "Special Partner Promos & Bundle Discounts",
    "Ongoing Training",
    "24/7 Partner Support"
  ];

  return (
    <section className="partner">

      <h2>Join the RingOffice 3CX Partner Success Program</h2>

      <p className="partner-subtitle">
        Become a RingOffice partner and unlock a world of opportunities. Benefit from:
      </p>

      <div className="partner-benefits">

        {benefits.map((item, index) => (
          <div className="benefit-item" key={index}>
            <FaCheckCircle className="check-icon" />
            <span>{item}</span>
          </div>
        ))}

      </div>

      <div className="divider"></div>

      <button className="partner-btn">Learn More</button>

    </section>
  );
}

export default PartnerPrograms;