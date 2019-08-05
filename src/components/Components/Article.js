import React from "react";
import * as api from "../../api";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import ArticleComments from "./ArticleComments";
import styled from "styled-components";
import likeicon from "../Layout/likeicon.png";
import dislikeicon from "../Layout/dislikeicon.png";

const H2 = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 2em;
`;

const H3 = styled.h3`
  font-size: 1.5em;
`;

const H5 = styled.h5`
  text-align: center;
  font-weight: 700;
  font-size: 1em;
`;

const Button = styled.button`
  border: 2px solid black;
  border-radius: 3px;
  margin: 1em;
  max-width: 3em;
  &:hover {
    background: rgba(195, 18, 49, 1);
  }
`;

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
        <div className="articleCardSingle">
          <H2>{article.title.toUpperCase()}</H2>
          <H3>{article.body}</H3>
          <H5>Votes: {article.votes}</H5>
          <div className="buttonContainer">
            <Button>
              <img src={likeicon} alt="thumbs up" />
            </Button>
            <Button>
              <img src={dislikeicon} alt="thumbs down" />
            </Button>
          </div>
        </div>
        <ArticleComments
          article_id={article.article_id}
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
