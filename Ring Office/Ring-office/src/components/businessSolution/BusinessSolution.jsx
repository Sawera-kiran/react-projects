import { useState } from "react";
import "./BusinessSolution.css";

import phoneImg from "../../assets/businesssolution/phoneimg.PNG";
import videoImg from "../../assets/businesssolution/videoimg.PNG";
import messageImg from "../../assets/businesssolution/photoimg.PNG";
import integrationImg from "../../assets/businesssolution/integrationimg.PNG";

function BusinessSolution() {
const [activeTab, setActiveTab] = useState("video");

  const data = {
    phone: {
      text: "Stay connected with crystal-clear voice calls on any device, anytime, anywhere, no hidden fees, just seamless communication.",
      image: phoneImg
    },
    video: {
      text: "Host HD video meetings with ease, bringing your team and clients together with one-click access from any device.",
      image: videoImg
    },
    messaging: {
      text: "Instantly collaborate with your team using real-time messaging, file sharing, and group chats all in one place.",
      image: messageImg
    },
    integrations: {
      text: "Boost efficiency by integrating with your favorite business tools, streamlining workflows, and enhancing productivity. ",
      image: integrationImg
    }
  };

  const tabs = ["phone", "video", "messaging", "integrations"];

  return (
    <section className="solutions">

      <h2>Business Communication Solutions</h2>

      <p className="subtitle">
        Upgrade your business communications with the ultimate all-in-one office phone systems
      </p>

      {/* Tabs */}

      <div className="tabs">

        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onMouseEnter={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}

      </div>

      {/* Content */}

      <div className="solution-content">

        <div className="text">
          {data[activeTab].text}
        </div>

        <div className="image">
          <img src={data[activeTab].image} alt="solution" />
        </div>

      </div>

    </section>
  );
}

export default BusinessSolution;

