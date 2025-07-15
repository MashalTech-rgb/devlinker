import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import eCommerce from "../../../public/E-commerce.png"
import DevLinker from "../../../public/Devlinker.png"
import QuizApp from "../../../public/Quiz app.png"
import HomeImg from "../../../public/undraw_winter-designer_a6kq.png"
const features = [
  {
    icon: "💻",
    title: "Frontend Development",
    desc: "Skilled in HTML, CSS, Tailwind, Bootstrap, and React to create modern user interfaces.",
  },
  {
    icon: "⚙️",
    title: "Component Architecture",
    desc: "Experienced in designing reusable React components and managing state effectively.",
  },
  {
    icon: "🚀",
    title: "Project Execution",
    desc: "Comfortable turning Figma designs into responsive apps and handling routing, forms, and custom hooks.",
  },
];

const testimonials = [
  {
    name: "Ali Raza",
    role: "Frontend Developer",
    avatar: "A",
    message:
      "DevLinker helped me build my portfolio in one day! The themes are awesome and the UI is so smooth.",
  },
  {
    name: "Sara Khan",
    role: "Full Stack Developer",
    avatar: "S",
    message:
      "I got my first freelance project through the portfolio I made on DevLinker. Highly recommended!",
  },
  {
    name: "Ahmad Usman",
    role: "React Developer",
    avatar: "A",
    message:
      "The experience was seamless. Love the feature to add projects and customize themes.",
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white min-h-screen overflow-x-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-300 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-80 right-0 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-300 dark:from-purple-900/30 dark:to-pink-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-r from-teal-200 to-green-300 dark:from-teal-900/30 dark:to-green-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slower"></div>

      {/* Sticky Navbar with enhanced shadow */}
      <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-8 h-8 rounded-md flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              DevLinker
            </span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </nav>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[75vh] mt-12 flex flex-col md:flex-row items-center justify-center px-6 py-10 gap-8 max-w-7xl mx-auto">
        <div className="flex-1 max-w-2xl z-10">
          <div className="inline-block px-3 py-1 mb-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full text-blue-600 dark:text-blue-300 text-sm font-medium animate-bounce">
            Developer's Favorite Tool
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Build Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Developer Portfolio
            </span>{" "}
            in Minutes
          </h1>
          <p className="text-sm mb-6 text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
            Hi, I'm Mashal Ibrar — a frontend developer passionate about
            building responsive and elegant UIs using React, Tailwind CSS, and
            modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="https://github.com/MashalTech-rgb"
              className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center text-base font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 relative z-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1kv8-WWmRJBHJzBVMTnAI3cvDeSAjpVlu/view"
              className="px-4 py-2.5 border-2 border-blue-600 text-blue-600 dark:text-blue-300 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800/50 transition flex items-center justify-center text-base font-medium group relative"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 relative z-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex-1 z-10 flex justify-center mt-8 md:mt-0">
          <div className="relative p-6 transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 relative">
              <img
                src={HomeImg}
                alt="DevLinker Portfolio Example"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>

            {/* Enhanced Feature Cards */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 p-1.5 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-2">
                  <div className="font-semibold text-sm">Mobile Responsive</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Works on all devices
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-1.5 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
                <div className="ml-2">
                  <div className="font-semibold text-sm">Custom Domain</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Professional branding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Feature Highlights */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent inline-block">
              Why Choose DevLinker?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-3">
              Everything you need to create an impressive developer portfolio
              without writing a single line of code
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <div className="absolute -top-4 -right-4 text-7xl opacity-5">
                  {feature.icon}
                </div>
                <div className="text-5xl mb-6 z-10 relative">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 z-10 relative">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 z-10 relative">
                  {feature.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who have transformed their careers with
            DevLinker
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contactus"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              to="/"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              See Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-700/5 dark:from-blue-900/10 dark:to-indigo-900/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent inline-block">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-3">
              Join thousands of developers who have transformed their careers
              with DevLinker
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-100 dark:border-gray-700 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <div className="flex items-start mb-4 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center text-xl font-bold mr-4 transform transition-transform duration-300 group-hover:rotate-6">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{t.name}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-4 relative z-10">
                  "{t.message}"
                </p>
                <div className="flex text-yellow-400 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent inline-block">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-3">
              Some of my best work that demonstrates my skills and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Dashboard",
                desc: "A modern admin dashboard with analytics and product management",
                tags: ["React", "Tailwind", "Chart.js"],
                link: "https://e-commerce-vnh8.vercel.app/",
                 image: eCommerce,
              },
              {
                title: "Portfolio Builder",
                desc: "Interactive portfolio builder with theme customization",
                tags: ["Next.js", "Firebase", "Framer Motion"],
                link: "https://devlinker-three.vercel.app/",
                  image: DevLinker,
              },
              {
                title: "Quiz App",
                desc: "An interactive and responsive quiz app to test knowledge across various topics with real-time scoring and smooth UI.",
                tags: ["React", "Node.js", "WebSockets"],
                link: "https://app-eight-ebon.vercel.app/",
                  image: QuizApp,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                  <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Skills & Technologies Section */}
     
<section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent inline-block">
        My Skills
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mt-3">
        Technologies and tools I'm proficient with
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "📜" },
        { name: "HTML5", icon: "🖥️" },
        { name: "CSS3", icon: "🎨" },
        { name: "Tailwind CSS", icon: "🌀" },
        { name: "Redux", icon: "🔄" },
        { name: "Git", icon: "🐙" },
        { name: "Figma", icon: "✏️" },
      ].map((skill, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center group"
        >
          <span className="text-4xl mb-3">{skill.icon}</span>
          <h3 className="font-medium text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>


      <Footer/>
 

    </div>
  );
};

export default Home;
