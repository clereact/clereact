const {
  title,
  description,
  fullDescription,
  socialLinks,
  colors,
} = require("./metadata");

module.exports = {
  siteMetadata: {
    title,
    description,
    fullDescription,
    socialLinks: [
      {
        id: "meetup",
        fontAwesomeIcon: "meetup",
        name: "Meetup",
        url: `https://www.meetup.com/${socialLinks.meetup}`,
      },
      socialLinks.github && {
        id: "github",
        fontAwesomeIcon: "github",
        name: "GitHub",
        url: `https://github.com/${socialLinks.github}`,
      },
      socialLinks.twitter && {
        id: "twitter",
        fontAwesomeIcon: "twitter",
        name: "Twitter",
        url: `https://twitter.com/${socialLinks.twitter}`,
      },
      socialLinks.facebook && {
        id: "facebook",
        fontAwesomeIcon: "facebook",
        name: "Facebook",
        url: socialLinks.facebook,
      },
    ].filter(Boolean),
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: colors.background,
        theme_color: colors.primary,
        display: "minimal-ui",
        icon: "src/assets/logo.png",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["cabin", "Open Sans"],
      },
    },
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-meetup",
      options: {
        groupUrlName: socialLinks.meetup,
        status: "upcoming,past",
        desc: true,
        eventsOptions: [
          {
            status: `upcoming`,
            desc: false,
            page: 100,
          },
          {
            status: `past`,
            desc: true,
            page: 5,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `coc`,
        path: `${__dirname}/CODE_OF_CONDUCT.md`,
        // ignore: [`**/\.*`, `../\.cache/**`, `\.cache/**`, `/\.cache/**`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-remark`,
  ],
};
