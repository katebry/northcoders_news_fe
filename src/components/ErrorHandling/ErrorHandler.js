import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 2em;
  padding: 1em;
  background: rgba(255, 255, 255, 0.75);
  border: 2px;
  border-radius: 5px;
`;

const ErrorHandler = ({ err }) => {
  return <H1>Oops, something went wrong... {err.message} 😬</H1>;
};

export default ErrorHandler;
