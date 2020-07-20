'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Simple2 = /*#__PURE__*/ (() => {
  const Simple2 = () => {
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      null,
      'Simply hello !'
    );
  };

  Simple2.TYPE = {
    a: 'a',
    b: 'b',
  };
  return Simple2;
})();

var _default = Simple2;
exports.default = _default;
