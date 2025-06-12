import React, { useState } from 'react';

// Mock data for initial courses
const initialCourses = [
  { id: 1, courseId: 'CS201', name: 'Data Structures', ltpc: '3-0-2-4', offered: 'Even Sem 2024-2025 Jan', status: 'approved' },
  { id: 2, courseId: 'CS202', name: 'Algorithms', ltpc: '3-1-0-4', offered: 'Odd Sem 2024-2025 Aug', status: 'approved' },
  { id: 3, courseId: 'CS301', name: 'Operating Systems', ltpc: '3-0-2-4', offered: 'Even Sem 2024-2025 Jan', status: 'approved' },
];

const ManageCourses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [newCourse, setNewCourse] = useState({
    courseId: '',
    name: '',
    ltpc: '',
    offered: '',
  });
  const [showForm, setShowForm] = useState(false);
  const [approvalMsg, setApprovalMsg] = useState('');

  const handleShowForm = () => {
    setShowForm(true);
    setApprovalMsg('');
  };

  const handleSendForApproval = (e) => {
    e.preventDefault();
    if (
      !newCourse.courseId.trim() ||
      !newCourse.name.trim() ||
      !newCourse.ltpc.trim() ||
      !newCourse.offered.trim()
    ) {
      setApprovalMsg('Please fill all fields.');
      return;
    }
    // Add course with status 'waiting'
    setCourses([
      ...courses,
      { id: Date.now(), ...newCourse, status: 'waiting' }
    ]);
    setApprovalMsg('Course sent for approval!');
    setShowForm(false);
    setNewCourse({ courseId: '', name: '', ltpc: '', offered: '' });
  };

  const handleRemoveCourse = (id, name) => {
    if (window.confirm(`Are you sure you want to remove the course "${name}"?`)) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add / Remove Courses</h1>
      {/* Add New Course Button */}
      {!showForm && (
        <button
          className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleShowForm}
        >
          Add New Course
        </button>
      )}
      {/* Add Course Form */}
      {showForm && (
        <form onSubmit={handleSendForApproval} className="flex flex-col gap-2 mb-6 bg-white p-4 rounded shadow">
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
            placeholder="Course ID"
            value={newCourse.courseId}
            onChange={e => setNewCourse({ ...newCourse, courseId: e.target.value })}
          />
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
            placeholder="Course Name"
            value={newCourse.name}
            onChange={e => setNewCourse({ ...newCourse, name: e.target.value })}
          />
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
            placeholder="L-T-P-C"
            value={newCourse.ltpc}
            onChange={e => setNewCourse({ ...newCourse, ltpc: e.target.value })}
          />
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
            placeholder="Offered Time"
            value={newCourse.offered}
            onChange={e => setNewCourse({ ...newCourse, offered: e.target.value })}
          />
          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Send for Approval
            </button>
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              onClick={() => { setShowForm(false); setApprovalMsg(''); }}
            >
              Cancel
            </button>
          </div>
          {approvalMsg && (
            <div className={`mt-2 text-sm ${approvalMsg.includes('sent') ? 'text-green-700' : 'text-red-600'}`}>
              {approvalMsg}
            </div>
          )}
        </form>
      )}
      {/* List of Courses */}
      <ul>
        {courses.map(course => (
          <li key={course.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 mb-3 rounded shadow gap-2">
            <div>
              <div className="font-semibold">
                {course.courseId} - {course.name}
                {course.status === 'waiting' && (
                  <span className="ml-2 text-yellow-600 text-xs font-semibold">(Waiting for approval)</span>
                )}
              </div>
              <div className="text-gray-600 text-sm">L-T-P-C: {course.ltpc}</div>
              <div className="text-gray-600 text-sm">Offered: {course.offered}</div>
            </div>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 mt-2 sm:mt-0"
              onClick={() => handleRemoveCourse(course.id, course.name)}
            >
              Remove
            </button>
          </li>
        ))}
        {courses.length === 0 && (
          <li className="text-gray-500 text-center py-4">No courses assigned.</li>
        )}
      </ul>
    </div>
  );
};

export default ManageCourses;