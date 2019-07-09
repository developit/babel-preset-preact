const babel = require('@babel/core');
const preset = require('.');
const assert = require('assert');

const { code } = babel.transformSync('function Foo(){return <div a b={2} />;}', {
	presets: [
		preset
	],
	babelrc: false,
	compact: true
});

assert.equal(code, 'import{h}from"preact";function Foo(){return h("div",{a:true,b:2});}');
console.log('passed');
