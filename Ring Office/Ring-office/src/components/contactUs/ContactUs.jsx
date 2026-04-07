import "./ContactUs.css";
import { FaPhoneAlt } from "react-icons/fa";
import bottomImage from "../../assets/contactpage.PNG";

function ContactUs() {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <div className="quote-left">
          <p className="quote-small-title">GET A QUOTE NOW</p>

          <h2>
            RingOffice is the ultimate solution to power your business
            communications
          </h2>

          <div className="quote-phone">
            <FaPhoneAlt />
            <span>+1 (647) 660-1111</span>
          </div>

          <img
            src={bottomImage}
            alt="communication illustration"
            className="quote-image"
          />
        </div>

        <div className="quote-right">
          <form>
            <div className="form-row">
            <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>

            <input type="text" placeholder="Company name" />

            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone number" />
            </div>

            <textarea placeholder="Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
