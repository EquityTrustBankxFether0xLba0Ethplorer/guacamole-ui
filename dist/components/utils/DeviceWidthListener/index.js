"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layout = require("../../../config/layout");

var _styleConstants = require("../../../config/styleConstants");

var _deviceWidthDetector = _interopRequireDefault(require("./deviceWidthDetector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DeviceWidthListener =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DeviceWidthListener, _PureComponent);

  function DeviceWidthListener(props, context) {
    var _this;

    _classCallCheck(this, DeviceWidthListener);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DeviceWidthListener).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "handleChangeDeviceWidth", function (currentSize) {
      var lt = {};
      var gt = {};
      var lte = {};
      var gte = {};
      var breakpoints = _this.props.breakpoints;
      var gteCurrent = false;

      _this.orderedKeys.forEach(function (size) {
        var isTrackinbg = breakpoints.indexOf(size) >= 0;

        if (isTrackinbg) {
          lt[size] = gteCurrent;
          lte[size] = gteCurrent || size === currentSize;
        }

        if (size === currentSize) {
          gteCurrent = true;
        }

        if (isTrackinbg) {
          gt[size] = !gteCurrent;
          gte[size] = !gteCurrent || size === currentSize;
        }
      });

      _this.setState({
        lt: lt,
        lte: lte,
        gt: gt,
        gte: gte
      });
    });

    var _gt = {};
    var _gte = {};
    var _lt = {};
    var _lte = {};
    var breakpointSizeMap = props.breakpointSizeMap,
        _breakpoints = props.breakpoints;
    _this.orderedKeys = _deviceWidthDetector.default.register(breakpointSizeMap);

    _breakpoints.forEach(function (breakpoint) {
      var applied = _deviceWidthDetector.default.subscribe(breakpoint, _this.handleChangeDeviceWidth);

      _gt[breakpoint] = applied.gt;
      _lt[breakpoint] = applied.lt;
    });

    _this.state = {
      gt: _gt,
      gte: _gte,
      lt: _lt,
      lte: _lte
    };
    return _this;
  }

  _createClass(DeviceWidthListener, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      var breakpoints = this.props.breakpoints;
      breakpoints.forEach(function (breakpoint) {
        _deviceWidthDetector.default.unsubscribe(breakpoint, _this2.handleChangeDeviceWidth);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children(this.state);
    }
  }]);

  return DeviceWidthListener;
}(_react.PureComponent);

var breakpointSizeMapShape = {};

_styleConstants.deviceBreakpointKeys.forEach(function (key) {
  breakpointSizeMapShape[key] = _propTypes.default.string;
});

DeviceWidthListener.propTypes = {
  breakpointSizeMap: _propTypes.default.shape(breakpointSizeMapShape),
  breakpoints: _propTypes.default.arrayOf(_propTypes.default.oneOf(_styleConstants.deviceBreakpointKeys)).isRequired,
  children: _propTypes.default.func.isRequired
};
DeviceWidthListener.defaultProps = {
  breakpointSizeMap: _layout.deviceBreakpointMap
};
var _default = DeviceWidthListener;
exports.default = _default;