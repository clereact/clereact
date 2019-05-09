// Metadata for the site. If you want to use this code for your
// own Meetup.com group, fork the repository and edit the variables
// in this file.

// Site metadata variables.
const title = "Cleveland React";
const description = "Cleveland React meetup";
const fullDescription =
  "We are a Cleveland meetup focused on the [React.js](https://reactjs.org) framework. Join us for regular talks and discussions about intermediate-to-advanced topics pertaining to React.js and its broader ecosystem. All skill and experience levels welcome!";
const socialLinks = {
  // Meetup slug (required)
  meetup: "Cleveland-React",
  // GitHub organization username (optional)
  github: "clereact",
  // Twitter username (optional)
  // twitter: "yourhandle",
  // Facebook link (optional full URL -- can be a group or page)
  // facebook: "https://facebook.com/groups/123",
  // OR
  // facebook: "https://facebook.com/YourPage",
};

// Site color scheme.
const colors = {
  background: "#FFFFFF",
  backgroundDark: "#FDD9F0",

  primary: "#3F5673",
  primaryLight: "#A5BCD9",
  primaryDark: "#0C2340",

  secondary: "#6F263D",
  secondaryLight: "#EEA5BC",
  secondaryDark: "#3C000A",
};

module.exports = {
  title,
  description,
  fullDescription,
  socialLinks,
  colors,
};
