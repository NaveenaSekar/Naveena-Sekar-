import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaHtml5 } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-wrapper">
        <div className="hero-section new-hero">
          <div className="hero-container-new">
            <motion.div
              className="hero-avatar-container"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-avatar-wrapper">
                <div className="hero-avatar">
                  <img src="/assets/Naveena.jpeg" alt="Naveena S" />
                </div>
                <div className="tech-icons">
                  <div className="tech-icon icon-1">
                    <FaPython />
                  </div>
                  <div className="tech-icon icon-2">
                    <FaGithub />
                  </div>
                  <div className="tech-icon icon-3">
                    <FaHtml5 />
                  </div>
                  <div className="tech-icon icon-4">
                    <SiMongodb />
                  </div>
                  <div className="tech-icon icon-5">
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>MS</span>
                  </div>
                  <div className="tech-icon icon-6">
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>VS</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-content-new"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="hero-title">
                Hello I'm Naveena Sekar
              </h1>
              <h2 className="hero-subtitle">Frontend Developer / DBMS & Machine Learning Enthusiast </h2>
              <p className="hero-description-new">
                I focuse on building secure, scalable, and maintainable web applications using modern technologies and best practices.
              </p>

              <div className="hero-actions-new">
                <a 
                  href="/Naveena%20Sekar.pdf" 
                  className="btn btn-primary-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
                <Link to="projects" smooth={true} duration={500}>
                  <button className="btn btn-secondary-dark" onClick={scrollToProjects}>
                    View My Works
                  </button>
                </Link>
              </div>

              <div className="hero-social">
                <a
                  href="https://www.linkedin.com/in/naveena-sekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/NaveenaSekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:naveenasekar1604@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
