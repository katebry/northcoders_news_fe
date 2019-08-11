import React from "react";
import * as api from "../../api";
import Loading from "./Loading";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import CommentCard from "../Layout/CommentCard";
import AddComment from "./AddComment";
import DeleteCommentPopUp from "./DeleteCommentPopUp";

class ArticleComments extends React.Component {
  state = {
    comments: null,
    isLoading: true,
    isDeleted: false,
    err: null
  };

  render() {
    const { comments, isLoading, err, isDeleted } = this.state;
    const { article_id, loggedInAs } = this.props;
    if (err) return <ErrorHandler err={err} />;
    if (isLoading) return <Loading />;
    return (
      <>
        {isDeleted ? <DeleteCommentPopUp isDeleted={true} /> : null}
        <AddComment
          newComment={this.newComment}
          handleSubmit={this.handleSubmit}
          article_id={article_id}
          loggedInAs={loggedInAs}
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
                triggerPopUp={this.triggerPopUp}
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

  triggerPopUp = () => {
    this.setState({ isDeleted: true });
  };

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
