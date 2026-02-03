import React from "react";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import Button from "../../components/ui/Button";
import RightImage from "../../assets/images/Group 78012.png";
import LogoImage from "../../assets/images/Group 37616.png";
import "../../assets/styles/Otp.css";
export const Otp = () => {
  return (
    <div className="otp-container">
      <div className="otp-left">
        <div className="otp-box">
          <img src={LogoImage} alt="Logo" className="otp-logo" />
          <h1 className="otp-title fw-500 fs-32">Enter the OTP sent to your whatsapp</h1>
          <p className="otp-subtitle fw-400 fs-14">Check your WhatsApp and enter the 6-digit code to continue.</p>
          <div className="otp-mobile-section">
            <Label htmlFor="otp">OTP</Label>
            <div className="otp-mobile-inputs">
              <Input id="otp" type="tel" placeholder="000 000" />
            </div>
            <Button className="button button-primary full-width">Verify</Button>
            <p className="otp-note fw-400 fs-16">
              Didn’t receive an OTP?{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                Resend New
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="otp-right">
        <img src={RightImage} alt="Medical" className="otp-image" />
      </div>
    </div>
  );
};
export default Otp;
