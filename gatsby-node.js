const fetch = require("node-fetch");
const { camelizeKeys } = require("humps");
const { socialLinks } = require("./metadata");

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  // Fetch Meetup events for the group.
  const response = await fetch(
    `https://api.meetup.com/${socialLinks.meetup}/events?status=past,upcoming`,
  );
  const json = await response.json();

  // Create a node for each event.
  camelizeKeys(json).forEach((event) => {
    const node = {
      ...event,
      meetupId: event.id,
      id: createNodeId(event.id),
      parent: null,
      children: [],
      internal: {
        type: "MeetupEvents",
      },
    };

    const contentDigest = createContentDigest(node);
    node.internal.contentDigest = contentDigest;
    createNode(node);
  });
};
