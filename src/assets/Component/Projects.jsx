import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaPalette, FaServer, FaCode, FaLayerGroup, FaLightbulb } from 'react-icons/fa';

const projects = [
  {
    title: 'DevLinker – Portfolio Builder',
    description: 'A responsive web app to create and share developer portfolios with themes and project showcases. Features customizable templates, real-time previews, and easy deployment.',
    techStack: ['React', 'Tailwind CSS', 'React Router', 'Framer Motion'],
    link: 'https://devlinker.vercel.app',
    github: 'https://github.com/username/devlinker',
    featured: true
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'A React-based admin dashboard to manage products, orders, and analytics for an online store. Includes inventory management, sales tracking, and customer insights.',
    techStack: ['React', 'Chart.js', 'Firebase', 'Redux'],
    link: '#',
    github: '#',
    featured: true
  },
  {
    title: 'Weather App',
    description: 'A simple weather app that fetches real-time weather data using OpenWeather API. Displays current conditions, forecasts, and location-based weather alerts.',
    techStack: ['React', 'CSS', 'OpenWeather API', 'Geolocation'],
    link: '#',
    github: '#'
  },
  {
    title: 'Task Management System',
    description: 'A Kanban-style task manager with drag-and-drop functionality, team collaboration features, and progress tracking.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
    github: '#'
  },
  {
    title: 'Recipe Finder',
    description: 'Discover recipes based on ingredients you have. Features dietary filters, meal planning, and shopping list generation.',
    techStack: ['React', 'Spoonacular API', 'Material UI'],
    link: '#',
    github: '#'
  },
  {
    title: 'Fitness Tracker',
    description: 'Workout planner and progress tracker with exercise database, workout routines, and performance analytics.',
    techStack: ['React Native', 'Firebase', 'D3.js'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            My Projects Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my collection of web applications showcasing my skills in modern frontend development
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
              <FaPalette className="mr-2" /> UI/UX Design
            </span>
            <span className="flex items-center px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">
              <FaServer className="mr-2" /> Full Stack
            </span>
            <span className="flex items-center px-4 py-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
              <FaCode className="mr-2" /> React Specialist
            </span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">12+</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Projects Completed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">8</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">React Projects</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Open Source</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">4</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Active Projects</div>
          </div>
        </div>
        
        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center">
              <FaLightbulb className="text-yellow-500 mr-3" />
              Featured Projects
            </h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">Highlighted Work</div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600">
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Featured</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mt-3">{project.description}</p>
                  
                  <div className="mt-5">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Tech Stack:</span>
                    <ul className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech, i) => (
                        <li 
                          key={i} 
                          className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          <FaCode className="mr-1 text-sm" /> {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                    >
                      <FaExternalLinkAlt className="mr-2" /> View Project
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* All Projects */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center">
              <FaLayerGroup className="text-indigo-500 mr-3" />
              All Projects
            </h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">Complete Portfolio</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600">
                  <div className="h-40 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{project.description}</p>
                  
                  <div className="mt-4">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <li 
                          key={i} 
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </li>
                      ))}
                      {project.techStack.length > 3 && (
                        <li className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-full text-xs">
                          +{project.techStack.length - 3}
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mt-5 flex justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm flex items-center"
                    >
                      <FaGithub className="mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 mb-10 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a project in mind?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              I'm available for freelance work and collaborations. Let's create something amazing together!
            </p>
            <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;