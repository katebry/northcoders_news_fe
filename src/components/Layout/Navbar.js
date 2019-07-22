import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="drop-down">
        <button className="drop-down-button">Topics</button>
        <div className="drop-down-content">
          <Link to="/articles/topics/coding">Coding</Link>
          <Link to="/articles/topics/cooking">Cooking</Link>
          <Link to="/articles/topics/football">Football</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
