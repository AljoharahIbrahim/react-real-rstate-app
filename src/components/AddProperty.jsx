import React from "react";

import { TbBuildingEstate } from "react-icons/tb";
import { MdTitle } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


import { nanoid } from "nanoid";
import { useState } from "react";

const AddProperty = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const [errors, setErrors] = useState({});
  const habdleTitleChange = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };
  const habdlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const habdleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const habdleImageChange = (event) => {
    setImage(event.target.value);
  };

  const habdleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProperty = {
      id: nanoid(),
      title: title,
      description: description,
      price: price,
      image: image,
      location: location,
    };
    console.log(newProperty);
    alert(JSON.stringify(newProperty, null, 2));

    //new Property
    props.onHandleAddProperty(newProperty);
    //reset
    setTitle("");
    setPrice(0);
    setDescription("");
    setImage("");
    setLocation("");
  };

  return (
    <div>
      <h2><TbBuildingEstate /> Add Property</h2>
      

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <MdTitle />
          Title
        </label>
        <input
          type="text"
          id="title"
          onChange={habdleTitleChange}
          value={title}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="price">
          {" "}
          <MdOutlinePriceChange />
          Price
        </label>
        <input
          type="number"
          id="price"
          onChange={habdlePriceChange}
          value={price}
          required
        />{" "}
        <br></br>
        <br></br>
        <label htmlFor="description">
          <MdOutlineDescription />
          description
        </label>
        <textarea
          type="text"
          id="description"
          onChange={habdleDescriptionChange}
          value={description}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="image">
          <CiImageOn />
          Image URL
        </label>
        <input
          type="text"
          id="image"
          onChange={habdleImageChange}
          value={image}
          required
        />{" "}
        <br></br>
        <label htmlFor="location">
          <CiLocationOn />
          Location
        </label>
        <input
          type="text"
          id="location"
          onChange={habdleLocationChange}
          value={location}
          required
        />{" "}
        <br></br>
        <button type="submit">Add Property </button>
      </form>
      <p>title: {title}</p>
      <p>price: {price}</p>
      <p>description:{description}</p>
      <p>image : {image}</p>
      <p>location : {location}</p>
    </div>
  );
};

export default AddProperty;
