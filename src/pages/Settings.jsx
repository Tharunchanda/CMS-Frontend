import React, { useState } from 'react';

const Settings = () => {
  const [email, setEmail] = useState('faculty@iitmandi.ac.in');
  const [notification, setNotification] = useState(true);
  const [theme, setTheme] = useState('light');
  const [msg, setMsg] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setMsg('Settings saved successfully!');
    setTimeout(() => setMsg(''), 2000);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <form onSubmit={handleSave} className="bg-white p-6 rounded shadow flex flex-col gap-4">
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Notifications</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={notification}
              onChange={e => setNotification(e.target.checked)}
              className="mr-2"
            />
            Receive email notifications for course updates
          </label>
        </div>
        <div>
          <label className="block font-medium mb-1">Theme</label>
          <select
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={theme}
            onChange={e => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
        {msg && <div className="text-green-700 text-sm">{msg}</div>}
      </form>
    </div>
  );
};

export default Settings;