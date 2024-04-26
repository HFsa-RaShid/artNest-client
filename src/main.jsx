import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'

import AuthProvider from './Provider/AuthProvider';
import { router } from './Route/Routes';
import {  HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>

      </HelmetProvider>
      
    </AuthProvider>
    
  </React.StrictMode>,
)