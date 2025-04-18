import React from 'react';
import { Link } from 'react-router-dom';
import formImage from '../Images/formImage.jpg';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
     const navigate = useNavigate();
  const containerStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${formImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '5%',
    overflow: 'hidden',
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
    borderRadius: '6px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '15px',
    backdropFilter: 'blur(2px)',
  };

  const linkStyle = {
    marginTop: '15px',
    display: 'block',
    color: '#333',
    textDecoration: 'none',
    fontSize: '0.9rem',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2>Signup</h2>
        <input type="text" placeholder="Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="text" placeholder="College Name" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <input type="password" placeholder="Confirm Password" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Register</button>
       
        <p style={{ marginTop: '1rem' }}>
          Don't have an account?{' '}
          <span onClick={() => navigate('/Login')} style={{ color: '#007bff', cursor: 'pointer' }}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
