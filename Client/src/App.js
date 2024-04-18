import './App.css';
import Nav from './Components/nav/Nav';
import Landing from './Components/landing/Landing';
import Sales from './Components/SalesDepartment/Sales';
import Products from './Components/ProductCategory/Products';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      {/* <Sales /> */}
      <Products />
      <About />
    </div>
  );
}

export default App;
