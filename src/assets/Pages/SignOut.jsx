import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from '../Context/UserContext';

const SignOut = () => {
  const navigate = useNavigate();
  const { darkMode } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedOut, setIsSignedOut] = useState(false);

  const handleSignOut = () => {
    setIsLoading(true);
    const loadingToast = toast.loading('Signing out...', {
      style: {
        background: darkMode ? '#1E40AF' : '#3B82F6',
        color: '#fff'
      }
    });
  
    setTimeout(() => {
      console.log('User signed out successfully');
      setIsLoading(false);
      setIsSignedOut(true);
      toast.dismiss(loadingToast);
      toast.success('Signed out successfully!', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: darkMode ? '#047857' : '#10B981',
          color: '#fff'
        }
      });
    }, 1500);
  };

  const handleCancel = () => {
    toast('Sign out cancelled', {
      icon: 'ℹ️',
      duration: 2000,
      style: {
        background: darkMode ? '#1E40AF' : '#3B82F6',
        color: '#fff'
      }
    });
    navigate('/Dashboard/home');
  };

  if (isSignedOut) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}>
        <Toaster toastOptions={{
          style: {
            background: darkMode ? '#1F2937' : '#fff',
            color: darkMode ? '#fff' : '#1F2937'
          }
        }} />
        <div className={`max-w-md w-full rounded-xl shadow-lg p-8 text-center ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full ${
            darkMode ? 'bg-green-900/30' : 'bg-green-100'
          }`}>
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className={`mt-6 text-2xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Signed Out Successfully!
          </h2>
          <p className={`mt-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            You've been securely signed out of your account.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigate('/')}
              className={`w-full py-3 px-4 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                darkMode 
                  ? 'bg-indigo-700 text-white focus:ring-indigo-600' 
                  : 'bg-indigo-600 text-white focus:ring-indigo-500'
              }`}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <Toaster toastOptions={{
        style: {
          background: darkMode ? '#1F2937' : '#fff',
          color: darkMode ? '#fff' : '#1F2937'
        }
      }} />
      <div className={`max-w-md w-full rounded-xl shadow-lg overflow-hidden ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="p-8">
          <div className="text-center">
            <div className={`mx-auto border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center ${
              darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'
            }`}>
              <svg className={`h-10 w-10 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
            <h2 className={`mt-4 text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Sign Out
            </h2>
            <p className={`mt-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Are you sure you want to sign out of your account?
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className={`flex-1 py-3 px-4 rounded-md border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 ${
                darkMode 
                  ? 'border-gray-600 text-gray-200 hover:bg-gray-700 focus:ring-indigo-600' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-indigo-500'
              }`}
            >
              Cancel
            </button>
            <button
              onClick={handleSignOut}
              disabled={isLoading}
              className={`flex-1 py-3 px-4 rounded-md text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 ${
                darkMode 
                  ? 'bg-red-700 focus:ring-red-600' 
                  : 'bg-red-600 focus:ring-red-500'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing Out...
                </span>
              ) : (
                'Sign Out'
              )}
            </button>
          </div>
        </div>
        
        <div className={`px-8 py-4 text-center ${
          darkMode ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <p className={`text-xs ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            For security reasons, please sign out when you're done accessing your account on shared devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignOut;