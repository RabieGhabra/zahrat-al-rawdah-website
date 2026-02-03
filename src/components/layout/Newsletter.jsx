import React from 'react';
import '../../assets/styles/Newsletter.css';
import Input from '../ui/Input';
import Button from '../ui/Button';
const Newsletter = () => {
  return (
    <section className="newsletter-section">
      {/* Left Content */}
      <div className="newsletter-text">
        <h3 className="newsletter-title fw-600 fs-18">
          JOIN zahrat al rawdha NEWSLETTER
        </h3>
        <p className="newsletter-description fw-400 fs-14">
          Sign up for our newsletter to get health tips, special offers, and the latest updates straight to your inbox.
        </p>
      </div>
      {/* Right Content: Input + Button */}
      <div className="newsletter-right">
              <Input id="email" type="email" className="newsletter-input" placeholder="Zahra@gmail.com" />
              <Button className="button button-primary">all brands</Button>
      </div>
    </section>
  );
}
export default Newsletter;
