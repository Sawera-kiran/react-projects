import FeaturedBlogs from "../components/featuredBlogs/FeaturedBlogs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import blog1 from "../assets/Blog/voicemail.PNG";
import blog2 from "../assets/Blog/license.PNG";
import blog3 from "../assets/Blog/blog3.PNG";
import blog4 from "../assets/Blog/blog4.PNG";
import blog5 from "../assets/Blog/blog5.PNG";
import blog6 from "../assets/Blog/blog6.PNG";

function Blog() {

      const phone3cxpageblogs = [
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
          title: "2026 Best SIP Trunk Providers In Canada For 3CX",
          desc: "Optimize your 3CX system with the right carrier. Explore the best Canadian",
          tag: "3CX",
        },
        {
          image: blog4,
    
          title: "RingCentral vs 8*8 vs 3CX: What UCaaS You Should Choose?",
          desc: "Compare RingCentral, 8x8, and 3CX to find the best fit. Discover why",
          tag: "3CX",
        },
        {
          image: blog5,
    
          title:
            "Reduce Missed Calls & Win More Customers with 3CX Queue Callback.",
          desc: "Eliminate hold music and reduce abandoned calls. Learn how 3CX Queue Callback",
          tag: "3CX",
        },
        {
          image: blog6,
          title: "Microsoft Teams vs 3CX Experience for Today's Modern Business",
          desc: "Struggling with high Teams calling costs? Compare Microsoft Teams vs 3CX to",
          tag: "3CX",
        },
      ];

  return (
    <>
      <Header />
      <FeaturedBlogs blogs={phone3cxpageblogs} />
      <Footer />
    </>
  );
}

export default Blog;
