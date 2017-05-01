var transformReactJsx = require("babel-plugin-transform-react-jsx");

module.exports = {
  plugins: [
    [ transformReactJsx, { "pragma": "h" }],
    require("babel-plugin-syntax-jsx"),
  ]
};
