import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './App';
import Login from './Components/login/Login';
import Register from './Components/Register/Register';
import ShopPage from './Shop/ShopPage/ShopPage';
import About from './About/About';
import ContactPage from './Contact/ContactPage';
import AboutProduct from './Shop/aboutProduct/AboutProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contactUs',
    element: <ContactPage />,
  },
  {
    path: '/product/:id',
    element: <AboutProduct />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
