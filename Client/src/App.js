import './App.css';
import Nav from './Components/nav/Nav';
import Landing from './Components/landing/Landing';
// import Sales from './Components/SalesDepartment/Sales';
import Products from './Components/ProductCategory/Products';
import About from './Components/About/About';
import Bestseller from './Components/Bestseller/Bestseller';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Bestseller />
      {/* <Sales /> */}
      <Products />
      <About />
    </div>
  );
}

export default App;
