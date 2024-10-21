import React, { useState } from "react";

 import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
import { propertiesData } from "./Data/data.js";
import Properties from "./components/Properties";
import Counter from "./Counter";
import AddProperty from "./components/AddProperty";
import UpdateProperty from "./components/UpdateProperty.jsx";

export const App = () => {
  const [properties, setProperites] = useState(propertiesData);
  const [updateProperty, setUpdate] = useState(null);

  const handleAddProperty = (newProperty) => {
    setProperites((prevProperites) => {
      return [...prevProperites, newProperty];
    });
  };
  const handleDeleteProperty = (id) => {
    // alert(id);
    const filterProperities = properties.filter(
      (property) => property.id != id
    );
    setProperites(filterProperities);
  };
  const handleUpdateProperty = (property) => {
    alert("update" + property);
    setUpdate(property);
  };
  return (
    <div>
      <ToastContainer/>
      {<AddProperty onHandleAddProperty={handleAddProperty} />}

      {updateProperty && <UpdateProperty updateProperty={updateProperty} />}

      {/* {<Counter />} */}

      <>
        <h1>Real Estate Website</h1>
        {propertiesData.length > 0 ? (
          <Properties
            properties={properties}
            onHandleDeleteProperty={handleDeleteProperty}
            onHandleUpdateProperty={handleUpdateProperty}
          />
        ) : (
          " There are no property "
        )}
      </>
    </div>
  );
};

export default App;
