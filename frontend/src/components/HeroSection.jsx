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

    // Add ripple animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-section">
          <h1 className="logo-title">CORPORATE EXCELLENCE AWARDS</h1>
          <p className="logo-subtitle">Celebrating the Achievements of Corporate Professionals</p>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="register-btn" >Register Now</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        {/* Floating decorative elements */}
        <div className="floating-element">🏆</div>
        <div className="floating-element">⭐</div>
        <div className="floating-element">🎖️</div>
        
        <div className="hero-content">
          <h1>THE CORPORATE EXCELLENCE AWARDS</h1>
          <p className="ethos">OUR GLOBAL ETHOS: 'ONE EARTH, ONE FAMILY'. EMBRACE THE RESPONSIBILITY</p>
          <h2>DISCOVERING EXCELLENCE IN SUCCESSFUL BUSINESS</h2>
          <div className="event-details">
            <p>7th JUNE, 2024 | Friday</p>
            <p>6 PM Onward (9 PM Dinner)</p>
          </div>
          <div className="cta-buttons">
            <button className="primary-btn"><a href='https://docs.google.com/forms/d/e/1FAIpQLSfGfmANTWGKhpEXYI7yNkt1jboJjGZF_NZmLhPAewJ7jXksGw/viewform'>Nominate Now</a></button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
