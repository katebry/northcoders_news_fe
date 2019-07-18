import React from "react";
import * as api from "../../api";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";

class Article extends React.Component {
  state = {
    article: null,
    isLoading: true,
    err: null
  };
  render() {
    const { article, isLoading, err } = this.state;
    if (err) return <ErrorHandler err={err} />;
    if (isLoading) return <Loading />;
    return (
      <>
        <h2>{article.title}</h2>
        <h3>{article.body}</h3>
      </>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default Article;