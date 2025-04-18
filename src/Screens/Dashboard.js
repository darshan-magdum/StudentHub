import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faPlus, faEye } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    techStack: '',
    codeFile: null,
    permission: 'no',
  });

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location = "/";
  };
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'College Women Safety App',
      description: 'A real-time emergency alert and location tracker app for students.',
      techStack: 'React Native, Node.js, MongoDB',
      uploadedBy: 'Mahesh Patil',
      collegeName: 'XYZ University',
      codeFile: 'path_to_file_1',
    },
    {
      id: 2,
      name: 'Scan and Dine',
      description: 'QR-based restaurant menu app for touchless browsing and food orders.',
      techStack: 'React, Express, MongoDB',
      uploadedBy: 'Vedant Patil',
      collegeName: 'ABC College',
      codeFile: 'path_to_file_2',
    },
  ]);

  const darkColor = '#1e1e2f';

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    navbar: {
      height: '60px',
      backgroundColor: darkColor,
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
    main: {
      marginLeft: '250px',
      marginTop: '80px',
      padding: '20px',
      backgroundColor: '#f0f2f5',
      height: 'calc(100vh - 80px)',
      overflowY: 'auto',
    },
    postCard: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      borderLeft: '4px solid #007bff',
    },
    postTitle: {
      margin: 0,
      fontSize: '20px',
      color: '#333',
    },
    postDescription: {
      margin: '10px 0',
      color: '#555',
    },
    postStack: {
      fontSize: '14px',
      color: '#007bff',
      fontWeight: 'bold',
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
      marginLeft:"25px"
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 200,
    },
    modal: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      width: '400px',
      boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    },
    input: {
      width: '100%',
      marginBottom: '1rem',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    toggle: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
    },
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleToggleChange = () => {
    setFormData((prev) => ({
      ...prev,
      permission: prev.permission === 'yes' ? 'no' : 'yes',
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted project:', formData);
    setShowModal(false);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleDownload = (file) => {
    // Here, you would implement the logic to download the project file
    console.log('Downloading file:', file);
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
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
              <button style={{ ...styles.addButton, backgroundColor: '#e74c3c' }} onClick={handleSignOut}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
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

      {/* Main Content */}
      <div style={styles.main}>
        {activePage === 'home' && (
          <>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>Recent Student Projects</h2>
            {projects.map((project) => (
              <div key={project.id} style={styles.postCard}>
                <h4 style={styles.postTitle}>{project.name}</h4>
                <p style={styles.postDescription}>{project.description}</p>
                <p style={styles.postStack}>{project.techStack}</p>
                <p>
                  Uploaded By: {project.uploadedBy} - {project.collegeName}
                </p>
                <button
                  style={{ ...styles.addButton, backgroundColor: '#007bff' }}
                  onClick={() => handleDownload(project.codeFile)}
                >
                  Download
                </button>
              </div>
            ))}
          </>
        )}

        {activePage === 'view' && (
          <>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>Your Projects</h2>
            {projects.map((project) => (
              <div key={project.id} style={styles.postCard}>
                <h4 style={styles.postTitle}>{project.name}</h4>
                <p style={styles.postDescription}>{project.description}</p>
                <p style={styles.postStack}>{project.techStack}</p>
                <p>
                  Uploaded By: {project.uploadedBy} - {project.collegeName}
                </p>
                <button
                  style={{ ...styles.addButton, backgroundColor: '#007bff' }}
                  onClick={() => handleDownload(project.codeFile)}
                >
                  Download
                </button>
                <button
                  style={{
                    ...styles.addButton,
                    backgroundColor: '#e74c3c',
                    marginTop: '10px',
                  }}
                  onClick={() => handleDeleteProject(project.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Add New Project</h3>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                style={styles.input}
                onChange={handleFormChange}
                required
              />
              <textarea
                name="description"
                placeholder="Project Description"
                style={{ ...styles.input, height: '100px' }}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                name="techStack"
                placeholder="Tech Stack (e.g., React, Node.js)"
                style={styles.input}
                onChange={handleFormChange}
                required
              />
              <input
                type="file"
                name="codeFile"
                style={styles.input}
                onChange={handleFormChange}
                required
              />
              <div style={styles.toggle}>
                <label>Allow Download</label>
                <input
                  type="checkbox"
                  checked={formData.permission === 'yes'}
                  onChange={handleToggleChange}
                  style={{ marginLeft: '10px' }}
                />
                <span style={{ marginLeft: '10px' }}>
                  {formData.permission === 'yes' ? 'Yes' : 'No'}
                </span>
              </div>
              <button type="submit" style={styles.addButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
