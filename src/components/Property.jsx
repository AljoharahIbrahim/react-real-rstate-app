import React from "react";
import { propertiesData } from "../data.js";
import Styles from "./Property.module.css";

const Property = (props) => {
    const { property, onHandleDeleteProperty } = props;

  const { id, image, title, price, location } = property;
  const handleDeleteProperty = (id) => {
    onHandleDeleteProperty(id);
  }
  return (
    <>
      <article className={Styles.property}>
        <img src={image} alt={title} />
        <h3 className={Styles.property__tilte}>{title}</h3>
        <p>location : {location}</p>
        <p>price : {price}</p>
        <button onClick={() => handleDeleteProperty(id)}>Delete</button>
      </article>
    </>
  );
};

export default Property;
