import React from 'react';

const Profile = () => (
  <div className="p-6">
    <h1 className="text-2xl font-semibold mb-4">Profile</h1>
    <div className="bg-white rounded shadow p-4 max-w-md">
      <p><strong>Name:</strong> Dr. John Doe</p>
      <p><strong>Email:</strong> johndoe@example.com</p>
      <p><strong>Role:</strong> Faculty</p>
      <p><strong>School:</strong> Scee</p>
      <p><strong>Joined:</strong> January 15, 2020</p>
      <p><strong>Office:</strong> Room 101, SCEE Building, A-17</p>
      {/* Add more profile details as needed */}
      <button
        className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        onClick={() => {
          // Add your logout logic here
          window.location.href = '/';
        }}
      >
        Log Out
      </button>
    </div>
  </div>
);

export default Profile;