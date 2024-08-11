import React, { useEffect, useState } from 'react';
import Nav from './nav/Nav';
import Footer from './Footer/Footer';
import Cart from '../Shop/Cart/Cart';
import { ProductProvider } from './Context';
// import './AppLayout.css';

function AppLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const togglecart = () => {
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
      {/* <ProductProvider> */}
        <Nav togglecart={togglecart} />
        <Cart isOpen={isCartOpen} closeCart={togglecart} />
        <main >{children}</main>
        <Footer />
      {/* </ProductProvider> */}
    </div>
  );
}

export default AppLayout;
