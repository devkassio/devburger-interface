import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import Login from './containers/Login';
import GlobalStyle from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyle />
    <ToastContainer autoClose={2000} theme="colored" />
  </StrictMode>,
);
