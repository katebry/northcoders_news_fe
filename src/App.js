import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Navbar from "./components/Layout/Navbar";
import Articles from "./components/Components/Articles";
import Header from "./components/Layout/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <Header />
          <Navbar />
        </nav>
        <Router>
          <Articles path="/articles" />
        </Router>
      </>
    );
  }
}

export default App;
