import { useState } from "react";
import "./Reviews.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Reviews() {

  const testimonials = [
    {
      title: "Support is super helpful",
      text: "Our small business has been with Ring for over 2 years. Their phone systems made our lives so much easier! We have a brick and mortar business and with the Ring Office set up we are able to use our phone systems without being tied to the office. Their support team is super helpful as well.",
      name: "Rhonda V."
    },
        {
      title: "Thank you Ring Office!",
      text: "Can't say enough positive things about Ring Office. Our office switched from big blue to Ring Office's cloud service about a year ago and while there were issues during setup, (we were setting up remotely) the helpful and friendly staff quickly diagnosed and fixed our issues.",
      name: "Ron R."
    },
    {
      title: "Excellent Service",
      text: "I had a great experience with the RingOffice team. They helped us switch to a 3CX system smoothly. They were quick to respond, tailored the system to our needs, and were professional and friendly throughout. Highly recommended!",
      name: "Younan Y."
    },
    {
      title: "Impressed",
      text: "Very impressed with their service. I’ve been using RingOffice for over 3 years and they’ve been to handle all my business growth in the past year with ease.",
      name: "Reed L."
    }
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length]
  ];

  return (
    <>
    <section className="testimonials">

      <h2>See What our Customers say About us</h2>

      <div className="testimonial-container">

        <button className="arrow left" onClick={prev}>
          <FaChevronLeft />
        </button>

        {visible.map((item, i) => (
          <div className="testimonial-card" key={i}>

            <h3>{item.title}</h3>

            <p className="quote">
              “{item.text}”
            </p>

            <p className="name">{item.name}</p>

          </div>
        ))}

        <button className="arrow right" onClick={next}>
          <FaChevronRight />
        </button>

      </div>

    </section>
    </>
  );
}

export default Reviews;