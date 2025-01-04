import React from 'react';
import './Modal.css';
import googleIcon from '../../img/google-icon.png';
import facebookIcon from '../../img/facebook-icon.png';
import appleIcon from '../../img/apple-icon.png';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Join or Sign In</h2>

        {/* ช่องกรอก Email */}
        <input type="email" placeholder="Email" />
        <button className="email-button">Continue with Email</button>

        {/* ตัวแบ่งระหว่างตัวเลือก */}
        <div className="separator"><span>or</span></div>

        {/* ปุ่มโซเชียล */}
        <button className="social-button google">
          <img src={googleIcon} alt="Google" className="social-logo" />
          Continue with Google
        </button>
        <button className="social-button facebook">
          <img src={facebookIcon} alt="Facebook" className="social-logo" />
          Continue with Facebook
        </button>
        <button className="social-button apple">
          <img src={appleIcon} alt="Apple" className="social-logo" />
          Continue with Apple
        </button>

        {/* ลิงก์ยินยอม */}
        <p>By signing in you agree to Redfin's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
      </div>
    </div>
  );
};

export default Modal;
