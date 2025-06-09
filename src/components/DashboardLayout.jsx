import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

const DashboardLayout = ({ children, toggleTheme, isDarkMode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
