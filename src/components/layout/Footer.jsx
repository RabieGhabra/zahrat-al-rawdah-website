import React from 'react';
import '../../assets/styles/Footer.css';
import Logo from '../../assets/images/Group 37616.png';
import PhoneIcon from '../../assets/icons/phone-call 1.png';
import EmailIcon from '../../assets/icons/Group.png';
import LocationIcon from '../../assets/icons/Group (1).png';
import ArrowIcon from '../../assets/icons/down-arrow.png';
import Newsletter from './Newsletter';
const Footer = () => {
  return (
     <>
     <Newsletter/>
      <footer className="footer-gradient">
      <div className="footer-top">
        {/* Company Info */}
        <div className="footer-section">
          <h4 className="fs-18 fw-600">Zahrat Al Rawdha</h4>
          <ul>
            <li className="cursor-pointer fs-16 fw-400">About Us</li>
            <li className="cursor-pointer fs-16 fw-400">Our Mission</li>
          </ul>
        </div>
        {/* Help */}
        <div className="footer-section">
          <h4 className="fs-18 fw-600">Help</h4>
          <ul>
            <li className="cursor-pointer fs-16 fw-400">FAQs</li>
            <li className="cursor-pointer fs-16 fw-400">Terms & Conditions</li>
            <li className="cursor-pointer fs-16 fw-400">Privacy Policy</li>
          </ul>
        </div>
        {/* Socials */}
        <div className="footer-section">
          <h4 className="fs-18 fw-600">Socials</h4>
          <ul>
            <li className="cursor-pointer fs-16 fw-400">Facebook</li>
            <li className="cursor-pointer fs-16 fw-400">Instagram </li>
            <li className="cursor-pointer fs-16 fw-400">X</li>
          </ul>
        </div>
        {/* Download App & Contact */}
        <div className="footer-section">
          <h4 className="fs-18 fw-600">Download the App</h4>
          <ul>
            <li className="cursor-pointer fs-16 fw-400">Apple Store</li>
            <li className="cursor-pointer fs-16 fw-400">Google Playstore</li>
          </ul>
          <h4 className="fs-18 fw-600 mt-24">Contact Us</h4>
          <div className="contact-item">
            <img src={PhoneIcon} alt="Phone" />
            <span className="fs-16 fw-400">+966114923990</span>
          </div>
          <div className="contact-item">
            <img src={EmailIcon} alt="Email" />
            <span className="fs-16 fw-400">zahratalrawdah@gmail.com</span>
          </div>
          <div className="contact-address">
            <img src={LocationIcon} alt="Location" />
            <span className="fs-16 fw-400">
              Al Sulay Ibn Al Amid Road 2945,<br />
              Riyadh, Ar Riyad, 14275, Saudi Arabia
            </span>
          </div>
        </div>
        {/* Logo and Description */}
        <div className="footer-logo-description">
          <div className="logo-wrapper">
            <img src={Logo} alt="Zahrat Al Rawdha Logo" />
          </div>
          <p className="fs-14 fw-300">
            At Zahrat Al Rawdha, we're committed to your health and well-being. Whether you need prescriptions, over-the-counter medications, or expert advice, our trusted pharmacists are here to help.
            <br /><br />
            We combine professional care with a personalised touch to ensure you and your family feel supported every step of the way.
          </p>
        </div>
      </div>
      {/* Language Selector */}
    <div className="language-selector">
        <span className="fs-14 fw-500">English</span>
        <img className="cursor-pointer" src={ArrowIcon} alt="Arrow" />
    </div>
    </footer>
     </>
  );
};
export default Footer;
