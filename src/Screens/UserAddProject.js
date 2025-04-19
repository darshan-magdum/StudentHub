// UserAddProject.js
import React from 'react';

const UserAddProject = ({ formData, handleFormChange, handleToggleChange, handleFormSubmit }) => {
  return (
    <div style={styles.modal}>
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
  );
};

const styles = {
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
  addButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#000',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default UserAddProject;
