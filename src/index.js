// Path: src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';

// Create the root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(  // Use createRoot to render the app
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
