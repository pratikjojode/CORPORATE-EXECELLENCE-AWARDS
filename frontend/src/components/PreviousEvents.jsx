import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "../Styles/PreviousEvents.css";

const PreviousEvents = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [legacyVisible, setLegacyVisible] = useState(false);
  const legacyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLegacyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (legacyRef.current) {
      observer.observe(legacyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      year: "2024",
      venue: "HR Excellence Awards at Radisson",
      location: "Pune",
      highlights: [
        "Chief Guest: Shri Harshvardhan Patil - Former Minister of Parliamentary Affairs, Maharashtra",
        "Distinguished Juries from Tech Mahindra, Jade Global, Eclerx Services, Force Motors",
        "50+ Corporate Excellence Award Recipients",
        "Academia Recognition with East Oxford Awards",
      ],
      notableAwardees: [
        {
          name: "Jignesh Patel",
          company: "Jivika Healthcare Pvt. Ltd",
          position: "CEO",
        },
        {
          name: "Akashanand Karnik",
          company: "1point 1solutions",
          position: "CEO",
        },
        { name: "Prashant Kesari", company: "Emotorad", position: "CFO" },
        { name: "Rohit Gupta", company: "Thyssenkrupp", position: "MD" },
      ],
      academicGuests: [
        {
          name: "Dr. Parag Kalkar",
          position: "Pro-Vice Chancellor",
          institution: "Savitribai Phule Pune University",
        },
        {
          name: "Prof. Viraj Barge",
          position: "Dean Training & Placement",
          institution: "Zeal Education Society",
        },
      ],
    },
    {
      year: "2024",
      venue: "HR Excellence Awards at Hyatt",
      location: "Pune",
      highlights: [
        "Chief Guest: Shri Chandrakant Patil - Minister of Higher and Technical Education",
        "Guest of Honour: Shri Harshvardhan Patil",
        "Premium venue with distinguished corporate leaders",
        "Comprehensive HR leadership recognition",
      ],
      notableAwardees: [
        {
          name: "Girish Desai",
          company: "PCET",
          position: "Executive Director",
        },
        {
          name: "Dr. Geetika Madan",
          company: "Weikfield",
          position: "Group Head TM & OD",
        },
        {
          name: "Neeraj Kumar Gupta",
          company: "Knorr-Bremse",
          position: "HR Director",
        },
        {
          name: "Vinod Bidwaik",
          company: "Alfa Laval",
          position: "VP-HR & CHRO",
        },
      ],
    },
    {
      year: "2023",
      venue: "Global HR Summit & Awards - Suryadatta Group",
      location: "Marigold Banquets, Pune",
      highlights: [
        "Partnership with Suryadatta Education Foundation",
        "Focus on emerging HR technologies and practices",
        "Panel discussions on future workforce trends",
        "Recognition of innovation in people management",
      ],
      notableAwardees: [
        {
          name: "Ajay Mudliar",
          company: "Tech Mahindra",
          position: "Head-Talent Acquisition",
        },
        {
          name: "Andrew Simon",
          company: "eClerx Services",
          position: "Head-Talent Acquisition",
        },
        {
          name: "Swapna Sangari",
          company: "Quick Heal",
          position: "Vice President-HR",
        },
        {
          name: "Rahul Bagale",
          company: "Force Motors",
          position: "Group Head-HR",
        },
      ],
    },
    {
      year: "2023",
      venue: "Corporate Leaders Golf Championship",
      location: "Pinewoods Golf Club, Pune",
      highlights: [
        "Unique networking event combining business and sports",
        "Corporate leaders showcasing sportsmanship",
        "Strategic partnerships and collaborations",
        "Premium venue for executive networking",
      ],
      notableGuests: [
        {
          name: "Dr. Sandeep Sahasrabudhe",
          position: "Managing Director",
          company: "Pinewoods Golf Club",
        },
        {
          name: "Dr. Amit Andre",
          position: "CEO",
          company: "The Data Tech Labs",
        },
        { name: "Pankaj Ghode", position: "Founder & CEO", company: "Xcoode" },
      ],
    },
    {
      year: "2022",
      venue: "HR Meet & Greet - Jagadambha College",
      location: "Kyriad Hotel, Pune",
      highlights: [
        "Academic-Industry collaboration event",
        "Focused on engineering education excellence",
        "Regional recognition for Yavatmal institute",
        "Bridge-building between academia and industry",
      ],
    },
  ];

  const handleEventClick = (index) => {
    setActiveEvent(index);
  };

  return (
    <section id="events" className="events-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">PREVIOUS EVENTS</h2>
          <p className="section-subtitle">
            Celebrating Excellence Across Years
          </p>
        </div>

        <div className="events-main-container">
          {/* Timeline Navigation */}
          <div className="events-timeline-nav">
            {events.map((event, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  activeEvent === index ? "active" : ""
                }`}
                onClick={() => handleEventClick(index)}
              >
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-venue">{event.venue}</div>
                <div className="timeline-location">{event.location}</div>
              </div>
            ))}
          </div>

          {/* Event Details */}
          <div className="event-details-container">
            <div className="event-card-main">
              <div className="event-header">
                <h3 className="event-title">{events[activeEvent].venue}</h3>
                <div className="event-meta">
                  <span className="event-year-large">
                    {events[activeEvent].year}
                  </span>
                  <span className="event-location">
                    {events[activeEvent].location}
                  </span>
                </div>
              </div>

              <div className="event-content">
                <div className="event-highlights">
                  <h4>Event Highlights</h4>
                  <ul>
                    {events[activeEvent].highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {events[activeEvent].notableAwardees && (
                  <div className="notable-awardees">
                    <h4>Notable Awardees</h4>
                    <div className="awardees-grid">
                      {events[activeEvent].notableAwardees
                        .slice(0, 4)
                        .map((awardee, index) => (
                          <div key={index} className="awardee-card">
                            <h5>{awardee.name}</h5>
                            <p className="awardee-position">
                              {awardee.position}
                            </p>
                            <p className="awardee-company">{awardee.company}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {events[activeEvent].academicGuests && (
                  <div className="academic-guests">
                    <h4>Distinguished Academic Guests</h4>
                    <div className="guests-list">
                      {events[activeEvent].academicGuests.map(
                        (guest, index) => (
                          <div key={index} className="guest-item">
                            <h5>{guest.name}</h5>
                            <p>
                              {guest.position}, {guest.institution}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {events[activeEvent].notableGuests && (
                  <div className="notable-guests">
                    <h4>Notable Guests</h4>
                    <div className="guests-list">
                      {events[activeEvent].notableGuests.map((guest, index) => (
                        <div key={index} className="guest-item">
                          <h5>{guest.name}</h5>
                          <p>
                            {guest.position}, {guest.company}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="event-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Attendees</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Awards</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Companies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Jury Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Section with CountUp */}
        <div className="legacy-section" ref={legacyRef}>
          <h3>Our Legacy of Excellence</h3>
          <div className="legacy-stats">
            <div className="legacy-item">
              <h4>
                {legacyVisible ? <CountUp end={2000} duration={2} /> : 0}+
              </h4>
              <p>Total Awardees</p>
            </div>
            <div className="legacy-item">
              <h4>{legacyVisible ? <CountUp end={100} duration={2} /> : 0}+</h4>
              <p>Corporate Partners</p>
            </div>
            <div className="legacy-item">
              <h4>{legacyVisible ? <CountUp end={50} duration={2} /> : 0}+</h4>
              <p>Academic Institutions</p>
            </div>
            <div className="legacy-item">
              <h4>{legacyVisible ? <CountUp end={5} duration={2} /> : 0}+</h4>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;
