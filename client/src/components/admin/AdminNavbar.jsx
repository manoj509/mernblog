import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { logout } from '../../redux/user/userSlice'

const AdminNavbar = () => {
 const dispatch =  useDispatch()
  
  return <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">Admin Panel</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" to={"/admin/users"}>Users</Link>
              <Link class="nav-link active" to={"/admin/blog"}>Blogs</Link>
            </div>
              <button onClick={e=>dispatch(logout())} type="button" class="btn btn-primary ms-auto">LogOUt</button>
          </div>
        </div>
      </nav>
  </>
}

export default AdminNavbar