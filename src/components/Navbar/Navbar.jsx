import React from 'react';
import { useReadme } from '../../context/ReadmeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useReadme();

  const downloadReadme = () => {
    // Implementation remains the same
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>README Generator</div>
      <div>
        <button onClick={toggleDarkMode} className={styles.iconButton}>
          {darkMode ? '🌙' : '☀️'}
        </button>
        <button onClick={downloadReadme} className={styles.downloadButton}>Download</button>
      </div>
    </nav>
  );
};

export default Navbar;