import React from 'react';
import Property from './Property.jsx';
import Styles from "./Properties.module.css";
const Properties = (props) => {
    const { properties } = props;
  
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
              return <Property property={property} key={index} />;
            })}
          </section>
        );

 
};

export default Properties;