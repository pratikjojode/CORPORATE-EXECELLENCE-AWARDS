import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Vision from "../components/Vision";
import PreviousEvents from "../components/PreviousEvents";
import Sponsors from "../components/Sponsors"; // Assuming you have a Sponsors component
import Footer from "../components/Footer"; // Assuming you have a Footer component

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Vision />
      <PreviousEvents />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default HomePage;
