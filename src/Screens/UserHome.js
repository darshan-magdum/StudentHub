// UserHome.js
import React from 'react';

const UserHome = ({ projects, handleDownload }) => {
  return (
    <>
      <h2 style={styles.pageTitle}>Recent Student Projects</h2>
      {projects.map((project) => (
        <div key={project.id} style={styles.postCard}>
          <div style={styles.header}>
            <h4 style={styles.postTitle}>{project.name}</h4>
            <p style={styles.postStack}>
              <i className="fa fa-cogs" style={styles.icon}></i> {project.techStack}
            </p>
          </div>
          <p style={styles.postDescription}>{project.description}</p>
          <div style={styles.footer}>
            <p style={styles.author}>Uploaded By: {project.uploadedBy}</p>
            <p style={styles.collegeName}>{project.collegeName}</p>
          </div>
          <button
            style={styles.downloadButton}
            onClick={() => handleDownload(project.codeFile)}
          >
            <i className="fa fa-download" style={styles.downloadIcon}></i> Download
          </button>
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
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '25px',
    border: '1px solid #e1e1e1',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
  },
  postStack: {
    fontSize: '14px',
    color: '#007bff',
    fontWeight: '500',
    textTransform: 'uppercase',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  postDescription: {
    margin: '15px 0',
    color: '#555',
    lineHeight: '1.6',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
  },
  author: {
    fontSize: '14px',
    color: '#777',
  },
  collegeName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
  },
  downloadButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '30px',
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  },
  icon: {
    fontSize: '16px',
    color: '#333',
  },
  downloadIcon: {
    fontSize: '16px',
    color: 'white',
    marginRight: '10px',
  },
};

export default UserHome;
