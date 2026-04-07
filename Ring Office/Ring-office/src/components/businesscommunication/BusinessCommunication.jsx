import "./BusinessCommunication.css";
import businesscommunicationimg from "../../assets/businessCommunicationimg.PNG";

function BusinessCommunication() {
  return (
    <section className="business">
      <div className="business-container">

        <div className="business-left">
          <h2>Your Trusted Partner for Business Communication</h2>

          <p className="business-desc">
            RingOffice is a leading provider of cloud-based communication
            solutions, empowering businesses to connect, collaborate, and grow.
            Our cutting-edge technology and expert support enable you to:
          </p>

          <ul className="business-list">
            <li><strong>Boost Productivity:</strong> Streamline workflows and improve efficiency.</li>
            <li><strong>Enhance Collaboration:</strong> Connect teams seamlessly, regardless of location.</li>
            <li><strong>Reduce Costs:</strong> Save on traditional phone systems and IT expenses.</li>
            <li><strong>Improve Customer Experience:</strong> Deliver exceptional customer service.</li>
          </ul>

          <button className="consult-btn">
            Speak with a Consultant Today
          </button>
        </div>

        <div className="business-right">
          <img src={businesscommunicationimg} alt="communication graphic" />
        </div>

      </div>
    </section>
  );
}

export default BusinessCommunication;