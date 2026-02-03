import React from "react";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import Button from "../../components/ui/Button";
import RightImage from "../../assets/images/Group 78012.png";
import LogoImage from "../../assets/images/Group 37616.png";
import "../../assets/styles/Registration.css";
export const Registration = () => {
  return (
    <div className="registration-container">
      <div className="registration-left">
        <div className="registration-box">
          <img src={LogoImage} alt="Logo" className="registration-logo" />
          <h1 className="registration-title fw-500 fs-32">Complete the Registration</h1>
          <p className="registration-subtitle fw-400 fs-14">Please enter your details</p>
          <div className="registration-mobile-section">
            <Label htmlFor="first-name">First Name</Label>
            <div className="registration-mobile-inputs">
              <Input id="first-name" type="text" placeholder="Muhammad" />
            </div>
            <Label htmlFor="last-name">Last Name</Label>
            <div className="registration-mobile-inputs">
              <Input id="last-name" type="text" placeholder="Abdullah" />
            </div>
            <Label htmlFor="email">Email</Label>
            <div className="registration-mobile-inputs">
              <Input id="email" type="email" placeholder="abdullah@gmail.com" />
            </div>
            <Button className="button button-primary full-width">Continue</Button>
          </div>
        </div>
      </div>
      <div className="registration-right">
        <img src={RightImage} alt="Medical" className="registration-image" />
      </div>
    </div>
  );
};
export default Registration;
