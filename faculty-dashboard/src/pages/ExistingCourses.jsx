import React, { useState } from 'react';

const dummyCourses = [
  {
    code: 'CS301',
    title: 'Operating Systems',
    ltp: '3-1-2-4',
    programme: 'B.Tech CSE',
  },
  {
    code: 'EE201',
    title: 'Digital Electronics',
    ltp: '3-0-2-4',
    programme: 'B.Tech ECE',
  },
  {
    code: 'MA102',
    title: 'Calculus II',
    ltp: '3-1-0-4',
    programme: 'B.Tech MCE',
  },
];

const ExistingCourses = () => {
  const [search, setSearch] = useState('');

  const filteredCourses = dummyCourses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.code.toLowerCase().includes(search.toLowerCase()) ||
    course.programme.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Existing Courses</h1>

      <input
        type="text"
        placeholder="Search courses..."
        className="w-full p-2 border border-gray-300 rounded mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-4">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="mb-2 md:mb-0">
              <p><strong>Code:</strong> {course.code}</p>
              <p><strong>Title:</strong> {course.title}</p>
              <p><strong>L-T-P-C:</strong> {course.ltp}</p>
              <p><strong>Programme:</strong> {course.programme}</p>
            </div>
            <div className="space-x-2 mt-2 md:mt-0">
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded">
                View
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExistingCourses;
