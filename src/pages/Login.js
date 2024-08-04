import React, { useState } from 'react';
import { NavLink, useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import "../css/login.css";
import Layout from '../components/Layout/Layout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  };

  const validatePass = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePass();

    if (email && password) {
      try {
        console.log(email, password);
        const response = await axios.post('https://eventmanagementproject20240804213240.azurewebsites.net/api/Auth/login', { email, password });

        if (response.status === 200) {
          localStorage.setItem('auth', JSON.stringify(response.data));
          
          navigate('/');
        } else {
          setLoginError('Invalid email or password');
        }
      } catch (error) {
        console.log(error.message);
        setLoginError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Layout>
      <div className="centered-container">
        <div className="container w-50 mt-5 pt-4">
          <div className="row justify-content-center mb-1 pb-1">
            <div className="col-md-8">
              <h2 className="text-primary text-center mb-3">Login</h2>
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <form id="loginForm" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={validateEmail}
                        />
                        <label htmlFor="email">Email</label>
                        {emailError && <div id="emailError" style={{ color: 'red' }}>{emailError}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={validatePass}
                        />
                        <label htmlFor="password">Password</label>
                        {passwordError && <div id="passwordError" style={{ color: 'red' }}>{passwordError}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <p>Don't have an account? <NavLink to="/register">Register here</NavLink></p>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                    </div>
                    {loginError && <div id="loginError" style={{ color: 'red', marginTop: 10 }}>{loginError}</div>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;