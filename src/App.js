import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import NavBar from "./components/Layout/Navbar";
import Articles from "./components/Components/Articles";

class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <NavBar />
        </nav>
        <Router>
          <Articles path="/articles" />
        </Router>
      </>
    );
  }
}

export default App;
