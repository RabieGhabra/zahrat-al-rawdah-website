import * as React from "react";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import Select, { SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import GoogleIcon from "../../assets/icons/d56a83daff855ba754852b04aa0f3926.png";
import FacebookIcon from "../../assets/icons/Group 76856.png";
import RightImage from "../../assets/images/Group 78012.png";
import LogoImage from "../../assets/images/Group 37616.png";
import { IoChevronDownSharp } from "react-icons/io5";
import "../../assets/styles/Login.css";
const socialLoginButtons = [
  { name: "Google", icon: <img src={GoogleIcon} alt="Google" className="social-icon" />, link: "https://www.google.com/", className: "google" },
  { name: "Facebook", icon: <img src={FacebookIcon} alt="Facebook" className="social-icon" />, link: "https://www.facebook.com/", className: "facebook" },
];
const Login = () => {
  const [selectedCountry, setSelectedCountry] = React.useState("+961");
  const [open, setOpen] = React.useState(false);
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <img src={LogoImage} alt="Logo" className="login-logo" />
          <h1 className="login-title fw-500 fs-32">Sign in to get the full experience</h1>
          <p className="login-subtitle fw-400 fs-14">
            Enter your mobile number and we'll WhatsApp you a code to verify.
          </p>
          <div className="mobile-section">
            <Label htmlFor="mobile-number">Mobile Number</Label>
            <div className="mobile-inputs">
              <Select>
                <SelectTrigger className="select-trigger-custom select-base" onClick={() => setOpen(!open)}>
                  <SelectValue value={selectedCountry} />
                  <IoChevronDownSharp className="select-arrow-icon" />
                </SelectTrigger>
                <SelectContent isOpen={open}>
                  {["+961", "+966", "+971"].map((c) => (
                    <SelectItem
                      key={c}
                      value={c}
                      onSelect={(val) => { setSelectedCountry(val); setOpen(false); }}
                    >
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input id="mobile-number" type="tel" placeholder="00 000 000" />
            </div>
            <Button className="button button-primary full-width">Get the Code</Button>
          </div>
          <div className="separator-wrapper">
            <div className="separator-line"></div>
            <span className="separator-text">Or login with</span>
            <div className="separator-line"></div>
          </div>
          <div className="social-row">
            {socialLoginButtons.map((btn) => (
              <div key={btn.name} className={`social-btn cursor-pointer ${btn.className}`} onClick={() => (window.location.href = btn.link)}>
                {btn.icon}
              </div>
            ))}
          </div>
          <p className="whatsapp-note fw-300 fs-14">
            By tapping “Get the Code”, you agree to receive a WhatsApp message with your verification code and accept our [Terms of Use] and [Privacy Policy].
          </p>
        </div>
      </div>
      <div className="login-right">
        <img src={RightImage} alt="Medical" className="login-image" />
      </div>
    </div>
  );
};
export default Login;
