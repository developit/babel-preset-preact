module.exports = {
  plugins: [
    [require("babel-plugin-transform-react-jsx"), { "pragma": "h" }],
    require("babel-plugin-syntax-jsx"),
  ]
};
