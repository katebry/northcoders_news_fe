import React from "react";

const ErrorHandler = ({ err }) => {
  return <h1>Oops, something went wrong... {err.message}</h1>;
};

export default ErrorHandler;
