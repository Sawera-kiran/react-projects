import "./Services3cxPhoneSystems.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Phone3cxSystem from "../../components/phonesystem3cx/Phone3cxSystem";
import heroImg from "../../assets/servicespage/phonemanage3cx.PNG";
import logo from "../../assets/3cxLogo.PNG";
import card1 from "../../assets/servicespage/card1.png";

import {
  FaShieldAlt,
  FaExpand,
  FaMousePointer,
  FaCloudUploadAlt,
  FaUnlockAlt,
  FaGlobe,
} from "react-icons/fa";
import {
  FaEye,
  FaDatabase,
  FaShareAlt,
  FaPhoneAlt,
  FaFlag,
  FaUserGraduate,
} from "react-icons/fa";
import FAQ from "../../components/questions/FAQ";
import ContactUs from "../../components/contactUs/ContactUs";
import ConsultationBanner from "../../components/consultation banner/ConsultationBanner";
import FeaturedBlogs from "../../components/featuredBlogs/FeaturedBlogs";
import blog1 from "../../assets/Blog/voicemail.png";
import blog2 from "../../assets/Blog/license.png";
import blog3 from "../../assets/Blog/blog3.png";
import blog4 from "../../assets/Blog/blog4.png";
import blog5 from "../../assets/Blog/blog5.png";
import blog6 from "../../assets/Blog/blog6.png";

