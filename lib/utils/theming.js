"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theming = void 0;

var _ = _interopRequireWildcard(require("lodash"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var theming = function theming(_ref) {
  var theme = _ref.theme,
      path = _ref.path,
      defaultValue = _ref.defaultValue;

  if (_.get(theme, path)) {
    return _.get(theme, path);
  } else {
    return defaultValue;
  }
};

exports.theming = theming;