import React from "react";

import { uploadImageToCloudinary } from "../utility/UploadImage.js";
import { extractPublicIdFromUrl } from "../utility/UploadImage.js";
import Property from "./Property";

import { nanoid } from "nanoid";
import { useState } from "react";

import { toast } from "react-toastify";
import { TbBuildingEstate } from "react-icons/tb";
import { MdTitle } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const AddProperty = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("" | null);
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  // handles functions for each state => title, price, Description, Image, Location,
  const habdleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const habdlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const habdleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const habdleImageChange = (event) => {
    // console.log(event.target.files[0]);
    setImageFile(event.target.files[0]);
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      console.log((file));
      //
      //  extractPublicIdFromUrl(file);

    }
  };
  const habdleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // validation function for validate input form
  const validateInput = () => {
    const newErrors = {};

    if (title.length < 2) {
      newErrors.title = "Title should be at least 2 characters long";
      console.log("newErrors.tilte = " + title.length);
    }
    if (!price || parseFloat(price) <= 0) {
      newErrors.price = "Price must be a positive number";
    }
    if (description.length < 10) {
      newErrors.description =
        "Description should be at least 10 characters long";
    }
    if (!image) {
      newErrors.image = "image is required";
    }
    if (!location) {
      newErrors.location = "location is required";
    }
    setErrors(newErrors);
    // console.log(errors);
    return Object.keys(newErrors).length === 0;
  };

  //handle sumbit add property form
  const handleSubmit = async (event) => {
    event.preventDefault();
    //call uploadImageToCloudinary function to upload the image
    let imageUrl = "";
    // if (image && image.length > 0) {
    imageUrl = await uploadImageToCloudinary(imageFile);
    console.log(imageUrl);
    // }
    // call validateInput to insure the input values as except
    if (validateInput()) {
      const newProperty = {
        id: nanoid(),
        title: title,
        description: description,
        price: price,
        image: imageUrl,
        location: location,
      };
      // console.log(newProperty);
      alert(JSON.stringify(newProperty, null, 2));
      // call toast 'react-function' for inhance submit status
      toast.success("property is created");
      // add new Property
      props.onHandleAddProperty(newProperty);
      //reset the form
      setTitle("");
      setPrice(0);
      setDescription("");
      setImage(null);
      setLocation("");
      //*** */
        // extractPublicIdFromUrl(URL.createObjectURL(image));

    } else {
      console.log(errors);
    }
  };

  return (
    <div>
      <h2>
        <TbBuildingEstate /> Add Property
      </h2>

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
        />{" "}
        {errors.title && <span>{errors.title}</span>}
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
        {errors.price && <span>{errors.price}</span>}
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
        {errors.description && <span>{errors.description}</span>}
        <br></br>
        <br></br>
        <label htmlFor="image">
          <CiImageOn />
          Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={habdleImageChange}
          //value={image}
          required
        />{" "}
        {errors.image && (
          <div>
            <img
              src={URL.createObjectURL(image)}
              alt="Selected Preview"
              style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
            />
          </div>
        )}
        {errors.image && <span>{errors.image}</span>}
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
        {errors.location && <span>{errors.location}</span>}
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
