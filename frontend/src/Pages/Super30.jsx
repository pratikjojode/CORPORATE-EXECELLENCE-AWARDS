import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Super30.css";

// 📸 Executive images
import imgVijay from "../assets/VijayMishra.png";
import imgRitesh from "../assets/def.jpg";
import imgGirish from "../assets/def.jpg";
import imgVishal from "../assets/VishalPawar.png";
import imgAadamvir from "../assets/AdamvirSingh.png";
import imgAtul from "../assets/AtulChobe.png";
import imgNeville from "../assets/Neville.png";
import imgRaman from "../assets/Capt.png";
import imgAbhishek from "../assets/AbhishekKumar.png";
import imgRiteshJoshi from "../assets/RiteshJoshi.png";
import imgBiren from "../assets/Biren.png";
import imgMilind from "../assets/Milind.png";
import imgSangram from "../assets/SangramPawar.png";
import imgEdmund from "../assets/Edum.png";
import imgAbhijit from "../assets/AbijitPuri.png";
import imgNeeraj from "../assets/Neeraj.png";
import imgSudhir from "../assets/ArvinfTeleocm.png";
import imgVinod from "../assets/Vinod.png";
import imgVaibhav from "../assets/Date.png";

Modal.setAppElement("#root");

const executives = [
  { name: "Vijay Mishra", company: "Tata Ficosa", title: "CFO", image: imgVijay },
  { name: "Ritesh Sharma", company: "Mindpool Technologies Ltd.", title: "Managing Director", image: imgRitesh },
  { name: "Girish Kulkarni", company: "Sakhambaro Industries", title: "Director", image: imgGirish },
  { name: "Vishal Pawar", company: "Allygrow", title: "CEO", image: imgVishal },
  { name: "Aadamvir Singh", company: "Sikka Group", title: "Country Head", image: imgAadamvir },
  { name: "Atul Chorbele", company: "Infosys", title: "AVP", image: imgAtul },
  { name: "Neville Postwalla", company: "Harbinger Group", title: "VP Talent Management", image: imgNeville },
  { name: "Capt. Raman Raina", company: "Grindwell Norton", title: "Head HR", image: imgRaman },
  { name: "Abhishek Kumar", company: "NielsenIQ", title: "Senior Vice President HR", image: imgAbhishek },
  { name: "RITESH JOSHI", company: "Vontier", title: "Regional Sr. Director - People and Culture India", image: imgRiteshJoshi },
  { name: "Biren Parekh", company: "CRISIL Limited", title: "Director", image: imgBiren },
  { name: "Milind Mutalik", company: "Freelancer", title: "HR Consultant", image: imgMilind },
  { name: "Dr. Sangram Pawar", company: "MINDWRKS", title: "Founder CEO", image: imgSangram },
  { name: "Edmund D'Silva", company: "Force Motors Ltd", title: "GM-Group HR", image: imgEdmund },
  { name: "Abhijit Puri", company: "LTIMindtree", title: "Sr. Director", image: imgAbhijit },
  { name: "Neeraj Kumar Gupta", company: "KNORR-BREMSE TECHNOLOGY CENTER INDIA PRIVATE LIMITED", title: "HR Director", image: imgNeeraj },
  { name: "Sudhir Mateti", company: "Arvind Limited Telecom Division", title: "HR Head", image: imgSudhir },
  { name: "Dr. Vinod Bidwaik", company: "Sakal Media Group", title: "CHRO and Group Director", image: imgVinod },
  { name: "Vaibhav Date", company: "Bajaj Finserv Asset Management Ltd", title: "Head HR", image: imgVaibhav },
];

const Super30 = () => {
  const [selected, setSelected] = useState(null);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="background-particles"
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#ffd700" },
            shape: { type: "circle" },
            opacity: { value: 0.2, random: true },
            size: { value: { min: 1, max: 4 }, random: true },
            move: { enable: true, speed: 0.5, direction: "none", outModes: { default: "out" } },
          }
        }}
      />

      <Header />

      <div className="executive-directory">
        <div className="hero-section-super">
          <h1 className="main">Executive Directory</h1>
          <p className="subtitle">Premium Leadership Network</p>
        </div>

        {/* New Event Details Section */}
        <div className="event-details">
          <p className="event-date">20th June 2025</p>
          <p className="event-location">@ Malhar Machi Luxury Mountain Resort</p>
        </div>

        <div className="executives-grid">
          {executives.map((exec, idx) => (
            <div key={idx} className="executive-card" onClick={() => setSelected(exec)}>
              <div className="card-inner">
                <div className="image-container">
                  <img src={exec.image} alt={`${exec.name} profile`} className="executive-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="executive-info">
                  <h3 className="executive-name">{exec.name}</h3>
                  <p className="executive-title">{exec.title}</p>
                  <p className="executive-company">{exec.company}</p>
                </div>
                <div className="card-shine"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {selected && (
        <Modal
          isOpen={!!selected}
          onRequestClose={() => setSelected(null)}
          className="exec-modal"
          overlayClassName="exec-modal-overlay"
          contentLabel="Executive Details"
        >
          <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
          <div className="modal-content">
            <img src={selected.image} alt={selected.name} />
            <h2>{selected.name}</h2>
            <h4>{selected.title}, {selected.company}</h4>
            <p>— Add brief bio or achievements here —</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Super30;