import type { NextPage } from "next";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LandingSection from "../components/LandingSection";
import LandingSectionTwo from "../components/LandingSectionTwo";

const Home: NextPage = () => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <Hero />
      </div>
      <LandingSection />
      <div className="py-16" />
      <LandingSectionTwo />
      <Footer />
    </div>
  );
};

export default Home;
