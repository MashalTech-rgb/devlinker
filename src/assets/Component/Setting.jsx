import React, { useState } from 'react';
import { 
  FiSettings, 
  FiSave, 
  FiEye, 
  FiMoon, 
  FiSun, 
  FiGlobe, 
  FiUser,
  FiMail,
  FiLock,
  FiBell,
  FiDatabase,
  FiShield,
  FiCreditCard,
  FiLink,
  FiBarChart2,
  FiLayout,
  FiCode,
  FiServer,
  FiTrash2
} from 'react-icons/fi';

const SettingsDashboard = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true
  });
  
  const [siteInfo, setSiteInfo] = useState({
    title: 'My Awesome Website',
    description: 'A modern website built with React',
    url: 'https://mywebsite.com',
    language: 'en-US'
  });
  
  const [socialLinks, setSocialLinks] = useState({
    facebook: 'https://facebook.com/mywebsite',
    twitter: 'https://twitter.com/mywebsite',
    instagram: 'https://instagram.com/mywebsite',
    linkedin: 'https://linkedin.com/mywebsite'
  });
  
  const [seoSettings, setSeoSettings] = useState({
    metaTitle: 'My Website - The Best Place Online',
    metaDescription: 'Discover amazing content on my website',
    keywords: 'website, content, amazing',
    analyticsId: 'UA-12345678-1'
  });
  
  const [security, setSecurity] = useState({
    twoFactor: true,
    loginAlerts: true,
    passwordExpiration: 90
  });
  
  const [appearance, setAppearance] = useState({
    primaryColor: '#4f46e5',
    secondaryColor: '#7c3aed',
    font: 'Inter',
    layout: 'centered'
  });

  const handleInputChange = (e, section, field) => {
    const { value } = e.target;
    switch(section) {
      case 'site':
        setSiteInfo({...siteInfo, [field]: value});
        break;
      case 'seo':
        setSeoSettings({...seoSettings, [field]: value});
        break;
      case 'social':
        setSocialLinks({...socialLinks, [field]: value});
        break;
      case 'appearance':
        setAppearance({...appearance, [field]: value});
        break;
      case 'security':
        setSecurity({...security, [field]: field === 'passwordExpiration' ? parseInt(value) : value});
        break;
      default:
        break;
    }
  };

  const handleNotificationChange = (type) => {
    setNotifications({...notifications, [type]: !notifications[type]});
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSave = () => {
    // Simulate saving settings
    alert('Settings saved successfully!');
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className={`text-3xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Website Settings
            </h1>
            <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Manage all your website configurations in one place
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-700 text-yellow-300'}`}
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              <FiSave className="mr-2" /> Save Changes
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className={`lg:w-64 rounded-xl p-4 h-fit ${theme === 'light' ? 'bg-white shadow' : 'bg-gray-800'}`}>
            <div className="flex items-center mb-8">
              <FiSettings className={`mr-3 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} size={24} />
              <h2 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                Settings Menu
              </h2>
            </div>
            
            <nav>
              <button 
                onClick={() => setActiveTab('general')}
                className={`w-full text-left flex items-center px-4 py-3 rounded-lg mb-2 transition ${
                  activeTab === 'general' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FiGlobe className="mr-3" /> General Settings
              </button>
              
              <button 
                onClick={() => setActiveTab('appearance')}
                className={`w-full text-left flex items-center px-4 py-3 rounded-lg mb-2 transition ${
                  activeTab === 'appearance' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FiLayout className="mr-3" /> Appearance
              </button>
              
              <button 
                onClick={() => setActiveTab('seo')}
                className={`w-full text-left flex items-center px-4 py-3 rounded-lg mb-2 transition ${
                  activeTab === 'seo' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FiBarChart2 className="mr-3" /> SEO & Analytics
              </button>
              
              <button 
                onClick={() => setActiveTab('social')}
                className={`w-full text-left flex items-center px-4 py-3 rounded-lg mb-2 transition ${
                  activeTab === 'social' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FiLink className="mr-3" /> Social Media
              </button>
              
              <button 
                onClick={() => setActiveTab('security')}
                className={`w-full text-left flex items-center px-4 py-3 rounded-lg mb-2 transition ${
                  activeTab === 'security' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FiShield className="mr-3" /> Security
              </button>
              
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`w-full text-left flex items-center px-4 py-3 rounded-lg mb-2 transition ${
                  activeTab === 'notifications' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FiBell className="mr-3" /> Notifications
              </button>
              
              <button 
                onClick={() => setActiveTab('advanced')}
                className={`w-full text-left flex items-center px-4 py-3 rounded-lg transition ${
                  activeTab === 'advanced' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FiCode className="mr-3" /> Advanced
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white shadow' : 'bg-gray-800'}`}>
                <div className="flex items-center mb-6">
                  <FiGlobe className={`mr-3 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} size={24} />
                  <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    General Settings
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Site Title
                    </label>
                    <input
                      type="text"
                      value={siteInfo.title}
                      onChange={(e) => handleInputChange(e, 'site', 'title')}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Site URL
                    </label>
                    <input
                      type="url"
                      value={siteInfo.url}
                      onChange={(e) => handleInputChange(e, 'site', 'url')}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Site Description
                    </label>
                    <textarea
                      value={siteInfo.description}
                      onChange={(e) => handleInputChange(e, 'site', 'description')}
                      rows="3"
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Default Language
                    </label>
                    <select
                      value={siteInfo.language}
                      onChange={(e) => handleInputChange(e, 'site', 'language')}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    >
                      <option value="en-US">English (US)</option>
                      <option value="es-ES">Spanish</option>
                      <option value="fr-FR">French</option>
                      <option value="de-DE">German</option>
                      <option value="zh-CN">Chinese (Simplified)</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8">
                  <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    Site Logo
                  </label>
                  <div className="flex items-center">
                    <div className="mr-4 w-16 h-16 bg-gray-200 border-2 border-dashed rounded-xl" />
                    <div>
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg mr-3 transition">
                        Upload New
                      </button>
                      <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white shadow' : 'bg-gray-800'}`}>
                <div className="flex items-center mb-6">
                  <FiLayout className={`mr-3 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} size={24} />
                  <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Appearance Settings
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Primary Color
                    </label>
                    <div className="flex items-center">
                      <input
                        type="color"
                        value={appearance.primaryColor}
                        onChange={(e) => handleInputChange(e, 'appearance', 'primaryColor')}
                        className="w-10 h-10 border-0 rounded cursor-pointer"
                      />
                      <span className="ml-3">{appearance.primaryColor}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Secondary Color
                    </label>
                    <div className="flex items-center">
                      <input
                        type="color"
                        value={appearance.secondaryColor}
                        onChange={(e) => handleInputChange(e, 'appearance', 'secondaryColor')}
                        className="w-10 h-10 border-0 rounded cursor-pointer"
                      />
                      <span className="ml-3">{appearance.secondaryColor}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Font Family
                    </label>
                    <select
                      value={appearance.font}
                      onChange={(e) => handleInputChange(e, 'appearance', 'font')}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    >
                      <option value="Inter">Inter</option>
                      <option value="Roboto">Roboto</option>
                      <option value="Open Sans">Open Sans</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Poppins">Poppins</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Layout Style
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {['centered', 'sidebar-left', 'sidebar-right', 'full-width'].map((layout) => (
                        <div 
                          key={layout}
                          onClick={() => setAppearance({...appearance, layout})}
                          className={`border rounded-lg p-4 cursor-pointer text-center ${
                            appearance.layout === layout 
                              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                              : theme === 'light' 
                                ? 'border-gray-300 hover:bg-gray-50' 
                                : 'border-gray-600 hover:bg-gray-700'
                          }`}
                        >
                          <div className="h-12 flex items-center justify-center mb-2">
                            <div className="flex w-full h-6 bg-gray-200 rounded">
                              {layout === 'sidebar-left' && (
                                <div className="w-1/4 bg-indigo-400 rounded-l"></div>
                              )}
                              <div className={`${layout === 'sidebar-left' || layout === 'sidebar-right' ? 'w-3/4' : 'w-full'} ${
                                layout === 'sidebar-right' ? 'rounded-l' : layout === 'centered' ? 'w-3/4 mx-auto' : ''
                              } bg-gray-300 ${layout === 'sidebar-right' ? '' : 'rounded-r'}`}></div>
                              {layout === 'sidebar-right' && (
                                <div className="w-1/4 bg-indigo-400 rounded-r"></div>
                              )}
                            </div>
                          </div>
                          <span className="capitalize">{layout.replace('-', ' ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <label className={`block mb-4 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    Preview
                  </label>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-8">
                    <div className="max-w-3xl mx-auto">
                      <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Website Title</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Your website tagline goes here</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                          <div 
                            key={item}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                            style={{
                              borderTop: `4px solid ${appearance.primaryColor}`
                            }}
                          >
                            <div 
                              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                              style={{ backgroundColor: `${appearance.secondaryColor}20` }}
                            >
                              <div style={{ color: appearance.secondaryColor }}>0{item}</div>
                            </div>
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Feature {item}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                              This is a sample feature description to show how your content will look.
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* SEO Settings */}
            {activeTab === 'seo' && (
              <div className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white shadow' : 'bg-gray-800'}`}>
                <div className="flex items-center mb-6">
                  <FiBarChart2 className={`mr-3 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} size={24} />
                  <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    SEO & Analytics
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={seoSettings.metaTitle}
                      onChange={(e) => handleInputChange(e, 'seo', 'metaTitle')}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                    <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                      Recommended length: 50-60 characters
                    </p>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Meta Description
                    </label>
                    <textarea
                      value={seoSettings.metaDescription}
                      onChange={(e) => handleInputChange(e, 'seo', 'metaDescription')}
                      rows="3"
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                    <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                      Recommended length: 150-160 characters
                    </p>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Keywords
                    </label>
                    <input
                      type="text"
                      value={seoSettings.keywords}
                      onChange={(e) => handleInputChange(e, 'seo', 'keywords')}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                    <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                      Separate keywords with commas
                    </p>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      Google Analytics ID
                    </label>
                    <input
                      type="text"
                      value={seoSettings.analyticsId}
                      onChange={(e) => handleInputChange(e, 'seo', 'analyticsId')}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                      placeholder="UA-XXXXX-Y"
                    />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      SEO Preview
                    </h3>
                    <div className={`border rounded-lg p-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'}`}>
                      <h4 className="text-blue-600 text-lg font-medium">{seoSettings.metaTitle || 'Your Page Title'}</h4>
                      <p className="text-green-600 text-sm mt-1">
                        https://www.example.com/page-url
                      </p>
                      <p className={`mt-1 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                        {seoSettings.metaDescription || 'This is a preview of how your page might appear in search results.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Social Media Settings */}
            {activeTab === 'social' && (
              <div className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white shadow' : 'bg-gray-800'}`}>
                <div className="flex items-center mb-6">
                  <FiLink className={`mr-3 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} size={24} />
                  <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Social Media Profiles
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    <div key={platform}>
                      <label className={`block mb-2 font-medium capitalize ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                        {platform}
                      </label>
                      <div className="flex">
                        <div className={`flex items-center px-4 rounded-l-lg border border-r-0 ${
                          theme === 'light' 
                            ? 'bg-gray-100 border-gray-300' 
                            : 'bg-gray-700 border-gray-600'
                        }`}>
                          <span className="text-gray-500">https://{platform}.com/</span>
                        </div>
                        <input
                          type="text"
                          value={url.replace(`https://${platform}.com/`, '')}
                          onChange={(e) => {
                            const newUrl = `https://${platform}.com/${e.target.value}`;
                            setSocialLinks({...socialLinks, [platform]: newUrl});
                          }}
                          className={`flex-1 px-4 py-2 rounded-r-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                            theme === 'light' 
                              ? 'bg-white border-gray-300' 
                              : 'bg-gray-700 border-gray-600 text-white'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                    Social Sharing Preview
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-200 h-40 border-b"></div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800">Website Title</h4>
                          <p className="text-gray-600 text-sm mt-1">https://yourwebsite.com</p>
                          <p className="mt-2 text-sm">This is a preview of how your content will look when shared on social media.</p>
                        </div>
                      </div>
                      <p className="text-center mt-2 text-sm text-gray-500">Facebook/Twitter Preview</p>
                    </div>
                    
                    <div className="md:w-1/2">
                      <div className="flex items-center border rounded-lg p-3">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Website Title</h4>
                          <p className="text-gray-600 text-sm mt-1">https://yourwebsite.com</p>
                        </div>
                      </div>
                      <p className="text-center mt-2 text-sm text-gray-500">LinkedIn Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white shadow' : 'bg-gray-800'}`}>
                <div className="flex items-center mb-6">
                  <FiShield className={`mr-3 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} size={24} />
                  <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Security Settings
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Authentication
                    </h3>
                    
                    <div className="flex items-center justify-between py-4 border-b">
                      <div>
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => setSecurity({...security, twoFactor: !security.twoFactor})}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                            security.twoFactor ? 'bg-indigo-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                              security.twoFactor ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                        <span className="ml-3 text-sm font-medium">
                          {security.twoFactor ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-4 border-b">
                      <div>
                        <h4 className="font-medium">Login Alerts</h4>
                        <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                          Get notified when someone logs into your account
                        </p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => setSecurity({...security, loginAlerts: !security.loginAlerts})}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                            security.loginAlerts ? 'bg-indigo-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                              security.loginAlerts ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                        <span className="ml-3 text-sm font-medium">
                          {security.loginAlerts ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Password Policy
                    </h3>
                    
                    <div className="mb-6">
                      <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                        Password Expiration
                      </label>
                      <div className="flex items-center">
                        <input
                          type="range"
                          min="30"
                          max="365"
                          value={security.passwordExpiration}
                          onChange={(e) => handleInputChange(e, 'security', 'passwordExpiration')}
                          className="w-full max-w-xs"
                        />
                        <span className="ml-4 w-16 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-center">
                          {security.passwordExpiration} days
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200 flex items-center">
                        <FiLock className="mr-2" /> Security Recommendations
                      </h4>
                      <ul className={`mt-2 space-y-1 text-sm ${
                        theme === 'light' ? 'text-yellow-700' : 'text-yellow-300'
                      }`}>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Enable two-factor authentication for all administrator accounts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Require strong passwords with special characters</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Regularly update your CMS and plugins</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Recent Activity
                    </h3>
                    
                    <div className={`rounded-lg border ${
                      theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-700 border-gray-600'
                    }`}>
                      {[
                        { action: 'Logged in', location: 'Gujranwala, Pakistan', device: 'Chrome on Windows', time: '2 hours ago' },
                        { action: 'Password changed', location: 'Lahore, Pakistan', device: 'Safari on iPhone', time: '3 days ago' },
                        { action: 'Settings updated', location: 'Gujranwala, Pakistan', device: 'Chrome on Windows', time: '1 week ago' }
                      ].map((activity, index) => (
                        <div 
                          key={index} 
                          className={`flex items-start p-4 ${
                            index !== 2 ? 'border-b' : ''} ${
                            theme === 'light' ? 'border-gray-100' : 'border-gray-600'
                          }`}
                        >
                          <div className={`mr-3 mt-1 w-3 h-3 rounded-full ${
                            index === 0 ? 'bg-green-500' : 'bg-gray-300'
                          }`}></div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium">{activity.action}</h4>
                              <span className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                                {activity.time}
                              </span>
                            </div>
                            <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                              {activity.location} • {activity.device}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white shadow' : 'bg-gray-800'}`}>
                <div className="flex items-center mb-6">
                  <FiBell className={`mr-3 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} size={24} />
                  <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Notification Settings
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Notification Preferences
                    </h3>
                    
                    <div className={`rounded-lg border ${
                      theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-700 border-gray-600'
                    }`}>
                      <div className="flex items-center justify-between p-4 border-b">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            Receive notifications via email
                          </p>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleNotificationChange('email')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                              notifications.email ? 'bg-indigo-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                                notifications.email ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border-b">
                        <div>
                          <h4 className="font-medium">Push Notifications</h4>
                          <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            Receive notifications on your devices
                          </p>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleNotificationChange('push')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                              notifications.push ? 'bg-indigo-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                                notifications.push ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <h4 className="font-medium">Weekly Reports</h4>
                          <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            Get weekly summary reports
                          </p>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleNotificationChange('weekly')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                              notifications.weekly ? 'bg-indigo-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                                notifications.weekly ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Notification Types
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Comments', desc: 'When someone comments on your content' },
                        { title: 'New Users', desc: 'When a new user registers' },
                        { title: 'System Updates', desc: 'Notifications about system updates' },
                        { title: 'Promotions', desc: 'Special offers and promotions' }
                      ].map((item, index) => (
                        <div 
                          key={index}
                          className={`flex items-start p-4 rounded-lg border ${
                            theme === 'light' 
                              ? 'bg-white border-gray-200' 
                              : 'bg-gray-700 border-gray-600'
                          }`}
                        >
                          <div className="mr-4 mt-1">
                            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                          </div>
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className={`mt-1 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Advanced Settings */}
            {activeTab === 'advanced' && (
              <div className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white shadow' : 'bg-gray-800'}`}>
                <div className="flex items-center mb-6">
                  <FiCode className={`mr-3 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} size={24} />
                  <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Advanced Settings
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Custom Code
                    </h3>
                    
                    <div className="mb-6">
                      <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                        Header Code
                      </label>
                      <div className={`rounded-lg border ${
                        theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-gray-700 border-gray-600'
                      }`}>
                        <div className="px-4 py-2 border-b text-sm text-gray-500">
                          &lt;head&gt; section
                        </div>
                        <textarea
                          rows="4"
                          className={`w-full px-4 py-3 focus:outline-none ${
                            theme === 'light' 
                              ? 'bg-gray-50 text-gray-800' 
                              : 'bg-gray-800 text-gray-200'
                          }`}
                          placeholder="<!-- Custom scripts, styles, or meta tags -->"
                        ></textarea>
                      </div>
                    </div>
                    
                    <div>
                      <label className={`block mb-2 font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                        Footer Code
                      </label>
                      <div className={`rounded-lg border ${
                        theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-gray-700 border-gray-600'
                      }`}>
                        <div className="px-4 py-2 border-b text-sm text-gray-500">
                          Before &lt;/body&gt; tag
                        </div>
                        <textarea
                          rows="4"
                          className={`w-full px-4 py-3 focus:outline-none ${
                            theme === 'light' 
                              ? 'bg-gray-50 text-gray-800' 
                              : 'bg-gray-800 text-gray-200'
                          }`}
                          placeholder="<!-- Analytics scripts or custom JS -->"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Cache Management
                    </h3>
                    
                    <div className={`rounded-lg border p-4 ${
                      theme === 'light' ? 'bg-yellow-50 border-yellow-200' : 'bg-yellow-900/20 border-yellow-800'
                    }`}>
                      <div className="flex items-start">
                        <FiDatabase className="mt-1 mr-3 text-yellow-600" />
                        <div>
                          <h4 className="font-medium text-yellow-800 dark:text-yellow-200">
                            Clear Cache
                          </h4>
                          <p className={`mt-1 text-sm ${
                            theme === 'light' ? 'text-yellow-700' : 'text-yellow-300'
                          }`}>
                            Clearing cache may temporarily increase server load. Only do this if you're experiencing issues.
                          </p>
                          <button className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition">
                            Clear All Cache
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Danger Zone
                    </h3>
                    
                    <div className={`rounded-lg border p-4 ${
                      theme === 'light' ? 'bg-red-50 border-red-200' : 'bg-red-900/20 border-red-800'
                    }`}>
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex items-start mb-4 md:mb-0">
                          <FiTrash2 className="mt-1 mr-3 text-red-600" />
                          <div>
                            <h4 className="font-medium text-red-800 dark:text-red-200">
                              Reset All Settings
                            </h4>
                            <p className={`mt-1 text-sm ${
                              theme === 'light' ? 'text-red-700' : 'text-red-300'
                            }`}>
                              This will restore all settings to their default values. This action cannot be undone.
                            </p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition">
                          Reset Settings
                        </button>
                      </div>
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

export default SettingsDashboard;