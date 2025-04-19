// components/UserSidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faEye } from '@fortawesome/free-solid-svg-icons';

const UserSidebar = ({ activePage, setActivePage, setShowModal }) => {
  const darkColor = '#1e1e2f';

  const styles = {
    sidebar: {
      width: '250px',
      background: darkColor,
      color: '#fff',
      paddingTop: '80px',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    sidebarButton: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 15px',
      backgroundColor: '#333',
      border: 'none',
      borderRadius: '10px',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      margin: '0 20px',
    },
    iconStyle: {
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.sidebar}>
      <button style={styles.sidebarButton} onClick={() => setActivePage('home')}>
        <FontAwesomeIcon icon={faHome} style={styles.iconStyle} />
        Home
      </button>
      <button
        style={styles.sidebarButton}
        onClick={() => {
          setActivePage('add');
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faPlus} style={styles.iconStyle} />
        Add Project
      </button>
      <button
        style={styles.sidebarButton}
        onClick={() => setActivePage('view')}
      >
        <FontAwesomeIcon icon={faEye} style={styles.iconStyle} />
        View Projects
      </button>
    </div>
  );
};

export default UserSidebar;
