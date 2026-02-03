import React from "react";
import "../../../assets/styles/Offers.css";
import img1 from "../../../assets/images/baef0cea4ecebcb9aebc207355b3cb99-1.png";
import img2 from "../../../assets/images/baef0cea4ecebcb9aebc207355b3cb99-2.png";
import img3 from "../../../assets/images/baef0cea4ecebcb9aebc207355b3cb99-3.png";
import img4 from "../../../assets/images/baef0cea4ecebcb9aebc207355b3cb99-4.png";
import img5 from "../../../assets/images/baef0cea4ecebcb9aebc207355b3cb99-5.png";
const Offers = () => {
  const offers = [img1, img2, img3, img4, img5];
  return (
    <section className="offers-section">
      <h2 className="section-title fw-600">Offers</h2>
      <div className="offers-slider">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer} alt={`Offer ${index + 1}`} className="offer-img cursor-pointer" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Offers;
