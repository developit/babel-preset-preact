var jsxTransform = require('@babel/plugin-transform-react-jsx');
var pragmatic = require('babel-plugin-jsx-pragmatic');

module.exports = function() {
  return {
    plugins: [
      [pragmatic, {
				module: 'preact',
				export: 'h',
				import: 'h'
			}],
      [jsxTransform, { pragma: 'h' }]
    ]
  };
};
