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

const H6 = styled.h6`
  display: flex;
  justify-content: flex-end;
  padding: 0.3em;
  font-size: 0.8em;
`;

class Article extends React.Component {
  state = {
    article: null,
    isLoading: true,
    err: null
  };

  render() {
    const { article, isLoading, err } = this.state;
    const { article_id, loggedInAs } = this.props;
    if (err) return <ErrorHandler err={err} />;
    if (isLoading) return <Loading />;
    const postedDate = new Date(article.created_at).toDateString();
    return (
      <>
        <div className="articleCardSingle">
          <H2>{article.title.toUpperCase()}</H2>
          <H3>{article.body}</H3>
          <H6>
            Posted: {postedDate} by {article.author}{" "}
          </H6>
          <Vote
            votes={article.votes}
            loggedInAs={loggedInAs}
            article_id={article_id}
          />
        </div>
        <ArticleComments article_id={article_id} loggedInAs={loggedInAs} />
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
