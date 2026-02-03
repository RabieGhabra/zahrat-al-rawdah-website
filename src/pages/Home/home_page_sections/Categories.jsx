import React from 'react';
import '../../../assets/styles/Categories.css';
import skincareImage from '../../../assets/images/gua-sha-jade-facial-massage-tool 8.png';
import medicineImage from '../../../assets/images/gua-sha-jade-facial-massage-tool 9.png';
import babyImage from '../../../assets/images/gua-sha-jade-facial-massage-tool 11.png';
import wellnessImage from '../../../assets/images/image 140.png';
import arrowLeft from '../../../assets/icons/left-arrow.png';
import arrowRight from '../../../assets/icons/right-arrow.png';
import arrowSkincare from '../../../assets/images/Ellipse 743.png';
import arrowMedicine from '../../../assets/images/Ellipse 743 (1).png';
import arrowBaby from '../../../assets/images/Ellipse 743 (2).png';
import arrowWellness from '../../../assets/images/Ellipse 743 (3).png';
import iconRelative from '../../../assets/icons/Vector 85.png';
import FloatingChat from './FloatingChat'; 
const Categories = () => {
  const categories = [
    { name: 'Skincare', bgColor: '#EBD5D4', image: skincareImage, arrow: arrowSkincare },
    { name: 'Medicine', bgColor: '#D2D3E1', image: medicineImage, arrow: arrowMedicine },
    { name: 'Baby', bgColor: '#D4E9EB', image: babyImage, arrow: arrowBaby },
    { name: 'Wellness', bgColor: '#D8E0D9', image: wellnessImage, arrow: arrowWellness },
  ];
  return (
    <>
     <section className="categories-section">
      <div className="categories-wrapper">
        {/* Left Arrow */}
        <img 
          src={arrowLeft} 
          alt="Previous"
          className="arrow-left cursor-pointer" 
          />
        {/* Categories */}
        <div className="categories-list" style={{ display: 'flex', gap: '16px' }}>
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div 
                className="category-bg"
                style={{ backgroundColor: category.bgColor }}>
                </div>
              <div className="category-image-wrapper">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <img 
                  src={category.arrow}
                  alt="Ellipse"
                  className="category-top-image cursor-pointer"
                />
                <img 
                  src={iconRelative}
                  alt="Icon Relative"
                  className="category-icon-relative cursor-pointer"
                />
              </div>
              <div className="category-content">
                <span className="category-name fw-500 fs-24">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <img 
          src={arrowRight} 
          alt="Next"
          className="arrow-right cursor-pointer"
        />
      </div>

    </section>
            <FloatingChat />
    </>
  );
}
export default Categories;
