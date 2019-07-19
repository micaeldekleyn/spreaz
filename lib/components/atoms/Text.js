"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledText = _styledComponents["default"].p.withConfig({
  displayName: "Text__StyledText",
  componentId: "nn5swe-0"
})(["font-family:", ";font-size:", ";line-height:", ";color:", ";text-align:", ";font-weight:", ";"], _themes.FontFamilies.Secondary, function (_ref) {
  var level = _ref.level;
  return _themes.FontSizes.p[level];
}, function (_ref2) {
  var level = _ref2.level;
  return _themes.LineHeights.p[level];
}, _themes.Colors.NeutralDark, function (_ref3) {
  var centered = _ref3.centered,
      _ref3$align = _ref3.align,
      align = _ref3$align === void 0 ? "left" : _ref3$align;
  return centered ? "center" : align;
}, function (_ref4) {
  var bold = _ref4.bold;
  return bold ? "bold" : "normal";
});

var Text = function Text(props) {
  return _react["default"].createElement(StyledText, props);
};

exports.Text = Text;
Text.defaultProps = {
  level: "normal",
  centered: false,
  bold: false
};