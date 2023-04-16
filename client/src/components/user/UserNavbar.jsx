import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { logout } from '../../redux/user/userSlice'

const UserNavbar = () => {
  const {info } = useSelector(state => state.user)
const dispath =   useDispatch()
  return <>
     <nav className="navbar navbar-expand-lg bg-light">
       <div className="container-fluid">
         <a className="navbar-brand" href="#">Account</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           <div className="navbar-nav">
                 <Link to={"/user/add-blog"} className='nav-link'>Add Blog <i className='bi bi-plus'></i></Link>
             <div class="dropdown">
               <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                 {info && info.name }
               </button>
               <ul class="dropdown-menu">
                 <li><button 
                  onClick={e=>dispath(logout())}
                 class="dropdown-item" href="#">Logout</button></li>
                 {/* <li><a class="dropdown-item" href="#">Another action</a></li>
                 <li><a class="dropdown-item" href="#">Something else here</a></li> */}
               </ul>
             </div>
           </div>
         </div>
       </div>
     </nav>
     <Outlet/>
  </>
}

export default UserNavbar