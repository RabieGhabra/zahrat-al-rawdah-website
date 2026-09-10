import React from "react";
import "../../assets/styles/Breadcrumbs.css";
import arrowRight from "../../assets/icons/right-arrow (1).png";
const Breadcrumbs = ({ items = [] }) => {
  return (
    <section className="breadcrumbs-section">
      <div className="breadcrumbs-container">
        <nav className="breadcrumbs-nav">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.href ? (
                <a href={item.href} className="breadcrumbs-link fw-400 fs-16">
                  {item.label}
                </a>
              ) : (
                <span className="fw-400 fs-16">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <img
                  src={arrowRight}
                  alt=">"
                />
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
};
export default Breadcrumbs;
