import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const LoginOnly = ({component}) => {
const {info} = useSelector(state => state.user)
   if(info){
     return component
   }else{
     return <Navigate to={"/login"}/>
   }
}

export default LoginOnly