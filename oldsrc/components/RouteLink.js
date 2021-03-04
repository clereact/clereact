import React from "react";
import { Box } from "rebass";
import PropTypes from "prop-types";
import LinkAnimated from "./LinkAnimated";
import { Link } from "gatsby";
import styled from "styled-components";

const GatsbyLinkAnimated = styled(LinkAnimated).attrs({
  as: Link,
})`
  cursor: pointer;
`;

const RouteLink = ({ onClick, to, selected, children }) => (
  <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
    {to ? (
      <GatsbyLinkAnimated to={to} selected={selected}>
        {children}
      </GatsbyLinkAnimated>
    ) : (
      <LinkAnimated onClick={onClick} selected={selected}>
        {children}
      </LinkAnimated>
    )}
  </Box>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.node,
};

export default RouteLink;
