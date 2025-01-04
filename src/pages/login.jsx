import React from 'react';
import './styles/login.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;