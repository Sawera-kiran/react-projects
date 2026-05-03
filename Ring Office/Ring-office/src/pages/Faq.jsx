import FAQ from "../components/questions/FAQ";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
function Faq() {
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

  return (
    <>
      <Header />

      <FAQ faqs={phone3cxfaqs} />   
      <Footer />
    </>
  );
}

export default Faq;
