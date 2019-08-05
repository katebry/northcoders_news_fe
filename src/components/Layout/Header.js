import React from "react";
import styled from "styled-components";
import headerBackground from "./NCNewsHeaderBg.png";

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

const Header = () => {
  return <SiteHeader className="siteHeader">NCNews Round</SiteHeader>;
};

export default Header;
