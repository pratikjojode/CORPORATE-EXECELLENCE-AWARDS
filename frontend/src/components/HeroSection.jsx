import React, { useEffect, useState } from "react";
import "../Styles/HeroSection.css";

import jobizaaLogo from "../assets/jobizza.jpg";
import atbLogo from "../assets/anytime.jpg";

import bg1 from "../assets/hero-bg2.jpg";
import bg2 from "../assets/hero-bgg3.jpg";
import bg3 from "../assets/IMG-20250412-WA0003.jpg";
import bg4 from "../assets/hero-bg3.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [bg1, bg2, bg3, bg4];

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

  // Auto-slide effect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoSlide);
  }, [backgroundImages.length]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Carousel */}
      <div className="carousel-container">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Carousel Overlay for better text readability */}
        <div className="carousel-overlay" />

        {/* Navigation Arrows */}
        <button className="carousel-nav prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="carousel-nav next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Floating decorative emojis */}
      <div className="floating-element">🏆</div>
      <div className="floating-element">⭐</div>
      <div className="floating-element">🎖</div>

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
