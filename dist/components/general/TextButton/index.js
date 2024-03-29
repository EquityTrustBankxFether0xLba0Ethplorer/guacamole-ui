"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _responsiveTextSizes = _interopRequireDefault(require("../../../shapes/responsiveTextSizes"));

var _styleConstants = require("../../../config/styleConstants");

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "button": "button-e7b9830c",
  "disabled": "button-e3c063de",
  "color-primary": "button-74681260",
  "color-primary-light": "button-edeb2219",
  "color-primary-lighter": "button-c0a2bff6",
  "color-primary-lightest": "button-8887b782",
  "color-black": "button-577010cb",
  "color-grey-darker": "button-88bfcbd0",
  "color-grey-dark": "button-4dc763d2",
  "color-grey": "button-cc1950b7",
  "color-grey-light": "button-19eac32f",
  "color-grey-lighter": "button-7ddabf22",
  "color-grey-lightest": "button-cd69bf65",
  "color-white": "button-2c75ee63",
  "color-white-light": "button-2f863f32",
  "color-white-lighter": "button-8b6745ad",
  "color-white-lightest": "button-a815f846",
  "color-transparent": "button-759e3e53",
  "color-secondary": "button-16c1c629",
  "color-secondary-light": "button-815f94b5",
  "color-secondary-lighter": "button-84abeccb",
  "color-secondary-lightest": "button-2c0bc8e0",
  "color-pink": "button-a7607aaa",
  "color-red": "button-3093cfcb",
  "color-purple": "button-1fa90b86",
  "color-blue": "button-cf9d8c9b",
  "color-green": "button-279bf7ac",
  "color-yellow": "button-a282f511",
  "color-orange": "button-e610fd64",
  "color-brown": "button-70e20441",
  "color-default": "button-aaad2b5a",
  "color-label": "button-39bc6479",
  "theme-uppercase": "button-a6c45fc0",
  "theme-underline": "button-acfa6798",
  "theme-implicit": "button-4ae00dd2"
};

var TextButton = function TextButton(_ref) {
  var _classnames;

  var testId = _ref.testId,
      className = _ref.className,
      theme = _ref.theme,
      text = _ref.text,
      children = _ref.children,
      size = _ref.size,
      weight = _ref.weight,
      color = _ref.color,
      href = _ref.href,
      target = _ref.target,
      onClick = _ref.onClick,
      Link = _ref.Link,
      stopPropagation = _ref.stopPropagation,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement(_Clickable["default"], {
    testId: testId,
    className: (0, _classnames2["default"])(className, styles.button, (_classnames = {}, _defineProperty(_classnames, styles["theme-".concat(theme)], theme !== 'normal'), _defineProperty(_classnames, styles["color-".concat(color)], color), _defineProperty(_classnames, styles.disabled, disabled), _classnames)),
    href: href,
    target: target,
    onClick: onClick,
    Link: Link,
    stopPropagation: stopPropagation,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    text: text,
    size: size,
    weight: weight
  }, children));
};

TextButton.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(['normal', 'implicit', 'underline', 'uppercase']),
  text: _propTypes["default"].string,
  children: _propTypes["default"].node,
  size: _responsiveTextSizes["default"],
  weight: _propTypes["default"].oneOf(_styleConstants.fontWeightKeys),
  color: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.textColorNames))),
  href: _propTypes["default"].string,
  target: _propTypes["default"].oneOf(['', '_self', '_blank', '_parent', '_top']),
  onClick: _propTypes["default"].func,
  Link: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].object]),
  stopPropagation: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
};
TextButton.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'normal',
  text: '',
  children: null,
  size: 'inherit',
  weight: 'medium',
  color: '',
  href: '',
  target: '',
  onClick: null,
  Link: 'a',
  stopPropagation: false,
  disabled: false
};
var _default = TextButton;
exports["default"] = _default;