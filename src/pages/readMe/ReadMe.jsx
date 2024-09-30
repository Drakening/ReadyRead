import React from 'react';
import { ReadmeProvider } from '../../context/ReadmeContext';
import Navbar from '../../components/Navbar/Navbar';
import SectionsColumn from './SectionsColumn';
import EditorColumn from './EditorColumn';
import PreviewColumn from './PreviewColumn';
import styles from './ReadMe.module.css';

const ReadMe = () => {
  return (
    <ReadmeProvider>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.column}>
            <SectionsColumn />
          </div>
          <div className={styles.column}>
            <EditorColumn />
          </div>
          <div className={styles.column}>
            <PreviewColumn />
          </div>
        </div>
      </div>
    </ReadmeProvider>
  );
};

export default ReadMe;