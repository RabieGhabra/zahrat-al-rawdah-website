import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import ProductCard from "../../components/ui/ProductCard";
import NavSection from "./ProductListing_page_sections/NavSection";
import FilterSection from "./ProductListing_page_sections/FilterSection.jsx";
import Button from "../../components/ui/Button";
import "../../assets/styles/ProductListing.css";
import sortIcon from "../../assets/icons/down-arrow.png";
import vitamin from "../../assets/images/Bitmap_A.png";
import vitamin1 from "../../assets/images/Bitmap (11).png";
import vitamin2 from "../../assets/images/Bitmap (12).png";
import vitamin3 from "../../assets/images/Bitmap (13).png";
import vitamin4 from "../../assets/images/Bitmap (14).png";
import vitamin5 from "../../assets/images/Bitmap (15).png";
import vitamin6 from "../../assets/images/Bitmap (16).png";
import vitamin7 from "../../assets/images/Bitmap (17).png";
import vitamin8 from "../../assets/images/Bitmap (18).png";
import vitamin9 from "../../assets/images/Bitmap (19).png";
import vitamin10 from "../../assets/images/Bitmap (20).png";
import vitamin11 from "../../assets/images/Bitmap (5).png";
const ProductListing = () => {
  const images = [
    vitamin,
    vitamin1,
    vitamin2,
    vitamin3,
    vitamin4,
    vitamin5,
    vitamin6,
    vitamin7,
    vitamin8,
    vitamin9,
    vitamin10,
    vitamin11,
  ];
  const productData = {
    brand: "VITAA'S",
    name: "Vitamin C Effervescent Tablets",
    currentPrice: "8.00",
    originalPrice: "15.00",
    discount: "15% off",
  };
  return (
    <div className="shop-by-page">
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "All Products" },
        ]}
      />
      <NavSection />
      <section className="product-listing-section">
        <FilterSection />
        <div className="products-content wrapper-inner">
          <div className="products-header">
            <h1 className="products-title fs-32 fw-600">All Products</h1>
            <Button variant="outline" className="sort-button">
              <span className="sort-text fs-14 fw-500">Sort</span>
              <img
                src={sortIcon}
                alt="sort"
                className="cursor-pointer"
              />
            </Button>
          </div>
          <div className="products-row">
            {images.map((img, index) => (
              <ProductCard
                key={index}
                image={img}
                {...productData}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ProductListing;
