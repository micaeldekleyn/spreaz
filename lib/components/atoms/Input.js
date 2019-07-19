"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _themes = require("../../themes");

var _theming = require("../../utils/theming");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Input__Label",
  componentId: "tamz6n-0"
})(["display:block;font-family:", ";font-size:", ";font-weight:bold;line-height:", ";text-transform:uppercase;cursor:pointer;"], function (_ref) {
  var theme = _ref.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "FontFamilies.Secondary",
    defaultValue: _themes.FontFamilies.Secondary
  });
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "FontSizes.label",
    defaultValue: _themes.FontSizes.label
  });
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "LineHeights.label",
    defaultValue: _themes.LineHeights.label
  });
});

var StyledInput = _styledComponents["default"].input.withConfig({
  displayName: "Input__StyledInput",
  componentId: "tamz6n-1"
})(["display:block;width:100%;padding:12px;font-family:", ";font-size:", ";border:1px solid ", ";outline:none;box-sizing:border-box;", ":focus{border-color:", ";}"], _themes.FontFamilies.Secondary, _themes.FontSizes.input, _themes.Colors.Neutral, function (_ref4) {
  var round = _ref4.round;
  return round && (0, _styledComponents.css)(["border-radius:24px;"]);
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: _themes.Colors.Primary
  });
});

var Input = function Input(_ref6) {
  var id = _ref6.id,
      label = _ref6.label,
      props = _objectWithoutProperties(_ref6, ["id", "label"]);

  return _react["default"].createElement(Label, {
    "for": id
  }, label, _react["default"].createElement(StyledInput, _extends({
    name: id,
    id: id
  }, props)));
};

exports.Input = Input;