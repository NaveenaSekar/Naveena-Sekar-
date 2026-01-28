import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPython, FaJs, FaJava, FaAws 
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const techSkills = [
    { icon: <FaPython />, label: "Python" },
    { icon: <FaJava />, label: "Java" },
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <FaAws />, label: "AWS" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-image-container">
              <div className="about-image">
                <img src="/assets/Nams.jpeg" alt="Naveena S" />
              </div>
              <div className="image-decoration">
                <div className="decoration-hex hex-1"></div>
                <div className="decoration-hex hex-2"></div>
                <div className="decoration-hex hex-3"></div>
                <div className="decoration-hex hex-4"></div>
                <div className="decoration-hex hex-5"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="about-title">
              <span className="title-word">About</span> <span className="title-word">Me</span>
            </h2>
            <p className="about-intro">
              I'm Naveena Sekar, an enthusiastic Information Technology undergraduate who loves turning ideas into functional and impactful digital solutions.
              With a strong interest in frontend development, databases, and machine learning, I enjoy building complete web applications that are both user-friendly and technically sound. 
            </p>
            <p className="about-description">
            Currently, I’m strengthening my skills to build end-to-end applications and 
            explore machine learning technologies.</p>
            <p className="about-description">
            My academic journey and project work have strengthened my problem-solving skills and attention to detail.
            I enjoy transforming ideas into clean, functional, and user-friendly solutions.
            </p>
            <p className="about-commitment">
              
              ✨ The challenge of building under pressure keeps me motivated to learn and improve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
