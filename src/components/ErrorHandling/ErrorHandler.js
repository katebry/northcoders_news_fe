import React from "react";

function ErrorHandler({ err }) {
  return <h1>{err.message}</h1>;
}

export default ErrorHandler;
