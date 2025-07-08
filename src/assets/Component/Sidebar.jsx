import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaFolder,
  FaCode,
  FaCog,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  return (
    <aside
      className={`${
        isSidebarOpen ? "w-72" : "w-24"
      } bg-gradient-to-b from-indigo-800 to-indigo-700 text-white shadow-xl transition-all duration-300 ease-in-out z-10`}
    >
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
            onClick={toggleSidebar}
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
            {[
              { to: "home", icon: <FaHome />, label: "Dashboard" },
              { to: "profile", icon: <FaUser />, label: "Profile" },
              { to: "projects", icon: <FaFolder />, label: "Projects" },
              { to: "skills", icon: <FaCode />, label: "Skills" },
              { to: "settings", icon: <FaCog />, label: "Settings" },
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-indigo-200 hover:bg-indigo-600"
                    }`
                  }
                >
                  <span className="text-lg">{item.icon}</span>
                  {isSidebarOpen && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-3 px-4 py-3 rounded-xl text-indigo-200 hover:bg-indigo-600 transition-colors">
            <FaSignOutAlt className="text-lg" />
            {isSidebarOpen && <Link to="SignOut">Sign Out</Link>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
