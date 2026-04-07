import "./Benefits.css";
import { FaHeadset } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

function Benefits() {
  const benefits = [
    {
      icon: <FaHeadset />,
      title: "3CX Certified Support",
      desc: "Quick solutions from our local team."
    },
    {
      icon: <FaDollarSign />,
      title: "Flexible Pricing",
      desc: "Competitive per user and unlimited user pricing"
    },
    {
      icon: <FaAward />,
      title: "Certified 3CX Partner",
      desc: "Expert deployment and support"
    },
    {
      icon: <FaThumbsUp />,
      title: "Proven Track Record",
      desc: "Trusted by hundreds of businesses."
    }
  ];

  return (
    <section className="benefits">

      <h2>Benefits</h2>

      <div className="benefits-grid">

        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>

            <div className="benefit-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Benefits;