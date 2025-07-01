import React, { useState } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiGlobe, 
  FiGithub, 
  FiTwitter, 
  FiLinkedin, 
  FiEdit, 
  FiSave,
  FiUser,
  FiMapPin,
  FiMessageSquare,
  FiAward,
  FiFolder,
  FiArrowRight,
  FiInstagram
} from 'react-icons/fi';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaFigma 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Mashal Ibrar",
    email: "mashalpugc@gmail.com",
    bio: "Frontend Developer passionate about React & UI/UX Design. Creating beautiful, functional interfaces with clean code.",
    phone: "+92 308-4422170",
    website: "mashalibrar.dev",
    location: "Gujranwala, Pakistan",
  });

  const skills = [
    { name: "React", level: 90, icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", level: 95, icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML5", level: 92, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", level: 88, icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "UI/UX Design", level: 85, icon: <FaFigma className="text-purple-600" /> }
  ];

  const projects = [
    { title: "E-commerce Dashboard", description: "React admin dashboard with analytics", year: "2023" },
    { title: "Portfolio Builder", description: "Tool for developers to create portfolios", year: "2022" },
    { title: "Task Management App", description: "Kanban-style task organizer", year: "2021" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Developer Profile
          </h1>
          <p className="text-gray-600 mt-2">Showcasing your skills and projects</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8 relative">
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-50 transition"
              >
                {isEditing ? <FiSave className="w-5 h-5" /> : <FiEdit className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative">
                {/* Profile Picture */}
                <img 
                  src="/public/mash.jpeg" 
                  alt="Profile" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-indigo-500 text-white p-2 rounded-full">
                  {/* Badge Picture */}
                  <img 
                    src="/public/mash.jpeg" 
                    alt="Badge" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="text-2xl font-bold bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-2 text-white w-full md:w-auto"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
                )}
                
                <p className="text-indigo-100 font-medium">Frontend Developer</p>
                
                <div className="mt-4 flex justify-center md:justify-start space-x-4">
                  <Link to="https://github.com/MashalTech-rgb" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition">
                    <FiGithub className="text-white w-5 h-5" />
                  </Link>
                  <Link to="https://www.instagram.com/mashal_ibrar/" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition">
                    <FiInstagram className="text-white w-5 h-5" />
                  </Link>
                  <Link to="https://www.linkedin.com/in/mashal-ibrar-1179b7249/" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition">
                    <FiLinkedin className="text-white w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Info */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
                      <FiUser className="w-5 h-5" />
                    </span>
                    Personal Info
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FiMail className="text-gray-500 w-5 h-5 mr-3" />
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={profile.email}
                          onChange={handleChange}
                          className="border-b border-gray-300 focus:border-indigo-500 focus:outline-none w-full py-1"
                        />
                      ) : (
                        <span className="text-gray-700">{profile.email}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <FiPhone className="text-gray-500 w-5 h-5 mr-3" />
                      {isEditing ? (
                        <input
                          type="text"
                          name="phone"
                          value={profile.phone}
                          onChange={handleChange}
                          className="border-b border-gray-300 focus:border-indigo-500 focus:outline-none w-full py-1"
                        />
                      ) : (
                        <span className="text-gray-700">{profile.phone}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <FiGlobe className="text-gray-500 w-5 h-5 mr-3" />
                      {isEditing ? (
                        <input
                          type="text"
                          name="website"
                          value={profile.website}
                          onChange={handleChange}
                          className="border-b border-gray-300 focus:border-indigo-500 focus:outline-none w-full py-1"
                        />
                      ) : (
                        <span className="text-gray-700">{profile.website}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <FiMapPin className="text-gray-500 w-5 h-5 mr-3" />
                      {isEditing ? (
                        <input
                          type="text"
                          name="location"
                          value={profile.location}
                          onChange={handleChange}
                          className="border-b border-gray-300 focus:border-indigo-500 focus:outline-none w-full py-1"
                        />
                      ) : (
                        <span className="text-gray-700">{profile.location}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
                      <FiMessageSquare className="w-5 h-5" />
                    </span>
                    About Me
                  </h3>
                  
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
                  )}
                </div>
              </div>
              
              {/* Right Column - Skills & Projects */}
              <div className="md:col-span-2">
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
                      <FiAward className="w-5 h-5" />
                    </span>
                    Skills & Expertise
                  </h3>
                  
                  <div className="space-y-5">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            {skill.icon}
                            <span className="ml-2 font-medium text-gray-700">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
                      <FiFolder className="w-5 h-5" />
                    </span>
                    Recent Projects
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
                        {/* Project Thumbnail */}
                        <img 
                          src={`https://picsum.photos/200/150?random=${index}`} 
                          alt={project.title}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h4 className="font-bold text-gray-800">{project.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                            {project.year}
                          </span>
                          <a href="https://github.com/MashalTech-rgb" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                            View Project →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Link to="https://github.com/MashalTech-rgb"  className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center mx-auto">
                      View All Projects
                      <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-indigo-600">5+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-indigo-600">42+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-indigo-600">24</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-indigo-600">12</div>
            <p className="text-gray-600">Awards Won</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-200">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Profile;