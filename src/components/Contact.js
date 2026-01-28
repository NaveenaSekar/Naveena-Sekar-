import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [isShaking, setIsShaking] = React.useState(false);

  const handleLogoClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "naveenasekar1604@gmail.com",
      link: "mailto:naveenasekar1604@gmail.com",
      color: "#ea4335"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "NaveenaSekar",
      link: "https://github.com/NaveenaSekar",
      color: "#333"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "naveena-sekar",
      link: "https://www.linkedin.com/in/naveena-sekar",
      color: "#0077b5"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Namakkal, Tamil Nadu",
      link: null,
      color: "#ff6b6b"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and design. Feel free to reach out!
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-method"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="contact-logo-container">
              <div className="logo-background">
                <img 
                  src="/Nams.png" 
                  alt="Portfolio Logo" 
                  className={`contact-logo ${isShaking ? 'shake' : ''}`}
                  onClick={handleLogoClick}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="logo-message">
                <h4>Ready to Start?</h4>
                <p>Let's bring your ideas to life!</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Interested in working together?</h3>
            <p>
              Whether you have a project in mind or just want to chat about technology, 
              I'd love to hear from you!
            </p>
            <div className="cta-buttons">
              <a href="mailto:naveenasekar1604@gmail.com" className="btn btn-primary">
                Send Email
              </a>
              <a 
                href="tel:+919786733602" 
                className="btn btn-secondary"
              >
                Call Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
