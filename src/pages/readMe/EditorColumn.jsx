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
    <div className={styles.column}>
      <div className={styles.header}>
        <h2>Editor</h2>
        <button className={styles.resetButton}>Reset</button>
      </div>
      <CodeMirror
        value={markdownContent}
        height="90%"
        extensions={[markdown()]}
        theme={darkMode ? oneDark : undefined}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default EditorColumn;