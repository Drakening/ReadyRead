import React, { useState } from 'react';
import { useReadme } from '../../context/ReadmeContext';
import ReactMarkdown from 'react-markdown';
import styles from './PreviewColumn.module.css';

const PreviewColumn = () => {
  const { markdown } = useReadme();
  const [previewMode, setPreviewMode] = useState('preview');

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h2>Preview</h2>
        <button onClick={() => setPreviewMode(previewMode === 'preview' ? 'raw' : 'preview')} className={styles.toggleButton}>
          {previewMode === 'preview' ? 'Raw' : 'Preview'}
        </button>
      </div>
      <div className={styles.previewContent}>
        {previewMode === 'preview' ? (
          <ReactMarkdown>{markdown}</ReactMarkdown>
        ) : (
          <pre>{markdown}</pre>
        )}
      </div>
    </div>
  );
};

export default PreviewColumn;