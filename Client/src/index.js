import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../src/App';
import Login from '../src/Components/login/Login';
import Register from '../../Client/src/Components/Register/Register'
import ShopPage from './Shop/ShopPage/ShopPage';
import About from './About/About';
// import ContactUs from './Components/ContactUs/ContactUs';
import ContactPage from './Contact/ContactPage';
import AboutProduct from './Shop/aboutProduct/AboutProduct';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/Home',
    Component: Home,
  },
  {
    path: '/Login',
    Component: Login,
  },
  {
    path: '/Register',
    Component: Register,
  },
  {
    path: '/shop',
    Component: ShopPage,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/contactUs',
    Component: ContactPage,
  },
  {
    path: '/AboutProduct',
    Component: AboutProduct,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
