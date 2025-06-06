import React from "react";

import "../Styles/Sponsors.css";

const Sponsors = () => {
  return (
    <>
      <section id="sponsors-intro" className="sponsors-section">
        <div className="section-container">
          <div className="sponsors-header">
            <h2 className="section-title">Join Us as a Partner!</h2>
            <p className="section-subtitle">
              The Corporate Excellence Awards offer unparalleled opportunities
              to align your brand with leadership and innovation. Discover how
              partnering with us can elevate your visibility and connect you
              with a prestigious network.
            </p>
          </div>

          <div className="contact-section" style={{ marginBottom: "0" }}>
            <h3>Explore Partnership Opportunities</h3>
            <p>
              Click below to view detailed sponsorship packages and
              collaboration options.
            </p>
            <a href="/sponsors-details" className="contact-btn">
              View Sponsorship Details
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
