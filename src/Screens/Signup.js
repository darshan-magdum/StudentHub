import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signing up with:', form);
    navigate('/home');
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
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
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
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
        <button style={buttonStyle} type="submit">Sign Up</button>
        <p style={{ marginTop: '1rem' }}>
          Already have an account? <span onClick={() => navigate('/login')} style={{ color: '#007bff', cursor: 'pointer' }}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
