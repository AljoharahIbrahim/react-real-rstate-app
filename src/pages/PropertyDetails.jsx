import React from 'react'
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router';

export default function PropertyDetails() {
    const params = useParams();
    console.log(params.id);
    const {state}  = useLocation();
    console.log(state);
    if (!state) {
        return <h1>Property not fount</h1>;
    }
      return (
        <div>
          <h2>Property Details page </h2>
          <img src={state.image} alt={state.title} />
          <h3>{state.title}</h3>
          <p>{state.price}</p>
          <p>{state.location}</p>
        </div>
      );
}
