import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserNavbar = ({ handleSignOut }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div style={styles.navbar}>
      <h3>Student Hub</h3>
      <div
        onMouseEnter={() => setShowProfile(true)}
        onMouseLeave={() => setShowProfile(false)}
        style={{ position: 'relative' }}
      >
        <FontAwesomeIcon icon={faUser} style={styles.profileIcon} />
        {showProfile && (
          <div style={styles.profileDropdown}>
            <p style={{ marginBottom: '0.5rem' }}>user@example.com</p>
            <button
              style={{ ...styles.addButton, backgroundColor: '#e74c3c' }}
              onClick={handleSignOut}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    height: '60px',
    backgroundColor: '#1e1e2f',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  profileIcon: {
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer',
  },
  profileDropdown: {
    position: 'absolute',
    top: '30px',
    right: '10px',
    backgroundColor: '#fff',
    color: '#333',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    zIndex: 10,
    width: '200px',
  },
  addButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#000',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '20px',
  },
};

export default UserNavbar;
