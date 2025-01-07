import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// 'root' elemanına React uygulamasını bağlar.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Uygulamayı StrictMode içinde render eder.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
