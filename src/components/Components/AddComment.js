import React from "react";
import * as api from "../../api";
import styled from "styled-components";

const Input = styled.input`
  font-weight: 700;
  border: 2px solid black;
  border-radius: 5px;
  max-width: 6em;
  max-height: 2em;
  &:hover {
    background: rgba(195, 18, 49, 1);
  }
`;

const Form = styled.form`
  display: grid;
  grid-rows: 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 4px;
`;

class AddComment extends React.Component {
  state = {
    newComment: "",
    err: null
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          className="commentInputBox"
          required
          type="text"
          value={this.state.newComment}
          placeholder="Add a new comment..."
          onChange={this.handleChange}
        />
        <Input className="submitButton" type="submit" value="Submit" />
      </Form>
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
