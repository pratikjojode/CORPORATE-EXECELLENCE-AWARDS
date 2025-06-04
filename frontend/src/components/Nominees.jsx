// NominationProcess.jsx
import React from 'react';
// Importing icons from lucide-react for visual representation of each step
import { Award, FileText, Send, Search, Sparkles } from 'lucide-react'; 
import '../Styles/Nominees.css'; // Importing CSS for styling

const NominationProcess = () => {
  // Define the steps for the nomination process with dates
  const steps = [
    {
      icon: <FileText size={28} className="step-icon" />,
      title: 'Nomination Deadline',
      date: '20 May 2025',
      description: 'Last day to submit your nominations for the Corporate Excellence Awards. Ensure all required documents and criteria are met before the deadline.',
    },
    {
      icon: <Search size={28} className="step-icon" />,
      title: 'Judgment Process Begins',
      date: '25 May 2025',
      description: 'Our esteemed panel of industry experts will begin evaluating all nominations. Finalists will be selected based on merit and adherence to criteria.',
    },
    {
      icon: <Send size={28} className="step-icon" />,
      title: 'Finalist Announcement',
      date: '10 June 2025',
      description: 'Shortlisted nominees will be officially announced and notified. Preparations for the awards ceremony will commence.',
    },
    {
      icon: <Award size={28} className="step-icon" />,
      title: 'Awards Ceremony',
      date: '28 June 2025',
      description: 'Join us to celebrate the pinnacle of corporate achievement. Finalists and winners will be honored at our prestigious annual awards ceremony.',
    },
    {
      icon: <Sparkles size={28} className="step-icon" />,
      title: 'Post-Event Recognition',
      date: 'Ongoing',
      description: 'Winners will receive continued recognition through our media partners and official website. Celebrate your success with us throughout the year!',
    },
  ];

  return (
    // Main container for the nomination process section
    <div className="nomination-process-container">
      {/* Section Title */}
      <h2 className="section-title">
        Our Nomination Process
      </h2>

      {/* Container for the timeline steps */}
      <div className="timeline-wrapper">
        {/* Vertical Timeline Line */}
        <div className="timeline-line"></div>

        {/* Map through each step to render a card */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            {/* Timeline Dot */}
            <div className="timeline-dot"></div>

            {/* Card for each step */}
            <div className="timeline-card">
              <div className="card-header">
                {/* Icon and Title */}
                {step.icon}
                <h3 className="card-title">{step.title}</h3>
              </div>
              {/* Date */}
              <div className="card-date">{step.date}</div>
              {/* Description */}
              <p className="card-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nominate Now Button */}
      <div className="nominate-button-wrapper">
        <button className="nominate-button">
          Nominate Now
        </button>
      </div>
    </div>
  );
};

export default NominationProcess;