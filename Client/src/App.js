import './App.css';
import Landing from './Components/landing/Landing';
import Products from './Components/ProductCategory/Products';
import Bestseller from './Components/Bestseller/Bestseller';
import Blog from './Components/Blog/Blog';
import Testmonials from './Components/Testmonials/Testmonials';
import CTASection from './Components/CTASection/CTASection';
import ContactUs from './Components/ContactUs/ContactUs';
import Cart from './Shop/Cart/Cart';
import { useState } from 'react';
import AppLayout from './Components/appLayout';
import { ProductProvider } from './Components/Context';
import { AuthProvider } from './Components/AuthContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const togglecart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <AuthProvider>
        <ProductProvider>
          <AppLayout>
            <Cart isOpen={isCartOpen} closeCart={togglecart} />
            <Landing />
            <Bestseller />
            <Products />
            <Blog />
            <Testmonials />
            <CTASection />
            <ContactUs />
          </AppLayout>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
