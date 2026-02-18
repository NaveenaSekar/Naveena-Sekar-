import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaDesktop, FaCode, FaDatabase, FaChartBar, FaCloud,
  FaChevronLeft, FaChevronRight, FaHtml5, FaCss3Alt, FaJs, FaTimes, FaFileAlt
} from 'react-icons/fa';
import { 
  SiReact, SiMongodb, SiMysql, SiGithub, 
  SiJira, SiCanva, 
  SiNetlify, SiVercel
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFrontendPanelOpen, setIsFrontendPanelOpen] = useState(false);
  const [isDatabasePanelOpen, setIsDatabasePanelOpen] = useState(false);
  const [isDevToolsPanelOpen, setIsDevToolsPanelOpen] = useState(false);
  const [isDeploymentPanelOpen, setIsDeploymentPanelOpen] = useState(false);
  
  // Mobile accordion states
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSkillExpansion = (skillTitle) => {
    if (!isMobile) return; // Only work on mobile
    setExpandedSkill(prev => prev === skillTitle ? null : skillTitle);
  };
  
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" }
  ];

  const databaseSkills = [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" }
  ];

  const devToolsSkills = [
    { name: "GitHub", icon: <SiGithub />, color: "#181717" },
    { name: "VS Code", icon: <FaCode />, color: "#007ACC" },
    { name: "JIRA", icon: <SiJira />, color: "#0052CC" },
    { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
    { name: "MS Excel", icon: <FaChartBar />, color: "#217346" },
    { name: "MS Word", icon: <FaFileAlt />, color: "#2B579A" }
  ];

  const deploymentSkills = [
    { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
    { name: "Vercel", icon: <SiVercel />, color: "#000000" }
  ];

  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive, accessible interfaces with modern UI patterns and best practices.",
      icon: <FaDesktop />,
      highlighted: false,
      borderColor: "#16a34a", // Green
      onClick: () => isMobile ? toggleSkillExpansion("Frontend Development") : setIsFrontendPanelOpen(true),
      skills: frontendSkills
    },
    {
      title: "Database Management",
      description: "Designing, optimizing, and maintaining reliable data storage with SQL/NoSQL systems.",
      icon: <FaDatabase />,
      highlighted: false,
      borderColor: "#0ea5e9", // Teal/Blue
      onClick: () => isMobile ? toggleSkillExpansion("Database Management") : setIsDatabasePanelOpen(true),
      skills: databaseSkills
    },
    {
      title: "Machine Learning",
      description: "Building data-driven models and insights to enhance functionality and user experiences.",
      icon: <FaChartBar />,
      highlighted: false,
      borderColor: "#9333ea", // Purple
      onClick: () => isMobile ? toggleSkillExpansion("Machine Learning") : null,
      skills: []
    },
    {
      title: "Development Tools & Technologies",
      description: "Proficient in GitHub for version control, VS Code for development, JIRA for project management, Canva for design, and Microsoft Office Suite for documentation and analysis.",
      icon: <FaCode />,
      highlighted: false,
      borderColor: "#f59e0b", // Amber
      onClick: () => isMobile ? toggleSkillExpansion("Development Tools & Technologies") : setIsDevToolsPanelOpen(true),
      skills: devToolsSkills
    },
    {
      title: "Deployment & Hosting",
      description: "Deploy and host your web applications on platforms like Vercel, Netlify, or traditional cloud services.",
      icon: <FaCloud />,
      highlighted: false,
      borderColor: "#2196f3", // Blue
      onClick: () => isMobile ? toggleSkillExpansion("Deployment & Hosting") : setIsDeploymentPanelOpen(true),
      skills: deploymentSkills
    }
  ];

  const cardsPerView = 3;
  const totalSlides = Math.ceil(services.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 >= totalSlides) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev - 1 < 0) return totalSlides - 1;
      return prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Group services into slides
  const slides = [];
  for (let i = 0; i < services.length; i += cardsPerView) {
    slides.push(services.slice(i, i + cardsPerView));
  }

  return (
    <section id="skills" className="skills">
      <div className="container skills-container-wrapper">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Skills</h2>
          <p>Transforming ideas into intuitive digital experiences</p>
        </motion.div>

        {/* Desktop Carousel - Mobile Accordion */}
        {!isMobile ? (
          <div className="skills-content">
            <div className="carousel-wrapper">
              <button className="carousel-nav-btn prev-btn" onClick={prevSlide}>
                <FaChevronLeft />
              </button>
              
              <div className="carousel-container">
                <div
                  className="services-carousel"
                  style={{ 
                    transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                    width: `${totalSlides * 100}%`
                  }}
                >
                  {slides.map((slide, slideIndex) => (
                    <div 
                      key={slideIndex} 
                      className={`carousel-slide ${slide.length < cardsPerView ? 'fewer-cards' : ''}`}
                      style={{ width: `${100 / totalSlides}%` }}
                    >
                      {slide.map((service, serviceIndex) => (
                        <motion.div
                          key={slideIndex * cardsPerView + serviceIndex}
                          className={`service-card ${service.highlighted ? 'highlighted' : ''} ${service.onClick ? 'clickable' : ''}`}
                          style={{ borderColor: service.borderColor }}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: (slideIndex * cardsPerView + serviceIndex) * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          onClick={service.onClick || undefined}
                        >
                          <div className="service-icon">
                            {service.icon}
                          </div>
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <button className="carousel-nav-btn next-btn" onClick={nextSlide}>
                <FaChevronRight />
              </button>
            </div>

            <div className="carousel-pagination">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Mobile Accordion */
          <div className="skills-content mobile-accordion">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="skill-accordion-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div
                  className="skill-accordion-header"
                  onClick={() => toggleSkillExpansion(service.title)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="skill-accordion-icon">
                    {service.icon}
                  </div>
                  <div className="skill-accordion-title">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <motion.div
                    className="skill-accordion-arrow"
                    animate={{ rotate: expandedSkill === service.title ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronRight />
                  </motion.div>
                </motion.div>
                
                <AnimatePresence>
                  {expandedSkill === service.title && service.skills && (
                    <motion.div
                      className="skill-accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="skill-accordion-skills">
                        {service.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            className="skill-accordion-skill-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            <div className="skill-accordion-skill-icon" style={{ color: skill.color }}>
                              {skill.icon}
                            </div>
                            <span className="skill-accordion-skill-name">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
        )}
        )}

        {/* Skills Bars */}
        <AnimatePresence>
          {isFrontendPanelOpen && (
            <>
              <motion.div
                className="skills-bar-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFrontendPanelOpen(false)}
              />
              <motion.div
                className="frontend-skills-bar"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="skills-bar-close"
                  onClick={() => setIsFrontendPanelOpen(false)}
                  aria-label="Close skills bar"
                >
                  <FaTimes />
                </button>
                <div className="skills-bar-icons">
                  {frontendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-bar-icon"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="skill-icon-wrapper" style={{ color: '#ffffff' }}>
                        {skill.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}

          {isDatabasePanelOpen && (
            <>
              <motion.div
                className="skills-bar-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDatabasePanelOpen(false)}
              />
              <motion.div
                className="database-skills-bar"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="skills-bar-close"
                  onClick={() => setIsDatabasePanelOpen(false)}
                  aria-label="Close skills bar"
                >
                  <FaTimes />
                </button>
                <div className="skills-bar-icons">
                  {databaseSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-bar-icon"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}

          {isDevToolsPanelOpen && (
            <>
              <motion.div
                className="skills-bar-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDevToolsPanelOpen(false)}
              />
              <motion.div
                className="devtools-skills-bar"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="skills-bar-close"
                  onClick={() => setIsDevToolsPanelOpen(false)}
                  aria-label="Close skills bar"
                >
                  <FaTimes />
                </button>
                <div className="skills-bar-icons">
                  {devToolsSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-bar-icon"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}

          {isDeploymentPanelOpen && (
            <>
              <motion.div
                className="skills-bar-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDeploymentPanelOpen(false)}
              />
              <motion.div
                className="deployment-skills-bar"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="skills-bar-close"
                  onClick={() => setIsDeploymentPanelOpen(false)}
                  aria-label="Close skills bar"
                >
                  <FaTimes />
                </button>
                <div className="skills-bar-icons">
                  {deploymentSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-bar-icon"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
