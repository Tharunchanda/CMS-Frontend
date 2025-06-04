import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import ExistingCourses from './pages/ExistingCourses';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Router>
      <DashboardLayout toggleTheme={toggleTheme} isDarkMode={isDarkMode}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/existing-courses" element={<ExistingCourses />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
