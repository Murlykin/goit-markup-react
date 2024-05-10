import React from 'react'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
// import { HashRouter } from "react-router-dom";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/goit-markup-react/">
      <App />
    </BrowserRouter>
  </StrictMode>
);