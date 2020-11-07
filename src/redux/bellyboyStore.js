import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import actionReducer from "./actionReducer";

export default createStore(
  combineReducers({ actionReducer }),
  applyMiddleware(thunk, createLogger())
);
