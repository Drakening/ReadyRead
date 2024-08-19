import React from 'react';
import { useReadme } from '../context/ReadmeContext';
import styles from './SectionsColumn.module.css';

const SectionsColumn = () => {
  const { sections, addSection, removeSection } = useReadme();

  const availableSections = [
    // ... (same as before)
  ];

  return (
    <div className={styles.column}>
      <h2>Sections</h2>
      <p>Click on a section below to edit the contents</p>
      <ul className={styles.sectionList}>
        {sections.map((section, index) => (
          <li key={index} className={styles.sectionItem}>
            <span className={styles.dragHandle}>≡</span>
            <span>{section.name}</span>
            <button onClick={() => removeSection(index)} className={styles.deleteButton}>✕</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addSection({ name: 'Custom Section', content: '## Custom Section\n\nAdd your content here.' })} className={styles.addButton}>
        + Custom Section
      </button>
      <ul className={styles.availableSections}>
        {availableSections.map((section, index) => (
          <li key={index} onClick={() => addSection(section)}>{section.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionsColumn;