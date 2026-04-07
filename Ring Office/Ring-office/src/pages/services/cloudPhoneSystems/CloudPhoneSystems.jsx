import "./CloudPhoneSystems.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Phone3cxSystem from "../../../components/phonesystem3cx/Phone3cxSystem";
import cloudphonesystems from "../../../assets/servicespage/cloudphonesystems.PNG";
import FeatureBlocks from "../../../components/feature blocks/FeatureBlocks";
import img1 from "../../../assets/servicespage/cloudPhoneFeatures/feature1.PNG";
import img2 from "../../../assets/servicespage/cloudPhoneFeatures/feature2.PNG";
import img3 from "../../../assets/servicespage/cloudPhoneFeatures/feature3.PNG";
import img4 from "../../../assets/servicespage/cloudPhoneFeatures/feature4.PNG";
import img5 from "../../../assets/servicespage/cloudPhoneFeatures/feature5.PNG";
import CloudPhoneBenefits from "../../../components/cloudphonebenefits/CloudPhoneBenefits";
import cloudbenefitimg from "../../../assets/servicespage/cloudbenefitimg.PNG";

function CloudPhoneSystems() {
  const featureData = [
    {
      image: img1,
      title: "Cloud-Based Business Phone System for Remote Teams",
      desc: "Cloud-based business phone system, SIP trunk, remote team communication, global calling solutions, unified communications platform.",
      reverse: false,
      bg: "light",
    },

    {
      image: img2,
      title: "HD Video Conferencing Built for Small Businesses",
      desc: "Boost productivity with RingOffice's integrated HD video meetings. Host up to 100 participants with screen sharing, breakout rooms, and recording no subscriptions required.",
      reverse: true,
      bg: "white",
    },

    {
      image: img3,
      title: "Professional Business SMS/MMS & Team Messaging",
      desc: "Send appointment reminders, promotional offers, or files directly from your business phone system. Includes Facebook messenger, WhatsApp, Website chat, CRM Sync for faster response times.",
      reverse: false,
      bg: "light",
    },

    {
      image: img4,
      title: "Automate Workflows with 100+ Business App Integrations",
      desc: "Connect RingOffice's cloud phone system to your favorite tools Zapier, Salesforce, Microsoft 365, and more. Automate call logging, trigger SMS campaigns, or sync customer data in real time.",
      reverse: true,
      bg: "white",
    },

    {
      image: img5,
      title: "Discover the Advantages",
      desc: "With a Cloud Phone System or Hosted PBX from RingOffice, you can stay connected with clients and colleagues no matter where they are located.",
      reverse: false,
      bg: "light",
    },
  ];

  return (
    <>
      <Phone3cxSystem
        tag="RINGOFFICE"
        title="Cloud Phone Systems"
        description="RingOffice empowers you to connect with customers, collaborate seamlessly, and work from anywhere."
        image={cloudphonesystems}
        primaryBtnText="order Now"
        secondaryBtnText="Explore Benefits"
      />
      <FeatureBlocks blocks={featureData} />
      <CloudPhoneBenefits />

      <section className="devices-section">
        <div className="devices-container">
          <div className="device-card">
            <img src={img1} alt="Smartphone & Tablet" />

            <h3>Smartphone & Tablet</h3>

            <p>
              Take calls, send SMS/MMS, and manage voicemail from your business
              number using RingOffice's VoIP mobile app.
            </p>
          </div>

          <div className="device-card">
            <img src={img2} alt="Computer or Laptop" />

            <h3>Computer or Laptop</h3>

            <p>
              Make crystal-clear calls directly from your desktop with our
              browser-based softphone.
            </p>
          </div>

          <div className="device-card">
            <img src={img3} alt="Desk Phone" />

            <h3>Desk Phone</h3>

            <p>
              Set up a professional office phone system in minutes. Choose from
              IP desk phones or wireless headsets.
            </p>
          </div>
        </div>
      </section>
      <Header />
      <Footer />
    </>
  );
}
export default CloudPhoneSystems;
