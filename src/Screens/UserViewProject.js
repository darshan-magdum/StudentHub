import React from 'react';

const UserViewProject = ({ projects, handleDownload, handleDeleteProject }) => {
  return (
    <>
      <h2 style={styles.pageTitle}>Your Projects</h2>
      {projects.map((project) => (
        <div key={project.id} style={styles.postCard}>
          <div style={styles.techStackContainer}>
            <i className="fas fa-code" style={styles.techIcon}></i>
            <span style={styles.postStack}>{project.techStack}</span>
          </div>
          <h4 style={styles.postTitle}>{project.name}</h4>
          <p style={styles.postDescription}>{project.description}</p>
          <p style={styles.footer}>
            Uploaded By: {project.uploadedBy} - {project.collegeName}
          </p>
          <div style={styles.buttonsContainer}>
            <button
              style={styles.downloadButton}
              onClick={() => handleDownload(project.codeFile)}
            >
              <i className="fa fa-download" style={styles.whiteIcon}></i> Download
            </button>
            <button
              style={styles.deleteButton}
              onClick={() => handleDeleteProject(project.id)}
            >
              <i className="fa fa-trash" style={styles.whiteIcon}></i> Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const styles = {
  pageTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '30px',
    textAlign: 'center',
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    borderLeft: '4px solid #007bff',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  techStackContainer: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  techIcon: {
    color: '#000', // Black icon
    fontSize: '16px',
  },
  postStack: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#007bff', // Blue text
  },
  postTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    marginTop: '30px',
  },
  postDescription: {
    margin: '10px 0',
    color: '#555',
    lineHeight: '1.6',
  },
  footer: {
    fontSize: '14px',
    color: '#777',
    marginTop: '10px',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  downloadButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  deleteButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#e74c3c',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  whiteIcon: {
    color: 'white',
    marginRight: '8px',
  },
};

export default UserViewProject;
