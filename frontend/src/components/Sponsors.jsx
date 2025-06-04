import React from 'react';
import '../Styles/Sponsors.css'; // Keep the same CSS file
// You would typically use react-router-dom for navigation
// import { Link } from 'react-router-dom'; 

const Sponsors = () => {
  return (
    <section id="sponsors-intro" className="sponsors-section">
      <div className="section-container">
        <div className="sponsors-header">
          <h2 className="section-title">Join Us as a Partner!</h2>
          <p className="section-subtitle">
            The Corporate Excellence Awards offer unparalleled opportunities to align your brand with leadership and innovation.
            Discover how partnering with us can elevate your visibility and connect you with a prestigious network.
          </p>
        </div>

        <div className="contact-section" style={{marginBottom: '0'}}>
          <h3>Explore Partnership Opportunities</h3>
          <p>Click below to view detailed sponsorship packages and collaboration options.</p>
          {/* If you have React Router, use Link: */}
          {/* <Link to="/sponsors-details" className="contact-btn">View Sponsorship Details</Link> */}
          
          {/* For a simple button that *would* navigate if implemented with a router or state management */}
          <a href="/sponsors-details" className="contact-btn">View Sponsorship Details</a> 
          {/* Replace '/sponsors-details' with the actual path to your SponsorshipDetails component */}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;