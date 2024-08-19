import React from 'react';
import { ReadmeProvider } from './context/ReadmeContext';
import Navbar from './components/Navbar';
import SectionsColumn from './components/SectionsColumn';
import EditorColumn from './components/EditorColumn';
import PreviewColumn from './components/PreviewColumn';
import styles from './ReadMe.module.css';

const ReadMe = () => {
  return (
    <ReadmeProvider>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <SectionsColumn />
          <EditorColumn />
          <PreviewColumn />
        </div>
      </div>
    </ReadmeProvider>
  );
};

export default ReadMe;