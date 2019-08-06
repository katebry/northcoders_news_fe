import React from "react";
import likeicon from "../Layout/likeicon.png";
import dislikeicon from "../Layout/dislikeicon.png";
import styled from "styled-components";

const Button = styled.button`
  border: 2px solid black;
  border-radius: 3px;
  margin: 1em;
  max-width: 3em;
  &:hover {
    background: rgba(195, 18, 49, 1);
  }
`;

class Vote extends React.Component {
  state = {
    sentMessageCount: 0
  };
  render() {
    return (
      <div className="buttonContainer">
        <Button>
          <img src={likeicon} alt="thumbs up" />
        </Button>
        <Button>
          <img src={dislikeicon} alt="thumbs down" />
        </Button>
      </div>
    );
  }
}

export default Vote;
