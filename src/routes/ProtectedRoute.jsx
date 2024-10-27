import React from 'react'
import { Outlet } from 'react-router';
import Signin from '../pages/Signin';

export default function ProtectedRoute() {

    const checkUser = JSON.parse(localStorage.getItem("singin"));
  
    return <div>{checkUser != null && checkUser.isSignIn ? <Outlet/>: <Signin/> }</div>;
}
