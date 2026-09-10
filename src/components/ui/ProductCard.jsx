import React from "react";
import sarIcon from '../../assets/icons/SAR.png';
import brandIcon from '../../assets/icons/Vector (1).png';
import '../../assets/styles/BestSellers.css';
const ProductCard = ({ image, brand, name, currentPrice, originalPrice, discount }) => {
  return (
    <div className="product-card ltr">
      <div className="discount-badge fs-14 fw-500">{discount}</div>
      <button className="image-button">
        <img src={image} alt={name} className="product-image" />
      </button>
      <div className="product-info">
        <div className="brand-name fs-12 fw-300">
          {brand}
          <button className="brand-icon-button">
            <img src={brandIcon} alt="icon" className="brand-icon" />
          </button>
        </div>
        <div className="product-name fs-16 fw-400">
          {name.split(" ").map((word, i) =>
            word === "Tablets" ? <span key={i} style={{ display: 'block' }}>{word}</span> : ` ${word}`
          )}
        </div>
        <div className="price-container fs-14">
          <img src={sarIcon} alt="SAR" className="currency-icon" />
          <span className="current-price fs-14 fw-600">{currentPrice}</span>
          <span className="price-original fs-12 fw-600">{originalPrice}</span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
