import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import GlobalEventProvider from './context/GlobalEventContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <GlobalEventProvider>
    <App />
  </GlobalEventProvider>
);
