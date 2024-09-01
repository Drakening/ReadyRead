import React from 'react';
import { useReadme } from '../../context/ReadmeContext';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import styles from './EditorColumn.module.css';

const EditorColumn = () => {
  const { markdown: markdownContent, updateMarkdown, darkMode } = useReadme();

  const handleEditorChange = (value) => {
    updateMarkdown(value);
  };

  return (
    <div className={`${styles.column} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.header}>
        <h2>Editor</h2>
        <button className={styles.copyButton}>Copy</button>
      </div>
      <div className={styles.editorWrapper}>
        <CodeMirror
          value={markdownContent}
          height="100%"
          extensions={[markdown()]}
          theme={darkMode ? oneDark : undefined}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default EditorColumn;