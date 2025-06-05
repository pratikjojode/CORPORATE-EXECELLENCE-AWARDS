import React, { useEffect } from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Nominees from "../Components/Nominees";
import Vision from "../Components/Vision";
import PreviousEvents from "../Components/PreviousEvents";
import Sponsors from "../Components/Sponsors";
import Footer from "../Components/Footer";
import Location from "../Components/Location";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <Location />
      <Nominees />
      <Vision />
      <PreviousEvents />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default HomePage;
