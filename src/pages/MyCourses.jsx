import React, { useState } from 'react';

// Mock data
const courses = [
  {
    id: 1,
    name: 'Data Structures',
    students: [
      { id: 101, name: 'Alice', roll: 'B23121' },
      { id: 102, name: 'Bob', roll: 'B23137' },
    ],
  },
  {
    id: 2,
    name: 'Algorithms',
    students: [
      { id: 103, name: 'Charlie', roll: 'B23145' },
      { id: 104, name: 'David', roll: 'B23152' },
    ],
  },
];

const getEmail = (roll) => `${roll.toLowerCase()}@students.iitmandi.ac.in`;

const MyCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmails = () => {
    if (!selectedCourse) return;
    const emails = selectedCourse.students.map((s) => getEmail(s.roll)).join(', ');
    navigator.clipboard.writeText(emails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Courses You Teach</h1>
      <ul className="mb-6">
        {courses.map((course) => (
          <li key={course.id} className="mb-4">
            <div className="flex items-center justify-between bg-white p-4 rounded shadow">
              <span className="font-medium">{course.name}</span>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setSelectedCourse(course)}
              >
                View Students
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">
            Students enrolled in {selectedCourse.name}
          </h2>
          <button
            className="mb-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            onClick={handleCopyEmails}
          >
            Copy All Emails
          </button>
          {copied && (
            <span className="ml-2 text-green-700 font-medium">Copied!</span>
          )}
          <ul className="mt-2">
            {selectedCourse.students.map((student) => (
              <li key={student.id} className="py-1 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <span className="font-medium">{student.name}</span>
                <span className="text-gray-600">{student.roll}</span>
                <span className="text-blue-700">{getEmail(student.roll)}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
            onClick={() => setSelectedCourse(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCourses;