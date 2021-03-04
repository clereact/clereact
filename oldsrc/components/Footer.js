import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.background};
  margin-left: 1em;
`;

const Footer = () => (
  <FooterContainer>
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => {
        return (
          <>
            <span>&copy; {data.site.siteMetadata.title}</span>
            <FooterLink href="https://www.netlify.com">
              Deploys by Netlify
            </FooterLink>
          </>
        );
      }}
    />
  </FooterContainer>
);

export default Footer;
