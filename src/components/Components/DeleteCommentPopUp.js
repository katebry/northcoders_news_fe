import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.75em;
  font-weight: 700;
  background-color: rgb(196, 20, 53);
`;

const DeleteCommentPopUp = ({ isDeleted }) => {
  return (
    <Popup open={isDeleted} closeOnDocumentClick>
      <Div>Comment successfully deleted!</Div>
    </Popup>
  );
};

export default DeleteCommentPopUp;
