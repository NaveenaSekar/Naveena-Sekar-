import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGraduationCap, FaCode, FaDatabase } from 'react-icons/fa';
import './CertificatesPage.css';

const Certificates = () => {
  const handleBackClick = () => {
    window.location.href = '#certifications';
  };

  const certificates = [
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB, Inc.",
      date: "2024",
      category: "Database",
      level: "Associate",
      icon: "🏅",
      color: "#4CAF50",
      progress: 85
    },
    {
      title: "Beginning Python",
      issuer: "Infosys Springboard",
      date: "2024",
      category: "Programming",
      level: "Beginner",
      icon: "🏅",
      color: "#3776AB",
      progress: 75
    },
    {
      title: "Database Management System",
      issuer: "Infosys SpringBoard",
      date: "2025",
      category: "Database",
      level: "Intermediate",
      icon: "🏅",
      color: "#FF9800",
      progress: 90
    }
  ];

  const calculateOverallProgress = () => {
    return Math.round(certificates.reduce((acc, cert) => acc + cert.progress, 0) / certificates.length);
  };

  return (
    <section id="certificates" className="certificates-page">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="back-btn" onClick={handleBackClick}>
            <FaArrowLeft /> Back to Certifications
          </button>
          <h1>Professional Certificates</h1>
          <p>My journey of continuous learning and skill development</p>
        </motion.div>

        
        {/* Certificates Grid */}
        <motion.div
          className="certificates-grid-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Certificate Details</h2>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="certificate-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="cert-header">
                  <div className="cert-icon-large" style={{ backgroundColor: cert.color }}>
                    {cert.icon}
                  </div>
                  <div className="cert-level">{cert.level}</div>
                </div>
                
                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-meta">
                    <span className="cert-category" style={{ backgroundColor: cert.color }}>
                      {cert.category}
                    </span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  
                  <div className="cert-progress">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        style={{ backgroundColor: cert.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cert.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="progress-text">{cert.progress}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey Summary */}
        <motion.div
          className="learning-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <FaGraduationCap className="summary-icon" />
            <h2>Continuous Learning Journey</h2>
            <p>
              My certification journey reflects my commitment to staying current with technology trends 
              and expanding my skill set. From database management to programming languages, 
              each certificate represents a step toward becoming a well-rounded IT professional. 
              I believe in lifelong learning and continuously seek opportunities to enhance my expertise.
            </p>
            <div className="journey-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <strong>Focused Learning</strong>
                  <p>Targeted skill development in key technologies</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📈</span>
                <div>
                  <strong>Progressive Growth</strong>
                  <p>Building expertise from beginner to advanced levels</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏆</span>
                <div>
                  <strong>Industry Recognition</strong>
                  <p>Certifications from reputable organizations</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
