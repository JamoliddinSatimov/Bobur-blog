import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { SearchProvider } from './components';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
