import { Link } from 'react-router-dom';

const features = [
{
    icon: '💻',
    title: 'Frontend Development',
    desc: 'Skilled in HTML, CSS, Tailwind, Bootstrap, and React to create modern user interfaces.',
  },
  {
    icon: '⚙️',
    title: 'Component Architecture',
    desc: 'Experienced in designing reusable React components and managing state effectively.',
  },
  {
    icon: '🚀',
    title: 'Project Execution',
    desc: 'Comfortable turning Figma designs into responsive apps and handling routing, forms, and custom hooks.',
  },
];

const testimonials = [
  {
    name: "Ali Raza",
    role: "Frontend Developer",
    avatar: "A",
    message: "DevLinker helped me build my portfolio in one day! The themes are awesome and the UI is so smooth.",
  },
  {
    name: "Sara Khan",
    role: "Full Stack Developer",
    avatar: "S",
    message: "I got my first freelance project through the portfolio I made on DevLinker. Highly recommended!",
  },
  {
    name: "Ahmad Usman",
    role: "React Developer",
    avatar: "A",
    message: "The experience was seamless. Love the feature to add projects and customize themes.",
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white min-h-screen overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-80 right-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slower"></div>
      
      {/* Sticky Navbar */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 w-8 h-8 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">DevLinker</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
     <section className="relative min-h-[75vh] mt-12 flex flex-col md:flex-row items-center justify-center px-6 py-10 gap-8 max-w-7xl mx-auto">
  {/* Background elements remain unchanged */}
  <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
  <div className="absolute top-80 right-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
  <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slower"></div>
  
  {/* Left Content - Adjusted */}
  <div className="flex-1 max-w-2xl z-10">
    <div className="inline-block px-3 py-1 mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-300 text-sm">
      <span className="font-medium">Developer's Favorite Tool</span>
    </div>
    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
      Build Your <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Developer Portfolio</span> in Minutes
    </h1>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
      Hi, I'm Mashal Ibrar — a frontend developer passionate about building responsive and elegant UIs using React, Tailwind CSS, and modern web technologies.
    </p>
    <div className="flex flex-col sm:flex-row gap-3">
      <Link
        to="https://github.com/MashalTech-rgb"
        className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center text-base font-semibold"
      >
        Explore My Work
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
      <Link
        to="https://drive.google.com/file/d/1kv8-WWmRJBHJzBVMTnAI3cvDeSAjpVlu/view"
        className="px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-300 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800/50 transition flex items-center justify-center text-base font-medium"
      >
        Download Resume
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
    <div className="mt-5 flex items-center">
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-xs">A</div>
        <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-xs">S</div>
        <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-xs">M</div>
        <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-xs">J</div>
      </div>
      <div className="ml-3 text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold">5000+ developers</span> already building
      </div>
    </div>
  </div>

  {/* Right Image - Adjusted */}
  <div className="flex-1 z-10 flex justify-center mt-8 md:mt-0">
    <div className="relative p-6">
      <div className="w-full max-w-md rounded-xl overflow-hidden shadow-xl border-6 border-white dark:border-gray-800">
        <img
          src="/public/undraw_winter-designer_a6kq.png"
          alt="DevLinker Portfolio Example"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow border border-gray-100 dark:border-gray-700">
        <div className="flex items-center">
          <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="ml-2">
            <div className="font-semibold text-sm">Mobile Responsive</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Works on all devices</div>
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow border border-gray-100 dark:border-gray-700">
        <div className="flex items-center">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <div className="ml-2">
            <div className="font-semibold text-sm">Live Support</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">24/7 assistance</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Feature Highlights */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose DevLinker?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to create an impressive developer portfolio without writing a single line of code
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 text-7xl opacity-10">{feature.icon}</div>
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.desc}</p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-blue-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-3">Advanced Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track who views your portfolio and which projects get the most attention. Gain insights to improve your developer profile.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Profile Views</span>
                    <span className="text-green-600 font-bold">+42%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Developers Worldwide</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of developers who have transformed their careers with DevLinker
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-100 dark:border-gray-700 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center text-xl font-bold mr-4">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{t.name}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{t.role}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{t.message}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-3">Ready to showcase your skills?</h3>
                <p className="opacity-90">
                  Join our community of developers and create your professional portfolio in minutes.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Link
                  to="/signup"
                  className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-105"
                >
                  Start Building Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about DevLinker
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Is DevLinker free to use?",
                a: "Yes! You can create and share your portfolio completely free. We also offer premium plans with additional features for those who want more customization options.",
              },
              {
                q: "Can I update my portfolio anytime?",
                a: "Absolutely! You can add or edit your content whenever you like. Changes are reflected instantly on your live portfolio.",
              },
              {
                q: "Is it mobile responsive?",
                a: "Yes, all portfolios created with DevLinker are fully responsive and look great on all devices from smartphones to desktops.",
              },
              {
                q: "Can I use my own domain?",
                a: "Yes, premium users can connect their custom domain to their DevLinker portfolio for a more professional appearance.",
              },
              {
                q: "How do I share my portfolio?",
                a: "Once published, you'll get a unique URL that you can share anywhere. You can also easily share via social media with built-in sharing buttons.",
              },
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all"
              >
                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  {faq.q}
                </h4>
                <p className="mt-3 text-gray-600 dark:text-gray-300 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Still have questions? We're here to help!
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition font-medium"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 w-8 h-8 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-2xl font-bold text-white">DevLinker</span>
              </div>
              <p className="text-gray-400 mb-4">
                Build beautiful developer portfolios in minutes, not days.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Examples</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} DevLinker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;