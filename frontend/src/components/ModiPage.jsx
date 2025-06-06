import React from "react";
import "../Styles/ModiPage.css";
// Main ModiPage component that displays the content
const ModiPage = () => {
  // Quote text extracted from the image
  const quoteText =
    "I hold entrepreneurs, MSMEs, SMEs,\nAnd Educational Institutions\nIn the highest regard as India's\n'Pioneers of Progress.' It is our\nFervent aspiration to facilitate\nAn environment where our distinguished\nBusiness leaders may realize elevated\nLevels of productivity and heightened\nProfitability, all while fostering\nAn environment of accelerated growth\nWithin our industries.";

  // Function to render the quote text with line breaks
  const renderQuote = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index} className="block-line">
        {line}
      </span>
    ));
  };

  return (
    <>
      <div className="modi-page-container">
        <div className="card">
          {/* Image Section */}
          <div className="image-section">
            <div className="image-wrapper">
              <img
                src="https://placehold.co/240x240/D4AF37/ffffff?text=Narendra+Modi" // Placeholder image URL for Narendra Modi
                alt="Shri Narendra Modi"
                className="modi-image"
                // Fallback for image loading errors
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/240x240/cccccc/000000?text=Image+Not+Found";
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="content-section">
            <p className="quote-text">{renderQuote(quoteText)}</p>
            <div className="author-info">
              <h1 className="author-name">SHRI. NARENDRA MODI</h1>
              <p className="author-title">Honourable Prime Minister India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModiPage;
