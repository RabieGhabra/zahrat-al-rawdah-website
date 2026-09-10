import React from 'react';
import '../../../assets/styles/StoreLocator.css';
import storeFront from '../../../assets/images/Group-77273.png';
import storeInterior from '../../../assets/images/image-8.png';
import arrowBg from '../../../assets/images/Ellipse-743-4.png';
import arrowIcon from '../../../assets/icons/Vector 85.png';
const StoreLocator = () => {
  return (
    <section className="store-locator">
      <div className="store-locator-container wrapper-inners">
        {/* Left Block: Images + Text */}
        <div className="store-left">
          <div className="store-images">
            <img src={storeFront} alt="Store Front" className="store-front" />
            <img src={storeInterior} alt="Store Interior" className="store-interior" />
            <div className="gradient-overlay"></div>
          </div>
          <div className="store-content">
            <div className="store-title">
              <div className="title-small fw-400 fs-32">Find a</div>
              <div className="title-large fw-600">Store near you</div>
            </div>
            <p className="store-description fw-500 fs-22">
              Discover our stores and explore products near you.
            </p>
          </div>
        </div>
        {/* Right Side: Arrow Button */}
        <div className="arrow-button cursor-pointer" style={{ '--arrow-bg': `url(${arrowBg})` }}>
          <img src={arrowIcon} alt="Arrow" />
        </div>
      </div>
    </section>
  );
}
export default StoreLocator;
