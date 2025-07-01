import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DashboardLayout from './assets/Pages/DashboardLayout'
import Profile from './assets/Component/Profile'
import Projects from './assets/Component/Projects'
import Skills from './assets/Component/Skills'
import Setting from './assets/Component/Setting'
import Home from './assets/Pages/Home'
import Login from './assets/Pages/Login'
import SignUp from './assets/Pages/SignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
     

        <Route path='/login' element={<Login/>}/>
         <Route path='/SignUp' element={<SignUp/>}/>
          
        <Route path='/dashboard' element={<DashboardLayout/>}/>
        <Route path='Profile' element={<Profile/>}/>
        <Route path='Projects' element={<Projects/>}/>
        <Route path='Skills' element={<Skills/>}/>
        <Route path='Settings' element={<Setting/>}/>
      </Routes>
    </div>
  )
}

export default App
