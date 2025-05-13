
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import HowItWorks from "./components/how-it-works-section";
import WhyChooseUs from "./components/why-choose-us";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import ChatWidget from "./components/chat-widget";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
      <ChatWidget />
    </main>
  );
}
