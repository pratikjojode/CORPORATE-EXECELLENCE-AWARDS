import React from "react";

import "../Styles/Sponsors.css";

const Sponsors = () => {
  return (
    <>
      <section id="sponsors-intro" className="partner-intro-section">
        <div className="partner-section-container">
          <div className="partner-header">
            <h2 className="partner-section-title-main">
              Join Us as a Partner!
            </h2>
            <p className="partner-section-subtitle">
              The Corporate Excellence Awards offer unparalleled opportunities
              to align your brand with leadership and innovation. Discover how
              partnering with us can elevate your visibility and connect you
              with a prestigious network.
            </p>
          </div>

          <div
            className="partner-contact-section"
            style={{ marginBottom: "0" }}
          >
            <h3 className="partner-contact-title">
              Explore Partnership Opportunities
            </h3>
            <p className="partner-contact-description">
              Click below to view detailed sponsorship packages and
              collaboration options.
            </p>
            <a href="/Sponsors" className="partner-contact-btn">
              View Sponsorship Details
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
