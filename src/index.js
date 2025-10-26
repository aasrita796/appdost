// ...existing code...
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// changed: import matches actual file name (app.tsx)
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
// ...existing code...
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();