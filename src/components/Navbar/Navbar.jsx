import React from 'react';
import { useReadme } from '../../context/ReadmeContext';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
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
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <span className={styles.slider}>
            <FiSun className={styles.sunIcon} />
            <FiMoon className={styles.moonIcon} />
          </span>
        </label>
        <button onClick={downloadReadme} className={styles.downloadButton}>Download</button>
      </div>
    </nav>
  );
};

export default Navbar;