module.exports = {
  extends: ["plugin:prettier/recommended"],
  parser: "babel-eslint",
  plugins: ["jsx-a11y"],
  globals: {
    graphql: true,
  },
};
