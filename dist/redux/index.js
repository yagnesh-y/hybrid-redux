"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxLogger = require("redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = require("./reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require("./actions");

var _actions2 = _interopRequireDefault(_actions);

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // eslint-disable-line


var devLogger = true ? _reduxLogger2.default : null;
var middlewares = [_reduxThunk2.default, devLogger].filter(function (item) {
  return item;
});
var store = (0, _redux.createStore)(_reducers2.default, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, _toConsumableArray(middlewares))));

exports.default = {
  store: store,
  actions: _actions2.default,
  constants: _constants2.default
};