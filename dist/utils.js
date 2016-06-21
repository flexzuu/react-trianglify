"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function removeUndefined(obj) {
  return JSON.parse(JSON.stringify(obj));
}

exports.default = removeUndefined;