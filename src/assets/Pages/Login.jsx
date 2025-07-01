import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiPhone, FiInstagram } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      
      if (!savedUser) {
        setIsLoading(false);
        setError("No user found. Please sign up first.");
        return;
      }

      if (
        input.email === savedUser.Email &&
        input.password === savedUser.Password
      ) {
        navigate('/dashboard');
      } else {
        setIsLoading(false);
        setError("Invalid email or password");
      }
    }, 1500);
  };

  // Social login handlers
  const handleInstagramLogin = () => {
    window.open('https://www.instagram.com/', '_blank');
  };

  const handleGoogleLogin = () => {
    window.open('https://accounts.google.com/', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="relative w-full max-w-md px-4">
        {/* Decorative elements */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-xl"></div>
        
        <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
              <FiUser className="text-white text-2xl" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Sign in to your DevLinker account
          </p>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
              onClick={handleInstagramLogin}
              className="flex items-center justify-center py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all shadow hover:shadow-md"
            >
              <FiInstagram className="h-5 w-5 mr-2" />
              Instagram
            </button>
            
            <button 
              onClick={handleGoogleLogin}
              className="flex items-center justify-center py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all shadow hover:shadow-md"
            >
              <FcGoogle className="h-5 w-5 mr-2" />
              Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or sign in with email</span>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <FiMail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <FiLock className="h-5 w-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5" />
                  ) : (
                    <FiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="mt-2 text-right">
                <a href="/SignUp" className="text-sm text-blue-600 hover:text-blue-800 transition">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                isLoading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl'
              } text-white relative flex items-center justify-center`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-8 text-center text-gray-600">
            <p>
              Don't have an account?{' '}
              <a 
                href="/signup" 
                className="text-blue-600 font-medium hover:text-blue-800 transition"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/signup');
                }}
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;