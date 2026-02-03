import React from "react";
import "../../../assets/styles/Services.css";
import doctorBg from "../../../assets/images/Frame 2610220 (1).png"; 
import doctorFront from "../../../assets/images/5b7c1abff326d343e9cef3d24c42e95ae5ccf751.png";
import pharmacistBg from "../../../assets/images/Frame 2610220 (1).png"; 
import pharmacistFront from "../../../assets/images/Cellphone in hand 1.png"; 
import leftArrow from "../../../assets/icons/left-arrow.png";
import rightArrow from "../../../assets/icons/right-arrow.png";
const Services = () => {
  return (
    <section className="services-section">
      <h2 className="section-title fw-600">Our Services</h2>
      <div className="services-carousel">
        {/* Left Arrow */}
        <img src={leftArrow} alt="Previous" className="arrow left-arrow cursor-pointer" />
        {/* Free Doctor Consultation Card */}
        <div className="service-card">
          <div className="service-card-image-wrapper">
            <img src={doctorBg} alt="Doctor Background" className="service-card-image background" />
            <img src={doctorFront} alt="Doctor Front" className="service-card-image front" />
          </div>
          <h3 className="service-card-title font-en">
            <span className="fw-500 fs-24">Free</span> <span className="fw-700 fs-26">Doctor Consultation</span>
        </h3>
        </div>
        {/* Ask a Pharmacist Card */}
        <div className="service-card">
          <div className="service-card-image-wrapper">
            <img src={pharmacistBg} alt="Pharmacist Background" className="service-card-image background" />
            <img src={pharmacistFront} alt="Pharmacist Front" className="service-card-image front" />
          </div>
            <h3 className="service-card-title font-en">
              <span className="fw-500 fs-24">Ask a</span> <span className="fw-700 fs-26">Pharmacist</span>
            </h3>
        </div>
        {/* Right Arrow */}
        <img src={rightArrow} alt="Next" className="arrow right-arrow cursor-pointer" />
      </div>
    </section>
  );
};
export default Services;
