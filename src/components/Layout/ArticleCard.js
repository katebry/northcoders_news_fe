import React from "react";
import { Link } from "@reach/router";
import { Card } from "react-bootstrap";

const ArticleCard = ({
  title,
  article_id,
  author,
  topic,
  votes,
  created_at
}) => {
  return (
    <div className="articleCard">
      <Card>
        <Card.Body>
          <Card.Title>
            <Link to={`/articles/${article_id}`}>{title}</Link>
          </Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <Card.Text>{votes}</Card.Text>
          <Card.Text>
            <Link to={`/articles/topics/${topic}`}>{topic}</Link>
          </Card.Text>
          <Card.Text>{created_at}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleCard;
