// src/contexts/UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Full-stack developer passionate about building great products',
    website: 'https://johndoe.dev',
    github: 'johndoe',
    linkedin: 'johndoe',
    twitter: 'johndoe_dev',
    location: 'San Francisco, CA',
    experience: '5+ years',
    education: 'BS Computer Science, Stanford University',
    availability: 'Available for new opportunities'
  });

  const [darkMode, setDarkMode] = useState(false);

  const updateUserData = (newData) => {
    setUserData(prev => ({ ...prev, ...newData }));
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <UserContext.Provider value={{ 
      userData, 
      darkMode,
      updateUserData, 
      toggleDarkMode 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);