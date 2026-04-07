// import "./Phone3cxSystem.css";
// import heroImg from "../../assets/servicespage/phonemanage3cx.PNG"; 

// function Phone3cxSystem() {
//   return (
//     <section className="cxsection">

//       <div className="cx-container">

//         <div className="cx-content">

//           <p className="hero-tag">RINGOFFICE</p>

//           <h1>
//             Managed 3CX Phone System for Businesses
//             Across the US and Canada
//           </h1>

//           <p className="hero-desc">
//             You want the flexibility of 3CX. You also want a stable rollout,
//             clean call routing, and a support path when something breaks.
//           </p>

//           <div className="cx-buttons">
//             <button className="btn-primary">Get Started Today</button>
//             <button className="btn-secondary">Order 3CX License</button>
//           </div>

//         </div>

//         <div className="cx-image">
//           <img src={heroImg} alt="3cx presentation" />
//         </div>

//       </div>

//     </section>
//   );
// }

// export default Phone3cxSystem;

import "./Phone3cxSystem.css";

function Phone3cxSystem({
  tag = "RINGOFFICE",
  title,
  description,
  image,
  primaryBtnText,
  secondaryBtnText,
  onPrimaryClick,
  onSecondaryClick
}) {
  return (
    <section className="cxsection">

      <div className="cx-container">

        <div className="cx-content">

          <p className="hero-tag">{tag}</p>

          <h1>{title}</h1>

          <p className="hero-desc">{description}</p>

          <div className="cx-buttons">

            {primaryBtnText && (
              <button className="btn-primary" onClick={onPrimaryClick}>
                {primaryBtnText}
              </button>
            )}

            {secondaryBtnText && (
              <button className="btn-secondary" onClick={onSecondaryClick}>
                {secondaryBtnText}
              </button>
            )}

          </div>

        </div>

        <div className="cx-image">
          <img src={image} alt="hero" />
        </div>

      </div>

    </section>
  );
}

export default Phone3cxSystem;