import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Login from './Login';
import Register from './Register';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <hr />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to=''>Home</Link>
            </li>
            <li>
              <Link to='/AboutUs'>About Us</Link>
            </li>
            <li>
              <Link to='/ContactUs'>Contact Us</Link>
            </li>
            <li>
              <Link to='/Login'>Login</Link>
            </li>
            <li>
              <Link to='/Register'>Register</Link>
            </li>
          </ul>
          <hr />
        </nav>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/AboutUs' Component={AboutUs}></Route>
          <Route path='/ContactUs' Component={ContactUs}></Route>
          <Route path='/Login' Component={Login}></Route>
          <Route path='/Register' Component={Register}></Route>
          <Route path='*' Component={PageNotFound}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
