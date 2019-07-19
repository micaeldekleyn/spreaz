"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _themes = require("../../themes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Row = _styledComponents["default"].div.withConfig({
  displayName: "Layout__Row",
  componentId: "zgmhrp-0"
})(["display:flex;flex-direction:row;justify-content:space-around;flex-wrap:wrap;flex:1;", ""], function (_ref) {
  var outterMargin = _ref.outterMargin;
  return !outterMargin && (0, _styledComponents.css)(["margin-left:-", "px;margin-right:-", "px;"], _themes.Layout.Gutters / 2, _themes.Layout.Gutters / 2);
});

exports.Row = Row;

var StyledCol = _styledComponents["default"].div.withConfig({
  displayName: "Layout__StyledCol",
  componentId: "zgmhrp-1"
})(["flex-basis:calc( ", " - ", "px );max-width:calc( ", " - ", "px );margin:0;padding:0;box-sizing:border-box;background-clip:content-box;"], function (_ref2) {
  var span = _ref2.span;
  return 100 / _themes.Layout.Columns * span + "%";
}, _themes.Layout.Gutters, function (_ref3) {
  var span = _ref3.span;
  return 100 / _themes.Layout.Columns * span + "%";
}, _themes.Layout.Gutters);

var Col = function Col(props) {
  return _react["default"].createElement(StyledCol, props);
};

exports.Col = Col;
Col.defaultProps = {
  span: 16
};