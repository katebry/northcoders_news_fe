import React from "react";
import Articles from "./Articles";
import TopRatedArticles from "./TopRatedArticles";

function Homepage() {
  return (
    <>
      <TopRatedArticles />
      <Articles />
    </>
  );
}

export default Homepage;
