import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async"; // import Helmet
import Header from "../Components/Header";

import Location from "../Components/Location";
import Nominees from "../Components/Nominees";
import Vision from "../Components/Vision";
import PreviousEvents from "../Components/PreviousEvents";
import Sponsors from "../Components/Sponsors";
import Footer from "../Components/Footer";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Corporate Excellence Awards 2025 | Honoring Business Excellence
        </title>
        <meta
          name="description"
          content="Join the Corporate Excellence Awards 2025 to celebrate the best in business innovation, leadership, and community impact."
        />
        <link rel="canonical" href="https://corporateexcellenceawards.com/" />
      </Helmet>

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
    </>
  );
};

export default HomePage;
