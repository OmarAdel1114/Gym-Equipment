import './App.css';
import Nav from './Components/nav/Nav';
import Landing from './Components/landing/Landing';
import Products from './Components/ProductCategory/Products';
import Bestseller from './Components/Bestseller/Bestseller';
import Blog from './Components/Blog/Blog';
import Testmonials from './Components/Testmonials/Testmonials';
import CTASection from './Components/CTASection/CTASection';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Cart from './Shop/Cart/Cart';
import { useState } from 'react';
import AppLayout from './Components/appLayout';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <AppLayout>
        {/* <Nav toggleCart={toggleCart} /> */}
        <Cart isOpen={isCartOpen} closeCart={toggleCart} />
        <Landing />
        <Bestseller />
        <Products />
        <Blog />
        <Testmonials />
        <CTASection />
        <ContactUs />
        {/* <Footer /> */}
      </AppLayout>
    </div>
  );
}

export default App;
