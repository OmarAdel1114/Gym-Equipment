import React, { useEffect, useState } from 'react';
import Nav from './nav/Nav';
import Footer from './Footer/Footer';
import Cart from '../Shop/Cart/Cart';
// import './AppLayout.css';

function AppLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isCartOpen]);


  return (
    <div className="app-layout">
      <Nav toggleCart={toggleCart} />
      <Cart isOpen={isCartOpen} closeCart={toggleCart} />
      <main toggleCart={toggleCart}>{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
