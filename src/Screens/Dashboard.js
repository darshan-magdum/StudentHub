import React, { useState } from 'react';
import UserSidebar from './UserSidebar';
import UserNavbar from './UserNavbar';
import UserHome from './UserHome';
import UserAddProject from './UserAddProject';
import UserViewProject from './UserViewProject';

const Dashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activePage, setActivePage] = useState('home'); // 'home', 'view', or 'add'
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    techStack: '',
    codeFile: null,
    permission: 'no',
  });

  const [projects, setProjects] = useState([
    // Initial project data
    { id: 1, name: 'Project 1', description: 'Description 1', techStack: 'React, Node.js', codeFile: null },
    { id: 2, name: 'Project 2', description: 'Description 2', techStack: 'Vue.js, Express.js', codeFile: null },
  ]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location = '/';
  };

  const handleDownload = (file) => {
    // Logic to download project file
    console.log(`Downloading file: ${file}`);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div style={styles.container}>
      <UserNavbar showProfile={showProfile} setShowProfile={setShowProfile} handleSignOut={handleSignOut} />
      <UserSidebar activePage={activePage} setActivePage={setActivePage} setShowModal={setShowModal} />
      <div style={styles.main}>
        {activePage === 'home' && <UserHome projects={projects} />}
        {activePage === 'view' && (
          <UserViewProject
            projects={projects}
            handleDownload={handleDownload}
            handleDeleteProject={handleDeleteProject}
          />
        )}
        {activePage === 'add' && (
           <>
           <br></br> <br></br> 
        
          <UserAddProject
            formData={formData}
            handleFormChange={handleFormChange}
            handleFormSubmit={handleFormSubmit}
            handleToggleChange={() => {}}
          />
             </>
        )}
      </div>
    </div>
  );
};

// Define styles for the Dashboard component
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  main: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    marginLeft: '250px', // Adjust as per sidebar width
  },
};

export default Dashboard;
