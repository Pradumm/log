import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const ProtectRoiut = () => {

    let Loginkey = localStorage.getItem("loggin")
    return Loginkey ? <Outlet /> : <Navigate to="/Login" />
}

export default ProtectRoiut