import React, { useEffect } from "react";
import "../Styles/HeroSection.css";

// ✅ Import your logos
import jobizaaLogo from "../assets/jobizza.jpg";
import atbLogo from "../assets/anytime.jpg";

const HeroSection = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

    const handleButtonClick = (e) => {
      const button = e.currentTarget;
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255, 255, 255, 0.6)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s linear";
      ripple.style.pointerEvents = "none";

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Floating decorative emojis */}
      <div className="floating-element">🏆</div>
      <div className="floating-element">⭐</div>
      <div className="floating-element">🎖️</div>

      <div className="hero-content">
        <p>Presented By</p>

        {/* ✅ Sponsor Logos */}
        <div className="sponsor-logos">
          <img src={jobizaaLogo} alt="Jobizaa Logo" className="sponsor-logo" />
          <img
            src={atbLogo}
            alt="Any Time Barter Logo"
            className="sponsor-logo"
          />
        </div>

        <h1>THE CORPORATE EXCELLENCE AWARDS</h1>
        <p className="ethos">
          OUR GLOBAL ETHOS: 'ONE EARTH, ONE FAMILY'. EMBRACE THE RESPONSIBILITY
        </p>
        <h2>DISCOVERING EXCELLENCE IN SUCCESSFUL BUSINESS</h2>

        <div className="event-details">
          <p>28th JUNE, 2024 | Friday</p>
          <p>6 PM Onward (9 PM Dinner)</p>
        </div>

        <div className="cta-buttons">
          <button className="primary-btn">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfGfmANTWGKhpEXYI7yNkt1jboJjGZF_NZmLhPAewJ7jXksGw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nominate Now
            </a>
          </button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
