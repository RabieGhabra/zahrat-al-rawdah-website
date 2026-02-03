import React from 'react';
import circleBg from '../../assets/images/Ellipse 752.png';
const ConcernCard = ({ name, image, imageClass }) => {
  return (
    <div className="concern-item">
      <div
        className="concern-circle"
        style={{ backgroundImage: `url(${circleBg})` }}
      >
        <img
          src={image}
          alt={name}
          className={`concern-image ${imageClass}`}
        />
      </div>
      <span className="concern-name fw-500 fs-24">
        {name}
      </span>
    </div>
  );
};
export default ConcernCard;
