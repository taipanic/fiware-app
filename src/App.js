import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';

function App() {


  const [token, setToken] = useState('952719a7-ad69-4514-9edf-2d9712aa0244');

  function updateToken(data) {
    setToken(data);
  }

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Logout</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/home"
            render={ (props) => <Home {...props} token={token} updateToken={updateToken} /> }
          />
          <Route
            path="/login"
            render={ (props) => <LoginForm {...props} updateToken={updateToken} /> }
          />
          <Route path="/signup" component={SignupForm} />

          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;

// import socketIOClient from 'socket.io-client';

  // const [something, setSomething] = useState('');

  // const ENDPOINT = 'localhost:3000';
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setSomething(data);
  //   });
  //   return () => socket.disconnect();
  // }, []);