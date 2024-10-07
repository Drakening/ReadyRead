import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReadmeProvider } from './context/ReadmeContext';
import LandingPage from './pages/home/LandingPage';
import ReadMe from './pages/readMe/ReadMe';
import './App.css';

function App() {
  return (
    <ReadmeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/readme" element={<ReadMe />} />
        </Routes>
      </Router>
    </ReadmeProvider>
  );
}

export default App;