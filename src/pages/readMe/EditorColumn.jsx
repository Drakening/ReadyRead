import React from 'react';
import { useReadme } from '../../context/ReadmeContext';
import Editor from '@monaco-editor/react';
import styles from './EditorColumn.module.css';

const EditorColumn = () => {
  const { markdown, updateMarkdown, darkMode } = useReadme();

  const handleEditorChange = (value) => {
    updateMarkdown(value);
  };

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h2>Editor</h2>
        <button className={styles.resetButton}>Reset</button>
      </div>
      <Editor
        height="90%"
        defaultLanguage="markdown"
        theme={darkMode ? 'vs-dark' : 'light'}
        value={markdown}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default EditorColumn;