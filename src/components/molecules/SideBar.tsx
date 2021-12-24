import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

const Section = styled.section`
  background: ${colors.darkPrimary};
  color: #fff;

  width: 0; /* 0 width - change this with JavaScript */
  z-index: 1; /* Stay on top */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.2s; /* 0.5 second transition effect to slide in the sidepanel */
`;

const Header = styled.header`
  padding: 15px;
  flex-shrink: 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid ${colors.darkSecondary};
`;

const HeaderTitle = styled.h2`
  font-size: 1em;
  margin: 0;
  font-weight: normal;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function SideBar({ title, children }: Props): JSX.Element {
  return (
    <Section id="mySidepanel">
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      {children}
    </Section>
  );
}
