import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App';

const rootHTML = document.getElementById('root')
const root = ReactDOM.createRoot(rootHTML);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
