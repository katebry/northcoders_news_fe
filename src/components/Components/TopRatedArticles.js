import React from "react";
import { Link } from "@reach/router";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import * as api from "../../api";

class TopRatedArticles extends React.Component {
  state = {
    articles: null,
    isLoading: true,
    err: null
  };
  render() {
    const { articles, isLoading, err } = this.state;
    if (err) return <ErrorHandler err={err} />;
    if (isLoading) return <Loading />;
    return (
      <>
        <h2>TOP RATED ARTICLES</h2>
        {articles ? (
          articles.map(({ title, article_id, topic, votes }) => {
            return (
              <li className="articleCard" key={article_id}>
                <nav>
                  <Link to={`/articles/${article_id}`} />
                </nav>
                <h3>{title}</h3>
                <h3>{topic}</h3>
                <h3>{votes}</h3>
              </li>
            );
          })
        ) : (
          <h2>Loading articles...</h2>
        )}
      </>
    );
  }

  componentDidMount() {
    api
      .getArticles({ sort_by: "votes", limit: 3 })
      .then(articles => {
        articles = articles.slice(0, 3);
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }

  // handleChange = e => {
  //   console.log(e);
  //   const value = e.target.value;
  //   this.setState({});
  // };
}

export default TopRatedArticles;
