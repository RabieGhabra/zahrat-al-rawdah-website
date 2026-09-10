import React from 'react';
import '../../../assets/styles/RewardsProgram.css';
import logoImg from '../../../assets/images/Group.png';
import arrowRight from '../../../assets/icons/Vector 85.png';
import arrowLeft from '../../../assets/icons/Vector 85 (1).png';
const RewardsProgram = () => {
  return (
    <section className="rewards-program">
      {/* Left Arrows */}
      <div className="group left">
        {Array.from({ length: 13 }).map((_, i) => (
          <img key={i} src={arrowLeft} alt="Arrow Left" className="rewards-arrow-icon" />
        ))}
              {/* Logo */}
      <div className="rewards-logo" style={{ backgroundImage: `url(${logoImg})` }}></div>
      {/* Content */}
      <div className="rewards-content">
        <div className="rewards-intro fw-500 fs-22">Introducing</div>
        <div className="rewards-title fw-600 fs-30">
          Zahrat Al Rawdha<br />
          Rewards Program
        </div>
      </div>
      </div>
      {/* Right Arrows */}
      <div className="group right">
              {/* Points */}
      <div className="rewards-points">
        <div className="points-value fw-700">3,500</div>
        <div className="points-label w-500 fs-22">Points Earned</div>
      </div>
        {Array.from({ length: 14 }).map((_, i) => (
          <img key={i} src={arrowRight} alt="Arrow Right" className="rewards-arrow-icon" />
        ))}   
      </div>
    </section>
  );
}
export default RewardsProgram;
