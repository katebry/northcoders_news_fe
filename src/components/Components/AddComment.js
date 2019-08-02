import React from "react";
import * as api from "../../api";

class AddComment extends React.Component {
  state = {
    newComment: ""
  };

  render() {
    return (
      <form className="commentBox" onSubmit={this.handleSubmit}>
        <label>
          Comment:{" "}
          <input
            required
            type="text"
            value={this.state.newComment}
            placeholder="Add a new comment..."
            onChange={this.handleChange}
          />
        </label>
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    );
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ newComment: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newComment } = this.state;
    const { article_id, loggedInAs } = this.props;
    api
      .postCommentToArticle({
        article_id,
        loggedInAs,
        newComment
      })
      .then(postedComment => {
        this.props.postComment(postedComment);
      });
  };
}

export default AddComment;
