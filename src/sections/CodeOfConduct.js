import React from "react";
import { Box, Flex } from "rebass";
import { StaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Fade from "react-reveal/Fade";
import Section from "../components/Section";
import RouteLink from "../components/RouteLink";
import markdownRenderer from "../components/MarkdownRenderer";

// dangerouslySetInnerHTML={{ __html: html }}
const CodeOfConduct = () => (
  <>
    <Flex
      flexWrap="wrap"
      justifyContent="flex-end"
      alignItems="center"
      p={3}
      backgroundColor="primaryDark"
    >
      <RouteLink to="/">Back to Cleveland React</RouteLink>
    </Flex>

    <Section.Container id="coc">
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(
              fileAbsolutePath: { glob: "**/CODE_OF_CONDUCT.md" }
            ) {
              rawMarkdownBody
            }
          }
        `}
        render={(data) => {
          return (
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
                <Fade bottom>
                  <ReactMarkdown
                    source={data.markdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  />
                </Fade>
              </Box>
            </Flex>
          );
        }}
      />
    </Section.Container>
  </>
);

export default CodeOfConduct;
