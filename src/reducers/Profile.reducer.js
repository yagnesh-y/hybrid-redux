import constants from "../constants/Profile.constants";

const initialState = {
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

export default (state = initialState, action) => {
	switch (action.type) {
		case constants.GET_PROFILE_LOADING: {
			return {
				...state,
				loading: {
					...state.loading,
					profile: true
				}
			};
		}

		case constants.GET_PROFILE_SUCCESS: {
			const {
				payload: { data }
			} = action;
			return {
				...state,
				loading: {
					...state.loading,
					profile: false
				},
				data: {
					...state.data,
					profile: data
				}
			};
		}

		case constants.GET_PROFILE_FAILURE: {
			return {
				...state,
				loading: {
					...state.loading,
					profile: false
				},
				error: {
					...state.error,
					profile: true
				}
			};
		}

		default:
			return state;
	}
};
