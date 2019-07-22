import React from "react";
import { Card } from "react-bootstrap";

const CommentCard = ({ body, author, created_at, votes }) => {
  return (
    <div className="commentCard">
      <Card>
        <Card.Body>
          <Card.Title>{body}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <Card.Text>{created_at}</Card.Text>
          <Card.Text>{votes}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CommentCard;
