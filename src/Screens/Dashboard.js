import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs'; // Bootstrap icon for profile
import { IoHome } from 'react-icons/io5'; // Bootstrap icon for Home

const Dashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    techStack: '',
    codeFile: null,
    permission: 'no',
  });

  const containerStyle = {
    display: 'flex',
    width: '100%',
    height: '100vh',
    background: '#f9f9f9',
    padding: '2rem',
  };

  const sidebarStyle = {
    width: '250px',
    background: '#333',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const profileIconStyle = {
    fontSize: '2rem',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const profileDropdownStyle = {
    position: 'absolute',
    top: '60px',
    right: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    padding: '1rem',
    borderRadius: '8px',
    zIndex: 10,
  };

  const addButtonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#000',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const mainContentStyle = {
    marginLeft: '250px',
    width: 'calc(100% - 250px)',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  };

  const homeTabStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  };

  const sectionStyle = {
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
  };

  const modalStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    width: '400px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '1rem',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  };

  const toggleStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
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

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        {/* Profile Icon */}
        <div
          style={profileIconStyle}
          onMouseEnter={() => setShowProfile(true)}
          onMouseLeave={() => setShowProfile(false)}
        >
          <BsPersonCircle />
          {showProfile && (
            <div style={profileDropdownStyle}>
              <p style={{ marginBottom: '0.5rem' }}>user@example.com</p>
              <button style={{ ...addButtonStyle, backgroundColor: '#e74c3c' }}>
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Home Tab */}
        <div style={addButtonStyle}>
          <IoHome /> Home
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Add Project Button */}
        <button onClick={() => setShowModal(true)} style={addButtonStyle}>
          Add Project
        </button>

        {/* Modal */}
        {showModal && (
          <div style={modalOverlayStyle} onClick={() => setShowModal(false)}>
            <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
              <h3>Add New Project</h3>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Project Name"
                  style={inputStyle}
                  onChange={handleFormChange}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Project Description"
                  style={{ ...inputStyle, height: '100px' }}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="text"
                  name="techStack"
                  placeholder="Tech Stack (e.g., React, Node.js)"
                  style={inputStyle}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="file"
                  name="codeFile"
                  style={inputStyle}
                  onChange={handleFormChange}
                  required
                />

                {/* Permission Toggle */}
                <div style={toggleStyle}>
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

                <button type="submit" style={addButtonStyle}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Home Tab - Show other students' posts */}
        <div style={homeTabStyle}>
          <h3>Recent Student Projects</h3>
          <div style={sectionStyle}>
            <h4>Project Name</h4>
            <p>Project description goes here...</p>
            <p>Tech Stack: React, Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
