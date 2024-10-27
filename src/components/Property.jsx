import React from "react";

import { propertiesData } from "../Data/data.js";
import Styles from "../Styles/Property.module.css";
import { Link } from "react-router-dom";

const Property = (props) => {
  const { property, onHandleDeleteProperty, onHandleUpdateProperty } = props;

  const { id, image, title, price, location } = property;

  const handleDeleteProperty = (id) => {
    onHandleDeleteProperty(id);
    //delete image
    // const deleteImage = async (e) => {
    //   e.preventDefault();
    //   cloudinary.v2.uploader
    //     .destroy(imageData.public_id, function (error, result) {
    //       console.log(result, error);
    //     })
    //     .then((resp) => console.log(resp))
    //     .catch((_err) =>
    //       console.log("Something went wrong, please try again later.")
    //     );
    // };
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
        <button onClick={() => handleUpdateProperty(property)}>Update</button><br></br>
        <Link to={`/properties/${id}`} state={property}>Show Details</Link>
      </article>
    </>
  );
};

export default Property;
