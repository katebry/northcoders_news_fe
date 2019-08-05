import React from "react";
import { Card } from "react-bootstrap";
import deleteicon from "./deleteicon.png";

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
        <button
          className="deleteIcon"
          disabled={loggedInAs !== author}
          onClick={() => removeComment(comment_id)}
        >
          <img
            src={deleteicon}
            alt="bin icon"
            style={{ width: "2em", height: "2em" }}
          />
        </button>
      </Card>
    </div>
  );
};

export default CommentCard;
