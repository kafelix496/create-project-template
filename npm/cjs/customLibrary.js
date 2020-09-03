'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var testCss = ".test {\n  display: none;\n  background-color: black;\n}\n";

var Test = function Test() {
  var testValue = 'test';
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("style", null, testCss), /*#__PURE__*/React__default['default'].createElement("div", null, testValue));
};

module.exports = Test;
