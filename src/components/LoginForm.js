import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

// import { fetchPost } from './fetch';

export default function LoginForm({ updateToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');

  const history = useHistory();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3005/v1/auth/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": email,
        "password": password
      })
    })
    .then(response => {
      response.headers.forEach(function(value, name) {
        console.log(name + ": " + value);
    });
      if (!response.ok) {
          throw new Error('Invalid email or password');
      } else {
        return response.json();
      }
    })
    .then(result => {
        console.log('succeed');
        console.log(result);
        history.push('/home');
    })
    .catch(error => {
      setNotification(error.message);
      console.error(error);
    })
  }

  return (
    <div>
      <h3>Welcome to the KIWARE IoT Platform</h3>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email / Username
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>{email + password}</div>
        <div className="form-group">
          <label htmlFor="password">
            Password
          </label>
          <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="captcha"
          />
          <label className="form-check-label" htmlFor="captcha">
            reCAPTCHA placeholder
          </label>
        </div>
        <p>{notification}</p>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}