import React from 'react';
import { useReadme } from '../../context/ReadmeContext';
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