"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StyledTitle = _styledComponents["default"].h1.withConfig({
  displayName: "Title__StyledTitle",
  componentId: "sc-1buhmqv-0"
})(["font-family:", ";font-weight:800;font-size:", ";line-height:", ";color:", ";text-align:", ";"], _themes.FontFamilies.Primary, function (_ref) {
  var level = _ref.level;
  return _themes.FontSizes[level];
}, function (_ref2) {
  var level = _ref2.level;
  return _themes.LineHeights[level];
}, _themes.Colors.NeutralDark, function (_ref3) {
  var centered = _ref3.centered,
      _ref3$align = _ref3.align,
      align = _ref3$align === void 0 ? "left" : _ref3$align;
  return centered ? "center" : align;
});

var Title = function Title(props) {
  var level = props.level;
  return _react["default"].createElement(StyledTitle, _extends({
    as: level
  }, props));
};

exports.Title = Title;
Title.defaultProps = {
  level: "h1",
  centered: false
};