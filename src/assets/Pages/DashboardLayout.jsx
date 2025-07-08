// DashboardLayout.js
import React, { useState } from 'react';
import Sidebar from '../Component/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden transition-all duration-300 ease-in-out">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
