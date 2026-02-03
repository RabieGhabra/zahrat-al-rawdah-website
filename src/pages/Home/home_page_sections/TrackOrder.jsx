import React from 'react';
import '../../../assets/styles/TrackOrder.css';
import Circle1 from '../../../assets/images/Rectangle 22720.png'; 
import Circle2 from '../../../assets/images/Group 77194.png'; 
import Icon1 from '../../../assets/icons/Vector 86-(1).png';
import Icon2 from '../../../assets/icons/Vector-(2).png';
import Icon3 from '../../../assets/icons/Vector-(3).png';
import Icon4 from '../../../assets/icons/Vector-(4).png';
import Line1 from '../../../assets/images/Line 100.png';
import Line2 from '../../../assets/images/Line 103.png';
import Line3 from '../../../assets/images/Line 104.png';
import Arrow from '../../../assets/icons/down-arrow.png';
const TrackOrder = () => {
  return (
    <section className="track-order-section">
      <div className="track-order-container ">
        {/* Header */}
        <div className="track-order-header">
          <h3 className="track-order-title fw-600 fs-16">Track Order</h3>
          <div className="order-id">
            <span>ORD-123321</span>
            <img src={Arrow} alt="arrow" className="order-arrow-icon cursor-pointer"/>
          </div>
        </div>
        <div className="track-order-content">
        <div className="circles-line-row">
          <div className="circle-item">
            <div className="step-circle">
              <img src={Circle1} alt="circle1" className="circle-img" />
              <img src={Icon1} alt="icon1" className="icon-img" />
            </div>
          </div>
          <img src={Line1} alt="line1" className="step-line" />
          <div className="circle-item">
            <div className="step-circle">
              <img src={Circle1} alt="circle2" className="circle-img" />
              <img src={Icon2} alt="icon2" className="icon-img" />
            </div>
          </div>
          <img src={Line2} alt="line2" className="step-line" />
          <div className="circle-item">
            <div className="step-circle">
              <img src={Circle2} alt="circle3" className="circle-img" />
              <img src={Icon3} alt="icon3" className="icon-img" />
            </div>
          </div>
          <img src={Line3} alt="line3" className="step-line" />
          <div className="circle-item">
            <div className="step-circle">
              <img src={Circle2} alt="circle4" className="circle-img" />
              <img src={Icon4} alt="icon4" className="icon-img" />
            </div>
          </div>
        </div>
        <div className="labels-row">
          <div className="label-item fw-500">Received</div>
          <div className="label-item fw-500">Processed for Picking</div>
          <div className="label-item fw-500">Out for Delivery</div>
          <div className="label-item fw-500">Delivered</div>
        </div>
        </div>
      </div>
    </section>
  );
};
export default TrackOrder;
