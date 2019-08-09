import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 1em;
  padding: 1em;
  background: rgba(255, 255, 255, 0.75);
  border: 2px;
  border-radius: 5px;
`;

const H2 = styled.h2`
  display: flex;
  justify-content: center;
`;

const NoMatch = ({ status, msg }) => {
  return (
    <>
      <H1>
        Error: {status} {msg}. Sorry but we could not find what you were looking
        for... 🙅‍
      </H1>
      <H2>
        <Link to="/"> Go back to the Home Page </Link> 🏡
      </H2>
    </>
  );
};

export default NoMatch;
