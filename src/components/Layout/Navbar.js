import React from "react";
import { Link } from "@reach/router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
    </nav>
  );
}

export default Navbar;
