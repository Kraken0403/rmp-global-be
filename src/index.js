import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <BrowserRouter>
        <App />

      </BrowserRouter>
    </PrismicProvider>
  </React.StrictMode>
);
