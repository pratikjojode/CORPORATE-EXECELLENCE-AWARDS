import React from "react";
import "../Styles/Marquee.css";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        🏆 <strong>Corporate Excellence Awards</strong> &nbsp; | &nbsp; 📍{" "}
        <strong>Venue:</strong> Sunny World, Pune &nbsp; | &nbsp; 📅{" "}
        <strong>Date:</strong> 28th June 2025
      </div>
    </div>
  );
};

export default Marquee;
