import React from 'react';
import '../../../assets/styles/PopularBrands.css';
import Button from "../../../components/ui/Button";
import brand1 from '../../../assets/images/Rectangle 139335.png';
import brand2 from '../../../assets/images/Rectangle 139336.png';
import brand3 from '../../../assets/images/Rectangle 139338.png';
import brand4 from '../../../assets/images/Rectangle 139340.png';
const PopularBrands = () => {
  const brands = [
    brand2,
    brand3,
    brand1,
    brand2,
    brand4,
    brand3,
    brand1,
  ];
  return (
    <section className="popular-brands">
      {/* Header */}
      <div className="popular-brands-header">
        <h2 className="section-title fw-600">Popular Brands</h2>
        <p className="section-subtitle fw-400 fs-16">
          Committed to your well-being, our pharmacy provides reliable, high-quality medicines and healthcare products.
        </p>
      </div>
      {/* Brands Grid */}
      <div className="popular-brands-grid">
        {brands.map((brand, index) => (
          <img 
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="brand-logo"
          />
        ))}
      </div>
      <Button className="button button-primary fs-14 fw-500">All Brands</Button>
    </section>
  );
}
export default PopularBrands;
