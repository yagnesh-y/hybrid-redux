"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Profile = require("../constants/Profile.constants");

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	loading: {
		profile: false
	},
	data: {
		profile: undefined
	},
	error: {
		profile: false
	}
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _Profile2.default.GET_PROFILE_LOADING:
			{
				return _extends({}, state, {
					loading: _extends({}, state.loading, {
						profile: true
					})
				});
			}

		case _Profile2.default.GET_PROFILE_SUCCESS:
			{
				var data = action.payload.data;

				return _extends({}, state, {
					loading: _extends({}, state.loading, {
						profile: false
					}),
					data: _extends({}, state.data, {
						profile: data
					})
				});
			}

		case _Profile2.default.GET_PROFILE_FAILURE:
			{
				return _extends({}, state, {
					loading: _extends({}, state.loading, {
						profile: false
					}),
					error: _extends({}, state.error, {
						profile: true
					})
				});
			}

		default:
			return state;
	}
};