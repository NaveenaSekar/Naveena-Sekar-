import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-simple"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Thank You For Visiting @Naveena Sekar ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
