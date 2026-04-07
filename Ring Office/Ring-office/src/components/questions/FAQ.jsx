import { useState } from "react";
import "./FAQ.css";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

function FAQ({ faqs = [] }) {  

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq">

      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">

        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{item.question}</span>

              {activeIndex === index ? (
                <FaArrowDown className="faq-icon" />
              ) : (
                <FaArrowRight className="faq-icon" />
              )}

            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;