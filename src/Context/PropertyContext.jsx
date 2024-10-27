import React, { useState, createContext, useContext } from "react";

import { propertiesData } from "../Data/data.js";
export const PropertyContext = createContext({});

 const PropertyProvider= ({ children }) =>{
  const [properties, setProperties] = useState(propertiesData);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
 }

export default PropertyProvider;


