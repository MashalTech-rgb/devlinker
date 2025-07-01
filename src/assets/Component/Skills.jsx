import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaGithub,
  FaBootstrap,
  FaWordpress
} from 'react-icons/fa';
import { 
  FiSmartphone,
  FiLayout,
  FiCode,
  FiServer,
  FiCloud,
  FiTrendingUp
} from 'react-icons/fi';
import { SiTailwindcss, SiVercel, SiFigma, SiAdobephotoshop } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      level: 95,
      icon: <FaHtml5 className="text-orange-600" />,
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      level: 92,
      icon: <FaCss3Alt className="text-blue-500" />,
      category: 'Frontend'
    },
    {
      name: 'Tailwind CSS',
      level: 90,
      icon: <SiTailwindcss className="text-cyan-500" />,
      category: 'Frontend'
    },
    {
      name: 'Bootstrap',
      level: 88,
      icon: <FaBootstrap className="text-purple-600" />,
      category: 'Frontend'
    },
    {
      name: 'JavaScript (ES6+)',
      level: 90,
      icon: <FaJs className="text-yellow-400" />,
      category: 'Frontend'
    },
    {
      name: 'React.js',
      level: 88,
      icon: <FaReact className="text-blue-400" />,
      category: 'Frontend'
    },
    {
      name: 'Git & GitHub',
      level: 85,
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
      category: 'Tools'
    },
    {
      name: 'Vercel',
      level: 87,
      icon: <SiVercel className="text-black dark:text-white" />,
      category: 'Tools'
    },
    {
      name: 'WordPress',
      level: 92,
      icon: <FaWordpress className="text-blue-600" />,
      category: 'CMS'
    },
    {
      name: 'Responsive Design',
      level: 93,
      icon: <FiSmartphone className="text-green-500" />,
      category: 'Design'
    },
    {
      name: 'UI/UX Design',
      level: 80,
      icon: <FiLayout className="text-pink-500" />,
      category: 'Design'
    },
    {
      name: 'Figma',
      level: 78,
      icon: <SiFigma className="text-purple-500" />,
      category: 'Design'
    },
    {
      name: 'Photoshop',
      level: 75,
      icon: <SiAdobephotoshop className="text-blue-400" />,
      category: 'Design'
    },
    {
      name: 'Next.js',
      level: 70,
      icon: <FiServer className="text-black dark:text-white" />,
      category: 'Fullstack'
    },
    {
      name: 'Performance Optimization',
      level: 78,
      icon: <FiTrendingUp className="text-teal-500" />,
      category: 'Development'
    }
  ];

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Skills & Expertise
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've honed a diverse set of skills to build modern, responsive, and user-friendly web applications.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, skills], idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-5 border-b border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">{category}</h2>
              </div>
              
              <div className="p-6">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                          {skill.icon}
                        </div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                      </div>
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WordPress Expertise */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/50">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white p-3 rounded-xl mr-4">
                <FaWordpress className="text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">WordPress Expertise</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Extensive experience building custom WordPress themes and plugins, with a focus on performance, security, and user experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Custom theme development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Plugin customization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">WooCommerce integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Performance optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Vercel Expertise */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start">
              <div className="bg-black text-white p-3 rounded-xl mr-4">
                <SiVercel className="text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Vercel Deployment</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Proficient in deploying and managing modern web applications on Vercel's platform with CI/CD pipelines.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black dark:bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Serverless functions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black dark:bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Edge network optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black dark:bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Continuous deployment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black dark:bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Performance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold mb-4">Continuously Learning & Growing</h2>
                <p className="text-indigo-100 mb-4">
                  Technology evolves rapidly, and I'm committed to staying at the forefront of web development. 
                  I regularly explore new frameworks, tools, and best practices to enhance my skillset.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-indigo-700/50 rounded-lg px-4 py-2">
                    <div className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center mr-2">
                      <FiCloud />
                    </div>
                    <span className="font-medium">Modern deployment workflows</span>
                  </div>
                  <div className="flex items-center bg-indigo-700/50 rounded-lg px-4 py-2">
                    <div className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center mr-2">
                      <FiLayout />
                    </div>
                    <span className="font-medium">Headless CMS solutions</span>
                  </div>
                  <div className="flex items-center bg-indigo-700/50 rounded-lg px-4 py-2">
                    <div className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center mr-2">
                      <FiTrendingUp />
                    </div>
                    <span className="font-medium">Performance optimization</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-indigo-600 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                        <FiCode className="w-16 h-16" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-white text-indigo-600 font-bold px-4 py-2 rounded-full shadow-lg">
                    Level Up!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;