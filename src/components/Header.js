import React from "react";
import { Link } from "gatsby";
import Headroom from "react-headroom";
import { Flex, Image, Box } from "rebass";
import styled from "styled-components";
import { SectionLinks } from "react-scroll-section";
import Fade from "react-reveal/Fade";
import RouteLink from "./RouteLink";
import logo from "../assets/logo.png";

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${(props) => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;

const formatLinks = (allLinks) =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === "home";
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks);

            const homeLink = home && (
              <Image
                src={logo}
                width="50px"
                alt="React"
                onClick={home.onClick}
                style={{
                  cursor: "pointer",
                }}
              />
            );
            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
              >
                {name}
              </RouteLink>
            ));

            return (
              <>
                {homeLink}
                <Flex mr={[0, 3, 5]}>
                  {[
                    ...navLinks,

                    <RouteLink key="coc" to="/code-of-conduct">
                      Code of Conduct
                    </RouteLink>,
                  ]}
                </Flex>
              </>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);

export default Header;
