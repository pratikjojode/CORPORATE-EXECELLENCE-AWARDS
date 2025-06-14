import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/SponsorshipDetails.css"; // Assuming you have a CSS file for styling
const SponsorshipDetails = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const sponsorshipPackages = [
    {
      category: "Platinum",
      price: "₹ 20 Lakhs",
      highlight: "Premium Visibility & Leadership Opportunity",
      benefits: [
        "Logo on Backdrop and all Promotional Materials",
        "Corporate Video Presentation (3-5 mins slot)",
        "Exhibition Stall (8×8 sq. ft.) with premium location",
        "8 Complimentary Delegates Passes",
        "Display of Standees at prominent locations",
        "Full Page Color Advertisement in Souvenir (Inside Front/Back Cover)",
        "Premium branding visibility across all digital platforms",
        "Exclusive Speaker slot opportunity (15-20 mins)",
      ],
      color: "#FCD34D",
    },
    {
      category: "Gold",
      price: "₹ 15 Lakhs",
      highlight: "Enhanced Exposure & Strategic Presence",
      benefits: [
        "Logo on Backdrop and Promotional Materials",
        "Corporate Video Presentation (2-3 mins slot)",
        "Exhibition Stall (8×8 sq. ft.)",
        "6 Complimentary Delegates Passes",
        "Display of Standees",
        "Full Page Color Advertisement in Souvenir (Inside)",
        "Enhanced brand exposure across digital platforms",
      ],
      color: "#C0C0C0",
    },
    {
      category: "Silver",
      price: "₹ 10 Lakhs",
      highlight: "Key Partnership & Brand Integration",
      benefits: [
        "Logo on Backdrop and Promotional Materials",
        "Corporate Video Presentation (1-2 mins slot)",
        "Exhibition Stall (8×8 sq. ft.)",
        "5 Complimentary Delegates Passes",
        "Display of Standees",
        "Full Page Color Advertisement in Souvenir (Inside)",
      ],
      color: "#E5E7EB",
    },
    {
      category: "Academic Partner",
      price: "₹ 7 Lakhs",
      highlight: "Educational Alliance & Community Reach",
      benefits: [
        "Logo on Backdrop and Promotional Materials",
        "Exhibition Stall (8×8 sq. ft.)",
        "4 Complimentary Delegates Passes",
        "Display of Standees",
        "Full Page Black & White Advertisement in Souvenir",
      ],
      color: "#8B5CF6",
    },
  ];

  const collaborationOptions = [
    "Travel Partner",
    "Transport Partner",
    "Corporate Uniform Partner",
    "Recruitment Partner",
    "F & B Partner",
    "Media Partner",
  ];

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <>
      <Header />

      <section id="sponsorship-details" className="sponsorship-section">
        <div className="sponsorship-container">
          <div className="sponsorship-header">
            <h2 className="sponsorship-title">Partnership Opportunities</h2>
            <p className="sponsorship-subtitle">
              Join us in celebrating corporate excellence and connect with 1000+
              decision makers, 25000+ professionals, and reach 50000+ audience
              across our digital platforms.
            </p>
          </div>

          <div className="sponsorship-grid">
            {sponsorshipPackages.map((pkg, index) => (
              <div key={index} className="sponsorship-card">
                <div
                  className="sponsorship-card-header"
                  style={{ borderBottomColor: pkg.color }}
                >
                  <h3 className="sponsorship-package-name">{pkg.category}</h3>
                  <div className="sponsorship-package-price">{pkg.price}</div>
                </div>

                <div className="sponsorship-card-content">
                  <p className="sponsorship-highlight">{pkg.highlight}</p>
                  <ul className="sponsorship-package-benefits-list">
                    {pkg.benefits.map((benefit, i) => (
                      <li key={i} className="sponsorship-benefit-item">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="collaboration-section">
            <h3 className="collaboration-title">
              Additional Collaboration Opportunities
            </h3>
            <p className="collaboration-description">
              Join us as a collaborative partner for ₹2 Lakhs only:
            </p>
            <div className="collaboration-grid">
              {collaborationOptions.map((option, index) => (
                <div key={index} className="collaboration-card">
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sponsorship-contact-section">
            <h3 className="sponsorship-contact-title">
              Ready to Partner With Us?
            </h3>
            <p className="sponsorship-contact-description">
              Contact our sponsorship team for custom packages and detailed
              information.
            </p>
            <div className="sponsorship-contact-actions">
              <button
                className="sponsorship-contact-btn"
                onClick={toggleContactInfo}
                aria-expanded={showContactInfo}
                aria-controls="contact-info"
              >
                Contact Sponsorship Team
              </button>
            </div>

            {showContactInfo && (
              <div
                id="contact-info"
                className="sponsorship-contact-info-reveal"
                role="region"
                aria-live="polite"
              >
                <p>Phone: 8308333301</p>
                <p style={{ color: "#FFD700", fontWeight: "bold" }}>
                  Email:{" "}
                  <a href="mailto:info@corporateexcellenceawards.com">
                    info@corporateexcellenceawards.com
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SponsorshipDetails;
