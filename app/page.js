import Hero from "./components/Hero";
import AboutBlueprint from "./components/AboutBlueprint";
import AboutStats from "./components/AboutStats";
import Collections from "./components/Collections";
import InvestmentCalculator from "./components/InvestmentCalculator";
import MarketMapSection from "./components/MarketMapSection";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutBlueprint />
      <AboutStats />
      <Collections />
      <InvestmentCalculator />
      <MarketMapSection />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
