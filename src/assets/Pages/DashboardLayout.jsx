import React, { useState } from 'react';
import Sidebar from '../Component/Sidebar';
import { Outlet } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { darkMode, toggleDarkMode } = useUser(); // Use context instead of local state

  return (
    <div className={`min-h-screen flex ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isDarkMode={darkMode} // Pass context value
        toggleDarkMode={toggleDarkMode} // Pass context function
      />
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden transition-all duration-300 ease-in-out">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;