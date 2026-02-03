import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/BestSellers.css';
import Button from "../../../components/ui/Button";
import ProductCard from '../../../components/ui/ProductCard';
import vitamin from '../../../assets/images/Bitmap.png';
import vitamin1 from '../../../assets/images/Bitmap (1).png';
import vitamin2 from '../../../assets/images/Bitmap (2).png';
import vitamin3 from '../../../assets/images/Bitmap (3).png';
import vitamin4 from '../../../assets/images/Bitmap (4).png';
import vitamin5 from '../../../assets/images/Bitmap (5).png';
import vitamin6 from '../../../assets/images/Bitmap (6).png';
import vitamin7 from '../../../assets/images/Bitmap (7).png';
const BestSellers = () => {
  const navigate = useNavigate(); 
  const images = [vitamin, vitamin1, vitamin2, vitamin3, vitamin4, vitamin5, vitamin6, vitamin7];
  const productData = {
    brand: "VITAA'S",
    name: "Vitamin C Effervescent Tablets",
    currentPrice: "8.00",
    originalPrice: "15.00",
    discount: "15% off"
  };
  return (
    <section className="best-sellers-section ltr wrapper-inner">
      <h2 className="section-title fw-600">Best Sellers</h2>
      <div className="products-row">
        {images.map((img, index) => (
          <ProductCard
            key={index}
            image={img}
            {...productData} 
          />
        ))}
      </div>
      <Button
        className="button button-primary fs-14 fw-500"
        onClick={() => navigate("/ProductListing")}
      >
        all products
      </Button>
    </section>
  );
};
export default BestSellers;
