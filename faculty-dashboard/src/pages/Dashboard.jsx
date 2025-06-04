import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { schoolName } = useParams();
  const facultyName = "Dr. John Doe"; // Replace with dynamic data
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Welcome, {facultyName}</h1>
      <h2 className="text-xl text-gray-700 mb-6">{schoolName} Dashboard</h2>

      <div className="space-x-4">
        <button
          onClick={() => navigate("/existing-courses")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
        >
          Select Existing Courses
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded">
          Add/Remove Courses
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
