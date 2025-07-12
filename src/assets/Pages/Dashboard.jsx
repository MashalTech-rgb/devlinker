import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaProjectDiagram, FaChartLine, FaCalendarAlt,
  FaCode, FaCheckCircle, FaUserFriends,
  FaChartBar, FaCog,
  FaUser, FaStar, FaHome
} from 'react-icons/fa';
import { useUser } from '../Context/UserContext';

const Dashboard = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('year');
  const { darkMode } = useUser();

  // Sample data for dashboard
  const stats = [
    { id: 1, title: "Active Projects", value: 2, icon: <FaProjectDiagram className="text-blue-500" />, change: "+2 this month" },
    { id: 2, title: "Completed Tasks", value: 6, icon: <FaCheckCircle className="text-green-500" />, change: "78% completion" },
    { id: 3, title: "Skills Mastered", value: 8, icon: <FaStar className="text-yellow-500" />, change: "+3 this month" },
    { id: 4, title: "Revenue", value: "$24.5K", icon: <FaChartLine className="text-purple-500" />, change: "+12.5% from last month" }
  ];

  // Performance metrics
  const performanceMetrics = [
    { id: 1, title: "Productivity", value: 87, change: "+5% from last month" },
    { id: 2, title: "Project Completion", value: 73, change: "+12% from last quarter" },
    { id: 3, title: "Team Engagement", value: 92, change: "+3% from last week" }
  ];

  // Project status distribution
  const projectStatusData = [
    { status: "In Progress", value: 65, color: "#6366f1" },
    { status: "Completed", value: 20, color: "#10b981" },
    { status: "On Hold", value: 10, color: "#f59e0b" },
    { status: "Pending", value: 5, color: "#9ca3af" }
  ];

  // Performance data
  const performanceData = {
    year: [
      { period: "2020", revenue: 18500 },
      { period: "2021", revenue: 22000 },
      { period: "2022", revenue: 24500 },
      { period: "2023", revenue: 31200 }
    ],
    quarter: [
      { period: "Q1", revenue: 60300 },
      { period: "Q2", revenue: 83500 },
      { period: "Q3", revenue: 90800 },
      { period: "Q4", revenue: 65000 }
    ],
    month: [
      { period: "Jan", revenue: 18500 },
      { period: "Feb", revenue: 22000 },
      { period: "Mar", revenue: 19800 },
      { period: "Apr", revenue: 24500 },
      { period: "May", revenue: 27800 },
      { period: "Jun", revenue: 31200 },
      { period: "Jul", revenue: 34500 },
      { period: "Aug", revenue: 29800 },
      { period: "Sep", revenue: 26500 },
      { period: "Oct", revenue: 24000 },
      { period: "Nov", revenue: 21500 },
      { period: "Dec", revenue: 19500 }
    ]
  };

  // Top Navigation Bar Component
  const TopNavBar = () => (
    <div className={`shadow-md py-3 px-6 flex items-center justify-between ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-center space-x-4">
        <Link to="/" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'}`}>
          <FaHome className="text-xl" />
        </Link>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-indigo-400 to-purple-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2">
            MI
          </div>
          <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Mashal Ibrar</span>
        </div>
      </div>
    </div>
  );

  // Pie chart component
  const PieChart = ({ data, size = 120 }) => {
    const radius = size / 2;
    const circumference = 2 * Math.PI * radius;
    
    let startAngle = 0;
    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {data.map((item, index) => {
            const percentage = item.value / 100;
            const strokeDasharray = `${circumference * percentage} ${circumference * (1 - percentage)}`;
            const rotation = startAngle * 360;
            
            startAngle += percentage;
            
            return (
              <circle
                key={index}
                cx={radius}
                cy={radius}
                r={radius - 5}
                fill="transparent"
                stroke={item.color}
                strokeWidth="10"
                strokeDasharray={strokeDasharray}
                transform={`rotate(${rotation} ${radius} ${radius})`}
                className="transition-all duration-500 ease-in-out"
              />
            );
          })}
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>65%</span>
          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>In Progress</span>
        </div>
      </div>
    );
  };

  // Column Chart Component
  const ColumnChart = () => {
    const data = performanceData[activeTimeframe];
    const maxValue = Math.max(...data.map(item => item.revenue), 0) || 1;
    const colors = ["#6366f1", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"];

    const chartHeight = 200;
    const barWidth = 30;
    const spacing = 20;

    const getX = (index) => index * (barWidth + spacing) + barWidth / 2;
    const getY = (value) => chartHeight - (value / maxValue) * chartHeight;

    const svgWidth = data.length * (barWidth + spacing);
    const svgHeight = chartHeight + 40;

    return (
      <div className={`rounded-xl shadow-md p-6 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className={`text-xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            {activeTimeframe === 'year' ? 'Yearly' : 
             activeTimeframe === 'quarter' ? 'Quarterly' : 'Monthly'} Revenue Performance
          </h2>
          <div className="flex space-x-2 mt-2 md:mt-0">
            {['month', 'quarter', 'year'].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setActiveTimeframe(timeframe)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeTimeframe === timeframe
                    ? 'bg-indigo-600 text-white'
                    : darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="overflow-auto">
          <svg width={svgWidth} height={svgHeight}>
            {/* Bars */}
            {data.map((item, index) => {
              const barHeight = (item.revenue / maxValue) * chartHeight;
              return (
                <rect
                  key={index}
                  x={index * (barWidth + spacing)}
                  y={chartHeight - barHeight}
                  width={barWidth}
                  height={barHeight}
                  rx="5"
                  fill={colors[index % colors.length]}
                />
              );
            })}

            {/* Line connecting data points */}
            <polyline
              fill="none"
              stroke={darkMode ? "#d1d5db" : "#1f2937"}
              strokeWidth="2"
              points={data
                .map((item, index) => `${getX(index)},${getY(item.revenue)}`)
                .join(" ")}
            />

            {/* Dots on line */}
            {data.map((item, index) => (
              <circle
                key={index}
                cx={getX(index)}
                cy={getY(item.revenue)}
                r="4"
                fill={darkMode ? "#f3f4f6" : "#111827"}
              />
            ))}
          </svg>

          {/* Labels */}
          <div
            className="flex justify-between mt-4 text-sm"
            style={{ width: svgWidth }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="text-center"
                style={{ width: barWidth + spacing }}
              >
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Top Navigation Bar */}
      <TopNavBar />
      
      {/* Main Content */}
      <div className="flex-grow transition-all duration-300 p-6">
        {/* Header */}
        <div className="mb-8 items-center flex-wrap gap-4">
          <div>
            <h1 className={`text-3xl font-bold flex items-center ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              <FaChartBar className="mr-3 text-indigo-600" />
              Dashboard Overview
            </h1>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.id} className={`rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>{stat.title}</p>
                  <h2 className={`text-2xl font-bold mt-1 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>{stat.value}</h2>
                  <p className={`text-xs mt-2 ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>{stat.change}</p>
                </div>
                <div className={`text-2xl p-3 rounded-full ${
                  darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Quick Actions & Project Status */}
          <div className="lg:col-span-1">
            {/* Quick Actions */}
            <div className={`rounded-xl shadow-md p-6 mb-6 border ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                : 'bg-gradient-to-br from-indigo-50 to-white border-indigo-100'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>Quick Actions</h2>
                <FaCog className="text-indigo-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/dashboard/projects" 
                  className={`rounded-lg p-4 text-center transition-all shadow-sm border ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 border-gray-600' 
                      : 'bg-white hover:bg-indigo-50 border-gray-100'
                  }`}
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <FaProjectDiagram className="text-white text-xl" />
                  </div>
                  <span className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>New Project</span>
                </Link>
                
                <Link 
                  to="/dashboard/skills" 
                  className={`rounded-lg p-4 text-center transition-all shadow-sm border ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 border-gray-600' 
                      : 'bg-white hover:bg-green-50 border-gray-100'
                  }`}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <FaStar className="text-white text-xl" />
                  </div>
                  <span className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Add Skills</span>
                </Link>
                
                <Link 
                  to="/dashboard/settings" 
                  className={`rounded-lg p-4 text-center transition-all shadow-sm border ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 border-gray-600' 
                      : 'bg-white hover:bg-purple-50 border-gray-100'
                  }`}
                >
                  <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <span className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Settings</span>
                </Link>
                
                <Link 
                  to="/dashboard/profile" 
                  className={`rounded-lg p-4 text-center transition-all shadow-sm border ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 border-gray-600' 
                      : 'bg-white hover:bg-blue-50 border-gray-100'
                  }`}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <span className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Profile</span>
                </Link>
              </div>
            </div>

            {/* Project Status Chart */}
            <div className={`rounded-xl shadow-md p-6 border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>Project Status</h2>
                <span className={`text-sm ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-600'
                }`}>Distribution</span>
              </div>
              
              <div className="flex flex-col items-center">
                <PieChart data={projectStatusData} />
                
                <div className="mt-4 grid grid-cols-2 gap-3 w-full">
                  {projectStatusData.map((status, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: status.color }}></div>
                      <div className="text-sm">
                        <span className={`font-medium ${
                          darkMode ? 'text-gray-200' : 'text-gray-800'
                        }`}>{status.status}</span>
                        <span className={`ml-2 ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>{status.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Middle Column - Performance Graph */}
          <div className="lg:col-span-2">
            <ColumnChart />
            
            {/* Performance Metrics */}
            <div className={`mt-6 rounded-xl shadow-md p-6 border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>Performance Metrics</h2>
                <span className={`text-sm ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-600'
                }`}>Current Status</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {performanceMetrics.map(metric => (
                  <div key={metric.id} className={`rounded-lg border p-4 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-gray-700 to-gray-800 border-gray-600' 
                      : 'bg-gradient-to-r from-indigo-50 to-white border-indigo-100'
                  }`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>{metric.title}</p>
                        <h3 className={`text-2xl font-bold mt-1 ${
                          darkMode ? 'text-white' : 'text-gray-800'
                        }`}>{metric.value}%</h3>
                        <p className="text-xs text-green-500 mt-1">{metric.change}</p>
                      </div>
                      <div className="relative w-16 h-16">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={darkMode ? "#374151" : "#e6e6e6"}
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#4f46e5"
                            strokeWidth="3"
                            strokeDasharray={`${metric.value}, 100`}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;