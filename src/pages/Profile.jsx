import React from 'react'
import { useLocation } from 'react-router';

export default function Profile() {
    const {state} = useLocation();
    console.log(location);
    return (
      <div>
        <h1>Profile page</h1>
        <h3>Name: {state.name}</h3>
        <h3>Email: {state.email}</h3>
        <h3>Address: {state.address}</h3>
      </div>
    );
};
