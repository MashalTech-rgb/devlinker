import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiArrowRight } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from '../Context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { darkMode } = useUser();
  const [input, setInput] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password) {
      setError('Please fill in all fields');
      return;
    }

    const email = input.email.trim().toLowerCase();
    const password = input.password.trim();

    setIsLoading(true);
    setError('');

    const loadingToast = toast.loading('Authenticating...', {
      position: 'bottom-left',
      style: { 
        background: darkMode ? '#1E40AF' : '#3B82F6', 
        color: '#fff' 
      }
    });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const savedUserRaw = localStorage.getItem("user");
      if (!savedUserRaw) throw new Error("No account found. Please sign up first.");

      const savedUser = JSON.parse(savedUserRaw);

      if (
        email !== savedUser.email?.toLowerCase() ||
        password !== savedUser.password
      ) {
        throw new Error("Invalid email or password");
      }

      toast.dismiss(loadingToast);
      toast.success('Login successful! Redirecting...', {
        position: 'bottom-left',
        duration: 2000,
        style: { 
          background: darkMode ? '#047857' : '#10B981', 
          color: '#fff' 
        }
      });

      localStorage.setItem('authToken', 'simulated-token');

      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Something went wrong");
      toast.dismiss(loadingToast);
      toast.error(err.message || "Error during login", {
        position: 'bottom-left',
        style: { 
          background: darkMode ? '#991B1B' : '#EF4444', 
          color: '#fff' 
        }
      });
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-gray-100'
    }`}>
      <Toaster
        position="bottom-left"
        toastOptions={{
          style: {
            color: '#fff',
            minWidth: '300px',
            padding: '16px 20px',
            borderRadius: '8px',
            boxShadow: darkMode 
              ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
              : '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
          success: { 
            style: { 
              background: darkMode ? '#047857' : '#10B981' 
            } 
          },
          error: { 
            style: { 
              background: darkMode ? '#991B1B' : '#EF4444' 
            } 
          },
          loading: { 
            style: { 
              background: darkMode ? '#1E40AF' : '#3B82F6' 
            } 
          },
        }}
      />

      <div className="w-full max-w-md px-4">
        <div className={`p-8 rounded-xl shadow-lg border ${
          darkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-100'
        }`}>
          <div className="text-center mb-8">
            <div className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center shadow-md mb-4 ${
              darkMode ? 'bg-blue-700' : 'bg-blue-600'
            }`}>
              <FiUser className="text-white text-2xl" />
            </div>
            <h2 className={`text-3xl font-bold mb-1 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Welcome Back
            </h2>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
              Sign in to continue to your account
            </p>
          </div>

          {error && (
            <div className={`mb-6 p-3 rounded-lg text-sm border flex items-center ${
              darkMode 
                ? 'bg-red-900/30 text-red-300 border-red-800' 
                : 'bg-red-50 text-red-700 border-red-100'
            }`}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email Address
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-3.5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-400'
                }`}>
                  <FiMail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white placeholder-gray-400' 
                      : 'border-gray-200 focus:ring-blue-500 text-gray-800'
                  }`}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Password
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-3.5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-400'
                }`}>
                  <FiLock className="h-5 w-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white placeholder-gray-400' 
                      : 'border-gray-200 focus:ring-blue-500 text-gray-800'
                  }`}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className={`absolute right-4 top-3.5 ${
                    darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-400 hover:text-blue-600'
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                </button>
              </div>
              <div className="mt-2 text-right">
                <a 
                  href="/forgot-password" 
                  className={`text-sm ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 ${
                isLoading 
                  ? (darkMode ? 'bg-blue-800 cursor-not-allowed' : 'bg-blue-400 cursor-not-allowed')
                  : (darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700')
              } text-white transition-colors shadow-md`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <FiArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <div className={`my-6 flex items-center ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className={`flex-1 border-t ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}></div>
            <div className={`px-3 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>or</div>
            <div className={`flex-1 border-t ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}></div>
          </div>

          <div className={`text-center ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p>
              Don't have an account?{' '}
              <button
                className={`font-medium ${
                  darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  toast('Redirecting to sign up...', {
                    position: 'bottom-left',
                    duration: 1000,
                    style: { 
                      background: darkMode ? '#1E40AF' : '#3B82F6', 
                      color: '#fff' 
                    }
                  });
                  setTimeout(() => navigate('/signup'), 1000);
                }}
              >
                Create one
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;