import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiBookOpen, HiUserGroup, HiPlusCircle, HiCog } from 'react-icons/hi';

const navItems = [
  { name: 'Dashboard', path: '/', icon: HiHome },
  { name: 'My Courses', path: '/my-courses', icon: HiBookOpen },
  { name: 'Add / Remove Courses', path: '/manage-courses', icon: HiPlusCircle },
  { name: 'Settings', path: '/settings', icon: HiCog },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-xl font-semibold mb-6">Faculty Dashboard</h2>
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center space-x-3 py-2 px-4 rounded-md hover:bg-gray-700 transition"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
