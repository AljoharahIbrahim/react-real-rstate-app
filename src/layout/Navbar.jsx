import React from "react";

import { Outlet, Link } from "react-router-dom";
import Styles from "../Styles/Navbar.module.css";

const Navbar = () => {

  const handelSignout = () => {
                   localStorage.setItem(
                     "singin",
                     JSON.stringify({ isSignIn: false })
                   );

  }
  return (
    <div>
      <nav className={Styles.Navbar}>
        <ul>
          <li className={Styles["nav-item"]}>
            <Link to="/">Home</Link>
          </li>
          <li className={Styles["nav-item"]}>
            <Link to="/properties">Properites List</Link>
          </li>
          <li className={Styles["nav-item"]}>
            <Link to="/addProperty">Add Property</Link>
          </li>
          <li className={Styles["nav-item"]}>
            <Link to="/updateProperty">Edit Property</Link>
          </li>
          <li className={Styles["nav-item"]}>
            <Link to="/signin">Signin</Link>
          </li>
          <li className={Styles["nav-item"]}>
            <Link to="/signout" onClick={handelSignout}>Signout</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
