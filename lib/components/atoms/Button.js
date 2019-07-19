"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.SubmitButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _themes = require("../../themes");

var _theming = require("../../utils/theming");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-11d1x5f-0"
})(["display:block;width:100%;padding:12px 0;font-family:", ";font-size:", ";font-weight:bold;line-height:", ";color:", ";text-align:center;text-transform:uppercase;background:", ";background:-moz-linear-gradient(90deg,", " 0%,", " 100%);background:-webkit-linear-gradient(90deg,", " 0%,", " 100%);background:linear-gradient(90deg,", " 0%,", " 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"", "\",endColorstr=\"", "\",GradientType=1);cursor:pointer;outline:none;border:0;box-sizing:border-box;", " ", ":hover{color:", ";background:", ";:before{background:linear-gradient( 90deg,", " 0%,", " 100% );}}"], function (_ref) {
  var theme = _ref.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "FontFamilies.Primary",
    defaultValue: _themes.FontFamilies.Primary
  });
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "FontSizes.a",
    defaultValue: _themes.FontSizes.a
  });
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "LineHeights.a",
    defaultValue: _themes.LineHeights.a
  });
}, function (_ref4) {
  var theme = _ref4.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.NeutralLight",
    defaultValue: _themes.Colors.NeutralLight
  });
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: _themes.Colors.Primary
  });
}, function (_ref6) {
  var theme = _ref6.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: _themes.Colors.Primary
  });
}, function (_ref7) {
  var theme = _ref7.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Secondary",
    defaultValue: _themes.Colors.Secondary
  });
}, function (_ref8) {
  var theme = _ref8.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: _themes.Colors.Primary
  });
}, function (_ref9) {
  var theme = _ref9.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Secondary",
    defaultValue: _themes.Colors.Secondary
  });
}, function (_ref10) {
  var theme = _ref10.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: _themes.Colors.Primary
  });
}, function (_ref11) {
  var theme = _ref11.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Secondary",
    defaultValue: _themes.Colors.Secondary
  });
}, function (_ref12) {
  var theme = _ref12.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: _themes.Colors.Primary
  });
}, function (_ref13) {
  var theme = _ref13.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Secondary",
    defaultValue: _themes.Colors.Secondary
  });
}, function (_ref14) {
  var border = _ref14.border;
  return border && (0, _styledComponents.css)(["position:relative;width:calc(100% - 2px);color:", ";background:", ";margin:1px;:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-1px;border-radius:inherit;background:linear-gradient(90deg,", " 0%,", " 100%);}"], function (_ref15) {
    var theme = _ref15.theme;
    return (0, _theming.theming)({
      theme: theme,
      path: "Colors.Primary",
      defaultValue: _themes.Colors.Primary
    });
  }, function (_ref16) {
    var theme = _ref16.theme;
    return (0, _theming.theming)({
      theme: theme,
      path: "Colors.NeutralLight",
      defaultValue: _themes.Colors.NeutralLight
    });
  }, function (_ref17) {
    var theme = _ref17.theme;
    return (0, _theming.theming)({
      theme: theme,
      path: "Colors.Primary",
      defaultValue: _themes.Colors.Primary
    });
  }, function (_ref18) {
    var theme = _ref18.theme;
    return (0, _theming.theming)({
      theme: theme,
      path: "Colors.Secondary",
      defaultValue: _themes.Colors.Secondary
    });
  });
}, function (_ref19) {
  var round = _ref19.round;
  return round && (0, _styledComponents.css)(["border-radius:24px;"]);
}, function (_ref20) {
  var theme = _ref20.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.NeutralLight",
    defaultValue: _themes.Colors.NeutralLight
  });
}, function (_ref21) {
  var theme = _ref21.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: _themes.Colors.Primary
  });
}, function (_ref22) {
  var theme = _ref22.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: _themes.Colors.Primary
  });
}, function (_ref23) {
  var theme = _ref23.theme;
  return (0, _theming.theming)({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: _themes.Colors.Primary
  });
});

var SubmitButton = function SubmitButton(props) {
  return _react["default"].createElement(StyledButton, _extends({
    type: "submit"
  }, props));
};

exports.SubmitButton = SubmitButton;

var Button = function Button(props) {
  return _react["default"].createElement(StyledButton, _extends({
    as: "a"
  }, props));
};

exports.Button = Button;