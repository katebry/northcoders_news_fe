import React from "react";
import * as api from "../../api";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import ArticleComments from "./ArticleComments";
import Vote from "./Vote";
import styled from "styled-components";

const H2 = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 2em;
`;

const H3 = styled.h3`
  font-size: 1.5em;
`;

class Article extends React.Component {
  state = {
    article: null,
    isLoading: true,
    err: null
  };

  render() {
    const { article, isLoading, err } = this.state;
    const { article_id } = this.props;
    if (err) return <ErrorHandler err={err} />;
    if (isLoading) return <Loading />;
    return (
      <>
        <div className="articleCardSingle">
          <H2>{article.title.toUpperCase()}</H2>
          <H3>{article.body}</H3>
          <Vote
            votes={article.votes}
            loggedInAs={this.props.loggedInAs}
            article_id={article_id}
          />
        </div>
        <ArticleComments
          article_id={article_id}
          loggedInAs={this.props.loggedInAs}
        />
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
