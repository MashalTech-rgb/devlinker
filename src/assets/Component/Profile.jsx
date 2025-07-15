import React, { useState } from 'react';
import { 
  FiMail, FiPhone, FiGlobe, FiGithub, FiLinkedin, 
  FiEdit, FiSave, FiUser, FiMapPin, FiMessageSquare,
  FiAward, FiCalendar, FiBook, FiCode, FiLayout, FiChevronRight
} from 'react-icons/fi';
import { FaReact, FaFigma, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import ProfileImg from "../../../public/Profile.jpeg"

const Profile = () => {
  const { userData, updateUserData, darkMode } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState({...userData});

  const specialties = [
    { 
      title: "React Development", 
      description: "Building dynamic single-page applications with React ecosystem",
      technologies: ["React", "Redux", "React Router", "Context API"],
      icon: <FaReact className="text-blue-500 text-xl" />
    },
    { 
      title: "UI/UX Design", 
      description: "Creating intuitive user interfaces with modern design principles",
      technologies: ["Figma", "Adobe XD", "User Research", "Wireframing"],
      icon: <FaFigma className="text-purple-500 text-xl" />
    },
    { 
      title: "Frontend Architecture", 
      description: "Designing scalable and maintainable frontend systems",
      technologies: ["Component Libraries", "Design Systems", "State Management"],
      icon: <FiLayout className="text-indigo-500 text-xl" />
    },
    { 
      title: "API Integration", 
      description: "Connecting frontend applications with backend services",
      technologies: ["RESTful APIs", "GraphQL", "Axios", "WebSockets"],
      icon: <FaNodeJs className="text-green-500 text-xl" />
    }
  ];

  const methodologies = [
    { 
      title: "Agile Development", 
      description: "Implementing projects with iterative development cycles",
      practices: ["Sprints", "Daily Standups", "Backlog Grooming", "Retrospectives"],
      icon: <FiCalendar className="text-orange-500 text-xl" />
    },
    { 
      title: "Test-Driven Development", 
      description: "Building reliable software through comprehensive testing",
      practices: ["Unit Testing", "Integration Testing", "Jest", "React Testing Library"],
      icon: <FiCode className="text-red-500 text-xl" />
    },
    { 
      title: "Component-Based Architecture", 
      description: "Developing reusable and modular UI components",
      practices: ["Atomic Design", "Storybook", "Design Tokens", "Reusability"],
      icon: <FiBook className="text-blue-600 text-xl" />
    },
    { 
      title: "Performance Optimization", 
      description: "Ensuring fast and responsive user experiences",
      practices: ["Lazy Loading", "Code Splitting", "Bundle Analysis", "Caching"],
      icon: <FaDatabase className="text-amber-500 text-xl" />
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateUserData(editableProfile);
    setIsEditing(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-indigo-50'} py-8 px-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent`}>
            Professional Profile
          </h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
            Showcasing expertise and methodologies
          </p>
        </div>

        {/* Profile Card */}
        <div className={`rounded-2xl shadow-xl overflow-hidden mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8 relative">
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className={`p-2 rounded-full transition ${
                  darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {isEditing ? <FiSave className="w-5 h-5" /> : <FiEdit className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative">
                {/* Profile Picture */}
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-xl border-4 shadow-lg flex items-center justify-center ${
                  darkMode ? 'bg-indigo-900 border-gray-800' : 'bg-indigo-100 border-white'
                }`}>
                  <div className={`rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center overflow-hidden ${
                    darkMode ? 'bg-indigo-800' : 'bg-indigo-200'
                  }`}>
                    <img
                      src={ProfileImg}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`absolute -bottom-2 -right-2 p-1 rounded-full shadow-md ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}>
                  <div className="bg-indigo-500 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editableProfile.name}
                    onChange={handleChange}
                    className="text-2xl font-bold bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-2 text-white w-full md:w-auto"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-white">{userData.name}</h2>
                )}
                
                <p className="text-indigo-100 font-medium">Frontend Developer</p>
                
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                  <div className="bg-indigo-500/30 px-3 py-1 rounded-full text-sm text-white">
                    1 year experience
                  </div>
                  <div className="bg-indigo-500/30 px-3 py-1 rounded-full text-sm text-white">
                    {userData.availability}
                  </div>
                  <div className="bg-indigo-500/30 px-3 py-1 rounded-full text-sm text-white">
                    React Expert
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center md:justify-start space-x-4">
                  <Link to={`https://github.com/${userData.github}`} className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition">
                    <FiGithub className="text-white w-5 h-5" />
                  </Link>
                  <Link to={`https://www.linkedin.com/in/${userData.linkedin}`} className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition">
                    <FiLinkedin className="text-white w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Personal Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className={`rounded-xl p-6 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 flex items-center ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    <span className={`p-2 rounded-lg mr-3 ${
                      darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      <FiUser className="w-5 h-5" />
                    </span>
                    Personal Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FiMail className={`w-5 h-5 mr-3 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={editableProfile.email}
                          onChange={handleChange}
                          className={`border-b focus:outline-none w-full py-1 ${
                            darkMode 
                              ? 'bg-transparent border-gray-600 focus:border-indigo-400 text-white' 
                              : 'border-gray-300 focus:border-indigo-500 text-gray-700'
                          }`}
                        />
                      ) : (
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{userData.email}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <FiPhone className={`w-5 h-5 mr-3 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      {isEditing ? (
                        <input
                          type="text"
                          name="phone"
                          value={editableProfile.phone}
                          onChange={handleChange}
                          className={`border-b focus:outline-none w-full py-1 ${
                            darkMode 
                              ? 'bg-transparent border-gray-600 focus:border-indigo-400 text-white' 
                              : 'border-gray-300 focus:border-indigo-500 text-gray-700'
                          }`}
                        />
                      ) : (
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{userData.phone}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <FiGlobe className={`w-5 h-5 mr-3 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      {isEditing ? (
                        <input
                          type="text"
                          name="website"
                          value={editableProfile.website}
                          onChange={handleChange}
                          className={`border-b focus:outline-none w-full py-1 ${
                            darkMode 
                              ? 'bg-transparent border-gray-600 focus:border-indigo-400 text-white' 
                              : 'border-gray-300 focus:border-indigo-500 text-gray-700'
                          }`}
                        />
                      ) : (
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{userData.website}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <FiMapPin className={`w-5 h-5 mr-3 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      {isEditing ? (
                        <input
                          type="text"
                          name="location"
                          value={editableProfile.location}
                          onChange={handleChange}
                          className={`border-b focus:outline-none w-full py-1 ${
                            darkMode 
                              ? 'bg-transparent border-gray-600 focus:border-indigo-400 text-white' 
                              : 'border-gray-300 focus:border-indigo-500 text-gray-700'
                          }`}
                        />
                      ) : (
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{userData.location}</span>
                      )}
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <h4 className={`font-medium mb-2 flex items-center ${
                        darkMode ? 'text-gray-300' : 'text-gray-800'
                      }`}>
                        <FiBook className={`mr-2 ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} /> Education
                      </h4>
                      {isEditing ? (
                        <input
                          type="text"
                          name="education"
                          value={editableProfile.education}
                          onChange={handleChange}
                          className={`border-b focus:outline-none w-full py-1 ${
                            darkMode 
                              ? 'bg-transparent border-gray-600 focus:border-indigo-400 text-white' 
                              : 'border-gray-300 focus:border-indigo-500 text-gray-700'
                          }`}
                        />
                      ) : (
                        <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{userData.education}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className={`rounded-xl p-6 border ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                    : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    darkMode ? 'text-indigo-300' : 'text-indigo-800'
                  }`}>Availability</h3>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{userData.availability}</span>
                  </div>
                  <p className={`my-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Open to new opportunities, freelance projects, and collaborations.
                  </p>
                  <Link to="/contactus" className="mt-4 w-full p-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition font-medium shadow-md">
                    Contact Me
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Specialties */}
              <div className="lg:col-span-2">
                <div className={`rounded-xl p-6 mb-8 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 flex ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    <span className={`p-2 rounded-lg mr-3 ${
                      darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      <FiAward className="w-5 h-5" />
                    </span>
                    Professional Specialties
                  </h3>
                  
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={editableProfile.bio}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 mb-6 ${
                        darkMode 
                          ? 'bg-gray-800 border-gray-600 focus:ring-indigo-400 text-white' 
                          : 'border-gray-300 focus:ring-indigo-500 text-gray-700'
                      }`}
                    />
                  ) : (
                    <p className={`leading-relaxed mb-6 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{userData.bio}</p>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {specialties.map((specialty, index) => (
                      <div key={index} className={`p-5 rounded-xl border hover:shadow-md transition ${
                        darkMode 
                          ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                          : 'bg-white border-gray-200 hover:bg-gray-50'
                      }`}>
                        <div className="flex items-start">
                          <div className={`p-3 rounded-lg mr-4 flex items-center justify-center ${
                            darkMode ? 'bg-indigo-900' : 'bg-indigo-100'
                          }`}>
                            {specialty.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-bold text-lg ${
                              darkMode ? 'text-white' : 'text-gray-800'
                            }`}>{specialty.title}</h4>
                            <p className={`mt-2 text-sm ml-1 ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>{specialty.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {specialty.technologies.map((tech, i) => (
                                <span key={i} className={`text-xs px-2 py-1 rounded ${
                                  darkMode 
                                    ? 'bg-indigo-900 text-indigo-300' 
                                    : 'bg-indigo-50 text-indigo-700'
                                }`}>
                                  {tech}
                                </span>
                              ))}
                            </div>
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

        {/* Separate Methodologies Section */}
        <div className={`rounded-2xl shadow-xl overflow-hidden mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <FiMessageSquare className="mr-3 text-white" />
                Development Methodologies
              </h2>
              <div className="bg-white/20 p-2 rounded-full">
                <FiChevronRight className="text-white" />
              </div>
            </div>
            <p className="text-indigo-100 mt-2">
              Systematic approaches to building high-quality software
            </p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {methodologies.map((methodology, index) => (
                <div key={index} className={`rounded-xl p-6 border hover:shadow-lg transition ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 hover:bg-gray-650' 
                    : 'bg-gray-50 border-indigo-100 hover:bg-white'
                }`}>
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg mr-4 flex ${
                      darkMode ? 'bg-indigo-900' : 'bg-indigo-100'
                    }`}>
                      {methodology.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>{methodology.title}</h3>
                  </div>
                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{methodology.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {methodology.practices.map((practice, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode 
                            ? 'bg-indigo-900 text-indigo-300' 
                            : 'bg-indigo-50 text-indigo-700'
                        }`}
                      >
                        {practice}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className={`text-center text-sm py-4 border-t ${
          darkMode ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-200'
        }`}>
          © {new Date().getFullYear()} {userData.name}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Profile;