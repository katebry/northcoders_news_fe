import React from "react";
import * as api from "../../api";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import TopRatedArticles from "./TopRatedArticles";

class Articles extends React.Component {
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
        <h2>Articles</h2>
        {articles ? (
          articles.map(
            ({
              author,
              title,
              article_id,
              topic,
              created_at,
              votes,
              comment_count
            }) => {
              const time = created_at.slice(0, 10);
              return (
                <div key={article_id}>
                  <ul>
                    <h3>{title}</h3>
                    <h3>{author}</h3>
                    <h3>{topic}</h3>
                    <h3>{time}</h3>
                    <h3>{votes}</h3>
                    <h3>{comment_count}</h3>
                  </ul>
                </div>
              );
            }
          )
        ) : (
          <h2>Loading articles...</h2>
        )}
      </>
    );
  }

  componentDidMount() {
    api
      .getArticles()
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default Articles;
