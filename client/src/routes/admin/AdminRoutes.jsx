import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
// import Blog from '../../../../server/models/Blog'
// import User from '../../../../server/models/User'
import AdminOnly from '../../AdminOnly'
import AdminNavbar from '../../components/admin/AdminNavbar'
import Blog from '../../pages/admin/Blog'
import Dashboard from '../../pages/admin/Dashboard'
import Users from '../../pages/admin/Users'
const AdminLayout = ()=>{
     return <>
      <AdminNavbar/>
      <Outlet/>
      </>
}

const AdminRoutes = () => {
  return <Routes>
     <Route path='/admin' element={<AdminOnly component={<AdminLayout/>}/>}>
     <Route index  element={<Dashboard/>}/>
     <Route path='users' element={<Users/>}/>
     <Route path='blog' element={<Blog/>}/>
     </Route>
  </Routes>
}

export default AdminRoutes