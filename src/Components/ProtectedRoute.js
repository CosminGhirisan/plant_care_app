import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ( { children }) => {
   const isAuth = localStorage.getItem("isAuth")

   if(!isAuth) {
     return <Navigate to="/login"/>
   }
    return children
}

export default ProtectedRoute;
