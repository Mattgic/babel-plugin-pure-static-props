import pluginTester from 'babel-plugin-tester';
import myBabelPlugin from '../src';

const path = require('path');

pluginTester({
  plugin: myBabelPlugin,
  pluginName: 'babel-plugin-pure-static-props',
  babelOptions: require('../babel.config.js'),
  fixtures: path.join(__dirname, '__fixtures__'),
});
