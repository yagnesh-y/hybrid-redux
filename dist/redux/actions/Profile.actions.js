"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfile = undefined;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _utils = require("../utils");

var _Profile = require("../constants/Profile.constants");

var _Profile2 = _interopRequireDefault(_Profile);

var _apiSdk = require("../../api-sdk");

var _apiSdk2 = _interopRequireDefault(_apiSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getProfileLoading = function getProfileLoading() {
  return {
    type: _Profile2.default.GET_PROFILE_LOADING
  };
};

var getProfileSuccess = function getProfileSuccess(_ref) {
  var data = _ref.data;
  return {
    type: _Profile2.default.GET_PROFILE_SUCCESS,
    payload: { data: data }
  };
};

var getProfileFailure = function getProfileFailure() {
  return {
    type: _Profile2.default.GET_PROFILE_FAILURE
  };
};

var getProfile = exports.getProfile = function getProfile() {
  dispatch(getProfileLoading());
  return _apiSdk2.default.getProfile().then(function (response) {
    // if (response.status.toUpperCase() === RESPONSE_CODES.SUCCESS) {
    dispatch(getProfileSuccess({ data: response }));
    return response;
    // }
    // dispatch(getProfileFailure());
    // const error = getErrorCodeMapping(response.errorCode); // eslint-disable-line
    // TODO: dispatch the failure toast here
    // return false;
  }).catch(function (err) {
    dispatch(getProfileFailure({ error: err }));
    return false;
  });
};