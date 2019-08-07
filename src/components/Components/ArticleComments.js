import React from "react";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import * as api from "../../api";
import CommentCard from "../Layout/CommentCard";
import AddComment from "./AddComment";

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
      <>
        <AddComment
          newComment={this.newComment}
          handleSubmit={this.handleSubmit}
          article_id={this.props.article_id}
          loggedInAs={this.props.loggedInAs}
          postComment={this.postComment}
        />
        <div className="commentRow">
          {comments ? (
            comments.map(comment => (
              <CommentCard
                key={comment.comment_id}
                comment_id={comment.comment_id}
                body={comment.body}
                author={comment.author}
                created_at={comment.created_at}
                votes={comment.votes}
                loggedInAs={this.props.loggedInAs}
                removeComment={this.removeComment}
              />
            ))
          ) : (
            <h2>Loading comments...</h2>
          )}
        </div>
      </>
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

  postComment = newComment => {
    this.setState(state => {
      return { comments: [newComment, ...state.comments] };
    }).catch(err => {
      this.setState({ err });
    });
  };

  removeComment = commentIdToDelete => {
    api.deleteCommentById(commentIdToDelete);
    this.setState({
      comments: this.state.comments.filter(
        comment => comment.comment_id !== commentIdToDelete
      )
    });
  };
}

export default ArticleComments;
