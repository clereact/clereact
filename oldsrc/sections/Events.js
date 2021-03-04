import React from "react";
import { Flex, Button, Heading } from "rebass";
import { StaticQuery, graphql } from "gatsby";
import { camelizeKeys } from "humps";
import styled from "styled-components";
import Section from "../components/Section";
import Triangle from "../components/Triangle";
import Event from "../components/Event";

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={["50vh", "20vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color="secondary"
      height={["50vh", "40vh"]}
      width={["70vw", "40vw"]}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={["40vh", "15vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
);

const RsvpButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primaryDark};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Events = () => (
  <Section.Container id="events" Background={Background}>
    <Section.Header name="Events" icon="📅" label="calendar" />
    <StaticQuery
      query={graphql`
        query EventsQuery {
          site {
            siteMetadata {
              socialLinks {
                id
                url
              }
            }
          }
          upcomingEvents: allMeetupEvent(
            limit: 10
            filter: { status: { eq: "upcoming" } }
          ) {
            edges {
              node {
                id
                name
                link
                description
                time
                duration
                yes_rsvp_count
                venue {
                  name
                  address_1
                  city
                  state
                }
              }
            }
          }
          pastEvents: allMeetupEvent(
            limit: 5
            filter: { status: { eq: "past" } }
          ) {
            edges {
              node {
                id
                name
                link
                description
                time
                duration
                yes_rsvp_count
                venue {
                  name
                  address_1
                  city
                  state
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const upcomingEvents = camelizeKeys(data.upcomingEvents).edges.map(
          ({ node }) => node,
        );

        const pastEvents = camelizeKeys(data.pastEvents).edges.map(
          ({ node }) => node,
        );

        const { socialLinks } = data.site.siteMetadata;
        const meetupLink = socialLinks.find((link) => link.id === "meetup");

        return (
          <Flex flexWrap="wrap">
            <Heading>Upcoming Events:</Heading>
            {upcomingEvents.map((event) => (
              <Event event={event} key={event.id} />
            ))}

            <Heading>Past Events:</Heading>
            {pastEvents.map((event) => (
              <Event event={event} key={event.id} />
            ))}

            <a href={`${meetupLink.url}/events`} target="_blank">
              <RsvpButton>More events →</RsvpButton>
            </a>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default Events;
