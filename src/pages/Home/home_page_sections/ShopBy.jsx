import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../../assets/styles/ShopBy.css';
import Button from "../../../components/ui/Button";
import ConcernCard from '../../../components/ui/ConcernCard';
import weightLossImg from '../../../assets/images/412n5SqaIhL._SY350_-removebg-preview 1.png';
import hairImg from '../../../assets/images/412n5SqaIhL._SY350_-removebg-preview 1 (1).png';
import sleepImg from '../../../assets/images/412n5SqaIhL._SY350_-removebg-preview 1 (2).png';
import heartImg from '../../../assets/images/3d-rendering-ui-icon 1.png';
import feverImg from '../../../assets/images/412n5SqaIhL._SY350_-removebg-preview 2.png';
import diabetesImg from '../../../assets/images/top-view-glucose-measuring-device-diabetes 1.png';
import coldImg from '../../../assets/images/bottle-medicine-with-white-cap-top 1.png';
import arrowIcon from '../../../assets/icons/Vector 85.png';
const ShopBy = () => {
  const navigate = useNavigate();
  const concerns = [
    { name: 'Weight loss', image: weightLossImg, imageClass: 'img-0' },
    { name: 'Hair', image: hairImg, imageClass: 'img-1' },
    { name: 'Sleep Aid', image: sleepImg, imageClass: 'img-2' }
  ];
  const concernsRow2 = [
    { name: 'Heart\nHealth', image: heartImg, imageClass: 'img2-0' },
    { name: 'Fever', image: feverImg, imageClass: 'img2-1' },
    { name: 'Diabetes\nCare', image: diabetesImg, imageClass: 'img2-2' },
    { name: 'Cold &\nCough', image: coldImg, imageClass: 'img2-3' }
  ];
  return (
    <section className="shop-by-concern ">
      <div className="shop-container wrapper-inner">
        {/* Header */}
        <div className="header-row">
          <div className="header-text">
            <div>
              <div className="small-title fw-400 fs-32">Shop By</div>
              <div className="large-title fw-600">Concern</div>
            </div>
            <Button
              className="button button-primary see-all"
              onClick={() => navigate("/ShopByConcern")}
            >
              see all
              <img src={arrowIcon} alt="Arrow" className="shop-arrow-icon" />
            </Button>
          </div>
          {/* First Row */}
          <div className="concern-row">
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
        {/* Second Row */}
        <div className="concern-row row-2">
          {concernsRow2.map((item, index) => (
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
  );
};
export default ShopBy;
