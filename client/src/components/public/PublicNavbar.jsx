import React from 'react'
import {Link} from "react-router-dom"

const PublicNavbar = () => {
  return <>
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" to={"/"}>Home</Link>
          <Link className="nav-link" to={"/login"}>Login</Link>
          <Link className="nav-link" to={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  </nav>
 </> 
 
}

export default PublicNavbar