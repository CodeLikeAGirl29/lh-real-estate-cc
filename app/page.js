import Hero from "./components/Hero";
import AboutBlueprint from "./components/AboutBlueprint";
import AboutStats from "./components/AboutStats";
import Collections from "./components/Collections";
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
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
