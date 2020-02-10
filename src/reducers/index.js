import { combineReducers } from "redux";

import profileReducer from "./Profile.reducer";

const rootReducer = combineReducers({
	profile: profileReducer
});

export default rootReducer;
