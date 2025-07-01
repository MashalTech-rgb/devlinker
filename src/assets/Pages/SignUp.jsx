import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiMapPin, FiArrowLeft } from 'react-icons/fi';

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Gender: "",
    City: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const { Name, Email, Password, Gender, City } = data;
    if (!Name || !Email || !Password || !Gender || !City) {
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(data));
      setIsSubmitting(false);
      navigate('/Login');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-lg">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Back
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white text-center">
            <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUser className="text-white text-3xl" />
            </div>
            <h1 className="text-2xl font-bold">Create Your Account</h1>
            <p className="opacity-90 mt-1">Join DevLinker to showcase your skills</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="Name" className="block text-gray-700 font-medium mb-2 flex items-center">
                <FiUser className="mr-2 text-blue-600" />
                Full Name
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                value={data.Name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="Email" className="block text-gray-700 font-medium mb-2 flex items-center">
                <FiMail className="mr-2 text-blue-600" />
                Email Address
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                value={data.Email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="Password" className="block text-gray-700 font-medium mb-2 flex items-center">
                <FiLock className="mr-2 text-blue-600" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="Password"
                  id="Password"
                  value={data.Password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-blue-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                <div className="flex items-center mt-1">
                  <div className={`h-1 w-1/4 rounded-full mr-1 ${data.Password.length > 0 ? 'bg-red-400' : 'bg-gray-200'}`}></div>
                  <div className={`h-1 w-1/4 rounded-full mr-1 ${data.Password.length > 4 ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
                  <div className={`h-1 w-1/4 rounded-full mr-1 ${data.Password.length > 7 ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                  <div className={`h-1 w-1/4 rounded-full ${data.Password.length > 10 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                </div>
                <p className="mt-1">
                  {data.Password.length > 10 ? 'Strong password' : 
                   data.Password.length > 7 ? 'Good password' : 
                   data.Password.length > 4 ? 'Fair password' : 
                   data.Password.length > 0 ? 'Weak password' : ''}
                </p>
              </div>
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Gender</label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`flex items-center justify-center p-4 rounded-lg border-2 ${data.Gender === "Male" ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'} transition-all cursor-pointer`}>
                  <input
                    type="radio"
                    name="Gender"
                    value="Male"
                    checked={data.Gender === "Male"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                      <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
                    </div>
                    <span>Male</span>
                  </div>
                </label>
                
                <label className={`flex items-center justify-center p-4 rounded-lg border-2 ${data.Gender === "Female" ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300'} transition-all cursor-pointer`}>
                  <input
                    type="radio"
                    name="Gender"
                    value="Female"
                    checked={data.Gender === "Female"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="flex flex-col items-center">
                    <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                      <div className="bg-pink-500 w-8 h-8 rounded-full"></div>
                    </div>
                    <span>Female</span>
                  </div>
                </label>
              </div>
            </div>

            {/* City */}
            <div className="mb-8">
              <label htmlFor="City" className="block text-gray-700 font-medium mb-2 flex items-center">
                <FiMapPin className="mr-2 text-blue-600" />
                City
              </label>
              <div className="relative">
                <select
                  name="City"
                  value={data.City}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  required
                >
                  <option value="">Select your city</option>
                  <option value="Gujranwala">Gujranwala</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Murre">Murre</option>
                </select>
                <div className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !data.Name || !data.Email || !data.Password || !data.Gender || !data.City}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all flex items-center justify-center ${
                isSubmitting || !data.Name || !data.Email || !data.Password || !data.Gender || !data.City
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
            
            <div className="mt-6 text-center text-gray-600">
              <p>
                Already have an account?{' '}
                <a 
                  href="/Login" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/Login');
                  }}
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