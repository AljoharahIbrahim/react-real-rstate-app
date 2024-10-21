import React from "react";

import { useState } from "react";

const UpdateProperty = (props) => {
  console.log("props---update");
    console.log(props);

  const {
    title: propertyTitle,
    price: propertyPrice,
    description: propertyDescription,
    image: propertyImage,
    location: propertyLocation,
  } = props.updateProperty;
  const [title, setTitle] = useState(propertyTitle);
  const [price, setPrice] = useState(propertyPrice);
  const [description, setDescription] = useState(propertyDescription);
  const [image, setImage] = useState(propertyImage);
  const [location, setLocation] = useState(propertyLocation);

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
    const updateProperty = {
      title: title,
      description: description,
      price: price,
      image: image,
      location: location,
    };
    console.log(updateProperty);
    alert(JSON.stringify(updateProperty, null, 2));

    // //update Property
    // props.onHandleupdateProperty(updateProperty);
    //updateProperty
    // //reset
    setTitle("");
    setPrice(0);
    setDescription("");
    setImage("");
    setLocation("");
  };

  return (
    <div>
      <h2>Update Property</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={habdleTitleChange}
          value={title}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          onChange={habdlePriceChange}
          value={price}
          required
        />{" "}
        <br></br>
        <br></br>
        <label htmlFor="description">description</label>
        <textarea
          type="text"
          id="description"
          onChange={habdleDescriptionChange}
          value={description}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          onChange={habdleImageChange}
          value={image}
          required
        />{" "}
        <br></br>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={habdleLocationChange}
          value={location}
          required
        />{" "}
        <br></br>
        <button type="submit">Update Property</button>
      </form>
      <p>title: {title}</p>
      <p>price: {price}</p>
      <p>description:{description}</p>
      <p>image : {image}</p>
      <p>location : {location}</p>
    </div>
  );
};

export default UpdateProperty;
