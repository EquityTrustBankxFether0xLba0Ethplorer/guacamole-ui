"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "steps": "steps-a6ee89e7",
  "step": "steps-e7ead84a",
  "active": "steps-a2913e1b",
  "button": "steps-76196e5e",
  "theme-primary": "steps-d09d658b",
  "theme-white": "steps-d1a7d3d2",
  "placeHolderShimmer": "steps-5d9f9c01"
};

var PageSteps = function PageSteps(_ref) {
  var title = _ref.title,
      active = _ref.active,
      href = _ref.href,
      onClick = _ref.onClick,
      isRouterLink = _ref.isRouterLink;

  if (href || onClick) {
    return _react.default.createElement(_Clickable.default, {
      styleName: (0, _classnames.default)('step', 'button', {
        active: active
      }),
      onClick: onClick,
      href: href,
      isRouterLink: isRouterLink
    }, title);
  }

  return _react.default.createElement("div", {
    styleName: (0, _classnames.default)('step', {
      active: active
    })
  }, title);
};

PageSteps.propTypes = {
  title: _propTypes.default.string.isRequired,
  active: _propTypes.default.bool,
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,
  isRouterLink: _propTypes.default.bool
};
PageSteps.defaultProps = {
  active: false,
  href: '',
  onClick: null,
  isRouterLink: false
};

var _default = (0, _reactCssModules.default)(PageSteps, styles, {
  allowMultiple: true
});

exports.default = _default;