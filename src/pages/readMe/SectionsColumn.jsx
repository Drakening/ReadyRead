import React from 'react'
import { useReadme } from '../../context/ReadmeContext'
import styles from './SectionsColumn.module.css'

export default function SectionsColumn() {
  const { sections, addSection, removeSection, darkMode } = useReadme()

  const availableSections = [
    { name: 'Project Title', content: '# Project Title\n\nA brief description of what this project does and who it\'s for' },
    { name: 'Table of Contents', content: '## Table of Contents\n\n- [Introduction](#introduction)\n- [Demo](#demo)\n- [Technologies Used](#technologies-used)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Folder Structure](#folder-structure)\n- [Contributing](#contributing)\n- [License](#license)\n- [Acknowledgements](#acknowledgements)' },
    { name: 'Introduction', content: '## Introduction\n\nProvide a brief overview of the project and explain its purpose and motivation.' },
    { name: 'Demo/Live Preview', content: '## Demo\n\n[Link to live demo](https://your-demo-link.com)\n\n![Screenshot](screenshot.png)' },
    { name: 'Technologies Used', content: '## Technologies Used\n\n- Technology 1\n- Technology 2\n- Technology 3' },
    { name: 'Installation', content: '## Installation\n\n1. Step 1\n2. Step 2\n3. Step 3' },
    { name: 'Usage', content: '## Usage\n\nExplain how to use the project after installation.' },
    { name: 'Folder Structure', content: '## Folder Structure\n\n```\nproject-root/\n├── src/\n│   ├── components/\n│   ├── styles/\n│   └── index.js\n├── public/\n└── README.md\n```' },
    { name: 'Contributing', content: '## Contributing\n\nContributions are welcome! Please feel free to submit a Pull Request.' },
    { name: 'License', content: '## License\n\nThis project is licensed under the [MIT License](https://opensource.org/licenses/MIT).' },
    { name: 'Acknowledgements', content: '## Acknowledgements\n\n- [Resource 1](https://example.com)\n- [Resource 2](https://example.com)' },
  ]

  return (
    <div className={`${styles.column} ${darkMode ? styles.darkMode : ''}`}>
      <h2 className={styles.title}>Sections</h2>
      <p className={styles.subtitle}>Click on a section to edit its contents</p>
      <ul className={styles.sectionList}>
        {sections.map((section, index) => (
          <li key={index} className={styles.sectionItem}>
            <span className={styles.sectionName}>{section.name}</span>
            <button onClick={() => removeSection(index)} className={styles.deleteButton} aria-label="Remove section">
              ×
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => addSection({ name: 'Custom Section', content: '## Custom Section\n\nAdd your content here.' })}
        className={styles.addButton}
      >
        Add Custom Section
      </button>
      <h3 className={styles.availableSectionsTitle}>Available Sections</h3>
      <ul className={styles.availableSections}>
        {availableSections.map((section, index) => (
          <li key={index} onClick={() => addSection(section)} className={styles.availableSection}>
            {section.name}
          </li>
        ))}
      </ul>
    </div>
  )
}