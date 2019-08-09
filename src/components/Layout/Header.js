import React from "react";
import headerBackground from "../Media/NCNEWS-header-bg.png";
import styled from "styled-components";

const SiteHeader = styled.header`
  background-image: url(${headerBackground});
  padding: 0.7em;
  width: 100%;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  color: white;
  font-size: 2.5em;
  font-weight: 700;
`;

const H6 = styled.h6`
  display: flex;
  justify-content: left;
  font-size: 0.5em;
  font-weight: 700;
`;

const Header = ({ loggedInAs }) => {
  return (
    <>
      <SiteHeader className="siteHeader">
        NCNews Round
        <H6>Logged-in: {loggedInAs}</H6>
      </SiteHeader>
    </>
  );
};

export default Header;
