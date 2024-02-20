import './App.css';
import Nav from './Components/nav/Nav';
import Landing from './Components/landing/Landing';
import Sales from './Components/SalesDepartment/Sales';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Sales />
    </div>
  );
}

export default App;
