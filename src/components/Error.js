import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>Whooops, we've gone to the land of 404...</h1>
      <Link to="/">Let's go home.</Link>
    </>
  );
};

export default Error;
