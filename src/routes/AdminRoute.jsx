import React from 'react'

import { Outlet } from 'react-router';
import Signin from '../pages/Signin';

export default function AdminRoute() {

    const checkAdmin = JSON.parse(localStorage.getItem("singin"));
  
    return (
      <div>
        {checkAdmin != null && checkAdmin.isSignIn && checkAdmin.userData.isAdmin? <Outlet /> : <Signin />}
      </div>
    );

}
