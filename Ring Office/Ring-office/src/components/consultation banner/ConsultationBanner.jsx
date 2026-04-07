import "./ConsultationBanner.css";

function ConsultationBanner({ text }) {   
  return (
    <section className="cta-banner">

      <div className="cta-container">

        <div className="cta-text">
          {text}
        </div>

        <button className="cta-btn">
          Schedule a Free Consultation
        </button>

      </div>

    </section>
  );
}

export default ConsultationBanner;