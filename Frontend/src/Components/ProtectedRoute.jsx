import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {
    const auth = useSelector((state) => state.auth)
    const location = useLocation()
    
  return auth?.accessToken ? <Outlet /> : <Navigate to="/login" state={{from: location.pathname}} />
    
}

export default ProtectedRoute