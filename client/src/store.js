import { combineReducers } from "redux";

import { configureStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
});
const initialState = {};

const composeEnhancers = composeWithDevTools({});

const store = configureStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
