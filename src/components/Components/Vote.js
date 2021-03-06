import React from "react";
import * as api from "../../api";
import ErrorHandler from "../ErrorHandling/ErrorHandler";
import likeicon from "../Media/likeicon.png";
import dislikeicon from "../Media/dislikeicon.png";
import styled from "styled-components";

const H5 = styled.h5`
  text-align: center;
  font-weight: 700;
  font-size: 1em;
`;

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
    voteChange: 0,
    err: null
  };

  render() {
    const { err, voteChange } = this.state;
    const { loggedInAs, votes } = this.props;
    if (err) return <ErrorHandler err={err} />;
    return (
      <>
        <H5>Votes: {votes + voteChange}</H5>
        <div className="buttonContainer">
          <Button
            disabled={!loggedInAs || voteChange > 0}
            onClick={() => this.handleVote(1)}
          >
            <img src={likeicon} alt="thumbs up - like button" />
          </Button>
          <Button
            disabled={!loggedInAs || voteChange < 0}
            onClick={() => this.handleVote(-1)}
          >
            <img src={dislikeicon} alt="thumbs down - dislike button" />
          </Button>
        </div>
      </>
    );
  }

  handleVote = increment => {
    const { article_id, comment_id } = this.props;
    api.patchVote(article_id, comment_id, increment).catch(err =>
      this.setState(({ voteChange }) => {
        return { voteChange: voteChange - increment };
      })
    );
    this.setState(prevState => {
      return {
        voteChange: prevState.voteChange + increment
      };
    });
  };
}

export default Vote;
