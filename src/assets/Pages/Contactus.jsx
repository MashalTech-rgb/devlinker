import React from 'react';
import { FiCode, FiCpu, FiGlobe, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import Footer from '../Component/Footer';
import { useUser } from '../Context/UserContext';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const { darkMode } = useUser();

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Tech-themed Header */}
      <div className={`relative py-24 w-full ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-900 to-indigo-800'}`}>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect With DevLinker</h1>
          <p className="text-xl md:text-2xl">Reach out through our developer-friendly channels</p>
        </div>
      </div>

      {/* Enhanced Cards Section */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services Card - Enhanced */}
          <div className={`rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className={`p-6 text-white ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
              <div className="flex items-center">
                <FiCode className="text-3xl mr-4" />
                <h3 className="text-2xl font-bold">Our Services</h3>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCpu className={`mt-1 mr-3 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div>
                    <h4 className="font-semibold">Developer Tools</h4>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Powerful SDKs for modern workflows</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiGlobe className={`mt-1 mr-3 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div>
                    <h4 className="font-semibold">API Integration</h4>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Seamless third-party connections</p>
                  </div>
                </li>
              </ul>
              <div className={`mt-8 pt-6 ${darkMode ? 'border-gray-700' : 'border-gray-100'} border-t`}>
                <Link to="/" className={`font-medium flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                  Explore all services
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Card - Enhanced */}
          <div className={`rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className={`p-6 text-white ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
              <div className="flex items-center">
                <FiPhone className="text-3xl mr-4" />
                <h3 className="text-2xl font-bold">Contact Us</h3>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiMail className={`mt-1 mr-3 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>mashalpugc@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiPhone className={`mt-1 mr-3 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+92 3084422170</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiClock className={`mt-1 mr-3 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mon-Fri: 9AM-6PM PST</p>
                  </div>
                </li>
              </ul>
              <div className={`mt-8 pt-6 ${darkMode ? 'border-gray-700' : 'border-gray-100'} border-t`}>
                <Link to="/contactus" className={`font-medium flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                  Contact support
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Locations Card - Enhanced */}
          <div className={`rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className={`p-6 text-white ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
              <div className="flex items-center">
                <FiMapPin className="text-3xl mr-4" />
                <h3 className="text-2xl font-bold">Our Locations</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">Headquarters</h4>
                  <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Gujranwala,Punjab<br />Pakistan</p>
                </div>
                <div>
                  <h4 className="font-semibold">Development Center</h4>
                  <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Gujranwala,Punjab<br />Pakistan</p>
                </div>
              </div>
              <div className={`mt-8 pt-6 ${darkMode ? 'border-gray-700' : 'border-gray-100'} border-t`}>
                <Link to="https://www.google.com/maps" className={`font-medium flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                  View all locations
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default ContactUs;