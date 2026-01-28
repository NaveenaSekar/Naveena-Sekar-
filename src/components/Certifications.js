import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaArrowRight } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const handleAchievementsClick = () => {
    window.open('/achievements.html', '_blank');
  };

  const handleCertificatesClick = () => {
    window.open('/certificates.html', '_blank');
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Certifications & Achievements</h2>
          <p>Recognition for my hard work and dedication</p>
        </motion.div>

        <div className="cert-achievements-container">
          <motion.div
            className="cert-option-card achievements-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={handleAchievementsClick}
          >
            <div className="cert-option-icon">
              <FaTrophy />
            </div>
            <div className="cert-option-content">
              <h3>Achievements</h3>
              <p>Academic Excellence, Hackathon Winner and Runner, CodeZone Winner, Logo Design Winner</p>
              <button className="cert-option-btn">
                View Timeline <FaArrowRight />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="cert-option-card certificates-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={handleCertificatesClick}
          >
            <div className="cert-option-icon">
              🏅
            </div>
            <div className="cert-option-content">
              <h3>Professional Certificates</h3>
              <p>MongoDB Associate, Python Programming, Database Management</p>
              <button className="cert-option-btn">
                View Certificates <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
