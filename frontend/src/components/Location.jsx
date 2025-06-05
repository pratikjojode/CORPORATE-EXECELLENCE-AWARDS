import React from "react";
import "../Styles/Location.css";

const Location = () => {
  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps?q=18.5204,73.8567", "_blank");
  };

  return (
    <section className="location-section">
      <div className="venue-info">
        <div className="venue-text">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="location-icon"
          >
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="10"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span>Sunny Worlds, Pune</span>
        </div>
        <button className="map-btn" onClick={openGoogleMaps}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l.75.75M12 21l-.75.75M12 21l-3-3m3 3l3-3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          View Map
        </button>
      </div>
    </section>
  );
};

export default Location;
