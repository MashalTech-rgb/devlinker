import React, { useState, useEffect } from 'react';
import { FaChartLine, FaUser, FaFolder, FaCode, FaBell, FaSearch, FaStar, FaHome, FaCog, FaPalette, FaShieldAlt, FaSignOutAlt, FaChevronLeft, FaChevronRight, FaEllipsisH, FaCalendarAlt, FaEnvelope, FaThumbsUp } from 'react-icons/fa';
import { Outlet, NavLink, } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    profileViews: 0,
    projects: 0,
    skills: 0,
    messages: 0
  });
  
  const [notifications, setNotifications] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        profileViews: 1248,
        projects: 8,
        skills: 12,
        messages: 24
      });
      
      setNotifications([
        { id: 1, icon: <FaStar className="text-amber-400" />, text: 'Your portfolio received 5 new stars', time: '1 hour ago' },
        { id: 2, icon: <FaThumbsUp className="text-sky-500" />, text: 'New comment on your project', time: '2 hours ago' },
        { id: 3, icon: <FaCalendarAlt className="text-indigo-500" />, text: 'Meeting with client at 3 PM', time: '3 hours ago' }
      ]);
      
      setRecentActivity([
        { id: 1, action: 'Updated profile information', time: '2 hours ago' },
        { id: 2, action: 'Added a new project: E-commerce Dashboard', time: '1 day ago' },
        { id: 3, action: 'Added new skills: TypeScript, Next.js', time: '2 days ago' }
      ]);
      
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-24'} bg-gradient-to-b from-indigo-800 to-indigo-700 text-white shadow-xl transition-all duration-300 ease-in-out z-10`}>
        <div className="p-5 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-sky-400 to-indigo-500 w-8 h-8 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              {isSidebarOpen && (
                <span className="text-xl font-bold text-white">DevLinker</span>
              )}
            </div>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 rounded-md text-indigo-200 hover:bg-indigo-600 transition-colors"
            >
              {isSidebarOpen ? (
                <FaChevronLeft className="text-lg" />
              ) : (
                <FaChevronRight className="text-lg" />
              )}
            </button>
          </div>

          <div className="mb-8">
            <div className="flex items-center space-x-3 bg-indigo-700/80 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                M
              </div>
              {isSidebarOpen && (
                <div>
                  <p className="font-semibold">Mashal Ibrar</p>
                  <p className="text-sm text-indigo-200">Frontend Developer</p>
                </div>
              )}
            </div>
          </div>

         <nav className="mb-8 flex-1">
  <ul className="space-y-1">
    <li>
      <NavLink 
        to="/dashboard"
        className={({isActive}) => 
          `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
            isActive 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'text-indigo-200 hover:bg-indigo-600'
          }`
        }
      >
        <FaHome className="text-lg" />
        {isSidebarOpen && <span>Dashboard</span>}
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/profile"
        className={({isActive}) => 
          `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
            isActive 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'text-indigo-200 hover:bg-indigo-600'
          }`
        }
      >
        <FaUser className="text-lg" />
        {isSidebarOpen && <span>Profile</span>}
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/projects"
        className={({isActive}) => 
          `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
            isActive 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'text-indigo-200 hover:bg-indigo-600'
          }`
        }
      >
        <FaFolder className="text-lg" />
        {isSidebarOpen && <span>Projects</span>}
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/skills"
        className={({isActive}) => 
          `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
            isActive 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'text-indigo-200 hover:bg-indigo-600'
          }`
        }
      >
        <FaCode className="text-lg" />
        {isSidebarOpen && <span>Skills</span>}
      </NavLink>
    </li>
    <li>
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition text-indigo-200 hover:bg-indigo-600"
      >
        <FaPalette className="text-lg" />
        {isSidebarOpen && <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>}
      </button>
    </li>
    <li>
      <NavLink 
        to="/settings"
        className={({isActive}) => 
          `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
            isActive 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'text-indigo-200 hover:bg-indigo-600'
          }`
        }
      >
        <FaCog className="text-lg" />
        {isSidebarOpen && <span>Settings</span>}
      </NavLink>
    </li>
  </ul>
