import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import backgroundImage from '../Images/Background.jpg'; 
import Logo from '../Images/Logo.png';

const Intro = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  useEffect(() => {
    // Set timeout for 5 seconds, then navigate to /home
    const timer = setTimeout(() => {
      navigate('/home');  // Navigate to /home after 5 seconds
    }, 5000);

    // Clean up the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim the background image for better text/logo visibility
    zIndex: 0,
  };

  const logoStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    zIndex: 1,
    width: '100px',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    padding: '8px',
    backgroundColor: 'transparent', // Removed black background
  };

  const textStyle = {
    position: 'absolute',
    top: '60%',
    right: '40px',
    transform: 'translateY(-50%)',
    textAlign: 'right',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    opacity: 0,
    animation: 'fadeIn 2s ease-in-out forwards',
    animationDelay: '0.5s',
    zIndex: 1,
  };

  const styleSheet = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{styleSheet}</style>
      <div style={overlayStyle}></div>
      <img src={Logo} alt="Logo" style={logoStyle} />
      <div style={textStyle}>
        Welcome to <span style={{ color: 'orange' }}>StudentHub</span><br />
        A Social Platform to Upload and Explore Code
      </div>
    </div>
  );
};

export default Intro;
