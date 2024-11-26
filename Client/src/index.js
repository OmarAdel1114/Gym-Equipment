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
import { ProductProvider } from './Components/Context';
import AuthProvider from './Components/AuthContext';
import Profile from './Components/profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // <ProductProvider>
      <Home />
      // </ProductProvider>
    ),
  },
  {
    path: '/Home',
    element: (
      // <ProductProvider>
      <Home />
      // </ProductProvider>
    ),
  },
  {
    path: '/Login',
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
  {
    path: '/Register',
    element: (
      <AuthProvider>
        <Register />
      </AuthProvider>
    ),
  },
  {
    path: '/shop',
    element: (
      // <ProductProvider>
      <ShopPage />
      // </ProductProvider>
    ),
  },
  {
    path: '/about',
    element: (
      // <ProductProvider>
      <About />
      // </ProductProvider>
    ),
  },
  {
    path: '/contactUs',
    element: (
      // <ProductProvider>
      <ContactPage />
      // </ProductProvider>
    ),
  },
  {
    path: '/:product/:id',
    element: (
      // <ProductProvider>
      <AboutProduct />
      // </ProductProvider>
    ),
  },
  {
    path: '/profile',
    element: (
      <AuthProvider>
        <Profile />
      </AuthProvider>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>
);

reportWebVitals();
