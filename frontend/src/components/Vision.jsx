import React from 'react';
import '../Styles/Vision.css'; // Ensure you have the correct path to your CSS file

const Awards = () => {
  const visionPoints = [
    {
      title: "Exalted Distinction",
      description: "The Corporate Excellence Award commands unparalleled prestige, being a coveted recognition across diverse spheres."
    },
    {
      title: "Celebration of Remarkable Attainments",
      description: "It reveres and commemorates exceptional achievements and extraordinary contributions that resonate on an elevated plane."
    },
    {
      title: "Fountainhead of Grandeur",
      description: "This accolade stands as an inspiring source, kindling the flames of aspiration, goading individuals and organizations towards magnificence."
    },
    {
      title: "Indomitable Devotion",
      description: "Awardees are distinguished for their unwavering allegiance to the pursuit of excellence, etching their names in the annals of their chosen domains."
    },
    {
      title: "Pioneers of New Paradigms",
      description: "Recipients are celebrated for their innate capacity to chart unexplored territories, thereby setting pioneering standards."
    },
    {
      title: "Catalyst of Societal Enrichment",
      description: "A cardinal objective lies in lauding contributions that enrich society's tapestry and actuate the wheels of progress."
    }
  ];

  const missionHighlights = [
    "Luminary of Guidance: Effulgently illuminating the path to prosperity and inspiring others to ascend to extraordinary pinnacles.",
    "Unwavering Zeal: A poignant reminder that extraordinary achievements are within reach through unwavering dedication and ardent fervor.",
    "Cultural Epitome: Serving as an epitome of cultural significance, exalting the values of excellence and innovation on a grand scale."
  ];

  return (
    <section id="vision" className="vision-section">
      {/* Background Elements */}
      <div className="vision-background">
        <div className="vision-pattern"></div>
        <div className="vision-glow"></div>
      </div>

      <div className="section-container">
        {/* Header */}
        <div className="vision-header">
          <div className="vision-badge">
            <span>Our Global Ethos: 'One Earth, One Family'</span>
          </div>
          <h2 className="section-title vision-title">
            THE VISION & MISSION
          </h2>
          <p className="vision-subtitle">
            DISCOVERING EXCELLENCE IN SUCCESSFUL BUSINESS
          </p>
          <div className="vision-description">
            <p>
              The Corporate Excellence Award represents a distinguished recognition, venerating extraordinary achievements and unwavering commitment exhibited by individuals and organizations across diverse domains. It is not merely an accolade but a source of inspiration, igniting the pursuit of magnificence.
            </p>
          </div>
        </div>

        {/* Vision Points Grid */}
        <div className="vision-grid">
          {visionPoints.map((point, index) => (
            <div key={index} className="vision-card">
              <div className="vision-card-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="vision-card-title">{point.title}</h3>
              <p className="vision-card-description">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Highlights */}
        <div className="mission-container">
          <h3 className="mission-title">Our Mission Highlights</h3>
          <div className="mission-highlights">
            {missionHighlights.map((highlight, index) => (
              <div key={index} className="mission-highlight">
                <div className="mission-icon">★</div>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="vision-cta">
          <div className="cta-content">
            <h3>Eternal Quest for Progress</h3>
            <p>It nurtures a culture of ceaseless amelioration, prodding individuals and entities to perpetually seek eminence and self-improvement.</p>
            <button className="cta-button">
              <span>EMBRACE THE RESPONSIBILITY</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;