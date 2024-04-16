import './App.css';
import Nav from './Components/nav/Nav';
import Landing from './Components/landing/Landing';
import Sales from './Components/SalesDepartment/Sales';
import Products from './Components/ProductCategory/Products';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      {/* <Sales /> */}
      <Products />
    </div>
  );
}

export default App;
