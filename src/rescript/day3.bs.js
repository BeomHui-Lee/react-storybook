// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var React = require("react");

function question(param) {
  var input = Fs.readFileSync("aoc2020/day3.txt", "utf8");
  console.log(input);
  
}

var Day3Q = {
  question: question
};

function Day3$default(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, "\xeb\x8b\xb5\xec\x9d\x80", "\xea\xb0\x9c \xec\x9e\x85\xeb\x8b\x88\xeb\x8b\xa4."));
}

var $$default = Day3$default;

exports.Day3Q = Day3Q;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* fs Not a pure module */
