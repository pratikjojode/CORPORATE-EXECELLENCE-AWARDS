import React, { useState } from 'react';
import '../Styles/Sponsors.css'; // Adjust the path as necessary

const Sponsors = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const sponsorshipSummary = [
    {
      category: "Platinum",
      price: "₹ 20 Lakhs",
      highlight: "Premium Visibility",
      keyBenefits: ["8×8 Stall", "8 Delegates", "Video Presentation"],
      color: "#E5E7EB"
    },
    {
      category: "Gold", 
      price: "₹ 15 Lakhs",
      highlight: "Enhanced Exposure",
      keyBenefits: ["8×8 Stall", "6 Delegates", "Video Presentation"],
      color: "#FCD34D"
    },
    {
      category: "Silver",
      price: "₹ 10 Lakhs", 
      highlight: "Strategic Partnership",
      keyBenefits: ["8×8 Stall", "5 Delegates", "Promotional Materials"],
      color: "#C0C0C0"
    },
    {
      category: "Academic Partner",
      price: "₹ 7 Lakhs",
      highlight: "Educational Alliance", 
      keyBenefits: ["4 Delegates", "Standee Display", "B/W Advertisement"],
      color: "#8B5CF6"
    }
  ];

  const detailedPackages = {
    "Platinum": {
      benefits: [
        "Logo on Backdrop and Promotional Materials",
        "Corporate Video Presentation", 
        "Exhibition Stall (8×8)",
        "8 Complimentary Delegates",
        "Display of Standees",
        "Full Page Color Advertisement in Souvenir (Inside)",
        "Premium branding visibility",
        "Speaker slot opportunity"
      ]
    },
    "Gold": {
      benefits: [
        "Logo on Backdrop and Promotional Materials",
        "Corporate Video Presentation",
        "Exhibition Stall (8×8)", 
        "6 Complimentary Delegates",
        "Display of Standees",
        "Full Page Color Advertisement in Souvenir (Inside)",
        "Enhanced brand exposure"
      ]
    },
    "Silver": {
      benefits: [
        "Logo on Backdrop and Promotional Materials",
        "Corporate Video Presentation",
        "Exhibition Stall (8×8)",
        "5 Complimentary Delegates", 
        "Display of Standees",
        "Full Page Color Advertisement in Souvenir (Inside)"
      ]
    },
    "Academic Partner": {
      benefits: [
        "Logo on Backdrop and Promotional Materials",
        "Exhibition Stall (8×8)",
        "4 Complimentary Delegates",
        "Display of Standees", 
        "Full Page B/W Advertisement in Souvenir"
      ]
    }
  };

  const collaborationOptions = [
    "Travel Partner", "Transport Partner", "Corporate Uniform Partner",
    "Recruitment Partner", "F & B Partner", "Media Partner"
  ];

  const handleViewDetails = (packageName) => {
    setSelectedPackage(packageName);
    setShowDetails(true);
  };

  const handleBackToMain = () => {
    setShowDetails(false);
    setSelectedPackage(null);
  };

  if (showDetails) {
    return (
      <section className="sponsors-section">
        <div className="section-container">
          <button className="back-btn" onClick={handleBackToMain}>
            ← Back to Sponsorship Options
          </button>
          
          <div className="package-details">
            <h2 className="package-title">
              {selectedPackage} Sponsorship Package
            </h2>
            
            <div className="package-price">
              {sponsorshipSummary.find(p => p.category === selectedPackage)?.price}
            </div>
            
            <div className="benefits-list">
              <h3>Package Benefits:</h3>
              <ul>
                {detailedPackages[selectedPackage]?.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="cta-section">
              <button className="sponsor-btn primary">Become a {selectedPackage} Sponsor</button>
              <button className="sponsor-btn secondary">Download Detailed Brochure</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="section-container">
        <div className="sponsors-header">
          <h2 className="section-title">Partnership Opportunities</h2>
          <p className="section-subtitle">
            Join us in celebrating corporate excellence and connect with 1000+ decision makers, 
            25000+ professionals, and reach 50000+ audience across our digital platforms.
          </p>
        </div>

        <div className="sponsorship-grid">
          {sponsorshipSummary.map((option, index) => (
            <div key={index} className="sponsorship-summary-card">
              <div className="card-header" style={{borderTopColor: option.color}}>
                <h3 className="package-name">{option.category}</h3>
                <div className="package-price">{option.price}</div>
              </div>
              
              <div className="card-content">
                <p className="highlight">{option.highlight}</p>
                <div className="key-benefits">
                  {option.keyBenefits.map((benefit, i) => (
                    <span key={i} className="benefit-tag">{benefit}</span>
                  ))}
                </div>
              </div>
              
              <div className="card-actions">
                <button 
                  className="details-btn"
                  onClick={() => handleViewDetails(option.category)}
                >
                  View Details
                </button>
                <button className="sponsor-btn">Get Started</button>
              </div>
            </div>
          ))}
        </div>

        <div className="collaboration-section">
          <h3>Additional Collaboration Opportunities</h3>
          <p>Join us as a collaborative partner for ₹2 Lakhs only:</p>
          <div className="collaboration-grid">
            {collaborationOptions.map((option, index) => (
              <div key={index} className="collaboration-card">
                <span>{option}</span>
                <button className="collab-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <h3>Ready to Partner With Us?</h3>
          <p>Contact our sponsorship team for custom packages and detailed information.</p>
          <button className="contact-btn">Contact Sponsorship Team</button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;