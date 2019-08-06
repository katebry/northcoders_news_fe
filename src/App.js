import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import NavBar from "./components/Layout/Navbar";
import Header from "./components/Layout/Header";
import Homepage from "./components/Components/Homepage";
import Article from "../src/components/Components/Article";
import Articles from "../src/components/Components/Articles";
import NoMatch from "../src/components/ErrorHandling/NoMatch";
import backgroundImage from "../src/components/Layout/NCNEWS-background-pattern.png";

class App extends React.Component {
  state = {
    loggedInAs: "jessjelly"
  };
  render() {
    const { loggedInAs } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Header />
        <div
          className="AppBackground"
          style={{ background: `url(${backgroundImage})` }}
        >
          <Router>
            <Homepage path="/" loggedInAs={loggedInAs} />
            <Articles path="/articles" loggedInAs={loggedInAs} />
            <Articles path="/articles/topics/:topic" loggedInAs={loggedInAs} />
            <Article path="/articles/:article_id" loggedInAs={loggedInAs} />
            <NoMatch default status="404" msg="Non-existent path" />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
