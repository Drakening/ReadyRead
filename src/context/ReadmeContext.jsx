import React, { createContext, useState, useContext } from 'react';

const ReadmeContext = createContext();

export const useReadme = () => useContext(ReadmeContext);

export const ReadmeProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [markdown, setMarkdown] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addSection = (section) => {
    setSections([...sections, section]);
  };

  const removeSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const updateMarkdown = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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