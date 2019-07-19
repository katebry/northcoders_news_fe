import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import NavBar from "./components/Layout/Navbar";
import Homepage from "./components/Components/Homepage";
import Article from "../src/components/Components/Article";
import Articles from "../src/components/Components/Articles";
import NoMatch from "../src/components/ErrorHandling/NoMatch";

class App extends React.Component {
  state = {
    loggedInAs: "jessjelly"
  };
  render() {
    const { loggedInAs } = this.state;
    return (
      <>
        <NavBar />
        <Router>
          <Homepage path="/" loggedInAs={loggedInAs} />
          <Articles path="/articles" loggedInAs={loggedInAs} />
          <Articles path="/articles/topics/:topic" loggedInAs={loggedInAs} />
          <Article path="/articles/:article_id" loggedInAs={loggedInAs} />
          <Article
            path="/articles/:article_id/comments"
            loggedInAs={loggedInAs}
          />
          <NoMatch default />
        </Router>
      </>
    );
  }
}

export default App;
