"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Offset = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../utils/generateResponsiveStyleNames"));

var _parseCssSizeValues = _interopRequireDefault(require("../../../utils/parseCssSizeValues"));

var _responsiveCssSizes = _interopRequireDefault(require("../../../shapes/responsiveCssSizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "all--xxs": "offset-aef75b0a",
  "top--xxs": "offset-75ff328f",
  "right--xxs": "offset-626ed3bc",
  "bottom--xxs": "offset-8b0020cf",
  "left--xxs": "offset-8c72802f",
  "all--xs": "offset-5ca8317a",
  "top--xs": "offset-b26c6de5",
  "right--xs": "offset-0f3b9859",
  "bottom--xs": "offset-559f52e4",
  "left--xs": "offset-676751de",
  "all--s": "offset-1a9f6f1e",
  "top--s": "offset-a4599ae3",
  "right--s": "offset-84843e78",
  "bottom--s": "offset-105882a9",
  "left--s": "offset-a9fae8b5",
  "all--m": "offset-309d96a7",
  "top--m": "offset-132a9b36",
  "right--m": "offset-3f58b1bc",
  "bottom--m": "offset-218e543e",
  "left--m": "offset-39ca3368",
  "all--l": "offset-49b62e64",
  "top--l": "offset-1d98ce5e",
  "right--l": "offset-ea88ab6e",
  "bottom--l": "offset-91c8e6f9",
  "left--l": "offset-386ba5f4",
  "all--xl": "offset-d7b2b8ce",
  "top--xl": "offset-39056a24",
  "right--xl": "offset-b7fde186",
  "bottom--xl": "offset-77d848ff",
  "left--xl": "offset-491a78c3",
  "all--xxl": "offset-26a029b2",
  "top--xxl": "offset-fe587ec2",
  "right--xxl": "offset-2885ba7a",
  "bottom--xxl": "offset-ff920165",
  "left--xxl": "offset-a676ba6c",
  "all--0": "offset-ffcc4792",
  "top--0": "offset-0c4934ed",
  "right--0": "offset-c397977b",
  "bottom--0": "offset-bd18c467",
  "left--0": "offset-7b0fa65e",
  "all-xs-xxs": "offset-98dcfb17",
  "top-xs-xxs": "offset-a5e9f897",
  "right-xs-xxs": "offset-e1c36a90",
  "bottom-xs-xxs": "offset-6d411baa",
  "left-xs-xxs": "offset-3eeea12b",
  "all-xs-xs": "offset-c1117757",
  "top-xs-xs": "offset-83814ba9",
  "right-xs-xs": "offset-b118f86f",
  "bottom-xs-xs": "offset-0ecfa65f",
  "left-xs-xs": "offset-e27b0198",
  "all-xs-s": "offset-ea7e252a",
  "top-xs-s": "offset-4b4c9b76",
  "right-xs-s": "offset-16a5f96a",
  "bottom-xs-s": "offset-98bf47cc",
  "left-xs-s": "offset-4bb330dd",
  "all-xs-m": "offset-f2db0e48",
  "top-xs-m": "offset-012c47dd",
  "right-xs-m": "offset-6ee6a18f",
  "bottom-xs-m": "offset-0bb70b52",
  "left-xs-m": "offset-1db29abc",
  "all-xs-l": "offset-1520ab35",
  "top-xs-l": "offset-e130ffa2",
  "right-xs-l": "offset-ac4dfe51",
  "bottom-xs-l": "offset-64a3d5b0",
  "left-xs-l": "offset-429ea715",
  "all-xs-xl": "offset-4e56eb07",
  "top-xs-xl": "offset-0cff7662",
  "right-xs-xl": "offset-71adc6e6",
  "bottom-xs-xl": "offset-1cf95de4",
  "left-xs-xl": "offset-5d305232",
  "all-xs-xxl": "offset-8bbe1651",
  "top-xs-xxl": "offset-7743860a",
  "right-xs-xxl": "offset-000f528a",
  "bottom-xs-xxl": "offset-6d073109",
  "left-xs-xxl": "offset-51ae2fa2",
  "all-xs-0": "offset-97c6d886",
  "top-xs-0": "offset-1df8f8a5",
  "right-xs-0": "offset-95284f53",
  "bottom-xs-0": "offset-18e2ce93",
  "left-xs-0": "offset-34a20f36",
  "all-s-xxs": "offset-99a73c4f",
  "top-s-xxs": "offset-c6b8bbdd",
  "right-s-xxs": "offset-e3e04b35",
  "bottom-s-xxs": "offset-0bd39fb4",
  "left-s-xxs": "offset-aa252dff",
  "all-s-xs": "offset-80d47c3b",
  "top-s-xs": "offset-f53c0804",
  "right-s-xs": "offset-233375f3",
  "bottom-s-xs": "offset-e0bfbd14",
  "left-s-xs": "offset-23f87a24",
  "all-s-s": "offset-4a077736",
  "top-s-s": "offset-678b3ed7",
  "right-s-s": "offset-ee4a4422",
  "bottom-s-s": "offset-9fa51f7b",
  "left-s-s": "offset-608b8701",
  "all-s-m": "offset-ebfaeabc",
  "top-s-m": "offset-73fa245e",
  "right-s-m": "offset-f31e8fe3",
  "bottom-s-m": "offset-92229bf5",
  "left-s-m": "offset-4186d38b",
  "all-s-l": "offset-0550abe5",
  "top-s-l": "offset-45a63a7b",
  "right-s-l": "offset-3b00985d",
  "bottom-s-l": "offset-8c356985",
  "left-s-l": "offset-a2d2e0f5",
  "all-s-xl": "offset-799e3e34",
  "top-s-xl": "offset-3692ed59",
  "right-s-xl": "offset-0b9170ea",
  "bottom-s-xl": "offset-4e8aba21",
  "left-s-xl": "offset-4c3f8e1b",
  "all-s-xxl": "offset-727dee1e",
  "top-s-xxl": "offset-a035da67",
  "right-s-xxl": "offset-6ed5defb",
  "bottom-s-xxl": "offset-3a298f79",
  "left-s-xxl": "offset-af549c67",
  "all-s-0": "offset-678e03ac",
  "top-s-0": "offset-1c28617c",
  "right-s-0": "offset-9bee5693",
  "bottom-s-0": "offset-c50a84b6",
  "left-s-0": "offset-f31c6aeb",
  "all-m-xxs": "offset-0a0c01e8",
  "top-m-xxs": "offset-a78bdaa8",
  "right-m-xxs": "offset-56bce6bb",
  "bottom-m-xxs": "offset-ffde4e56",
  "left-m-xxs": "offset-15bc1dac",
  "all-m-xs": "offset-37560a07",
  "top-m-xs": "offset-8ccb7663",
  "right-m-xs": "offset-54f52e20",
  "bottom-m-xs": "offset-b812f837",
  "left-m-xs": "offset-c020992c",
  "all-m-s": "offset-0547d14a",
  "top-m-s": "offset-b081f2f1",
  "right-m-s": "offset-bd8545a1",
  "bottom-m-s": "offset-42935e63",
  "left-m-s": "offset-088778db",
  "all-m-m": "offset-ca46831c",
  "top-m-m": "offset-896b18fb",
  "right-m-m": "offset-89c04c9b",
  "bottom-m-m": "offset-a5c9cc70",
  "left-m-m": "offset-591cc4ae",
  "all-m-l": "offset-e4a1d87b",
  "top-m-l": "offset-4cacba11",
  "right-m-l": "offset-a444ede9",
  "bottom-m-l": "offset-012e7741",
  "left-m-l": "offset-ec2aa16c",
  "all-m-xl": "offset-bb516213",
  "top-m-xl": "offset-2ddf0cfd",
  "right-m-xl": "offset-73205745",
  "bottom-m-xl": "offset-0e4ef863",
  "left-m-xl": "offset-07e504a2",
  "all-m-xxl": "offset-17c3cd70",
  "top-m-xxl": "offset-1be4bfb4",
  "right-m-xxl": "offset-e92bb627",
  "bottom-m-xxl": "offset-fbbe874d",
  "left-m-xxl": "offset-97d51341",
  "all-m-0": "offset-31153238",
  "top-m-0": "offset-b662a905",
  "right-m-0": "offset-0df47daf",
  "bottom-m-0": "offset-98e14089",
  "left-m-0": "offset-8113b79c",
  "all-l-xxs": "offset-25032ba4",
  "top-l-xxs": "offset-d8ecc2fe",
  "right-l-xxs": "offset-25ced4f6",
  "bottom-l-xxs": "offset-5be5788a",
  "left-l-xxs": "offset-4d097bf1",
  "all-l-xs": "offset-78bafbe9",
  "top-l-xs": "offset-cf2d55b5",
  "right-l-xs": "offset-2e737131",
  "bottom-l-xs": "offset-2c22d7bc",
  "left-l-xs": "offset-ca31e951",
  "all-l-s": "offset-e91f8835",
  "top-l-s": "offset-6faab188",
  "right-l-s": "offset-c6292154",
  "bottom-l-s": "offset-35306e6e",
  "left-l-s": "offset-f68f0470",
  "all-l-m": "offset-957bb775",
  "top-l-m": "offset-14157441",
  "right-l-m": "offset-fc24c136",
  "bottom-l-m": "offset-eba3c959",
  "left-l-m": "offset-ee39aeed",
  "all-l-l": "offset-73a5ba55",
  "top-l-l": "offset-a75d96f0",
  "right-l-l": "offset-1900c2e0",
  "bottom-l-l": "offset-1bede158",
  "left-l-l": "offset-2a17d478",
  "all-l-xl": "offset-6f0c4889",
  "top-l-xl": "offset-30a35317",
  "right-l-xl": "offset-37355740",
  "bottom-l-xl": "offset-05e7320f",
  "left-l-xl": "offset-7f892d48",
  "all-l-xxl": "offset-3a652c48",
  "top-l-xxl": "offset-e55b6c82",
  "right-l-xxl": "offset-a28e8b30",
  "bottom-l-xxl": "offset-1d1fb1fa",
  "left-l-xxl": "offset-21fcb94d",
  "all-l-0": "offset-84546d88",
  "top-l-0": "offset-875fb616",
  "right-l-0": "offset-bb1636f2",
  "bottom-l-0": "offset-2245ab43",
  "left-l-0": "offset-d5b85a0a",
  "all-xl-xxs": "offset-349e61dc",
  "top-xl-xxs": "offset-a6d03d9d",
  "right-xl-xxs": "offset-3583386a",
  "bottom-xl-xxs": "offset-c5cf0d15",
  "left-xl-xxs": "offset-26a1090c",
  "all-xl-xs": "offset-b10aff42",
  "top-xl-xs": "offset-e6856ca4",
  "right-xl-xs": "offset-db40f181",
  "bottom-xl-xs": "offset-c73c6991",
  "left-xl-xs": "offset-c948a0b2",
  "all-xl-s": "offset-a93c2738",
  "top-xl-s": "offset-6ee71a78",
  "right-xl-s": "offset-18efe2c1",
  "bottom-xl-s": "offset-a9a18924",
  "left-xl-s": "offset-0cdf148b",
  "all-xl-m": "offset-8e50a535",
  "top-xl-m": "offset-fac3762a",
  "right-xl-m": "offset-164fee9e",
  "bottom-xl-m": "offset-f0c99994",
  "left-xl-m": "offset-572bd265",
  "all-xl-l": "offset-f944296a",
  "top-xl-l": "offset-54809a7a",
  "right-xl-l": "offset-d457f42a",
  "bottom-xl-l": "offset-68aa19d9",
  "left-xl-l": "offset-62178130",
  "all-xl-xl": "offset-59a2ff89",
  "top-xl-xl": "offset-4eb5aaa1",
  "right-xl-xl": "offset-6f62ac9d",
  "bottom-xl-xl": "offset-bba44e2b",
  "left-xl-xl": "offset-c6e5c772",
  "all-xl-xxl": "offset-ca9529a9",
  "top-xl-xxl": "offset-b4497e6d",
  "right-xl-xxl": "offset-26812280",
  "bottom-xl-xxl": "offset-cd1af5c0",
  "left-xl-xxl": "offset-3c50460b",
  "all-xl-0": "offset-fc1c1e9a",
  "top-xl-0": "offset-d13039d9",
  "right-xl-0": "offset-f97c0084",
  "bottom-xl-0": "offset-d352e6a7",
  "left-xl-0": "offset-530755eb",
  "all-xxl-xxs": "offset-93ac1e5d",
  "top-xxl-xxs": "offset-cb26018b",
  "right-xxl-xxs": "offset-2d84ae03",
  "bottom-xxl-xxs": "offset-39240e6f",
  "left-xxl-xxs": "offset-c0d74d59",
  "all-xxl-xs": "offset-8fda98b8",
  "top-xxl-xs": "offset-4b3f5d87",
  "right-xxl-xs": "offset-f3fe812d",
  "bottom-xxl-xs": "offset-0fc6a963",
  "left-xxl-xs": "offset-24bcea21",
  "all-xxl-s": "offset-c1fb3b84",
  "top-xxl-s": "offset-94912212",
  "right-xxl-s": "offset-d50bdc6d",
  "bottom-xxl-s": "offset-39e6ea84",
  "left-xxl-s": "offset-a317265c",
  "all-xxl-m": "offset-7fdb2a90",
  "top-xxl-m": "offset-21a9475a",
  "right-xxl-m": "offset-575a1d1b",
  "bottom-xxl-m": "offset-854c1e53",
  "left-xxl-m": "offset-bc391d1d",
  "all-xxl-l": "offset-baa52452",
  "top-xxl-l": "offset-8d3c0904",
  "right-xxl-l": "offset-d8bd7b8e",
  "bottom-xxl-l": "offset-a977aa1a",
  "left-xxl-l": "offset-efb56cee",
  "all-xxl-xl": "offset-ea7e5d01",
  "top-xxl-xl": "offset-d99356a2",
  "right-xxl-xl": "offset-30217048",
  "bottom-xxl-xl": "offset-7ec39677",
  "left-xxl-xl": "offset-388b2b70",
  "all-xxl-xxl": "offset-03e24917",
  "top-xxl-xxl": "offset-b5c22aeb",
  "right-xxl-xxl": "offset-d5d1b392",
  "bottom-xxl-xxl": "offset-53418916",
  "left-xxl-xxl": "offset-126d3a0c",
  "all-xxl-0": "offset-aeaccd19",
  "top-xxl-0": "offset-25f1dfb8",
  "right-xxl-0": "offset-b3ad800a",
  "bottom-xxl-0": "offset-9654cf77",
  "left-xxl-0": "offset-ba7d1178"
};

var Offset = function Offset(_ref) {
  var className = _ref.className,
      margin = _ref.margin,
      top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      children = _ref.children;

  var sizeMap = _objectSpread({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }, (0, _parseCssSizeValues.default)(margin));

  var sizeStyleNames = ['all', 'top', 'right', 'bottom', 'left'].filter(function (size) {
    return sizeMap[size];
  }).map(function (size) {
    return (0, _generateResponsiveStyleNames.default)(size, sizeMap[size]);
  });
  return _react.default.createElement("div", {
    className: className,
    styleName: sizeStyleNames.join(' ')
  }, children);
};

exports.Offset = Offset;
Offset.propTypes = {
  className: _propTypes.default.string,
  margin: _responsiveCssSizes.default,
  top: _responsiveCssSizes.default,
  right: _responsiveCssSizes.default,
  bottom: _responsiveCssSizes.default,
  left: _responsiveCssSizes.default,
  children: _propTypes.default.node
};
Offset.defaultProps = {
  className: '',
  margin: '',
  top: '',
  right: '',
  bottom: '',
  left: '',
  children: null
};

var _default = (0, _reactCssModules.default)(Offset, styles, {
  allowMultiple: true
});

exports.default = _default;