import About from "@/components/About";
import { ContactModalProvider } from "@/components/ContactModal";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <ContactModalProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Industries />
        <CtaBand />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </ContactModalProvider>
  );
}
