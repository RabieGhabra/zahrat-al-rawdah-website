import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../assets/styles/ShopByConcern.css';
import ConcernCard from '../components/ui/ConcernCard';
import Breadcrumbs from "../components/layout/Breadcrumbs";
import weightLossImg from '../assets/images/412n5SqaIhL._SY350_-removebg-preview 1.png';
import hairImg from '../assets/images/412n5SqaIhL._SY350_-removebg-preview 1 (1).png';
import sleepImg from '../assets/images/412n5SqaIhL._SY350_-removebg-preview 1 (2).png';
import heartImg from '../assets/images/3d-rendering-ui-icon 1.png';
import feverImg from '../assets/images/412n5SqaIhL._SY350_-removebg-preview 2.png';
import diabetesImg from '../assets/images/top-view-glucose-measuring-device-diabetes 1.png';
import coldImg from '../assets/images/bottle-medicine-with-white-cap-top 1.png';
import allergiesImg from '../assets/images/medical-dropper 1.png';
import bloodImg from '../assets/images/3d-rendering-human-body-pressure-meter 1.png';
import skinCareImg from '../assets/images/levitating-cream-container-studio-still-life 1.png';
import immunityImg from '../assets/images/security-shield-icon 1.png';
import childrensImg from '../assets/images/3d-medical-elements-with-baby-cup 1.png';
const ShopByConcern = () => {
  const concerns = [
    { name: 'Weight loss', image: weightLossImg, imageClass: 'img-0' },
    { name: 'Hair', image: hairImg, imageClass: 'img-1' },
    { name: 'Sleep Aid', image: sleepImg, imageClass: 'img-2' },
    { name: 'Heart\nHealth', image: heartImg, imageClass: 'img-3' },
    { name: 'Fever', image: feverImg, imageClass: 'img-4' },
    { name: 'Diabetes\nCare', image: diabetesImg, imageClass: 'img-5' },
    { name: 'Cold &\nCough', image: coldImg, imageClass: 'img-6' },
    { name: 'Allergies', image: allergiesImg, imageClass: 'img-7' },
    { name: 'Blood\nPressure', image: bloodImg, imageClass: 'img-8' },
    { name: 'Skin Care', image: skinCareImg, imageClass: 'img-9' },
    { name: 'Immunity\nBoost', image: immunityImg, imageClass: 'img-10' },
    { name: 'Children’s\nHealth', image: childrensImg, imageClass: 'img-11' },
  ];
  return (
    <div className="shop-by-page">
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Concerns" },
        ]}
      />
      <section className="shop-by-section ">
        <div className="shop-by-container wrapper-inner">
          {/* Section Title */}
          <div className="shop-by-title">
            <h2 className="fw-600 fs-32">Shop By Concerns</h2>
          </div>
          {/* Grid */}
          <div className="concerns-grid">
            {concerns.map((item, index) => (
              <ConcernCard
                key={index}
                name={item.name}
                image={item.image}
                imageClass={item.imageClass}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ShopByConcern;
