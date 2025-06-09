import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import ExistingCourses from './pages/ExistingCourses';
import MyCourses from './pages/MyCourses';
import ManageCourses from './pages/ManageCourses';
import Students from './pages/Students';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/existing-courses" element={<ExistingCourses />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/manage-courses" element={<ManageCourses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
