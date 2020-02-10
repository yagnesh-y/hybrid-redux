'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userProfile = require('./user-profile');

Object.defineProperty(exports, 'UserProfileClient', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_userProfile).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }