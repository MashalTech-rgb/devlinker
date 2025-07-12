import React from 'react';
import { Link } from 'react-router-dom';
import { FiCompass } from 'react-icons/fi';
import { useUser } from '../Context/UserContext';

const NotFound = () => {
  const { darkMode } = useUser();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center px-4 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-indigo-100 to-blue-50'
    }`}>
      <FiCompass className={`text-7xl mb-6 animate-pulse ${
        darkMode ? 'text-indigo-400' : 'text-indigo-600'
      }`} />
      <h1 className={`text-5xl font-extrabold mb-4 ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>
        404 - You're Lost
      </h1>
      <p className={`text-lg mb-6 max-w-md ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        It looks like you've ventured into uncharted territory. This page doesn't exist.
      </p>
      <Link
        to="/"
        className={`px-6 py-3 font-medium rounded transition ${
          darkMode 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        Beam Me Back 🛸
      </Link>
    </div>
  );
};

export default NotFound;