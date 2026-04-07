import "./CloudSolutions.css";

import cloudPhone from "../../assets/cloudSolutionsimgs/cloudPhone.PNG";
import phone3cx from "../../assets/cloudSolutionsimgs/3cx.PNG";
import sip from "../../assets/cloudSolutionsimgs/sip.PNG";
import managedIT from "../../assets/cloudSolutionsimgs/itServices.PNG";
import microsoft from "../../assets/cloudSolutionsimgs/microsoft.PNG";
import aws from "../../assets/cloudSolutionsimgs/aws.PNG";

function CloudSolutions() {

  const solutions = [
    {
      img: cloudPhone,
      title: "Cloud Phone Systems",
      desc: "Modernize your phone system with advanced features."
    },
    {
      img: phone3cx,
      title: "3CX Phone Systems",
      desc: "Easy deployment, advanced features and cost-effective solution."
    },
    {
      img: sip,
      title: "SIP Trunking",
      desc: "Reliable SIP trunks for crystal-clear calls."
    },
    {
      img: managedIT,
      title: "Managed IT Services",
      desc: "Expert IT support to keep your business running smoothly."
    },
    {
      img: microsoft,
      title: "Microsoft Solutions",
      desc: "Leverage the power of Microsoft 365 and Azure."
    },
    {
      img: aws,
      title: "AWS Solutions",
      desc: "Harness the cloud with Amazon Web Services."
    }
  ];

  return (
    <section className="cloud-solutions">

      <h2>Cloud IT & Network Solutions</h2>
      <p className="cloudSolutionSubtitle">Our Solutions, Your Success</p>

      <div className="solutions-grid">

        {solutions.map((item, index) => (
          <div className="solution-card" key={index}>

            <img src={item.img} alt={item.title} />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CloudSolutions;