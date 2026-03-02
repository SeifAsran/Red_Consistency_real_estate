import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import webLogo from './Assets/Images/web.logo.png';

// Set favicon from local asset
const faviconLink =
  document.querySelector("link[rel='icon']") || document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = webLogo;
if (!faviconLink.parentNode) {
  document.head.appendChild(faviconLink);
}

// Set page title
document.title = 'Red Consistency Crafting the Future. Refining the Present';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
