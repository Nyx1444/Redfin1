import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

import googleIcon from '../img/google-icon.png';
import facebookIcon from '../img/facebook-icon.png';
import appleIcon from '../img/apple-icon.png';

import { useGlobalEvent } from '../context/GlobalEventContext';

const LoginPage = () => {
  const { windowSize } = useGlobalEvent();

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const isMobileView = windowSize.width < 980;

  return (
    <div style={styles.global}>
      <Navbar />
      <div style={styles.PageBody}>
        <div style={{ ...styles.LoginCard, padding: isMobileView ? '24px 32px' : '32px 64px' }}>
          {!isSignUp ? (
            // การ์ด Sign in
            <>
              <h1 style={styles.title}>Sign in</h1>
              <p style={styles.subtitle}>
                Need an account?{' '}
                <a
                  href="#"
                  style={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSignUp(); // สลับไปที่การสมัครสมาชิก
                  }}
                >
                  Join Redfin
                </a>
              </p>

              <div style={styles.socialButtons}>
                <button style={styles.socialButton}>
                  <img src={googleIcon} alt="Google" style={styles.icon} />
                  Continue with Google
                </button>
              </div>

              <form style={styles.form}>
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={styles.input}
                    required
                  />
                </div>
                <a href="/forgot-password" style={styles.forgotLink}>
                  Forgot?
                </a>
                <div style={styles.formGroup}>
                  <label htmlFor="password" style={styles.label}>
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    style={styles.input}
                    required
                  />
                </div>
                <button type="submit" style={styles.submitButton}>
                  Sign In
                </button>
              </form>

              <p style={styles.terms}>
                By signing in you agree to Redfin's{' '}
                <a href="/terms" style={styles.link}>
                  Terms
                </a>{' '}
                and{' '}
                <a href="/privacy" style={styles.link}>
                  Privacy
                </a>
                .
              </p>
            </>
          ) : (
            // การ์ด Sign up
            <>
              <h1 style={styles.title}>Join Redfin</h1>

              {/* ข้อความสำหรับผู้ที่มีบัญชีแล้ว */}
              <p style={styles.subtitle}>
                Have an account?{' '}
                <a
                  href="#"
                  style={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSignUp(); // สลับกลับไปที่การเข้าสู่ระบบ
                  }}
                >
                  Sign in
                </a>
              </p>

              {/* ปุ่มโซเชียล */}
              <div style={styles.socialButtons}>
                <button style={styles.socialButton}>
                  <img src={googleIcon} alt="Google" style={styles.icon} />
                  Continue with Google
                </button>
              </div>

              {/* ฟอร์มกรอกข้อมูล */}
              <form style={styles.form}>
                <div style={styles.formGroup}>
                  <label htmlFor="fullName" style={styles.label}>Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    style={styles.input}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="lastName" style={styles.label}>Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    style={styles.input}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>Email Address:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={styles.input}
                    required
                  />
                </div>
                <button type="submit" style={styles.submitButton}>Join Redfin</button>
              </form>

              <p style={styles.terms}>
                By signing up you agree to Redfin's{' '}
                <a href="/terms" style={styles.link}>
                  Terms
                </a>{' '}
                and{' '}
                <a href="/privacy" style={styles.link}>
                  Privacy
                </a>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  global: {
    fontFamily: '"Libre Franklin", -apple-system, BlinkMacSystemFont, Roboto, "Droid Sans", Helvetica, Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  PageBody: {
    backgroundImage: 'url(https://images.hdqwalls.com/download/sunset-at-st-mary-lake-glacier-national-park-5k-l3-1600x900.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  LoginCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '36px',
    fontWeight: '600',
    marginBottom: '10px',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  link: {
    color: '#1080A2',
    textDecoration: 'none',
  },
  socialButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  socialButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '2px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    fontSize: '16px',
    gap: '20px',
    color: '#585858',
    fontWeight: '600',
    fontFamily: '"Libre Franklin", -apple-system, BlinkMacSystemFont, Roboto, "Droid Sans", Helvetica, Arial, sans-serif',
  },
  icon: {
    width: '20px',
    marginRight: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  formGroup: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    marginBottom: '5px',
    textAlign: 'left',
    color: '#333333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '2px',
  },
  forgotLink: {
    alignSelf: 'flex-start',
    fontSize: '14px',
    color: '#1080A2',
    textDecoration: 'none',
  },
  submitButton: {
    backgroundColor: '#D32F2F',
    color: '#ffffff',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    fontWeight: '600',
    fontFamily: '"Libre Franklin", -apple-system, BlinkMacSystemFont, Roboto, "Droid Sans", Helvetica, Arial, sans-serif',
  },
  terms: {
    fontSize: '14px',
    color: '#333333',
    marginTop: '20px',
  },
};

export default LoginPage;
