import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "../Styles/PreviousEvents.css";

const PreviousEvents = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [legacyVisible, setLegacyVisible] = useState(false);
  const legacyRef = useRef(null);

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
      chiefGuests: [
        {
          name: "Shri Harshvardhan Patil",
          designation: "Former Minister of Parliamentary Affairs, Maharashtra",
          profileImage: "/images/HP.png",
        },
      ],
      notableAwardees: [
        {
          name: "Prashant Kesari",
          company: "Emotorad",
          position: "CFO",
          profileImage: "/images/Pk.png",
        },
        {
          name: "Rohit Gupta",
          company: "Thyssenkrupp",
          position: "MD",
          profileImage: "/images/RG.png",
        },
        {
          name: "Jignesh Patel",
          company: "Jivika Healthcare Pvt Ltd",
          position: "CEO",
          profileImage: "/images/JP.png",
        },
        {
          name: "Sanju Kela",
          company: "Net Protector",
          position: "MD",
          profileImage: "/images/SK.png",
        },
        {
          name: "Ravindra Bharti",
          company: "Bharti Share Market",
          position: "MD",
          profileImage: "/images/RB.png",
        },
        {
          name: "Pallavi Shah",
          company: "Softdel Director",
          position: "HR",
          profileImage: "/images/PS.png",
        },
      ],
      Juries: [
        {
          name: "Ajay Mudliar",
          position: "Head Talent Acquisition",
          institution: "Tech Mahindra",
          profileImage: "/images/AM.png",
        },
        {
          name: "Dinesh Gupta",
          position: "Director RMG",
          institution: "Capgemini",
          profileImage: "/images/DG.png",
        },
        {
          name: "Rahul Bagale",
          position: "Group HR Head",
          institution: "Force Motors Limited",
          profileImage: "/images/RB.png",
        },
      ],
      eventStats: {
        companies: 25,
        awardees: 50,
        attendees: 500,
        juryMembers: 10,
      },
    },
    {
      year: "2024",
      venue: "East Oxford Awards",
      location: "Radisson, Pune",
      highlights: [
        "Keynote Speaker- Dr Parag Kalkar - Pro-Vice Chancellor at Savitribai Phule Pune University",
        "Interactive sessions on future of work and AI in HR",
        "30+ prominent corporate leaders awarded for innovation",
        "Partnerships with leading industry associations",
      ],
      chiefGuests: [
        {
          name: "Dr Parag Kalkar",
          designation: "Pro-Vice Chancellor at Savitribai Phule Pune",
          profileImage: "/images/Parag.png",
        },
      ],
      notableAwardees: [
        {
          name: "Mr. Arjun Kale",
          company: "MIT College",
          position: "Sr. Manager Training & Placement",
          profileImage: "/images/AK.png",
        },
        {
          name: "Dr. Nilesh Uke",
          company: "KJEI's Trinity Academy of Engineering",
          position: "Principal",
          profileImage: "/images/Nilesh.png",
        },
        {
          name: "Mr. Tushar S. Badhe",
          company: "Mauli College of Engineering and Technology Shegaon",
          position: "Head TPO",
          profileImage: "/images/TB.png",
        },
        {
          name: "Dr. Shivajirao Kadam",
          company: "Bharati Vidyapeeth Deemed University",
          position: "Vice Chancellor",
          profileImage: "/images/SK.png",
        },
        {
          name: "Mr. Dnyaneshwar B Rao",
          company: "Unawane MMSI Mertmmcoe Management Institute Pune",
          position: "Head TPO",
          profileImage: "/images/DR.png",
        },
        {
          name: "Dr. Bharat Agarwal",
          company: "VIT University",
          position: "Vice Chancellor",
          profileImage: "/images/BA.png",
        },
      ],
      eventStats: {
        companies: 20,
        awardees: 30,
        attendees: 400,
        juryMembers: 8,
      },
    },
    {
      year: "2022",
      venue: "HR Excellence Awards",
      location: "Hyatt Regency, Mumbai",
      highlights: [
        "Chief Guest: Shri Piyush Goyal - Union Minister of Commerce & Industry",
        "Discussions on talent acquisition and retention strategies",
        "Recognition of 40+ HR innovators and changemakers",
        "Networking opportunities with HR professionals across India",
      ],
      chiefGuests: [
        {
          name: "Shri Chandrakant Patil",
          designation: "Minister of Higher and Technical Education",
          profileImage: "/images/CP.png",
        },
        {
          name: "Shri Harshvardhan Patil",
          designation: "Former Minister of Parliamentary Affairs, Maharashtra",
          profileImage: "/images/HP.png",
        },
      ],
      notableAwardees: [
        {
          name: "Prafull Jaiswal",
          company: "ENTRATA INDIA",
          position: "HR Director",
          profileImage: "/images/Prafull.png",
        },
        {
          name: "Sachin Aute",
          company: "CUMMINS GENERATOR",
          position: "HR Head",
          profileImage: "/images/SA.png",
        },
        {
          name: "Ruchika Singh Tanwar",
          company: "UST GLOBAL",
          position: "Head Talent Acquisition",
          profileImage: "/images/RST.png",
        },
        {
          name: "Preeti Ahuja",
          company: "ATLAS COPCO",
          position: "HR Leader",
          profileImage: "/images/PA.png",
        },
        {
          name: "Shantanu Ghosal",
          company: "SCHAEFFLER INDIA",
          position: "Vice President-HR",
          profileImage: "/images/SG.png",
        },
        {
          name: "Vaishali Darade",
          company: "MAGNA STYER",
          position: "Lead- Talent Acquisition",
          profileImage: "/images/VD.png",
        },
      ],
      Juries: [
        {
          name: "Neeraj Kumar Gupta",
          position: "HR Director",
          institution: "KNORR-BREMSE",
          profileImage: "/images/NKG.png",
        },
        {
          name: "Saurabh Shah",
          position: "VP -Human Capital",
          institution: "HABER",
          profileImage: "/images/SS.png",
        },
        {
          name: "Girish Desai",
          position: "Executive Director",
          institution: "PCET",
          profileImage: "/images/GD.png",
        },
      ],
      eventStats: {
        companies: 30,
        awardees: 40,
        attendees: 600,
        juryMembers: 12,
      },
    },
    {
      year: "2023",
      venue: "THE GLOBAL HR SUMMIT AND AWARDS SURYADATTA GROUP OF INSTITUTES",
      location: "MARIGOLD BANQUETS",
      highlights: [
        "Focus on remote work challenges and digital transformation in HR",
        "20+ awards for pioneering virtual HR initiatives",
        "Global participation with attendees from 15+ countries",
      ],
      Juries: [
        {
          name: "Abhijit Puri",
          designation: "Senior Director",
          institution: "LTI-MINDTREE",
          profileImage: "/images/AP.png",
        },
        {
          name: "Sudhir Mateti",
          designation: "Head-HR",
          institution: "SYNTEL TELECOM",
          profileImage: "/images/SM.png",
        },
        {
          name: "Rajendra Raut",
          designation: "Head Talent Acquisition",
          institution: "JADE GLOBAL",
          profileImage: "/images/RR.png",
        },
        {
          name: "Awantika Bharadwaj",
          designation: "Sr. Dir–Culture and People",
          institution: "ENSONO",
          profileImage: "/images/AB.png",
        },
      ],
      notableAwardees: [
        {
          name: "Ajay Mudliar",
          company: "TECH MAHINDRA",
          position: "Head-Talent Acquisition",
          profileImage: "/images/AM.png",
        },
        {
          name: "Sangeeta Singh",
          company: "SIMPLIFY HEALTHCARE",
          position: "Sr. Dir.– People Functions",
          profileImage: "/images/Sangeeta.png",
        },
        {
          name: "Swapna Sangari",
          company: "QUICK HEAL",
          position: "Vice President–HR",
          profileImage: "/images/Swapna.png",
        },
        {
          name: "Niloy Bakshi",
          company: "VODAFONE",
          position: "Head–Talent Acquisition",
          profileImage: "/images/NB.png",
        },
        {
          name: "Rahul Bagale",
          company: "FORCE MOTORS",
          position: "Group Head–HR",
          profileImage: "/images/RB.png",
        },
        {
          name: "Raju PS",
          company: "LUMAX INDUSTRIES",
          position: "VP–West Region",
          profileImage: "/images/RP.png",
        },
      ],
      eventStats: {
        companies: 15,
        awardees: 20,
        attendees: 700,
        juryMembers: 7,
      },
    },
  ];

  // Safe fallback to avoid undefined errors
  const currentEvent = events[activeEvent] || events[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLegacyVisible(true);
      },
      { threshold: 0.3 }
    );
    if (legacyRef.current) observer.observe(legacyRef.current);
    return () => {
      if (legacyRef.current) observer.unobserve(legacyRef.current);
    };
  }, []);

  return (
    <section className="events-section">
      <div className="container">
        <h2 className="section-title">Our Legacy of Excellence</h2>

        <div className="events-main-container">
          {/* Timeline Navigation */}
          <nav className="events-timeline-nav">
            {events.map((event, idx) => (
              <button
                key={idx}
                className={`timeline-item ${
                  idx === activeEvent ? "active" : ""
                }`}
                onClick={() => setActiveEvent(idx)}
              >
                <span className="timeline-year">{event.year}</span>
                <span className="timeline-venue">{event.venue}</span>
              </button>
            ))}
          </nav>

          {/* Event Details */}
          <div className="event-details-content">
            <div className="event-header">
              <div className="event-meta">
                <span className="event-year-highlight">
                  {currentEvent.year}
                </span>
                <h3 className="event-title">{currentEvent.venue}</h3>
                <p className="event-location">{currentEvent.location}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="event-highlights">
              <h4>Highlights</h4>
              <ul>
                {currentEvent.highlights?.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Chief Guests */}
            {currentEvent.chiefGuests?.length > 0 && (
              <div className="chief-guests-section">
                <h4>Chief Guest</h4>
                <div className="guests-grid">
                  {currentEvent.chiefGuests.map((g, i) => (
                    <div key={i} className="guest-card">
                      <img
                        src={g.profileImage}
                        alt={g.name}
                        className="guest-photo"
                      />
                      <p className="guest-name">{g.name}</p>
                      <p className="guest-designation">{g.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notable Awardees */}
            {currentEvent.notableAwardees?.length > 0 && (
              <div className="awardees-section">
                <h4>Notable Awardees</h4>
                <div className="awardees-grid">
                  {currentEvent.notableAwardees.map((a, i) => (
                    <div key={i} className="awardee-card">
                      <img
                        src={a.profileImage}
                        alt={a.name}
                        className="awardee-photo"
                      />
                      <p className="awardee-name">{a.name}</p>
                      <p className="awardee-company">{a.company}</p>
                      <p className="awardee-position">{a.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Juries */}
            {currentEvent.Juries?.length > 0 && (
              <div className="academic-guests-section">
                <h4>Juries</h4>
                <div className="guests-grid">
                  {currentEvent.Juries.map((j, i) => (
                    <div key={i} className="guest-card">
                      <img
                        src={j.profileImage}
                        alt={j.name}
                        className="guest-photo"
                      />
                      <p className="guest-name">{j.name}</p>
                      <p className="guest-designation">
                        {j.position}, {j.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Statistics */}
            <div className="event-stats-section">
              <h4>Event Statistics</h4>
              <div className="event-stats">
                {["attendees", "awardees", "companies", "juryMembers"].map(
                  (statKey) => (
                    <div key={statKey} className="stat-item">
                      <span className="stat-number">
                        {currentEvent.eventStats[statKey]}+
                      </span>
                      <span className="stat-label">
                        {statKey.charAt(0).toUpperCase() +
                          statKey.slice(1).replace(/([A-Z])/g, " $1")}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Section with CountUp */}
        <div className="legacy-section" ref={legacyRef}>
          <h3>Our Legacy in Numbers</h3>
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
