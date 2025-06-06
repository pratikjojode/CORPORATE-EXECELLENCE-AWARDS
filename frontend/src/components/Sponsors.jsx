import React from "react";
import { Helmet } from "react-helmet-async";
import "../Styles/Sponsors.css";

const Sponsors = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Excellence Awards | Sponsorship Opportunities</title>
        <meta
          name="description"
          content="Discover exclusive sponsorship packages at the Corporate Excellence Awards. Partner with us to elevate your brand visibility and connect with industry leaders."
        />
        <link
          rel="canonical"
          href="https://corporateexcellenceawards.com/Sponsors"
        />
      </Helmet>

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
