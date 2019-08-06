import React from "react";
import { Link } from "@reach/router";

const NoMatch = ({ status, msg }) => {
  return (
    <div className="NoMatch">
      <h1>
        Error: {status} {msg}
      </h1>
      <h1>Sorry but we could not find what you were looking for...</h1>
      <Link to="/">
        <h1>Go back to the Home Page</h1>
      </Link>
    </div>
  );
};

export default NoMatch;
