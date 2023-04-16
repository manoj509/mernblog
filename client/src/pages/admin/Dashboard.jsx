import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { admin_getAllStatitics } from '../../redux/admin/adminActions'

const Dashboard = () => {
    // const stat = [1 , 2 , 3 , 4]
const dispatch = useDispatch()
const {stat}= useSelector(state=> state.admin)
 useEffect(()=>{
    dispatch(admin_getAllStatitics())
 },[])
 
  return <>
    {
        stat &&  <div className="container">
        <div className="row mt-5">
               <div className="col-sm-3" >
                <div className="card">
                    <div className="card-body">

                    <p className='fs-4'>{stat?.totalUsers} Total  Users</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
               </div>
               <div className="col-sm-3" >
                <div className="card">
                    <div className="card-body">

                    <p className='fs-4'>{stat?.totalBlockUsers} totalBlockUsers  Users</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
               </div>
               <div className="col-sm-3" >
                <div className="card">
                    <div className="card-body">

                    <p className='fs-4'>{stat?.totalBlogs} totalBlogs  Users</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
               </div>
               <div className="col-sm-3" >
                <div className="card">
                    <div className="card-body">

                    <p className='fs-4'>{stat?.totalPublishBlogs} totalPublishBlogs  Users</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
               </div>
            
           
        </div>
     </div>
    }
   
  </>
}

export default Dashboard