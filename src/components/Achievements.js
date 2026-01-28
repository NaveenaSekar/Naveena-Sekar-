import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaArrowLeft } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const handleBackClick = () => {
    window.location.href = '#certifications';
  };

  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Academic Excellence",
      description: "Recognized for outstanding academic performance (2023-2024) in the Department of IT",
      date: "2024",
      category: "Academic Excellence",
      color: "#ffd700"
    },
    {
      icon: <FaMedal />,
      title: "Hackathon Winner",
      description: "Winner of Hackathon'25, Tamil Mandram, Kongu Engineering College",
      date: "2025",
      category: "Competition",
      color: "#c0c0c0"
    },
    {
      icon: <FaCertificate />,
      title: "Hackathon Runner",
      description: "Runner-up in Hackathon competitions",
      date: "2025",
      category: "Competition",
      color: "#cd7f32"
    },
    {
      icon: <FaStar />,
      title: "CodeZone & Logo Design",
      description: "1st prize in CodeZone, SAKHI'25, KEC and 1st prize in Women's Day Logo Designing, WDC, KEC",
      date: "2025",
      category: "Achievement",
      color: "#ff6b6b"
    }
  ];

  return (
    <section id="achievements" className="achievements-page">
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
          <h1>My Achievements Timeline</h1>
          <p>A journey of excellence and continuous growth</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot" style={{ backgroundColor: achievement.color }}>
                {achievement.icon}
              </div>
              
              <motion.div
                className="timeline-content"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="achievement-date">{achievement.date}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <span className="achievement-category" style={{ backgroundColor: achievement.color }}>
                  {achievement.category}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="achievements-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <div className="summary-icon">🏆</div>
            <h2>Continuous Excellence</h2>
            <p>
              Each achievement represents a milestone in my journey of learning and growth. 
              From academic excellence to competitive programming victories, these experiences 
              have shaped me into a dedicated and skilled IT professional ready to take on new challenges.
            </p>
            <div className="achievement-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Major Achievements</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Hackathon Wins</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Academic Excellence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
