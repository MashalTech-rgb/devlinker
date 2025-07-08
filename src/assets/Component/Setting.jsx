import React, { useState } from 'react';
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiGlobe, 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiSave, 
  FiMoon, 
  FiSun 
} from 'react-icons/fi';
import { useUser } from '../Context/UserContext';

const Settings = () => {
  const { userData, darkMode, updateUserData, toggleDarkMode } = useUser();
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [localUserData, setLocalUserData] = useState({...userData});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    updateUserData(localUserData);
    
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 flex-shrink-0">
            <nav className={`space-y-1 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-4`}>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                  activeTab === 'profile' 
                    ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700') 
                    : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')
                }`}
              >
                <FiUser className="mr-3" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                  activeTab === 'account' 
                    ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700') 
                    : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')
                }`}
              >
                <FiMail className="mr-3" />
                Account
              </button>
              <button
                onClick={() => setActiveTab('social')}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                  activeTab === 'social' 
                    ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700') 
                    : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')
                }`}
              >
                <FiGlobe className="mr-3" />
                Social Links
              </button>
              <button
                onClick={() => setActiveTab('appearance')}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                  activeTab === 'appearance' 
                    ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700') 
                    : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')
                }`}
              >
                {darkMode ? <FiSun className="mr-3" /> : <FiMoon className="mr-3" />}
                Appearance
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6`}>
                <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={localUserData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="bio" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={localUserData.bio}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        rows="3"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={localUserData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={localUserData.location}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className={`px-4 py-2 rounded-md flex items-center ${
                        isSaving ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                      } text-white transition-colors`}
                    >
                      {isSaving ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        <>
                          <FiSave className="mr-2" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </form>
                {saveSuccess && (
                  <div className={`mt-4 p-3 rounded-md ${
                    darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'
                  }`}>
                    Profile updated successfully!
                  </div>
                )}
              </div>
            )}

            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6`}>
                <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={localUserData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="current-password" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current-password"
                        className={`w-full px-4 py-2 rounded-md border ${
                          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="Enter current password"
                      />
                    </div>
                    <div>
                      <label htmlFor="new-password" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new-password"
                        className={`w-full px-4 py-2 rounded-md border ${
                          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="Enter new password"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className={`px-4 py-2 rounded-md flex items-center ${
                        isSaving ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                      } text-white transition-colors`}
                    >
                      {isSaving ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        <>
                          <FiSave className="mr-2" />
                          Update Account
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Social Links */}
            {activeTab === 'social' && (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6`}>
                <h2 className="text-xl font-semibold mb-6">Social Links</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="website" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Personal Website
                      </label>
                      <div className="flex">
                        <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${
                          darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-500'
                        }`}>
                          <FiGlobe />
                        </span>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={localUserData.website}
                          onChange={handleChange}
                          className={`flex-1 px-4 py-2 rounded-r-md border ${
                            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="github" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        GitHub Username
                      </label>
                      <div className="flex">
                        <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${
                          darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-500'
                        }`}>
                          <FiGithub />
                        </span>
                        <input
                          type="text"
                          id="github"
                          name="github"
                          value={localUserData.github}
                          onChange={handleChange}
                          className={`flex-1 px-4 py-2 rounded-r-md border ${
                            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="username"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="linkedin" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        LinkedIn Username
                      </label>
                      <div className="flex">
                        <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${
                          darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-500'
                        }`}>
                          <FiLinkedin />
                        </span>
                        <input
                          type="text"
                          id="linkedin"
                          name="linkedin"
                          value={localUserData.linkedin}
                          onChange={handleChange}
                          className={`flex-1 px-4 py-2 rounded-r-md border ${
                            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="username"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="twitter" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Twitter Username
                      </label>
                      <div className="flex">
                        <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${
                          darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-500'
                        }`}>
                          <FiTwitter />
                        </span>
                        <input
                          type="text"
                          id="twitter"
                          name="twitter"
                          value={localUserData.twitter}
                          onChange={handleChange}
                          className={`flex-1 px-4 py-2 rounded-r-md border ${
                            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="username"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className={`px-4 py-2 rounded-md flex items-center ${
                        isSaving ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                      } text-white transition-colors`}
                    >
                      {isSaving ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        <>
                          <FiSave className="mr-2" />
                          Save Social Links
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6`}>
                <h2 className="text-xl font-semibold mb-6">Appearance</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Theme</h3>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => toggleDarkMode(false)}
                        className={`flex-1 py-3 px-4 rounded-lg border-2 ${
                          !darkMode ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                        } transition-colors`}
                      >
                        <div className="flex flex-col items-center">
                          <FiSun className="h-6 w-6 mb-2" />
                          <span>Light</span>
                        </div>
                      </button>
                      <button
                        onClick={() => toggleDarkMode(true)}
                        className={`flex-1 py-3 px-4 rounded-lg border-2 ${
                          darkMode ? 'border-blue-500 bg-blue-900' : 'border-gray-300'
                        } transition-colors`}
                      >
                        <div className="flex flex-col items-center">
                          <FiMoon className="h-6 w-6 mb-2" />
                          <span>Dark</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;