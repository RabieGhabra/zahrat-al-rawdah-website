import React from 'react';
import '../../../assets/styles/Hero.css';
import Header from '../../../components/layout/Header';
import starLarge from '../../../assets/icons/Ellipse 744.png';
import starSmall1 from '../../../assets/icons/Ellipse 745.png';
import starSmall2 from '../../../assets/icons/Ellipse 746.png';
import starSmall3 from '../../../assets/icons/Ellipse 747.png';
import starSmall4 from '../../../assets/icons/Ellipse 748.png';
import heroBg from '../../../assets/images/Rectangle 139328.png';
import heroRotated from '../../../assets/images/Group 37617.png';
const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      {/* Gradient */}
      <div className="hero-gradient"></div>
      {/* Rotated Image */}
      <div
        className="hero-rotated"
        style={{ backgroundImage: `url(${heroRotated})` }}
      ></div>
      {/* Content */}
      <div className="hero-content">
        <div className="hero-stars">
          <img src={starLarge} alt="Star" className="star-large" />
          <img src={starSmall1} alt="Star" className="star-small" />
          <img src={starSmall2} alt="Star" className="star-small" />
          <img src={starSmall3} alt="Star" className="star-small" />
          <img src={starSmall4} alt="Star" className="star-small" />
        </div>
        <div className="hero-text">
          <h1 className="fw-600">Zahrat Al Rawdha</h1>
          <p className="fw-400 fs-18">
            Committed to your well-being, our pharmacy provides reliable, high-quality medicines and healthcare products.
          </p>
        </div>
      </div>
           <Header />
    </section>
  )
}
export default Hero;
