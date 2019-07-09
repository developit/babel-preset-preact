var transformReactJsx = require("babel-plugin-transform-react-jsx");

module.exports = function() {
  return {
    plugins: [
      [ transformReactJsx, { "pragma": "h" }],
      require("babel-plugin-syntax-jsx"),
    ]
  };
};
