import React from "react";
import { Card } from "react-bootstrap";
import deleteicon from "./deleteicon.png";
import likeicon from "../Layout/likeicon.png";
import dislikeicon from "../Layout/dislikeicon.png";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  border: 2px solid black;
  border-radius: 3px;
  margin: 1em;
  max-width: 4em;
  max-height: 5em;
  &:hover {
    background: rgba(195, 18, 49, 1);
  }
`;

const CommentCard = ({
  body,
  author,
  created_at,
  votes,
  loggedInAs,
  comment_id,
  removeComment
}) => {
  return (
    <div className="commentCard">
      <Card>
        <Card.Body>
          <Card.Title>{body}</Card.Title>
          <Card.Subtitle>User: {author}</Card.Subtitle>
          <Card.Text>{created_at}</Card.Text>
          <Card.Text>Votes: {votes}</Card.Text>
        </Card.Body>
        <div className="commentButtonContainer">
          <Button
            className="deleteIcon"
            disabled={loggedInAs !== author}
            onClick={() => removeComment(comment_id)}
          >
            <img
              src={deleteicon}
              alt="bin icon"
              style={{ width: "2em", height: "2em" }}
            />
          </Button>
          <Button>
            <img src={likeicon} alt="thumbs up" />
          </Button>
          <Button>
            <img src={dislikeicon} alt="thumbs down" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CommentCard;
