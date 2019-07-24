import React from "react";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import * as api from "../../api";
import CommentCard from "../Layout/CommentCard";

class ArticleComments extends React.Component {
  state = {
    comments: null,
    isLoading: true,
    err: null
  };

  render() {
    const { comments, isLoading, err } = this.state;
    if (err) return <ErrorHandler err={err} />;
    if (isLoading) return <Loading />;
    return (
      <div className="commentRow">
        {comments ? (
          comments.map(comment => (
            <CommentCard
              key={comment.comment_id}
              body={comment.body}
              author={comment.author}
              created_at={comment.created_at}
              votes={comment.votes}
            />
          ))
        ) : (
          <h2>Loading comments...</h2>
        )}
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api
      .getCommentsByArticle(article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default ArticleComments;
