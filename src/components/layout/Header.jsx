import React from 'react';
import '../../assets/styles/Header.css';
import Logo from '../../assets/images/Group 37616.png';
import UserAvatar from '../../assets/icons/profile-icon.png';
import HeartIcon from '../../assets/icons/Vector (1).png';
import MenuIcon from '../../assets/icons/Frame 2610351.png';
import SearchIcon from '../../assets/icons/Icon akar-search.png';
import StoreIcon from '../../assets/icons/Vector.png';
const Header = () => {
  const handleMenuClick = () => {
    console.log('Menu clicked');
  };
  const handleSearchClick = () => {
    console.log('Search clicked');
  };
  const handleStoreClick = () => {
    console.log('Store clicked');
  };
  const handleHeartClick = () => {
    console.log('Favorites clicked');
  };
  return (
    <header className="header">
      {/* Left side - Menu and Search */}
      <div className="header-left">
        <button className="icon-button cursor-pointer" onClick={handleMenuClick}>
          <img src={MenuIcon} alt="Menu" className="icon" />
        </button>
        <button className="icon-button cursor-pointer" onClick={handleSearchClick}>
          <img src={SearchIcon} alt="Search" className="icon" />
        </button>
      </div>
      {/* Center - Logo */}
      <div className="header-center">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      {/* Right side - User info and icons */}
      <div className="header-right">
        {/* User Profile */}
        <div className="user-profile">
          <img src={UserAvatar} alt="User" className="user-avatar-img" />
          <span className="user-name fw-400 fs-20">Muhammad Abdullah</span>
        </div>
        {/* Icons */}
        <div className="header-icons">
          <button className="icon-button cursor-pointer" onClick={handleStoreClick}>
            <img src={StoreIcon} alt="Store" className="icon" />
          </button>
          <button className="icon-button cursor-pointer" onClick={handleHeartClick}>
            <img src={HeartIcon} alt="Favorites" className="icon" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
