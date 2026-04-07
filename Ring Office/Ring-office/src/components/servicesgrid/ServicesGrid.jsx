import "./ServicesGrid.css";

import cloudPhone from "../../assets/servicesimgs/cloudphone.PNG";
import phone3cx from "../../assets/servicesimgs/phone3cx.PNG";
import sip from "../../assets/servicesimgs/siptruncking.PNG";
import managedIT from "../../assets/servicesimgs/itservices.PNG";
import microsoft from "../../assets/servicesimgs/microsoftsolutions.PNG";
import aws from "../../assets/servicesimgs/aws.PNG";

function ServicesGrid() {

  const services = [
    {
      img: cloudPhone,
      title: "Cloud Phone Systems",
      desc: "Easy-to-use, feature rich, reliable and affordable cloud phone systems tailored for the hybrid work needs of today's small and medium sized businesses."
    },
    {
      img: phone3cx,
      title: "3CX Phone Systems",
      desc: "RingOffice designs, deploys and managed 3CX Phone System solutions that elevate your organization's communication and collaboration capabilities."
    },
    {
      img: sip,
      title: "SIP Trunking",
      desc: "RingOffice SIP Trunks are a great way to break free from the costly and frustrating limitations of traditional telco landlines."
    },
    {
      img: managedIT,
      title: "Managed IT Services",
      desc: "RingOffice provides a comprehensive array of IT management, support and cloud services to serve the needs of businesses of all sizes."
    },
    {
      img: microsoft,
      title: "Microsoft Solutions",
      desc: "RingOffice offers a suite of managed Microsoft 365 and Azure cloud solutions that help you get the most out of your Microsoft investment."
    },
    {
      img: aws,
      title: "AWS Solutions",
      desc: "RingOffice offers a suite of managed AWS cloud services that help you get the most out of your AWS investment."
    }
  ];

  return (
    <section className="services-grid">

      <div className="services-container">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <img src={service.img} alt={service.title} />

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ServicesGrid;