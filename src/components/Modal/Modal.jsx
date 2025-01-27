import React, { useState } from "react";
import "./Modal.css";
import googleIcon from "../../img/google-icon.png";
import { useGlobalEvent } from "../context/GlobalEventContext";

import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

const Modal = ({ isOpen, onClose }) => {
  const [stepHistory, setStepHistory] = useState([1]); // เก็บประวัติของการ์ด
  const [email, setEmail] = useState(""); // เก็บ email ที่ผู้ใช้กรอก
  const [userHasPassword, setUserHasPassword] = useState(true); // เพิ่ม state สำหรับ userHasPassword

  if (!isOpen) return null;

  const currentStep = stepHistory[stepHistory.length - 1];

  // ฟังก์ชันเปลี่ยนไปการ์ดใหม่ พร้อมเก็บเลขหน้าก่อนหน้า
  const changeStep = (newStep) => {
    setStepHistory([...stepHistory, newStep]);
  };

  // ฟังก์ชันย้อนกลับไปหน้าก่อนหน้า
  const handleBack = () => {
    if (stepHistory.length > 1) {
      setStepHistory(stepHistory.slice(0, -1));
    }
  };

  const resetModal = () => {
    setStepHistory([1]); // เริ่มที่การ์ดแรกเสมอ
    setEmail(""); // ล้างค่าอีเมล
    setUserHasPassword(false); // ล้างค่า userHasPassword เมื่อรีเซ็ตโมดอล
  };

  const handleEmailSubmit = () => {
    if (userHasPassword) {
      changeStep(4);
    } else {
      changeStep(2);
    }
  };

  const handleSetPassword = () => changeStep(3);
  const handleForgotPassword = () => changeStep(5);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={() => {
            resetModal();
            onClose();
          }}
        >
          ×
        </button>

        {/* การ์ดที่ 1: กรอกอีเมลหรือล็อกอินด้วยโซเชียล */}
        {currentStep === 1 && (
          <>
            <h2>Join or Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEmailSubmit();
                }
              }}
            />
            <button className="email-button" onClick={handleEmailSubmit}>
              Continue with Email
            </button>
            <div className="separator">
              <span>or</span>
            </div>
            <button className="social-button google">
              <img src={googleIcon} alt="Google" className="social-logo" />
              Continue with Google
            </button>
            <p>
              By signing in you agree to Redfin's{" "}
              <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </p>
          </>
        )}

        {/* การ์ดที่ 2: กรอกรหัส 6 หลัก */}
        {currentStep === 2 && (
          <>
            <h2>Sign in</h2>
            <p>We emailed you a temporary sign-in code. Please check your inbox.</p>
            <label htmlFor="six-digit-code">6-digit code</label>
            <input
              type="text"
              id="six-digit-code"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEmailSubmit();
                }
              }}
            />
            <button className="email-button">Continue</button>

            {/* แสดงปุ่ม "Set a password instead" เมื่อ userHasPassword เป็น false */}
            {!userHasPassword && (
              <button className="white-button" onClick={handleSetPassword}>
                Set a password instead
              </button>
            )}

            <button className="back-button" onClick={handleBack}>
              Back
            </button>

            <p>
              By signing in you agree to Redfin's{" "}
              <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </p>
          </>
        )}

        {/* การ์ดที่ 3: ตั้งรหัสผ่าน */}
        {currentStep === 3 && (
          <>
            <h2>Welcome back</h2>
            <p>
              We will send you an email to set your password and sign into your account.
            </p>
            <button className="email-button">Set a password</button>
            <button
              className="white-button"
              onClick={() => changeStep(2)}
            >
              Sign in with a temporary code
            </button>
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
            <p>
              By signing in you agree to Redfin's{" "}
              <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </p>
          </>
        )}

        {/* การ์ดที่ 4: กรอกพาสเวิร์ด */}
        {currentStep === 4 && (
          <>
            <h2>Sign In</h2>
            <input
              type="email"
              value={email}
              readOnly
              placeholder="Email"
            />
            <input
              type="password"
              placeholder="Password"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEmailSubmit();
                }
              }}
            />
            <button className="forgot-password" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
            <button className="email-button">Continue with Email</button>
            <button
              className="white-button"
              onClick={() => changeStep(2)}
            >
              Sign in with a temporary code
            </button>

            <button className="back-button" onClick={handleBack}>
              Back
            </button>
            <p>
              By signing in you agree to Redfin's{" "}
              <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </p>
          </>
        )}

        {/* การ์ดที่ 5: ลืมรหัสผ่าน */}
        {currentStep === 5 && (
          <>
            <h2>Forgot Password?</h2>
            <p>
              We will send you an email to set your password and sign into your account.
            </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEmailSubmit();
                }
              }}
            />
            <button className="email-button">Reset Password</button>
            <button
              className="white-button"
              onClick={() => changeStep(2)}
            >
              Sign in with a temporary code
            </button>
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
