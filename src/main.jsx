import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalEventProvider from './context/GlobalEventContext';
import App from './App';

ReactDOM.render(
  <GlobalEventProvider>
    <App></App>
  </GlobalEventProvider>,
  document.getElementById('root')
);
