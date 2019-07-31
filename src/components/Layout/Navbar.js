import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="links">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/articles/topics/coding">
          <button>Coding</button>
        </Link>
        <Link to="/articles/topics/cooking">
          <button>Cooking</button>
        </Link>
        <Link to="/articles/topics/football">
          <button>Football</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
