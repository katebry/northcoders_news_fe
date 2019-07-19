import React from "react";
import * as api from "../../api";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import ArticleCard from "../Layout/ArticleCard";

class Articles extends React.Component {
  state = {
    articles: null,
    isLoading: true,
    err: null,
    sort_by: null
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (err) return <ErrorHandler err={err} />;
    if (isLoading) return <Loading />;
    return (
      <>
        <div className="row">
          {articles ? (
            articles.map(article => (
              <ArticleCard
                key={article.article_id}
                title={article.title}
                author={article.author}
                topic={article.topic}
                votes={article.votes}
                created_at={article.created_at}
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
}

export default Articles;

/*

SORTING:

functional component Sorter
dropdown:
<select onChange={setSort}> 
  <option value="created_at"> Date </option>
  <option value="votes"> Votes </votes>
</select>

Articles.js

<Sorter setSort={this.setSort}/>

(need to pass in setSort within the articles section)

setSort = (e) => {
  const { value } = e.target;
  this.setState({ sortBy: value }) 
}

--> add a key to state called sortBy

componentDidUpdate(prevProps, prevState) {
  if (prevProps.topic !== this.props.topic || prevState.sortBy !== this.state.sortBy) {
    this.fetchArticles(); 
  }
}

*/
