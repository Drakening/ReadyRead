import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useReadme } from '../../context/ReadmeContext';
import { FiSun, FiMoon, FiZap } from 'react-icons/fi';
import Icon from '../../assets/icon.svg';
import Editor from '../../assets/dashboard-front.png';
import './LandingPage.css';
import TextScramble from '../../components/ui/TextScramble';

const DashboardPreview = () => {
  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dashboard">
        <img src={Editor} alt="Dashboard" className="dashboard-image" />
      </div>
    </motion.div>
  );
};

const LandingPage = () => {
  const { darkMode, toggleDarkMode } = useReadme();

  return (
    <div className={`landing-page  ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header grid">
        <nav className="navbar">
          <div className="logo-container">
            <img src={Icon} alt="Logo" className="logo" />
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider">
              <FiSun className="sunIcon" />
              <FiMoon className="moonIcon" />
            </span>
          </label>
        </nav>
        <div className="header-content">
          <h1 className="text-centered">
              <TextScramble>Create Professional </TextScramble>
            <span className="block">
              <TextScramble>README Files with Ease</TextScramble>
            </span>
          </h1>
          
          <p>
            Our intuitive README generator helps you craft polished documentation for your projects. 
            Save time and ensure consistency across your repositories.
          </p>
          <div className="btn-links">
            <Link to="/readme" className="cta-button">Get Started</Link>
            <a href="https://github.com/Drakening" target="_blank" rel="noopener noreferrer" className="github-button">
              GitHub
            </a>
          </div>
        </div>
      </header>
      <section className="dashboard-preview grid">
        <div className="dashboard-wrapper">
          <DashboardPreview />
        </div>
      </section>
      <footer className="footer">
        <p className="footer-text">
          Made by a developer for developers <FiZap className="thunder-icon" />
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;