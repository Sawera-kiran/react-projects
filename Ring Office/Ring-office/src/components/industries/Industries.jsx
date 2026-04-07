import "./Industries.css";
import industryImg from "../../assets/industries/industriesimg.png";

function Industries() {
  return (
    <section className="industries">

      <h2>Industries</h2>

      <div className="industries-container">


        <div className="industries-col">

          <div className="industry-item">
            <h3>Healthcare</h3>
            <p>HIPAA-compliant solutions for secure communication.</p>
          </div>

          <div className="industry-item">
            <h3>Hospitality</h3>
            <p>Enhancing guest experiences with reliable communication solutions.</p>
          </div>

          <div className="industry-item">
            <h3>Finance</h3>
            <p>Secure and compliant communication solutions for financial institutions.</p>
          </div>

        </div>



        <div className="industries-image">
          <img src={industryImg} alt="communication devices" />
        </div>



        <div className="industries-col">

          <div className="industry-item">
            <h3>Manufacturing & Logistics</h3>
            <p>Optimize operations with reliable communication solutions for seamless coordination and efficiency.</p>
          </div>

          <div className="industry-item">
            <h3>Retail</h3>
            <p>Enhance customer service and inventory management.</p>
          </div>

          <div className="industry-item">
            <h3>Contact Centers</h3>
            <p>Empower remote teams with seamless collaboration tools.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Industries;