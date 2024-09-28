import React, { createContext, useState, useContext, useEffect } from 'react';

const ReadmeContext = createContext();

export const useReadme = () => useContext(ReadmeContext);

export const ReadmeProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [markdown, setMarkdown] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const addSection = (section) => {
    setSections([...sections, section]);
    setMarkdown(prevMarkdown => {
      const separator = prevMarkdown ? '\n\n' : '';
      return prevMarkdown + separator + section.content;
    });
  };

  const removeSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
    updateMarkdownFromSections(newSections);
  };

  const updateMarkdown = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  const updateMarkdownFromSections = (newSections) => {
    setMarkdown(newSections.map(section => section.content).join('\n\n'));
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ReadmeContext.Provider value={{
      sections,
      markdown,
      darkMode,
      addSection,
      removeSection,
      updateMarkdown,
      toggleDarkMode
    }}>
      {children}
    </ReadmeContext.Provider>
  );
};