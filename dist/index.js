'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trianglify = require('trianglify');

var _trianglify2 = _interopRequireDefault(_trianglify);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Trianglify(_ref) {
  var height = _ref.height;
  var width = _ref.width;
  var cellSize = _ref.cellSize;
  var variance = _ref.variance;
  var seed = _ref.seed;
  var xColors = _ref.xColors;
  var yColors = _ref.yColors;
  var colorSpace = _ref.colorSpace;
  var colorFunction = _ref.colorFunction;
  var strokeWidth = _ref.strokeWidth;
  var className = _ref.className;
  var style = _ref.style;

  var config = {
    height: height,
    width: width,
    cell_size: cellSize,
    variance: variance,
    seed: seed,
    x_colors: xColors,
    y_colors: yColors,
    color_space: colorSpace,
    color_function: colorFunction,
    stroke_width: strokeWidth
  };
  var pattern = (0, _trianglify2.default)((0, _utils2.default)(config));
  return _react2.default.createElement(
    'svg',
    {
      className: className,
      width: pattern.opts.width,
      height: pattern.opts.height,
      style: style
    },
    pattern.polys.map(function (poly, index) {
      return _react2.default.createElement('path', {
        key: index,
        d: 'M' + poly[1].join('L') + 'Z',
        fill: poly[0],
        stroke: poly[0],
        strokeWidth: pattern.opts.stroke_width
      });
    })
  );
}

exports.default = Trianglify;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function removeUndefined(obj) {
  return JSON.parse(JSON.stringify(obj));
}

exports.default = removeUndefined;
