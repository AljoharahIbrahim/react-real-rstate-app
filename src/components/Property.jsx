import React from "react";

import { propertiesData } from "../Data/data.js";
import Styles from "../Styles/Property.module.css";

const Property = (props) => {
  const { property, onHandleDeleteProperty, onHandleUpdateProperty } = props;

  const { id, image, title, price, location } = property;

  const handleDeleteProperty = (id) => {
    onHandleDeleteProperty(id);
  };
  const handleUpdateProperty = (property) => {
    console.log("property");
    console.log(property);
    onHandleUpdateProperty(property);
  };
  return (
    <>
      <article className={Styles.property}>
        <img src={image} alt={title} />
        <h3 className={Styles.property__tilte}>{title}</h3>
        <p>location : {location}</p>
        <p>price : {price}</p>
        <button onClick={() => handleDeleteProperty(id)}>Delete</button>
        <button onClick={() => handleUpdateProperty(property)}>Update</button>
      </article>
    </>
  );
};

export default Property;
