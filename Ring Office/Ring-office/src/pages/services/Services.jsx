import "./Services.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServicesGrid from "../../components/servicesgrid/ServicesGrid";
import ContactUs from "../../components/contactUs/ContactUs";
function Services() {
  return (
    <>
      <Header />
      <div className="services-intro">
        <p>
          RingOffice is a cloud solutions provider for businesses of all sizes.
          We offer voice services like Cloud Phone Systems and SIP Trunking; as
          well as cloud IT and network services. We focus on reliability and
          ease to use, making communication, collaboration and work easier for
          businesses. With over 20 years of experience, we know what it takes to
          provide quality cloud services that help businesses succeed.
        </p>
      </div>
      <ServicesGrid />

      <div className="services-banner">
        <div
          className="banner-left"
          style={{
            backgroundImage: `url(/src/assets/blueclouds.PNG)`,
          }}
        >
          <div className="banner-content">
            <h2>RingOffice</h2>
            <p>Smarter Cloud Solutions for Modern Hybrid Work Models</p>

            <a href="#" className="banner-link">
              Learn More
            </a>
          </div>
        </div>

        <div
          className="banner-right"
          style={{
            backgroundImage: `url(/src/assets/rocket.PNG)`,
          }}
        >
          <div className="banner-content">
            <p className="banner-title">
              One Stop Shop For Business Communication and Collaboration
            </p>

            <a href="#" className="banner-link">
              Speak with a Consultant
            </a>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}

export default Services;
