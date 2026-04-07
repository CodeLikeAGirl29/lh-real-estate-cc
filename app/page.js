import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Ensure this is the one with the interactive state!
import AboutBlueprint from "./components/AboutBlueprint";
import AboutStats from "./components/AboutStats";
import Collections from "./components/Collections";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* 1. Navigation & Hero (The Hook) */}
      <Hero />

      {/* 2. The Narrative (The "Why Lindsey" Blueprint) */}
      <AboutBlueprint />

      {/* 3. The Technical/Real Estate Profile (The Hard Stats) */}
      <AboutStats />

      {/* 4. Featured Projects (The Visual Proof) */}
      <Collections />

      {/* 5. Professional Log (The Career Journey) */}
      <Experience />
      <Contact />
      {/* 6. Footer (The Connection) */}
      <Footer />
    </main>
  );
}