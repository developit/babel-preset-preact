var transformReactJsx = require("@babel/plugin-transform-react-jsx");

module.exports = {
  plugins: [
    [ transformReactJsx, { "pragma": "preact.h" }],
    require("@babel/plugin-syntax-jsx"),
  ]
};
