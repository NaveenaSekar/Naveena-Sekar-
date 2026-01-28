import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'certifications', label: 'Milestones' },
    { to: 'contact', label: 'Contact', isButton: true }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-menu">
          {navItems.map((item) => (
            item.isButton ? (
              <Link
                key={item.to}
                to={item.to}
                className="nav-button"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link ${activeSection === item.to ? 'active' : ''}`}
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.to);
                }}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          item.isButton ? (
            <Link
              key={item.to}
              to={item.to}
              className="mobile-button"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ) : (
            <Link
              key={item.to}
              to={item.to}
              className="mobile-link"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
