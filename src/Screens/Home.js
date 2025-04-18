import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Navbar with Transparent Black Background */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Semi-transparent black background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px 0',
        position: 'relative',
        color: 'white'
      }}>
        {/* Dark overlay to improve text visibility */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: '-1'
        }}></div>

        <div className="container-fluid">
          <span className="navbar-brand fw-bold text-white fs-2">
            📘 StudentHub
          </span>
          <div className="d-flex ms-auto align-items-center">
            <a href="#about" className="nav-link text-white" style={{ cursor: 'pointer' }}>About</a>
            <a href="#why-choose-us" className="nav-link text-white" style={{ cursor: 'pointer' }}>Why Choose Us</a>
            <a href="#contact" className="nav-link text-white" style={{ cursor: 'pointer' }}>Contact</a>
            <Link to="/login" className="btn btn-outline-light mx-2">Login</Link>
            <Link to="/Signup" className="btn" style={{ backgroundColor: '#FF914D', color: 'white' }}>Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        backgroundColor: '#FF914D',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to StudentHub</h1>
          <p className="lead mt-3">
            Discover and share student projects from nearby colleges. Upload your code, showcase ideas, and collaborate!
          </p>
        </div>
      </section>

      {/* About Us Section without Image, with black heading and more content */}
      <section id="about" style={{
        padding: '60px 0',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <h2 className="mb-4 fw-semibold" style={{ color: 'black' }}>About Us</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            StudentHub is a community-driven platform where students can publish their college projects, learn from others, and collaborate. 
            We believe in making tech education more accessible and collaborative. We focus on building a space where students can share their work and gain valuable feedback from their peers. 
            Whether you're a beginner or an experienced coder, you can find opportunities to learn, grow, and collaborate with like-minded individuals.
          </p>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            At StudentHub, we aim to bridge the gap between students and educational projects by creating an interactive environment where students can showcase their work, discuss challenges, and find creative solutions. Join us today to become part of a growing community of tech enthusiasts!
          </p>
        </div>
      </section>

      {/* Why Choose Us Section with black icons */}
      <section id="why-choose-us" style={{
        padding: '60px 0',
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 className="mb-4 fw-semibold text-dark">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card shadow-sm border-light mb-4">
                <div className="card-body text-center">
                  <i className="fas fa-users" style={{ fontSize: '3rem', color: 'orange' }}></i>
                  <h5 className="card-title mt-3">Collaborate</h5>
                  <p className="card-text">Learn and share projects with other students across colleges.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-light mb-4">
                <div className="card-body text-center">
                  <i className="fas fa-lightbulb" style={{ fontSize: '3rem', color: 'orange' }}></i>
                  <h5 className="card-title mt-3">Innovate</h5>
                  <p className="card-text">Explore innovative tech stacks and project ideas with an advanced approach.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-light mb-4">
                <div className="card-body text-center">
                  <i className="fas fa-upload" style={{ fontSize: '3rem', color: 'orange' }}></i>
                  <h5 className="card-title mt-3">Upload Projects</h5>
                  <p className="card-text">Easily upload your projects for others to explore and learn from.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-light mb-4">
                <div className="card-body text-center">
                  <i className="fas fa-lock" style={{ fontSize: '3rem', color: 'orange' }}></i>
                  <h5 className="card-title mt-3">Privacy</h5>
                  <p className="card-text">Set permissions to control who can view and download your code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" style={{
        padding: '60px 0',
        backgroundColor: '#FF914D',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 className="mb-4 fw-semibold text-white">Contact Us</h2>
          <p className="text-light mb-4">We’d love to hear from you. Please fill out the form below to get in touch.</p>
          
          <form style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn" style={{ backgroundColor: 'black', color: 'white' ,borderColor:'white',borderRadius:'5px' }}>Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer with the same background color as the Home and Contact Us section */}
      <footer style={{
        backgroundColor: '#FF914D',
        padding: '30px 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <p className="m-0">© 2025 StudentHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
