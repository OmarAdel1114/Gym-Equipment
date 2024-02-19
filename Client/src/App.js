// import logo from './logo.svg';
import './App.css';
import Nav from './Components/nav/Nav';
import Landing from './Components/landing/Landing';
import Login from './Components/login/Login';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter } from 'react-router-dom';
import Home from '../src/App';
// import Login from '../src/Components/login';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      {/* <Login /> */}

    
    </div>
  );
}

export default App;
