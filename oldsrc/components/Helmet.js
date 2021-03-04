import React from "react";
import ReactHelmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import favicon from "../assets/favicon.ico";
import siteImage from "../assets/site-image.png";

const Helmet = ({ theme = {} }) => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => {
      const { title, description } = data.site.siteMetadata;

      return (
        <ReactHelmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="shortcut icon" href={favicon} />
          <meta name="theme-color" content={theme.background} />
          <meta name="image" content={favicon} />

          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={favicon} />

          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:image" content={siteImage} />
          <meta name="og:site_name" content={title} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={siteImage} />
          <meta name="twitter:image:src" content={siteImage} />

          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />
        </ReactHelmet>
      );
    }}
  />
);

Helmet.propTypes = {
  theme: PropTypes.shape({
    background: PropTypes.string,
  }),
};

export default withTheme(Helmet);
