import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBlueprint from "./components/AboutBlueprint";
import Collections from "./components/Collections";
import InvestmentCalculator from "./components/InvestmentCalculator";
import CMAEstimator from "./components/CMAEstimator";
import MarketMapSection from "./components/MarketMapSection";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutBlueprint />
      <Collections />
      <InvestmentCalculator />
      <CMAEstimator />
      <MarketMapSection />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
