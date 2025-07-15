import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCode, FaLightbulb, FaLayerGroup, FaStar, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactUs from '../Pages/Contactus';

// Import your images (adjust paths as needed)
import EcommerceImage from '../../../public/E-commerce.png';
import DevLinkerImage from '../../../public/Devlinker.png';
import QuizAppImage from '../../../public/Quiz app.png';
import DominosImage from '../../../public/Dominos.png';
import LibraryManger from "../../../public/Library manger.png"
const projects = [
  {
    id: 1,
    title: 'DevLinker – Portfolio Builder',
    description: 'A responsive web app to create and share developer portfolios with themes and project showcases.',
    techStack: ['React', 'Tailwind CSS', 'React Router'],
    link: 'https://vercel.com/mashaltech-rgbs-projects',
    github: 'https://github.com/MashalTech-rgb/devlinker',
    featured: true,
    category: 'React',
    image: DevLinkerImage,
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description: 'A React-based admin dashboard to manage products, orders, and analytics for online stores.',
    techStack: ['React', 'Chart.js', 'Firebase', 'Redux'],
    link: 'https://e-commerce-vnh8.vercel.app/',
    github: 'https://github.com/MashalTech-rgb/e-commerce',
    featured: true,
    category: 'React',
    image: EcommerceImage,
  },
  {
    id: 3,
    title: 'Quiz app',
    description: 'An interactive and responsive quiz app to test knowledge across various topics with real-time scoring and smooth UI.',
    techStack: ['React', 'CSS', "Quiz API"],
    link: 'https://app-eight-ebon.vercel.app/',
    github: 'https://app-eight-ebon.vercel.app/',
    category: 'API',
    image: QuizAppImage,
  },
  {
    id: 4,
    title: 'API Fetching Data',
    description: 'Fetching data from Domino\'s API and displaying it in a React application.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    link: 'https://dominos-b5gz.vercel.app/',
    github: 'https://vercel.com/mashaltech-rgbs-projects/dominos-b5gz',
    category: 'Full Stack',
    image: DominosImage,
  },
  {
    id:5 ,
    title: 'API Fetching Data',
    description: 'Fetching data from json server API and displaying it in a React application.',
    techStack: ['React', 'Node.js',"Api"],
    link: 'https://bookapi-livid.vercel.app/',
    github: 'https://github.com/MashalTech-rgb/Bookapi',
    category: 'React',
    image: LibraryManger,
  }
];

const categories = ['All', 'React', 'API', 'Full Stack'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            My <span className="text-indigo-500">Projects</span> Portfolio
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions and cutting-edge development
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium shadow-sm transition-all hover:scale-105">
              <FaCode className="mr-2 text-indigo-500" /> React Specialist
            </span>
            <span className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium shadow-sm transition-all hover:scale-105">
              <FaRocket className="mr-2 text-blue-500" /> Modern UI/UX
            </span>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{projects.length}+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects</div>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mt-3 rounded-full"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              {projects.filter(p => p.category === 'React').length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">React Projects</div>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mt-3 rounded-full"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              {projects.filter(p => p.github).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Open Source</div>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mt-3 rounded-full"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Featured</div>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mt-3 rounded-full"></div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Featured Projects */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center">
              <div className="mr-3 p-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg transition-all hover:rotate-6">
                <FaLightbulb className="text-white text-xl" />
              </div>
              Featured Projects
            </h2>
            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Highlighted Work</div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {filteredProjects
              .filter(p => p.featured)
              .map((project) => (
                <div 
                  key={project.id}
                  className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-64 overflow-hidden">
                    {/* Project Image */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                      {project.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs px-3 py-1 rounded-full flex items-center">
                          <FaStar className="mr-1" /> Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-5">{project.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Tech Stack:</span>
                      <ul className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <li 
                            key={i} 
                            className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-medium shadow-md hover:shadow-lg hover:scale-[1.03]"
                      >
                        <FaExternalLinkAlt /> View Project
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all font-medium shadow-md hover:shadow-lg hover:scale-[1.03]"
                      >
                        <FaGithub /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        {/* All Projects */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center">
              <div className="mr-3 p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transition-all hover:rotate-6">
                <FaLayerGroup className="text-white text-xl" />
              </div>
              All Projects
            </h2>
            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Complete Portfolio</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="h-48 relative overflow-hidden">
                  {/* Project Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm flex items-center gap-1 font-medium transition-all hover:scale-105"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm flex items-center gap-1 font-medium transition-all hover:scale-105"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className={`mt-20 mb-10 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full animate-pulse-slow"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Have a project in mind?</h3>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-8 relative z-10">
              Let's collaborate and create something extraordinary together. I'm ready to bring your ideas to life!
            </p>
            <Link to="/contactus" element={<ContactUs/>} className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105 relative z-10">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;