</nav>

          {isSidebarOpen && (
            <div className="p-4 bg-indigo-700/80 rounded-xl mb-4">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-sky-300" />
                Premium Account
              </h3>
              <p className="text-sm text-indigo-200 mb-4">Unlock all features and customization options</p>
              <button className="w-full py-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg hover:from-sky-600 hover:to-indigo-700 transition font-medium flex items-center justify-center shadow-lg">
                Upgrade Now
              </button>
            </div>
          )}

          <button className="flex items-center space-x-3 px-4 py-3 rounded-xl text-indigo-200 hover:bg-indigo-600 transition-colors">
            <FaSignOutAlt className="text-lg" />
            {isSidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden transition-all duration-300 ease-in-out">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Welcome back! Here's your portfolio performance</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                />
              </div>
              
              <button className="relative p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <FaBell className="text-gray-600 dark:text-gray-300 text-xl" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold cursor-pointer">
                M
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700 transition-transform hover:scale-[1.02]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Profile Views</p>
                <h3 className="text-2xl font-bold mt-1 dark:text-white">{stats.profileViews.toLocaleString()}</h3>
                <p className="text-emerald-500 text-sm flex items-center mt-1">
                  <FaChartLine className="mr-1" /> 12% increase
                </p>
              </div>
              <div className="bg-sky-100 dark:bg-sky-900/30 p-3 rounded-lg">
                <FaUser className="text-sky-500 dark:text-sky-400 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700 transition-transform hover:scale-[1.02]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Projects</p>
                <h3 className="text-2xl font-bold mt-1 dark:text-white">{stats.projects}</h3>
                <p className="text-emerald-500 text-sm flex items-center mt-1">
                  <FaChartLine className="mr-1" /> 2 new this month
                </p>
              </div>
              <div className="bg-violet-100 dark:bg-violet-900/30 p-3 rounded-lg">
                <FaFolder className="text-violet-500 dark:text-violet-400 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700 transition-transform hover:scale-[1.02]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Skills</p>
                <h3 className="text-2xl font-bold mt-1 dark:text-white">{stats.skills}</h3>
                <p className="text-emerald-500 text-sm flex items-center mt-1">
                  <FaChartLine className="mr-1" /> 3 new added
                </p>
              </div>
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                <FaCode className="text-emerald-500 dark:text-emerald-400 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700 transition-transform hover:scale-[1.02]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Messages</p>
                <h3 className="text-2xl font-bold mt-1 dark:text-white">{stats.messages}</h3>
                <p className="text-emerald-500 text-sm flex items-center mt-1">
                  <FaChartLine className="mr-1" /> 5 unread
                </p>
              </div>
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                <FaEnvelope className="text-amber-500 dark:text-amber-400 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portfolio Performance */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold dark:text-white">Portfolio Performance</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm dark:text-gray-300">Week</button>
                <button className="px-3 py-1 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg text-sm shadow-md">Month</button>
                <button className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm dark:text-gray-300">Year</button>
              </div>
            </div>
            
            <div className="h-64">
              <div className="flex items-end h-full space-x-3 justify-center">
                {[40, 60, 80, 65, 90, 75, 100, 85, 70, 95, 80, 75].map((height, index) => (
                  <div 
                    key={index} 
                    className="w-6 bg-gradient-to-t from-sky-400 to-indigo-500 rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-4">
                <div className="flex items-center text-sm dark:text-gray-300">
                  <div className="w-3 h-3 bg-sky-500 rounded-full mr-2"></div>
                  <span>Profile Views</span>
                </div>
                <div className="flex items-center text-sm dark:text-gray-300">
                  <div className="w-3 h-3 bg-violet-500 rounded-full mr-2"></div>
                  <span>Project Views</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold dark:text-white">Notifications</h2>
              <button className="text-sky-500 hover:text-sky-600 font-medium dark:text-sky-400">View All</button>
            </div>
            <div className="space-y-4">
              {notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-colors"
                >
                  <div className="flex items-start">
                    {notification.icon && (
                      <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg text-sky-500 dark:text-sky-400 mr-3">
                        {notification.icon}
                      </div>
                    )}
                    <div>
                      <p className="font-medium dark:text-gray-200">{notification.text}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold dark:text-white">Recent Activity</h2>
            <button className="text-sky-500 hover:text-sky-600 font-medium dark:text-sky-400">View All</button>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map(activity => (
              <div key={activity.id} className="flex items-start p-4 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div className="flex-1">
                  <p className="font-medium dark:text-gray-200">{activity.action}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                </div>
                <button className="p-2 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <FaEllipsisH />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Overview */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold dark:text-white">Projects Overview</h2>
            <button className="text-sky-500 hover:text-sky-600 font-medium dark:text-sky-400">View All Projects</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute top-4 right-4">
                <FaStar className="text-amber-400" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 dark:text-white">E-commerce Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">A modern dashboard for e-commerce analytics with real-time data visualization</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm rounded-full">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm rounded-full">Chart.js</span>
                </div>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-medium flex justify-between items-center">
                <span>View Details</span>
                <span className="bg-white/20 rounded-full px-2 py-1 text-xs">Active</span>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute top-4 right-4">
                <FaStar className="text-amber-400" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 dark:text-white">Task Management App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">A drag-and-drop task manager with team collaboration features</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm rounded-full">Redux</span>
                  <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm rounded-full">Firebase</span>
                </div>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white text-sm font-medium flex justify-between items-center">
                <span>View Details</span>
                <span className="bg-white/20 rounded-full px-2 py-1 text-xs">Active</span>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute top-4 right-4">
                <FaStar className="text-amber-400" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 dark:text-white">Portfolio Builder</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Drag-and-drop portfolio builder for developers and designers</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full">Material UI</span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full">Node.js</span>
                </div>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-medium flex justify-between items-center">
                <span>View Details</span>
                <span className="bg-white/20 rounded-full px-2 py-1 text-xs">Active</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} DevLinker Dashboard. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Help Center</a>
            <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Terms of Service</a>
          </div>
        </footer>
      </main>
      <Outlet/>
    </div>
  );
};

export default Dashboard;