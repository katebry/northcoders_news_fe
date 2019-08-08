import React from "react";
import { Link } from "@reach/router";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const ArticleCard = ({
  title,
  article_id,
  author,
  topic,
  votes,
  created_at
}) => {
  const postedDate = new Date(created_at).toDateString();
  return (
    <div className="articleCard">
      <Card>
        <Card.Header className="card-img-top rounded mx-auto mt-2 text-center">
          <StyledLink to={`/articles/${article_id}`}>{title}</StyledLink>
        </Card.Header>
        <Card.Body>
          <Card.Text className="votesRow">Votes: {votes}</Card.Text>
          <Card.Text>
            <StyledLink to={`/articles/topics/${topic}`}>
              <small className="text-muted">nr/{topic}</small>
            </StyledLink>
          </Card.Text>
          <Card.Text>
            <small className="text-muted">
              Posted: {postedDate} by {author}
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleCard;
