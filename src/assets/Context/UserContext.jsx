// src/contexts/UserContext.js
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  
  // Initialize user data from localStorage or defaults
  const [userData, setUserData] = useState(() => {
    try {
      const savedUser = localStorage.getItem('devlinker_userData');
      return savedUser ? JSON.parse(savedUser) : getDefaultUserData();
    } catch (error) {
      console.error("Failed to parse user data:", error);
      return getDefaultUserData();
    }
  });

  // Initialize dark mode from localStorage, system preference, or default
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedMode = localStorage.getItem('devlinker_darkMode');
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      console.error("Failed to parse dark mode preference:", error);
      return false;
    }
  });

  // System dark mode preference listener
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only follow system preference if user hasn't set a preference
      if (!localStorage.getItem('devlinker_darkMode')) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  // Persist user data changes
  useEffect(() => {
    try {
      localStorage.setItem('devlinker_userData', JSON.stringify(userData));
    } catch (error) {
      console.error("Failed to save user data:", error);
    }
  }, [userData]);

  // Handle dark mode changes and apply to document root
  useEffect(() => {
    try {
      localStorage.setItem('devlinker_darkMode', JSON.stringify(darkMode));
      const root = document.documentElement;
      if (darkMode) {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
      }
    } catch (error) {
      console.error("Failed to save dark mode preference:", error);
    }
  }, [darkMode]);

  // Memoized update function to prevent unnecessary re-renders
  const updateUserData = useCallback((newData) => {
    setUserData(prev => {
      const updatedData = { ...prev, ...newData };
      // Special handling for nested objects if needed
      return updatedData;
    });
  }, []);

  const toggleDarkMode = useCallback((value) => {
    if (typeof value === 'boolean') {
      setDarkMode(value);
      // Explicit user preference - store in localStorage
      localStorage.setItem('devlinker_darkMode', JSON.stringify(value));
    } else {
      setDarkMode(prev => {
        const newMode = !prev;
        localStorage.setItem('devlinker_darkMode', JSON.stringify(newMode));
        return newMode;
      });
    }
  }, []);

  const login = useCallback(async (credentials) => {
    try {
      // Simulate API call
      // const response = await authApi.login(credentials);
      
      updateUserData({
        ...credentials,
        isAuthenticated: true,
        lastLogin: new Date().toISOString()
      });
      navigate('/dashboard');
      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, error: error.message };
    }
  }, [updateUserData, navigate]);

  const logout = useCallback(() => {
    updateUserData({
      ...userData,
      isAuthenticated: false,
      lastLogout: new Date().toISOString()
    });
    navigate('/login');
  }, [updateUserData, navigate, userData]);

  const resetUserData = useCallback(() => {
    setUserData(getDefaultUserData());
  }, []);

  // Provide context value
  const contextValue = {
    userData,
    darkMode,
    updateUserData,
    toggleDarkMode,
    login,
    logout,
    resetUserData,
    isAuthenticated: userData.isAuthenticated
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Helper function for default user data
function getDefaultUserData() {
  return {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Full-stack developer passionate about building great products',
    website: 'https://johndoe.dev',
    github: 'johndoe',
    linkedin: 'johndoe',
    twitter: 'johndoe_dev',
    location: 'San Francisco, CA',
    experience: '1 years',
    education: 'BS Computer Science, Stanford University',
    availability: 'Available for new opportunities',
    isAuthenticated: false,
    preferences: {
      notifications: true,
      newsletter: false
    },
    createdAt: new Date().toISOString()
  };
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};