"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var numMatchesInValueArray = function numMatchesInValueArray(date, value) {
  var matches = value.filter(function (curDate) {
    return curDate.getDate() === date.getDate() && curDate.getMonth() === date.getMonth() && curDate.getFullYear() === date.getFullYear();
  });
  return matches.length;
};

var getCustomTileClasses = function getCustomTileClasses() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      valueType = _ref.valueType,
      date = _ref.date,
      dateType = _ref.dateType,
      hover = _ref.hover;

  var className = 'react-calendar__tile';
  var classes = [className];

  if (numMatchesInValueArray(date, value) > 0) {
    classes.push("".concat(className, "--active"));
  }

  return classes;
};

var _default = getCustomTileClasses;
exports["default"] = _default;