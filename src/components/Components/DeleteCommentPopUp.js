import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 2em;
  font-size: 1.75em;
`;

const DeleteCommentPopUp = ({ isDeleted }) => {
  return (
    <Popup open={isDeleted} closeOnDocumentClick>
      <Div>Comment successfully deleted!</Div>
    </Popup>
  );
};

export default DeleteCommentPopUp;
