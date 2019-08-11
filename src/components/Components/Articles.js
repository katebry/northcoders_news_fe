import React from "react";
import * as api from "../../api";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import ArticleCard from "../Layout/ArticleCard";
import ArticleDropdown from "./ArticleDropdown";

class Articles extends React.Component {
  state = {
    articles: null,
    isLoading: true,
    err: null,
    sort_by: null,
    order: "desc"
  };

  render() {
    const { articles, isLoading, err, sort_by } = this.state;
    if (err) return <ErrorHandler err={err} />;
    if (isLoading) return <Loading />;
    return (
      <>
        <ArticleDropdown setSort={this.setSort} value={sort_by} />
        <div className="articleRow">
          {articles ? (
            articles.map(article => (
              <ArticleCard
                key={article.article_id}
                title={article.title.toUpperCase()}
                author={article.author}
                topic={article.topic}
                votes={article.votes}
                created_at={article.created_at}
                article_id={article.article_id}
              />
            ))
          ) : (
            <h2>Loading articles...</h2>
          )}
        </div>
      </>
    );
  }

  componentDidMount() {
    const { topic, author } = this.props;
    api
      .getArticles({ topic, author })
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;
    const { topic, author } = this.props;
    if (
      sort_by !== prevState.sort_by ||
      topic !== prevProps.topic ||
      order !== prevState.order ||
      author !== prevProps.author
    ) {
      api
        .getArticles({ sort_by, topic, order, author })
        .then(articles => {
          this.setState({ articles, isLoading: false });
        })
        .catch(err => {
          this.setState({ err });
        });
    }
  }

  setSort = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ sort_by: value });
  };
}

export default Articles;
