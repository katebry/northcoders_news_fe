import React from "react";
import { Link } from "@reach/router";

const NoMatch = () => {
  return (
    <div className="NoMatch">
      <h1>We could not find what you were looking for...</h1>
      <Link to="/">Go back to the Home Page</Link>
    </div>
  );
};

export default NoMatch;
