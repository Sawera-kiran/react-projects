import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/heroSection/HeroSection";
import BusinessCommunication from "../../components/businesscommunication/BusinessCommunication";
import WhyChooseUS from "../../components/whychooseus/WhyChooseUs";
import BusinessSolutions from "../../components/businessSolution/BusinessSolution";
import CloudSolutions from "../../components/cloudsolutions/CloudSolutions";
import Benefits from "../../components/benefits/Benefits";
import Industries from "../../components/industries/Industries";
import PartnerPrograms from "../../components/partnerPrograms/PartnerPrograms";
import Reviews from "../../components/reviews/Reviews";
import FeaturedBlogs from "../../components/featuredBlogs/FeaturedBlogs";
import blog1 from "../../assets/Blog/voicemail.png";
import blog2 from "../../assets/Blog/license.png";
import blog3 from "../../assets/Blog/callhandling.png";
import FAQ from "../../components/questions/FAQ";
import ContactUs from "../../components/contactUs/ContactUs";

function Home() {
  const homefaqs = [
    {
      question:
        "Why should I upgrade my office phone system to a cloud-based VoIP solution?",
      answer:
        "Cloud communication delivers scalability, flexibility, and mobility traditional lines can't match. It unifies voice, video, and chat for your office and remote teams with predictable monthly pricing. RingOffice Cloud Systems keep your business connected anywhere.",
    },
    {
      question:
        "What are the advantages of a cloud communication solution over traditional phone lines?",
      answer:
        "Cloud communication delivers scalability, flexibility, and mobility traditional lines can't match. It unifies voice, video, and chat for your office and remote teams with predictable monthly pricing. RingOffice Cloud Systems keep your business connected anywhere.",
    },
    {
      question:
        "How reliable is a Canadian business phone service from RingOffice?",
      answer:
        "Very reliable , RingOffice runs on enterprise-grade Canadian infrastructure for 99.99 % uptime and crystal-clear calls. Our 3CX-certified support team monitors your system 24/7. Dependable local service from RingOffice keeps you online and connected.",
    },
    {
      question:
        "How does RingOffice support hybrid and remote work environments?",
      answer:
        "RingOffice Cloud Phone Systems empower hybrid teams with mobile apps, browser calling, and integrated chat, ensuring seamless communication from any location",
    },
    {
      question:
        "What is the best business phone system for a small business in Canada?",
      answer:
        "A cloud-based VoIP phone system like 3CX is ideal for Canadian small businesses. It delivers HD call quality, remote-work flexibility, and secure Canadian data-hosting with local support.",
    },
  ];

  //blogs section

  const homepageblogs = [
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
      title:
        "Losing VIP Clients to Poor Call Handling? How 3CX Caller ID Routing Puts the Right Calls First.",
      desc: "Key Takeaways Stop Losing VIP Calls 3CX Caller ID Puts Them",
      tag: "3CX",
    },
  ];
  return (
    <>
      <Header />
      <HeroSection />
      <BusinessCommunication />
      <WhyChooseUS />
      <BusinessSolutions />
      <CloudSolutions />
      <Benefits />
      <Industries />
      <PartnerPrograms />
      <Reviews />
      <FeaturedBlogs blogs={homepageblogs} />

      <FAQ faqs={homefaqs} />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
