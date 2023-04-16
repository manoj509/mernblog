import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import AdminRoutes from './routes/admin/AdminRoutes'
import PublicRote from './routes/public/PublicRote'
import UserRoutes from './routes/user/UserRoutes'
// import Login from './pages/public/Login'
// import Register from './pages/public/Register'

const App = () => {
  return <BrowserRouter>
  <PublicRote/>
     <UserRoutes/>
     <AdminRoutes/>
  </BrowserRouter>
}



export default App