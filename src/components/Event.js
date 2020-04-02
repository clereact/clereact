import React from "react";
import FontAwesome from "react-fontawesome";
import { format } from "date-fns";
import { Button, Box, Flex, Heading } from "rebass";
import styled from "styled-components";

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

const Event = ({ event }) => {
  const eventAddress = !event.venue
    ? null
    : `${event.venue.name}, ${event.venue.address1}, ${event.venue.city}, ${event.venue.state}`;
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

        {eventAddress ? (
          <a
            href={`https://maps.google.com/?q=${eventAddress}`}
            target="_blank"
          >
            <InfoHeading as="h2" color="secondary" mt={2}>
              <FontAwesome name="map-pin" /> {event.venue.name}
            </InfoHeading>
          </a>
        ) : (
          <InfoHeading as="h2" color="secondary" mt={2}>
            <FontAwesome name="map-pin" /> Online Event
          </InfoHeading>
        )}

        <InfoHeading as="h2" color="secondary" mt={2}>
          <FontAwesome name="users" /> {event.yesRsvpCount} attendees
        </InfoHeading>

        <InfoHeading as="h2" color="secondary" mt={2}>
          <FontAwesome name="clock-o" /> {format(eventStart, "h:mmA")} -{" "}
          {format(eventEnd, "h:mmA")}
        </InfoHeading>

        <Box dangerouslySetInnerHTML={{ __html: event.description }} />

        <a href={event.link} target="_blank">
          <RsvpButton>RSVP on Meetup</RsvpButton>
        </a>
      </Flex>
    </EventContainer>
  );
};

export default Event;
