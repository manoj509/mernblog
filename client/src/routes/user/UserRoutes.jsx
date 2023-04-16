import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import UserNavbar from '../../components/user/UserNavbar'
import LoginOnly from '../../LoginOnly'
import Account from '../../pages/user/Account'
import AddBlog from '../../pages/user/AddBlog'



const UserRoutes = () => {
  return <Routes>
            <Route  path='/user'  element={<LoginOnly component={ <UserNavbar/>}/>}>
           <Route index  element={<Account/>}/>
           <Route path='add-blog'  element={<AddBlog/>}/>

        </Route>
</Routes>
}


export default UserRoutes

