import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiMapPin, FiArrowLeft } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from '../Context/UserContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { darkMode } = useUser();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, gender, city } = data;

    if (!name || !email || !password || !gender || !city) {
      toast.error('Please fill all required fields', { 
        position: 'bottom-left',
        style: {
          background: darkMode ? '#EF4444' : '#FECACA',
          color: darkMode ? '#FFFFFF' : '#991B1B'
        }
      });
      return;
    }

    const user = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: password.trim(),
      gender,
      city,
    };

    const existingUserRaw = localStorage.getItem('user');
    if (existingUserRaw) {
      const existingUser = JSON.parse(existingUserRaw);
      if (existingUser.email === user.email) {
        toast.error('An account with this email already exists.', {
          position: 'bottom-left',
          style: {
            background: darkMode ? '#EF4444' : '#FECACA',
            color: darkMode ? '#FFFFFF' : '#991B1B'
          }
        });
        return;
      }
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Creating your account...', {
      position: 'bottom-left',
      style: {
        background: darkMode ? '#3B82F6' : '#2563EB',
        color: '#FFFFFF'
      }
    });

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(user));
      setIsSubmitting(false);
      toast.dismiss(loadingToast);
      toast.success('Account created successfully! Redirecting...', {
        position: 'bottom-right',
        duration: 2000,
        style: {
          background: darkMode ? '#10B981' : '#059669',
          color: '#FFFFFF'
        }
      });
      setTimeout(() => navigate('/Login'), 2000);
    }, 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'
    }`}>
      <Toaster toastOptions={{
        style: {
          background: darkMode ? '#1F2937' : '#FFFFFF',
          color: darkMode ? '#FFFFFF' : '#1F2937',
          boxShadow: darkMode ? '0 4px 6px rgba(0, 0, 0, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
        }
      }} />
      
      <div className="w-full max-w-lg">
        <button
          onClick={() => {
            toast('Returning back...', { 
              position: 'bottom-left', 
              duration: 1000,
              style: {
                background: darkMode ? '#3B82F6' : '#2563EB',
                color: '#FFFFFF'
              }
            });
            setTimeout(() => navigate(-1), 1000);
          }}
          className={`flex items-center mb-4 transition-colors ${
            darkMode 
              ? 'text-blue-400 hover:text-blue-300' 
              : 'text-blue-600 hover:text-blue-800'
          }`}
        >
          <FiArrowLeft className="mr-2" /> Back
        </button>

        <div className={`rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 ${
          darkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-100'
        } border`}>
          <div className={`p-6 text-center ${
            darkMode 
              ? 'bg-gradient-to-r from-blue-700 to-indigo-800' 
              : 'bg-gradient-to-r from-blue-600 to-indigo-700'
          } text-white`}>
            <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUser className="text-white text-3xl" />
            </div>
            <h1 className="text-2xl font-bold">Create Your Account</h1>
            <p className="opacity-90 mt-1">Join DevLinker to showcase your skills</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className={`block font-medium mb-2 flex items-center ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <FiUser className={`mr-2 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white placeholder-gray-400' 
                    : 'border-gray-300 focus:ring-blue-500 text-gray-800'
                }`}
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className={`block font-medium mb-2 flex items-center ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <FiMail className={`mr-2 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white placeholder-gray-400' 
                    : 'border-gray-300 focus:ring-blue-500 text-gray-800'
                }`}
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className={`block font-medium mb-2 flex items-center ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <FiLock className={`mr-2 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className={`w-full border rounded-lg px-4 py-3 pl-10 pr-10 focus:outline-none focus:ring-2 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white placeholder-gray-400' 
                      : 'border-gray-300 focus:ring-blue-500 text-gray-800'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-3.5 ${
                    darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              <div className={`mt-2 text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <div className="flex items-center mt-1">
                  <div className={`h-1 w-1/4 rounded-full mr-1 ${
                    data.password.length > 0 
                      ? (darkMode ? 'bg-red-500' : 'bg-red-400') 
                      : (darkMode ? 'bg-gray-600' : 'bg-gray-200')
                  }`}></div>
                  <div className={`h-1 w-1/4 rounded-full mr-1 ${
                    data.password.length > 4 
                      ? (darkMode ? 'bg-yellow-500' : 'bg-yellow-400') 
                      : (darkMode ? 'bg-gray-600' : 'bg-gray-200')
                  }`}></div>
                  <div className={`h-1 w-1/4 rounded-full mr-1 ${
                    data.password.length > 7 
                      ? (darkMode ? 'bg-green-500' : 'bg-green-400') 
                      : (darkMode ? 'bg-gray-600' : 'bg-gray-200')
                  }`}></div>
                  <div className={`h-1 w-1/4 rounded-full ${
                    data.password.length > 10 
                      ? (darkMode ? 'bg-green-600' : 'bg-green-500') 
                      : (darkMode ? 'bg-gray-600' : 'bg-gray-200')
                  }`}></div>
                </div>
                <p className="mt-1">
                  {data.password.length > 10 ? 'Strong password' :
                   data.password.length > 7 ? 'Good password' :
                   data.password.length > 4 ? 'Fair password' :
                   data.password.length > 0 ? 'Weak password' : ''}
                </p>
              </div>
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className={`block font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Gender
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={data.gender === "Male"}
                  onChange={handleChange}
                  className="mr-1"
                /> <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Male</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={data.gender === "Female"}
                  onChange={handleChange}
                  className="mr-1"
                /> <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Female</span>
              </label>
            </div>

            {/* City */}
            <div className="mb-8">
              <label htmlFor="city" className={`block font-medium mb-2 flex items-center ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <FiMapPin className={`mr-2 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                City
              </label>
              <div className="relative">
                <select
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-3 pl-10 appearance-none focus:outline-none focus:ring-2 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white' 
                      : 'border-gray-300 focus:ring-blue-500 text-gray-800'
                  }`}
                  required
                >
                  <option value="">Select your city</option>
                  <option value="Gujranwala">Gujranwala</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Murre">Murre</option>
                </select>
                <div className={`absolute right-3 top-3.5 pointer-events-none ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all flex items-center justify-center ${
                isSubmitting
                  ? (darkMode ? 'bg-gray-600' : 'bg-gray-400') + ' cursor-not-allowed'
                  : (darkMode 
                      ? 'bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-600 hover:to-indigo-700' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600'
                    ) + ' shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>

            <div className={`mt-6 text-center ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <p>
                Already have an account?{' '}
                <a
                  href="/Login"
                  onClick={(e) => {
                    e.preventDefault();
                    toast('Redirecting to login...', {
                      position: 'bottom-right',
                      duration: 1000,
                      style: {
                        background: darkMode ? '#3B82F6' : '#2563EB',
                        color: '#FFFFFF'
                      }
                    });
                    setTimeout(() => navigate('/Login'), 1000);
                  }}
                  className={`font-medium ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;