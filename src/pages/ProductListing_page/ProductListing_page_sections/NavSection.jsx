import * as React from "react";
import "../../../assets/styles/NavSection.css";
const navItems = [
  "All Products",
  "Health & Medicine",
  "Skin Care",
  "Beauty Care",
  "Baby Care",
  "Mental Health",
  "Nature, Supplements, Wellness",
  "Personal Care",
];
const NavSection = () => {
  return (
    <section className="nav-section">
      <nav className="nav-container">
        <div className="nav-items fw-400 fs-16">
          {navItems.map((label, index) => (
            <span
              key={index}
              className={`nav-item cursor-pointer ${
                index === 0 ? "fw-600 active" : ""
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </nav>
    </section>
  );
};
export default NavSection;
