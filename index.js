module.exports = {
  pragma: 'h',
  jsxPragma: 'h',
  plugins: [
    require("babel-plugin-transform-react-jsx"),
    require("babel-plugin-transform-flow-strip-types"),
    require("babel-plugin-syntax-flow"),
    require("babel-plugin-syntax-jsx"),
  ]
};
