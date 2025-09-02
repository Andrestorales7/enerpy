import Contact from "@/components/Contact";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
