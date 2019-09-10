import React from "react";
import { Box, Flex, Heading, Button } from "rebass";
import FontAwesome from "react-fontawesome";
import { StaticQuery, graphql } from "gatsby";
import { camelizeKeys } from "humps";
import styled from "styled-components";
import { format } from "date-fns";
import Section from "../components/Section";
import Triangle from "../components/Triangle";

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

const EventContainer = styled(Flex)`
  background-color: white;
  padding: 25px;
  margin-bottom: 25px;
  border: solid 1px ${(props) => props.theme.colors.secondaryLight};
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CalendarDate = styled.time`
  display: flex;
  flex-direction: column;
  border: solid 1px ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  overflow: hidden;
  width: 100px;
  margin-bottom: 20px;

  * {
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    text-align: center;
  }

  strong {
    padding: 10px;
    color: #fff;
    background-color: ${(props) => props.theme.colors.primaryDark};
    border-bottom: 1px dashed ${(props) => props.theme.colors.secondaryLight};
    box-shadow: 0 2px 0 ${(props) => props.theme.colors.primaryDark};
  }

  span {
    font-size: 2.8em;
    letter-spacing: -0.05em;
    color: #2f2f2f;
  }
`;

const InfoHeading = styled(Heading)`
  font-size: 18px;
`;

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
          allMeetupEvent(limit: 3) {
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
        const events = camelizeKeys(data.allMeetupEvent).edges.map(
          ({ node }) => node,
        );

        const { socialLinks } = data.site.siteMetadata;
        const meetupLink = socialLinks.find((link) => link.id === "meetup");

        return (
          <Flex flexWrap="wrap">
            {events.map((event) => {
              const eventAddress = `${event.venue.name}, ${
                event.venue.address1
              }, ${event.venue.city}, ${event.venue.state}`;
              const eventStart = new Date(event.time);
              const eventEnd = new Date(event.time + event.duration);

              return (
                <EventContainer key={event.id}>
                  <Box>
                    <CalendarDate dateTime={format(eventStart, "YYYY-MM-DD")}>
                      <strong>{format(eventStart, "MMMM")}</strong>
                      <span>{format(eventStart, "D")}</span>
                    </CalendarDate>
                  </Box>

                  <Flex flexDirection="column" ml={3}>
                    <a href={event.link} target="_blank">
                      <Heading as="h1" color="primary">
                        {event.name}
                      </Heading>
                    </a>

                    <a
                      href={`https://maps.google.com/?q=${eventAddress}`}
                      target="_blank"
                    >
                      <InfoHeading as="h2" color="secondary" mt={2}>
                        <FontAwesome name="map-pin" /> {event.venue.name}
                      </InfoHeading>
                    </a>

                    <InfoHeading as="h2" color="secondary" mt={2}>
                      <FontAwesome name="users" /> {event.yesRsvpCount}{" "}
                      attendees
                    </InfoHeading>

                    <InfoHeading as="h2" color="secondary" mt={2}>
                      <FontAwesome name="clock-o" />{" "}
                      {format(eventStart, "h:mmA")} -{" "}
                      {format(eventEnd, "h:mmA")}
                    </InfoHeading>

                    <Box
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />

                    <a href={event.link} target="_blank">
                      <RsvpButton>RSVP on Meetup</RsvpButton>
                    </a>
                  </Flex>
                </EventContainer>
              );
            })}

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
