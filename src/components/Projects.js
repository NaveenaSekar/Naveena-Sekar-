import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

// Project images from public folder
const art1Image = '/art1.jfif';
const tourImage = '/Tour.jpg';
const learnImage = '/learn.jfif';
const libImage = '/lib.jfif';

const Projects = () => {
  const [imageErrors, setImageErrors] = React.useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const projects = [
    {
      title: "Artistry Touch",
      description: "An end-to-end web application that connects artisans with customers, promoting local talent and small businesses. Built with modern web technologies.",
      image: art1Image,
      technologies: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/NaveenaSekar/ArtistryTouch",
      live: null,
      category: "Full Stack Web App",
      icon: <FaCode />
    },
    {
      title: "Tourly",
      description: "A frontend web application that supports trip planning through destination exploration and bookings. Features a clean and intuitive user interface.",
      image: tourImage,
      technologies: ["HTML", "CSS"],
      github: null,
      live: "https://tourlytravel.vercel.app",
      category: "Frontend Web App",
      icon: <FaCode />
    },
    {
      title: "Personalized Online Learning Platform",
      description: "A comprehensive platform that provides personalized courses, live classes, assessments and progress tracking for students.",
      image: learnImage,
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      github: null,
      live: null,
      category: "Web Application",
      icon: <FaCode />
    },
    {
      title: "Library Management System",
      description: "A Python-based management system that organizes library resources and tracks borrowing activities efficiently.",
      image: libImage,
      technologies: ["Python", "MySQL"],
      github: "https://github.com/NaveenaSekar/Library_Management_-System",
      live: null,
      category: "Python Application",
      icon: <FaDatabase />
    }
  ];

  const cardsPerView = 3;
  const totalSlides = Math.ceil(projects.length / cardsPerView);

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

  // Group projects into slides
  const slides = [];
  for (let i = 0; i < projects.length; i += cardsPerView) {
    slides.push(projects.slice(i, i + cardsPerView));
  }

  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Projects</h2>
            <p>Showcasing my work and creativity</p>
          </motion.div>

          <div className="projects-content">
            <div className="carousel-wrapper">
              <button className="carousel-nav-btn prev-btn" onClick={prevSlide}>
                <FaChevronLeft />
              </button>
              
              <div className="carousel-container">
                <div
                  className="projects-carousel"
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
                      {slide.map((project, projectIndex) => (
                        <motion.div
                          key={slideIndex * cardsPerView + projectIndex}
                          className="project-card"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: (slideIndex * cardsPerView + projectIndex) * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="project-header">
                            <div className="project-image">
                              {imageErrors[slideIndex * cardsPerView + projectIndex] ? (
                                <span className="project-emoji">{project.icon}</span>
                              ) : (
                                <img 
                                  src={project.image} 
                                  alt={project.title} 
                                  className="project-image-preview"
                                  onError={() => handleImageError(slideIndex * cardsPerView + projectIndex)}
                                />
                              )}
                            </div>
                            <div className="project-category">
                              <span className="category-icon">{project.icon}</span>
                              {project.category}
                            </div>
                            {project.status && (
                              <div className="project-status">
                                {project.status}
                              </div>
                            )}
                          </div>

                          <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            <div className="project-technologies">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                              ))}
                            </div>

                            <div className="project-links">
                              {project.github && (
                                <a 
                                  href={project.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="project-link github"
                                >
                                  <FaGithub />
                                  View Code
                                </a>
                              )}
                              {project.live && (
                                <a 
                                  href={project.live} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="project-link live"
                                >
                                  <FaExternalLinkAlt />
                                  Live Demo
                                </a>
                              )}
                              {!project.github && !project.live && (
                                <span className="project-link disabled">
                                  <FaCode />
                                  Coming Soon
                                </span>
                              )}
                            </div>
                          </div>
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
        </div>
      </section>

          </>
  );
};

export default Projects;
