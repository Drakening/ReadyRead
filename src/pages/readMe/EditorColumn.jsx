import React, { useState } from 'react';
import { useReadme } from '../../context/ReadmeContext';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import styles from './EditorColumn.module.css';

const EditorColumn = () => {
  const { markdown: markdownContent, updateMarkdown, darkMode } = useReadme();
  const [buttonText, setButtonText] = useState('Copy');

  const handleEditorChange = (value) => {
    updateMarkdown(value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent)
      .then(() => {
        setButtonText('Copied!');
        setTimeout(() => {
          setButtonText('Copy');
        }, 2000);
      });
  };

  return (
    <div className={`${styles.column} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.header}>
        <h2>Editor</h2>
        <button className={styles.copyButton} onClick={handleCopy}>
          {buttonText}
        </button>
      </div>
      <div className={styles.editorWrapper}>
        <CodeMirror
          value={markdownContent}
          height="100%"
          extensions={[markdown(), EditorView.lineWrapping]}
          theme={darkMode ? oneDark : undefined}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default EditorColumn;
