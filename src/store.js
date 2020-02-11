import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // eslint-disable-line
import logger from "redux-logger";

import reducer from "./reducers";

const devLogger = true ? logger : null;
const middlewares = [thunk, devLogger].filter(item => item);
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
