import './App.css';
import Nav from './Components/nav/Nav';
import Landing from './Components/landing/Landing';
// import Sales from './Components/SalesDepartment/Sales';
import Products from './Components/ProductCategory/Products';
// import About from './Components/About/About';
import Bestseller from './Components/Bestseller/Bestseller';
import Blog from './Components/Blog/Blog';
import Testmonials from './Components/Testmonials/Testmonials';
import CTASection from './Components/CTASection/CTASection';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Bestseller />
      {/* <Sales /> */}
      <Products />
      {/* <About /> */}
      <Blog />
      <Testmonials />
      <CTASection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
