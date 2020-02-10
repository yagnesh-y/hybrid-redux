"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require("redux");

var _Profile = require("./Profile.reducer");

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	profile: _Profile2.default
});

exports.default = rootReducer;