import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import Location from "../Components/Location";
import Nominees from "../Components/Nominees";
import Vision from "../Components/Vision";
import PreviousEvents from "../Components/PreviousEvents";
import Sponsors from "../Components/Sponsors";
import Footer from "../Components/Footer";

import ModiPage from "../Components/ModiPage";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setShowLocationPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowLocationPopup(false);
  };

  return (
    <>
      <Header />
      <HeroSection />
      <Nominees />
      <ModiPage />
      <Vision />
      <PreviousEvents />
      <Sponsors />
      <Footer />

      {showLocationPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <Location />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
