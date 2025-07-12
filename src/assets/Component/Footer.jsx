import React from 'react'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
       <footer className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-20 pb-12 px-6 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-white/10 to-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-white/10 rounded-full blur-3xl"></div>
      
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-white to-blue-200 w-10 h-10 rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
                  <span className="text-blue-800 font-bold text-xl">D</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent ml-3">
                  DevLinker
                </span>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Empowering developers to showcase their work with beautiful,
                professional portfolios in minutes.
              </p>
      
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                  <FaGithub className="text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                  <FaTwitter className="text-white" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                  <FaLinkedin className="text-white" />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                  <FaDribbble className="text-white" />
                </a>
              </div>
            </div>
      
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-xl mb-6 flex items-center">
                <span className="bg-white w-1.5 h-1.5 rounded-full mr-2"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Contact Us', href: '/Contactus' },
                  { name: 'Dashboard', href: '/dashboard' },
                  { name: 'Profile', href: '/dashboard/profile' },
                  { name: 'Projects', href: '/dashboard/projects' },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/80 hover:text-white flex items-center transition-colors duration-300">
                      <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
      
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-xl mb-6 flex items-center">
                <span className="bg-white w-1.5 h-1.5 rounded-full mr-2"></span>
                Get In Touch
              </h3>
              <address className="not-italic space-y-4">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:mashalpugc@gmail.com" className="text-white/80 hover:text-white transition-colors duration-300">
                    mashalpugc@gmail.com
                  </a>
                </div>
      
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+923084422170" className="text-white/80 hover:text-white transition-colors duration-300">
                    +92 308 4422170
                  </a>
                </div>
      
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/80">Pakistan, Gujranwala</span>
                </div>
              </address>
            </div>
          </div>
      
          {/* Divider */}
          <div className="border-t border-white/10 my-4"></div>
      
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-white/60 text-sm  md:mb-0">
              © {new Date().getFullYear()} DevLinker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
