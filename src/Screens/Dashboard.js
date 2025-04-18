import React from 'react';

const Dashboard = () => {
  const containerStyle = {
    width: '100%',
    height: '100vh',
    background: '#f9f9f9',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  };

  const uploadButtonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#000',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const sectionStyle = {
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const textStyle = {
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={titleStyle}>Welcome to StudentHub Dashboard</div>
        <button style={uploadButtonStyle}>Upload Code</button>
      </div>

      <div style={sectionStyle}>
        <h3>Recent Code Uploads</h3>
        <p style={textStyle}>No code uploaded yet. Start sharing your work with the community!</p>
      </div>
    </div>
  );
};

export default Dashboard;
