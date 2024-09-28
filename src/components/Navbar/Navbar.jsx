import React from 'react';
import { useReadme } from '../../context/ReadmeContext';
import { Link } from 'react-router-dom';
import Icon from '../../assets/icon.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { darkMode, toggleDarkMode, markdown } = useReadme();

  const downloadReadme = () => {
    const element = document.createElement('a');
    const file = new Blob([markdown], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.darkMode : ''}`}>
      <Link to="/">
        <div className={styles.logo}>
        <img src={Icon} alt="Logo" />
        </div>
      </Link>
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