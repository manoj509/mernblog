import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import PublicNavbar from '../../components/public/PublicNavbar'
import Home from '../../pages/public/Home'
import Login from '../../pages/public/Login'
import Register from '../../pages/public/Register'
const PublicLayout = ()=><>
  <PublicNavbar/>
  <Outlet/>
</>

const PublicRote = () => {
  return <Routes>
            <Route path='/' element={<PublicLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path='login' element={<Login/>} />
                    <Route path='register' element={<Register/>} />
            </Route>
        </Routes>
}



export default PublicRote