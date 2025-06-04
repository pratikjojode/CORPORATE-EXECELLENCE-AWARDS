import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Nominees from "../Components/Nominees";
import Vision from "../Components/Vision";
import PreviousEvents from "../Components/PreviousEvents";
import Sponsors from "../Components/Sponsors";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Nominees />
      <Vision />
      <PreviousEvents />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default HomePage;
