import React from "react";
import styled from "styled-components";
import { Text } from "rebass";
import Fade from "react-reveal/Fade";

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <span>
        <Text mb={1}>&copy; Cleveland React</Text>
      </span>
    </Fade>
  </FooterContainer>
);

export default Footer;
