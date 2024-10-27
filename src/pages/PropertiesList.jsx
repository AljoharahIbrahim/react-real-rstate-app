import React, { useContext, useState } from "react";

import Styles from "../Styles/PropertiesList.module.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { propertiesData } from "../Data/data.js";
import Properties from "../components/Properties";
import Counter from "../Counter";
import AddProperty from "../components/AddProperty";
import UpdateProperty from "../components/UpdateProperty.jsx";
import {PropertyContext} from "../Context/PropertyContext.jsx";
// import { PropertyContext } from './Context/PropertyContext'; // Adjust path as needed

export default function PropertiesList() {
  // const [properties, setProperites] = useState(propertiesData);

  const context = useContext(PropertyContext);
  console.log("-------");
    console.log(context);

  const [updateProperty, setUpdate] = useState(null);
  const handleAddProperty = (newProperty) => {
    setProperites((prevProperites) => {
      return [...prevProperites, newProperty];
    });
  };
  const handleDeleteProperty = (id) => {
    // alert(id);
    const filterProperities = context.properties.filter(
      (property) => property.id != id
    );
    context.setProperites(filterProperities);
  };
  const handleUpdateProperty = (property) => {
    alert("update" + property);
    setUpdate(property);
  };
  return (
    <div>
      {/* <ToastContainer />
      {<AddProperty onHandleAddProperty={handleAddProperty} />}
      {updateProperty && <UpdateProperty updateProperty={updateProperty} />} */}
      {/* {<Counter />} */}
      <>
        <h1>Real Estate Website</h1>
        {propertiesData.length > 0 ? (
          <Properties
            properties={context.properties}
            onHandleDeleteProperty={handleDeleteProperty}
            onHandleUpdateProperty={handleUpdateProperty}
          />
        ) : (
          " There are no property "
        )}
      </>
    </div>
  );
}
