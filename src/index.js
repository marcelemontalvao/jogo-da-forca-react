import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App/App';

const rootHTML = document.getElementById('root')
console.log(rootHTML)
const root = ReactDOM.createRoot(rootHTML);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
