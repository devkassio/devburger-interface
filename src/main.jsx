import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';
import { router } from './routes';
import GlobalStyle from './styles/globalStyles';
import { Elements } from '@stripe/react-stripe-js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
      <GlobalStyle />
      <ToastContainer autoClose={2000} theme="colored" />
    </AppProvider>
  </StrictMode>,
);
