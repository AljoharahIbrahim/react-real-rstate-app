import { properties } from "../data.js";
import Styles from "./Property.module.css";

const Property = (props) => {
    const { image, title, price, location } = props.property;
  return (
    <article className={Styles.property}>
      <img src={image} alt={title} />
      <h3 className={Styles.property__tilte}>{title}</h3>
      <p>location : {location}</p>
      <p>price : {price}</p>
    </article>
  );
};

export default Property;
