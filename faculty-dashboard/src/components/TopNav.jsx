import React from 'react';
import { HiUserCircle, HiSun, HiMoon } from 'react-icons/hi';

const TopNav = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="flex items-center bg-gray-800 text-white p-4">
      <div className="ml-auto flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700">
          {isDarkMode ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
        </button>
        <HiUserCircle className="w-8 h-8" />
      </div>
    </header>
  );
};

export default TopNav;
