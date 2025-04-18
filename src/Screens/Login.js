import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formImage from '../Images/formImage.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', form);
    navigate('/home');
  };

  const containerStyle = {
    backgroundImage: `url(${formImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'flex-start', // Aligns content to the left
    alignItems: 'center',
    paddingLeft: '5%', // Optional: adds space from the left edge
  };
  
  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    width: '300px',
    textAlign: 'center',
  };
  

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
  };
  const buttonStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Transparent black
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    backdropFilter: 'blur(2px)', // Optional: adds a subtle blur behind
  };
  
  

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button style={buttonStyle} type="submit">Login</button>
        <p style={{ marginTop: '1rem' }}>
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')} style={{ color: '#007bff', cursor: 'pointer' }}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
