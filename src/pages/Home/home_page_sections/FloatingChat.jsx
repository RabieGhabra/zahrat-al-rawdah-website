import React from 'react';
import '../../../assets/styles/FloatingChat.css';
import chatIcon from '../../../assets/icons/chat-icon.png'; 
const FloatingChat = () => {
  return (
    <div className="floating-action cursor-pointer">
      {/* Chat Icon */}
      <div className="chat-icon">
        <img src={chatIcon} alt="Chat Icon" className="chat-image" />
      </div>
      {/* Text */}
      <span className="chat-text fw-300 fs-18">
        Ask a Pharmacist
      </span>
    </div>
  );
}
export default FloatingChat;
