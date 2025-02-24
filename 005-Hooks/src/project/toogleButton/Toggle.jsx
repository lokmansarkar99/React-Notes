import { useState, useEffect } from 'react';

export const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </h1>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {isDarkMode? "Switch to Light Mode": "Switch to Dark Mode"}
      </button>
    </div>
  );
};
