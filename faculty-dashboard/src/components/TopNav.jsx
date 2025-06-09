import React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <header className="flex items-center bg-gray-800 text-white p-4">
      <div className="ml-auto flex items-center space-x-4">
        <Link to="/profile">
          <HiUserCircle className="w-8 h-8 hover:text-gray-300 transition" />
        </Link>
      </div>
    </header>
  );
};

export default TopNav;
