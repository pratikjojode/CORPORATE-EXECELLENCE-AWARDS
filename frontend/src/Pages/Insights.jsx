import React, { useEffect, useState } from "react";
import Header from "../Components/Header"; // Assuming you have a Header component
import Footer from "../components/Footer"; // Assuming you have a Footer component
import "../styles/Insights.css";

const Insights = () => {
  // State for the image slideshow modal
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideshowImages, setSlideshowImages] = useState([]);

  const featuredEvent = {
    title: "Corporate Visionaries Summit 2024",
    date: "April 15, 2024",
    location: "Grand Hyatt, Pune, India",
    image: "/images/image3.png",
    description:
      "Our flagship summit brought together industry leaders, innovators, and policy-makers for insightful panel discussions, keynote speeches, and strategic networking. A landmark event fostering collaborative growth.",
  };

  const eventStats = [
    { value: 58, label: "Events Organized" },
    { value: "3,500+", label: "Attendees" },
    { value: "120+", label: "Companies Participated" },
    { value: "92%", label: "Placement Success Rate" },
  ];

  const panelDiscussions = [
    {
      id: 1,
      title: "HR MEET AND HR PANEL DISCUSSION",
      date: "March 10, 2024",
      speakers: "Dr. Parag Kalkar and Mr Ali Merchant",
      description: "Emerging change and Tranformation in Technology ,People and Work.",
      image: "/images/event1.png",
      slideshowImages: [
        "/images/event2.png",
        "/images/event3.png",
        "/images/event4.png",
        "/images/event5.png",
      ],
    },
    {
      id: 2,
      title: "CORPORATE LEADERS SHOWCASING SPORTSMANSHIP",
      date: "September 29, 2023",
      speakers: "Dr Amit Andre, Pankaj Ghode ,Sainath Hon ,Shripal Gandhi ,Sudhin Bharokar",
      description: "Panel Discussion on Sustainable Practices in Corporate Culture",
      image: "/images/event6.png",
      slideshowImages: [
        "/images/event7.png",
        "/images/event8.png",
        "/images/event9.png",
        "/images/event10.png",
      ],
    },
    // Add more panel discussions as needed
    {
      id: 3,
      title: "HR MEET AND GREET",
      date: "April 23, 2022",
      speakers: "Mr Sangramsingh Pawar, Ms Trupti Patkar ,Dr Shital Watile ,Ms Daya Ogale ,Dr Amit Andre, Mr Milind Mutalik",
      description: "Future Of Work And Working Hybrid Model",
      image: "/images/event11.png",
      slideshowImages: [
        "/images/event12.png",
        "/images/event13.png",
        "/images/event14.png",

      ],
    },
  ];

  const photoCollageImages = [
    "/images/image8.png",
    "/images/image9.png",
    "/images/image10.png",
    "/images/collage2.png",
    "/images/collage3.png",
    "/images/collage4.png",
    "/images/collage5.png",
    "/images/collage6.png",
    "/images/collage7.png", // Ensure there are exactly 9 images for the collage
  ];

  useEffect(() => {
    const handleScroll = () => {
      const gridItems = document.querySelectorAll(".insights-page .grid-item");
      gridItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 150) {
          item.classList.add("animate-visible");
        } else {
          // Optional: remove class when out of view, if elements should reset on scroll up
          // item.classList.remove("animate-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount to check elements already in view
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers for the Slideshow
  const openSlideshow = (images) => {
    setSlideshowImages(images);
    setCurrentSlide(0); // Start from the first slide
    setIsSlideshowOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeSlideshow = () => {
    setIsSlideshowOpen(false);
    setSlideshowImages([]);
    document.body.style.overflow = ''; // Restore scrolling
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideshowImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideshowImages.length - 1 : prev - 1));
  };

  // Auto-play for slideshow
  useEffect(() => {
    let slideshowInterval;
    if (isSlideshowOpen && slideshowImages.length > 1) {
      slideshowInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slideshowImages.length - 1 ? 0 : prev + 1));
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(slideshowInterval);
  }, [isSlideshowOpen, slideshowImages.length]);


  // Generic CTA handler for future use, if you decide to add more custom actions
  const handleCtaAction = (actionType) => {
    console.log(`Action: ${actionType} triggered.`);
    // In a real application, this might trigger a navigation, form, etc.
    if (actionType === "Pre-Register Now") {
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfGfmANTWGKhpEXYI7yNkt1jboJjGZF_NZmLhPAewJ7jXksGw/viewform'; // Redirect to Google Forms
    }
  };

  return (
    <>
    <Header/>
      <div className="insights-page">
        <header className="insights-header">
          <h1 className="page-title">Event Insights & Impact</h1>
          <p className="page-subtitle">
            Chronicles of Excellence: Pioneering Connections, Fostering Growth, Inspiring Futures
          </p>
          <div className="header-decoration">
            <div className="golden-line"></div>
            <div className="golden-star">✨</div>
            <div className="golden-line"></div>
          </div>
        </header>

        <div className="mosaic-grid">
          {/* Featured Event Block */}
          <div className="grid-item featured-event">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="featured-image"
              loading="lazy"
            />
            <div className="event-overlay">
              <span className="event-badge">Past Event</span>
              <h2>{featuredEvent.title}</h2>
              <div className="event-meta">
                <span className="meta-item">
                  <i className="icon-calendar"></i> {featuredEvent.date}
                </span>
                <span className="meta-item">
                  <i className="icon-location"></i> {featuredEvent.location}
                </span>
              </div>
              <p className="event-description">{featuredEvent.description}</p>
              {/* Removed "View Highlights" button */}
            </div>
          </div>

          {/* Stats Block */}
          <div className="grid-item stats-block">
            <div className="section-header">
              <i className="icon-stats"></i>
              <h3>Our Impact: By The Numbers</h3>
            </div>
            <div className="stats-grid">
              {eventStats.map((stat, index) => (
                <div key={`stat-${index}`} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="stats-footer">
              <p>Join us in shaping the future of industry connections.</p>
            </div>
          </div>

          {/* New Panel Discussions Block */}
          <div className="grid-item panel-discussions-block">
            <div className="section-header">
              <i className="icon-discussion"></i>
              <h3>Insightful Panel Discussions</h3>
            </div>
            <div className="panels-container">
              {panelDiscussions.map((panel) => (
                <div key={panel.id} className="panel-item">
                  <div className="panel-image-wrapper">
                    <img src={panel.image} alt={panel.title} loading="lazy" />
                  </div>
                  <div className="panel-content">
                    <h4>{panel.title}</h4>
                    <p className="panel-meta">
                      <i className="icon-calendar"></i> {panel.date} |{" "}
                      <i className="icon-mic"></i> {panel.speakers}
                    </p>
                    <p className="panel-description">{panel.description}</p>
                    <button
                      className="panel-view-button"
                      onClick={() => openSlideshow(panel.slideshowImages)}
                    >
                      View Details <i className="icon-arrow"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Block (No Explore Full Gallery button) */}
          <div className="grid-item gallery-block">
            <div className="section-header">
              <i className="icon-gallery"></i>
              <h3>Memorable Event Moments</h3>
            </div>
            <div className="image-grid">
              {/* Using a few generic images here as the "Explore Full Gallery" button is removed */}
              <div className="image-container">
                <img src="/images/image2.png" alt="Event moment 1" loading="lazy" />
                <div className="image-hover">
                  <i className="icon-zoom"></i>
                </div>
              </div>
              <div className="image-container">
                <img src="/images/collage8.png" alt="Event moment 2" loading="lazy" />
                <div className="image-hover">
                  <i className="icon-zoom"></i>
                </div>
              </div>
              <div className="image-container">
                <img src="/images/image4.png" alt="Event moment 3" loading="lazy" />
                <div className="image-hover">
                  <i className="icon-zoom"></i>
                </div>
              </div>
              <div className="image-container">
                <img src="/images/image5.png" alt="Event moment 4" loading="lazy" />
                <div className="image-hover">
                  <i className="icon-zoom"></i>
                </div>
              </div>
            </div>
            {/* Removed "Explore Full Gallery" button */}
          </div>


          {/* Upcoming Events Block */}
          <div className="grid-item upcoming-events">
            <div className="section-header">
              <i className="icon-calendar"></i>
              <h3>Future Engagements: Coming Soon</h3>
            </div>
            <div className="event-card">
              <div className="card-header">
                <h4>Corporate Excellence Awards</h4>
              </div>
              <div className="event-details">
                <p className="event-date">
                  <i className="icon-calendar"></i> June 28, 2025
                </p>
                <p className="event-description">
                  Prepare for our next grand event featuring global thought leaders and groundbreaking discussions on future trends.
                </p>
              </div>
              <button
                className="register-button"
                onClick={() => handleCtaAction("Pre-Register Now")}
              >
                Pre-Register Now <i className="icon-arrow"></i>
              </button>
            </div>
          </div>

          {/* Photo Collage Block */}
          <div className="grid-item photo-collage">
            <div className="section-header">
              <i className="icon-collage"></i>
              <h3 className="section-title-animation">Our Journey in Pictures</h3>
              <p className="section-subtitle section-subtitle-animation">
                A visual chronicle of our most impactful moments.
              </p>
            </div>
            <div className="collage-grid">
              {photoCollageImages.slice(0, 9).map((img, index) => ( // Ensure only 9 images
                <div key={`collage-${index}`} className="collage-item">
                  <img
                    src={img}
                    alt={`Event moment ${index + 1}`}
                    className="collage-image"
                    loading="lazy"
                  />
                  <div
                    className="collage-overlay"
                    onClick={() => openSlideshow([img])} // Open slideshow with just this image
                  >
                    <span>View</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="collage-footer collage-footer-animation">
              <p>Capturing the essence of excellence, one event at a time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow Modal */}
      {isSlideshowOpen && (
        <div className="slideshow-modal-overlay">
          <div className="slideshow-modal-content">
            <button className="slideshow-close-btn" onClick={closeSlideshow}>
              &times;
            </button>
            <div className="slideshow-container">
              <img
                src={slideshowImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="slideshow-image"
              />
              {slideshowImages.length > 1 && (
                <>
                  <button className="slideshow-nav prev" onClick={prevSlide}>
                    &#10094;
                  </button>
                  <button className="slideshow-nav next" onClick={nextSlide}>
                    &#10095;
                  </button>
                </>
              )}
              <div className="slide-counter">
                {currentSlide + 1} / {slideshowImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Insights;