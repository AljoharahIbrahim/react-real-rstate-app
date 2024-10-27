import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      email: "",
      password: "",
    });

    const resetUser = () => {
          setUser({
            email: "",
            password: "",
          });
    }
    const handleOnChange = (event) => {
        const { name, value} = event.target;
        setUser((prevUser) => {
            return { ...prevUser, [name]: value };
        });
    }
    const handelSubmit = (event) => {
        event.preventDefault();

        const userData = {
            id: Date.now().toString(),
            name: "Aljohara",
            email: "jalahaydeb@gmail.com",
            password: "123456",
            address: "Riyadh,Saudi Arabia",
            isAdmin: true
        };
        console.log(userData);

        if (
            userData.email === user.email &&
            userData.password === user.password
        ) {
            localStorage.setItem("singin", JSON.stringify({ userData,  isSignIn: true }));
          console.log("success");
          navigate("/profile", {state :userData});
        }
        else {
            alert("Error, Your email or password not correct!");
            navigate("/signin");
            //reset
            resetUser();
            //      
        }
    }
    return (
      <div>
        <h1>User Sign In</h1>
        <form onSubmit={handelSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleOnChange}
            required
          ></input>
          <br></br>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={user.password}
            onChange={handleOnChange}
            required
          ></input>
          <button type="submit">Singin</button>
        </form>
      </div>
    );
};

export default Signin;