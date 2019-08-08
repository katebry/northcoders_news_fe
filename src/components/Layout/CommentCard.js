import React from "react";
import { Card } from "react-bootstrap";
import deleteicon from "./deleteicon.png";
import Vote from "../Components/Vote";
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
  const postedDate = new Date(created_at).toDateString();
  return (
    <div className="commentCard">
      <Card>
        <Card.Body>
          <Card.Title>{body}</Card.Title>
          <Card.Text>
            <small className="text-muted">
              Posted: {postedDate} by {author}
            </small>
          </Card.Text>
        </Card.Body>
        <div className="commentButtonContainer">
          <Vote votes={votes} loggedInAs={loggedInAs} comment_id={comment_id} />
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
        </div>
      </Card>
    </div>
  );
};

export default CommentCard;
