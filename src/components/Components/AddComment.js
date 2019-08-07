import React from "react";
import * as api from "../../api";
import styled from "styled-components";

const Input = styled.input`
  display: inline-block;
  border: 2px solid black;
  border-radius: 3px;
  margin: 1em;
  max-width: 6em;
  &:hover {
    background: rgba(195, 18, 49, 1);
  }
`;

class AddComment extends React.Component {
  state = {
    newComment: "",
    err: null
  };

  render() {
    return (
      <form className="commentBox" onSubmit={this.handleSubmit}>
        <label>
          Comment:{" "}
          <input
            className="inputBox"
            required
            type="text"
            value={this.state.newComment}
            placeholder="Add a new comment..."
            onChange={this.handleChange}
          />
        </label>
        <Input className="submitButton" type="submit" value="Submit" />
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
      })
      .then(this.setState({ newComment: "" }))
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default AddComment;
