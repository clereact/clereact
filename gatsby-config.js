const manifestConfig = require("./manifest-config");

module.exports = {
  siteMetadata: {
    title: "Cleveland React",
    description: "Cleveland React meetup",
    fullDescription:
      "We are a Cleveland meetup focused on the [React.js](https://reactjs.org) framework. Join us for regular talks and discussions about intermediate-to-advanced topics pertaining to React.js and its broader ecosystem. All skill and experience levels welcome!",
    url: "https://clereact.dev",
    socialLinks: [
      {
        id: "meetup",
        fontAwesomeIcon: "meetup",
        name: "Meetup",
        url: "https://www.meetup.com/Cleveland-React",
      },
      {
        id: "github",
        fontAwesomeIcon: "github",
        name: "GitHub",
        url: "https://github.com/clereact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: manifestConfig,
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["cabin", "Open Sans"],
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
  ],
};
