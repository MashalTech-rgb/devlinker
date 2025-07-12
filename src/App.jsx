// src/App.js
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './assets/Pages/DashboardLayout'
import Profile from './assets/Component/Profile'
import Projects from './assets/Component/Projects'
import Skills from './assets/Component/Skills'
import Setting from './assets/Component/Setting'
import Home from './assets/Pages/Home'
import Login from './assets/Pages/Login'
import SignUp from './assets/Pages/SignUp'
import Dashboard from './assets/Pages/Dashboard'
import SignOut from './assets/Pages/SignOut'
import NotFound from "./assets/Pages/NotFound"
import { UserProvider } from './assets/Context/UserContext'
import ContactUs from './assets/Pages/Contactus'
import { useUser } from './assets/Context/UserContext'

const AppWrapper = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}

const App = () => {
  const { darkMode } = useUser();
  
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className={`min-h-screen ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/contactus' element={<ContactUs/>} />
          
          {/* Dashboard Layout with nested pages */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<Dashboard/>} />
            <Route path="profile" element={<Profile />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="settings" element={<Setting />} />
            <Route path="SignOut" element={<SignOut />} /> 
          </Route>
          
          {/* Not Found Route */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  )
}

export default AppWrapper