import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const onHandleHomePAge = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Error!</h1>
      <h3>Sorry, an unexpected error has occurred </h3>
      <p>
        <em>{error.statusText || error.message}</em>
          </p>
          <button onClick={onHandleHomePAge}>Go to home page</button>
    </div>
  );
};
export default ErrorPage;
