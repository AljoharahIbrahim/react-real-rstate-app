import React from "react";

import Property from "./Property.jsx";
import Styles from "../Styles/Properties.module.css";
import { Link } from "react-router-dom";

const Properties = (props) => {
  const { properties, onHandleDeleteProperty, onHandleUpdateProperty } = props;

  // return (
  //   <section>
  //     <Property property={properties[0]} />
  //     <Property property={properties[1]} />
  //     <Property property={properties[2]} />
  //   </section>
  // );
  return (
    <section className={Styles.properties}>
      {properties.map((property, index) => {
        return (
          <>
            <Property
              property={property}
              onHandleDeleteProperty={onHandleDeleteProperty}
              onHandleUpdateProperty={onHandleUpdateProperty}
              key={index}
            />
          
            {/* <Link to={`/properties/${property.id}`}>Show Details</Link> */}

            {/* <Link to={'/properites/${property.id}'}> show Details</Link> */}
          </>
        );
      })}
    </section>
  );
};

export default Properties;