function Services3cxPhoneSystems() {
  const phone3cxfaqs = [
    {
      question:
        "Why choose RingOffice for 3CX installation and deployment in Canada?",
      answer:
        "RingOffice delivers expert deployment with secure Canadian hosting and certified support.",
    },
    {
      question: "What is included in your managed 3CX phone system service?",
      answer:
        "Our Managed 3CX plan covers licenses, secure cloud hosting, daily backups, 24/7 monitoring, and disaster recovery — a complete hassle-free solution with expert support.",
    },
    {
      question: "What makes your 3CX support different from other providers?",
      answer:
        "Every RingOffice technician is an advanced 3CX-certified engineer offering proactive optimization and fast resolution not just generic helpdesk support.",
    },
    {
      question:
        "Can I buy a 3CX system and SIP trunks directly from RingOffice?",
      answer:
        "Yes — RingOffice provides both 3CX systems and 3CX-certified SIP trunks, ensuring full compatibility, simplified billing, and one trusted support source.",
    },
  ];

  //related blogs section

  const phone3cxpageblogs = [
    {
      image: blog1,
      title:
        "Automate Help Desk Tasks with 3CX Voicemail Transcription A RingOffice 3CX Solution",
      desc: "Speed up ticket resolution with AI. Learn how automatic voicemail-to-text transcription helps",
      tag: "3CX",
    },
    {
      image: blog2,
      title:
        "From 4SC to 8SC PRO: Navigate 2026 3CX License Updates with RingOffice",
      desc: "Stay informed on the 2026 3CX licensing changes. Learn how these updates",
      tag: "3CX",
    },
    {
      image: blog3,
      title: "2026 Best SIP Trunk Providers In Canada For 3CX",
      desc: "Optimize your 3CX system with the right carrier. Explore the best Canadian",
      tag: "3CX",
    },
    {
      image: blog4,

      title: "RingCentral vs 8*8 vs 3CX: What UCaaS You Should Choose?",
      desc: "Compare RingCentral, 8x8, and 3CX to find the best fit. Discover why",
      tag: "3CX",
    },
    {
      image: blog5,

      title:
        "Reduce Missed Calls & Win More Customers with 3CX Queue Callback.",
      desc: "Eliminate hold music and reduce abandoned calls. Learn how 3CX Queue Callback",
      tag: "3CX",
    },
    {
      image: blog6,
      title: "Microsoft Teams vs 3CX Experience for Today's Modern Business",
      desc: "Struggling with high Teams calling costs? Compare Microsoft Teams vs 3CX to",
      tag: "3CX",
    },
  ];

  return (
    <>
      <Header />
      <Phone3cxSystem
        tag="RINGOFFICE"
        title="Managed 3CX Phone System for Businesses Across the US and Canada"
        description="You want the flexibility of 3CX. You also want a stable rollout,clean call routing, and a support path when something breaks."
        image={heroImg}
        primaryBtnText="Get Started Today"
        secondaryBtnText="Order 3CX License"
      />
      <section className="phone3cx-section">
        <div className="phone3cx-container">
          <div className="phone3cx-logo">
            <img src={logo} alt="3CX Titanium Partner" />
          </div>

          <h2 className="phone3cx-title">RingOffice 3CX Phone Systems</h2>

          <p className="phone3cx-text">
            As a <strong>3CX Titanium Partner</strong>, RingOffice excels in
            managing
            <strong> 3CX Phone Systems</strong> since 2007, holding Advanced
            Certifications in <strong>SIP Trunking</strong> and{" "}
            <strong>Managed Cloud services</strong>.
          </p>
        </div>
      </section>

      {/* Feature section */}

      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Unmatched Reliability</h3>
            <p>
              RingOffice is your trusted partner for reliable business
              communication and secure cloud phone systems. Our 3CX solutions
              deliver dependable collaboration, networking, and IT performance
              for businesses of all sizes.
            </p>
          </div>

          <div className="feature-card">
            <FaExpand className="feature-icon" />
            <h3>Scalable Solutions</h3>
            <p>
              Grow without limits with our scalable 3CX phone system solutions.
              As your company expands, our VoIP tech adapts, allowing you to
              increase users, locations, and features easily.
            </p>
          </div>

          <div className="feature-card">
            <FaMousePointer className="feature-icon" />
            <h3>Effortless Control</h3>
            <p>
              Our phone systems feature an intuitive web-based interface that
              requires no advanced technical skills, making management simple
              for busy teams.
            </p>
          </div>

          <div className="feature-card">
            <FaCloudUploadAlt className="feature-icon" />
            <h3>Total Flexibility</h3>
            <p>
              Install and operate your 3CX phone system on virtually any
              platform, device, or cloud environment with flexible deployment
              options.
            </p>
          </div>

          <div className="feature-card">
            <FaUnlockAlt className="feature-icon" />
            <h3>Open Standards</h3>
            <p>
              Avoid vendor lock-in with open standards-based 3CX phone systems
              compatible with a wide range of SIP hardware.
            </p>
          </div>

          <div className="feature-card">
            <FaGlobe className="feature-icon" />
            <h3>Top Tier Data Centres</h3>
            <p>
              RingOffice hosts 3CX systems in premium global data centres,
              delivering enterprise-grade security and reliability 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* partnercard section  */}

      <section className="partner-card-section">
        <div className="partner-card">
          <div className="partner-card-content">
            <h2>
              Enhance Business Growth Through
              <br />
              RingOffice's Channel Partner Program
            </h2>

            <button className="partner-btn">Discover more</button>
          </div>

          <div className="partner-card-image">
            <img src={card1} alt="Partner Program" />
          </div>
        </div>
      </section>

      {/* cloud feature section */}

      <section className="cloud-features-section">
        <div className="cloud-features-container">
          <div className="cloud-card">
            <div className="cloud-icon-wrapper">
              <FaEye className="cloud-icon" />
            </div>
            <div className="cloud-content">
              <h3>24/7 Monitoring And Management</h3>
              <p>
                RingOffice's Managed Cloud 3CX Phone Systems include
                round-the-clock monitoring of server health, performance
                metrics, and network stability. Our proactive management ensures
                early detection of any technical issues that might arise and
                impact your business communications.
              </p>
            </div>
          </div>

          <div className="cloud-card">
            <div className="cloud-icon-wrapper">
              <FaDatabase className="cloud-icon" />
            </div>
            <div className="cloud-content">
              <h3>Daily Backups And Disaster Recovery</h3>
              <p>
                RingOffice's Managed Phone Systems include daily automated
                backups to protect your business in the event of an outage. Our
                disaster recovery solutions safeguard critical communications,
                ensuring minimal downtime and rapid restorations. This proactive
                approach helps prevent data loss and gives you peace of mind.
              </p>
            </div>
          </div>

          <div className="cloud-card">
            <div className="cloud-icon-wrapper">
              <FaShareAlt className="cloud-icon" />
            </div>
            <div className="cloud-content">
              <h3>Seamless Integrations & Mobility</h3>
              <p>
                RingOffice's Managed Cloud Phone Systems integrate with
                Microsoft 365, enabling Single Sign-On (SSO) and direct
                Microsoft Teams functionality as an extension client. Our
                solutions also connect with popular CRMs. business applications,
                and include free integrated mobile, desktop, and web apps
                keeping your teams connected anywhere.
              </p>
            </div>
          </div>

          <div className="cloud-card">
            <div className="cloud-icon-wrapper">
              <FaPhoneAlt className="cloud-icon" />
            </div>
            <div className="cloud-content">
              <h3>Business Grade SIP Trunks</h3>
              <p>
                RingOffice provides 3CX Certified SIP trunks for reliable,
                high-quality voice communication. We partner with over 24
                international carriers to deliver extensive SIP trunk coverage
                across North America ensuring crystal-clear calls, seamless
                connectivity, and dependable service for your business.
              </p>
            </div>
          </div>

          <div className="cloud-card">
            <div className="cloud-icon-wrapper">
              <FaFlag className="cloud-icon" />
            </div>
            <div className="cloud-content">
              <h3>Unlimited 3CX Apps And Licensing</h3>
              <p>
                Enjoy unlimited access to 3CX apps for mobile, desktop, and web
                keeping your team connected on any device. Our Managed Cloud 3CX
                Phone Systems also come with flexible license support, allowing
                your business to scale users and features without restrictions
                or hidden costs.
              </p>
            </div>
          </div>

          <div className="cloud-card">
            <div className="cloud-icon-wrapper">
              <FaUserGraduate className="cloud-icon" />
            </div>
            <div className="cloud-content">
              <h3>Onboarding Training</h3>
              <p>
                Get your team up to speed quickly with our 3CX onboarding and
                training services. We provide step-by-step setup guidance, user
                training, and best practice tips ensuring your staff can
                maximize every feature of their Managed Cloud 3CX Phone System
                from day one.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={phone3cxfaqs} />
      <ContactUs />
      <ConsultationBanner text="Don't let outdated communication systems hold your company back. Explore how RingOffice can optimize your communication processes, increase productivity, and reduce costs." />
      <FeaturedBlogs blogs={phone3cxpageblogs} />
      <Footer />
    </>
  );
}

export default Services3cxPhoneSystems;
