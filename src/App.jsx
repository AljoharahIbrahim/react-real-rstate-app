import React, { useState } from 'react';

import {propertiesData } from "./data.js";
import Properties from './components/Properties';
import Counter from './Counter';
import AddProperty from './components/AddProperty';

export const App = () => {

  const [properties, setProperites] = useState(propertiesData);
  const handleAddProperty = (newProperty) => {
    setProperites((prevProperites) => {
      return [...prevProperites, newProperty];
    });
  }
  return (
    <div>
      {<AddProperty onHandleAddProperty={handleAddProperty} />}
      {/* {<Counter />} */}

      <>
        <h1>Real Estate Website</h1>
        {propertiesData.length > 0 ? (
          <Properties properties={properties} />
        ) : (
          " There are no property "
        )}
      </>
    </div>
  );
};

export default App;
