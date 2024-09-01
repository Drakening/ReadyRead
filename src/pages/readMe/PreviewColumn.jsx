import React, { useState, useMemo } from 'react';
import { useReadme } from '../../context/ReadmeContext';
import ReactMarkdown from 'react-markdown';
import styles from './PreviewColumn.module.css';

const PreviewColumn = () => {
  const { markdown, darkMode } = useReadme();
  const [previewMode, setPreviewMode] = useState('preview');

  const renderedMarkdown = useMemo(() => {
    return previewMode === 'preview' ? (
      <ReactMarkdown>{markdown}</ReactMarkdown>
    ) : (
      <pre>{markdown}</pre>
    );
  }, [markdown, previewMode]);

  return (
    <div className={`${styles.column} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.header}>
        <h2>Preview</h2>
        <button 
          onClick={() => setPreviewMode(prevMode => prevMode === 'preview' ? 'raw' : 'preview')} 
          className={styles.toggleButton}
        >
          {previewMode === 'preview' ? 'Raw' : 'Preview'}
        </button>
      </div>
      <div className={styles.previewContent}>
        {renderedMarkdown}
      </div>
    </div>
  );
};

export default PreviewColumn;