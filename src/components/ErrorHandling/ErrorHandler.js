import React from "react";

const ErrorHandler = ({ err }) => {
  return <h1>{err.message}</h1>;
};

export default ErrorHandler;
