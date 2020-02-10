"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfile = undefined;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _profile = require("../constants/profile");

var _profile2 = _interopRequireDefault(_profile);

var _userProfile = require("../api-sdk/user-profile");

var _userProfile2 = _interopRequireDefault(_userProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { getErrorCodeMapping } from "../utils";

var getProfileLoading = function getProfileLoading() {
  return {
    type: _profile2.default.GET_PROFILE_LOADING
  };
};

var getProfileSuccess = function getProfileSuccess(_ref) {
  var data = _ref.data;
  return {
    type: _profile2.default.GET_PROFILE_SUCCESS,
    payload: { data: data }
  };
};

var getProfileFailure = function getProfileFailure() {
  return {
    type: _profile2.default.GET_PROFILE_FAILURE
  };
};

var getProfile = exports.getProfile = function getProfile() {
  return function (dispatch) {
    dispatch(getProfileLoading());
    return _userProfile2.default.getProfile().then(function (response) {
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
};