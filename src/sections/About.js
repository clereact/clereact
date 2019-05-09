import React from "react";
import { Box, Image, Flex } from "rebass";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Fade from "react-reveal/Fade";
import Section from "../components/Section";
import Triangle from "../components/Triangle";
import markdownRenderer from "../components/MarkdownRenderer";
import siteImage from "../assets/site-image.png";

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={["50vh", "20vh"]}
      width={["100vw", "100vw"]}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={["20vh", "40vh"]}
      width={["75vw", "70vw"]}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={["25vh", "20vh"]}
      width={["100vw", "100vw"]}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 30%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 5%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About us" icon="⚛" label="atom" />
    <StaticQuery
      query={graphql`
        query AboutQuery {
          site {
            siteMetadata {
              title
              fullDescription
            }
          }
        }
      `}
      render={(data) => {
        const { title, fullDescription } = data.site.siteMetadata;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={fullDescription}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: "300px", margin: "auto" }}
            >
              <Fade right>
                <ProfilePicture
                  src={siteImage}
                  alt={title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
